const data = require('./data');

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let vehicleId = parseInt(req.params.vehicleId);

    if (!!vehicleId && data.has(vehicleId)) {
         context.res = {
            // status: 200, /* Defaults to 200 */
            body: data.get(vehicleId)
        };
    } else {    
        context.res = {
            status: 400,
            body: "Unknown vehicleId"
        };
    }

    context.done();
};