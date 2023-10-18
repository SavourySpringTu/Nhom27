const job = require('./Job');
const account = require('./Account');
const application = require('./Application');
const post = require('./Post');

function route(app){
    app.use('/jobfinder',account,application,job,post);
}
module.exports = route;
