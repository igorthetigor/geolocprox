const express = require('express');
import {Request, Response} from "express";
const router = express.Router();
const axios = require('axios');
import { IExpressanswer } from '../../Types';

interface Serverdata {
  status: string;
  query: string;
  country?: string;
  countryCode?: string;
}

const fetchIp = async (ip: string): Promise<Serverdata> => {
  let a = await axios.get(`http://ip-api.com/json/${ip}?fields=24579&lang=de`)
  return a.data;
}

router.post('/', async (req : Request, res: Response, next: any): Promise<any> => {
  const iplookup: IExpressanswer = {ip:'', country: '', countryCode: ''};
  await fetchIp(req.body.ip)
  .then(res => {
    if (res.status === 'fail') {
      iplookup.ip = res.query;
      iplookup.country = 'NEVERLAND_TYPO';
      iplookup.countryCode = 'UZ';
      return;
    }
    iplookup.ip = res.query;
    iplookup.country = res.country;
    iplookup.countryCode = res.countryCode;
  });
  res.send({iplookup: iplookup});
});

module.exports = router;
