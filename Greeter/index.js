module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.res = {
        body: `${getGreeting()} ${req.params.name || 'stranger'}!`
    };
    context.done();
};

const greetings = [
    'Hello',
    'Bonjour',
    'Hola',
    'Guten tag'
];

function getGreeting() {
    return greetings[Math.floor(Math.random()*4)];
}