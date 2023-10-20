const test = require('./test');
const job = require('./Job');
const account = require('./Account');
const application = require('./Application');
const post = require('./Post');
const home = require('./Home');
const cors = require('cors');
app.use(cors({
    origin: "*",
    method: ["GET","POST","PUT","DELETE"]
  }))
function route(app){
    app.use('/',home);
    app.use('/test',test);
    app.use('/jobfinder',account,application,job,post);
}

module.exports= route;