module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.res = {
        body: [{
            id: 1,
            name: 'Model S'
        },{
            id: 2,
            name: 'Model 3'
        }]
    };
    context.done();
};