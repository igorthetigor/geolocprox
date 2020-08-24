import {Request, Response} from "express";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const os = require('os');

const lookup = require('./routes/fetchApi');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use(express.static('dist'));

app.get('/', function (req : Request, res: Response, next: any) {
  res.cookie('name', 'iplookup');
})

app.get('/api/getUsername',  (req : Request, res: Response, next: any) => {
  res.send({ username: os.userInfo().username })
});

app.get('/api/proxip', (req : Request, res: Response, next: any) => {
  console.log(req.body);
  next();
});

app.use('/api/proxip', lookup);

app.listen(8080, () => console.log('Listening on port 8080!'));
