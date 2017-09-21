// MIT License

// Copyright (c) 2017 Anthony Chu

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

using System.Net;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.IO;
using MimeTypes;

const string staticFilesFolder = "spa";
static string defaultPage = string.IsNullOrEmpty(GetEnvironmentVariable("DEFAULT_PAGE")) ? 
    "index.html" : GetEnvironmentVariable("DEFAULT_PAGE");

public static HttpResponseMessage Run(HttpRequestMessage req, TraceWriter log)
{
    try
    {   
        var filePath = GetFilePath(req, log);

        var response = new HttpResponseMessage(HttpStatusCode.OK);
        var stream = new FileStream(filePath, FileMode.Open);
        response.Content = new StreamContent(stream);
        response.Content.Headers.ContentType = new MediaTypeHeaderValue(GetMimeType(filePath));
        return response;
    }
    catch
    {
        return new HttpResponseMessage(HttpStatusCode.NotFound);
    }
}

private static string GetScriptPath()
    => Path.Combine(GetEnvironmentVariable("HOME"), @"site\wwwroot");

private static string GetEnvironmentVariable(string name)
    => System.Environment.GetEnvironmentVariable(name, EnvironmentVariableTarget.Process);

private static string GetFilePath(HttpRequestMessage req, TraceWriter log)
{
    var pathValue = req.GetQueryNameValuePairs()
        .FirstOrDefault(q => string.Compare(q.Key, "file", true) == 0)
        .Value;

    var path = pathValue ?? "";
    
    var staticFilesPath = Path.GetFullPath(Path.Combine(GetScriptPath(), staticFilesFolder));
    var fullPath = Path.GetFullPath(Path.Combine(staticFilesPath, path));

    if (!IsInDirectory(staticFilesPath, fullPath))
    {
        throw new ArgumentException("Invalid path");
    }

    var isDirectory = Directory.Exists(fullPath);
    if (isDirectory)
    {
        fullPath = Path.Combine(fullPath, defaultPage);
    }

    return fullPath;
}

private static bool IsInDirectory(string parentPath, string childPath)
{
    var parent = new DirectoryInfo(parentPath);
    var child = new DirectoryInfo(childPath);

    var dir = child;
    do
    {
        if (dir.FullName == parent.FullName)
        {
            return true;
        }
        dir = dir.Parent;
    } while (dir != null);

    return false;
}

private static string GetMimeType(string filePath)
{
    var fileInfo = new FileInfo(filePath);
    return MimeTypeMap.GetMimeType(fileInfo.Extension);
}