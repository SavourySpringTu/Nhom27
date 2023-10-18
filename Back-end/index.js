const express = require("express");
const PORT = process.env.PORT || 3001;
var cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(cors({
  origin: "*",
  method: ["GET","POST","PUT","DELETE"]
}))
require('./routes')(app);
app.listen(PORT);