import React from 'react';
import Flag from './Flag';
import { IExpressanswer } from '../../Types';

const IpList = ( {ip, country, countryCode}: IExpressanswer ) => {
  return (
    <li><div id="listItem"><div>{ip}</div><div>{country}</div><Flag countryCode = {countryCode} /></div></li>
  );
};

export default IpList;
