import {Request, Response} from "express";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const os = require('os');

const lookup = require('./routes/fetchApi');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'));

app.use('/api/proxip', lookup);

app.listen(8080, () => console.log('Listening on port 8080!'));
