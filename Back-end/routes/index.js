const job = require('./Job');
const account = require('./Account');
const application = require('./Application');
const post = require('./Post');
const user = require('./User');

function route(app){
    app.use('/jobfinder',account,application,job,post,user);
}
module.exports = route;
