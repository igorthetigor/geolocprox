import React from 'react';
import Flag from './Flag';
import { Expressanswer } from '../../Types';

interface Props {
  list: Array<Expressanswer>;
}

const IpList = (props:Props) => {
  console.log(props.list);
  let keyCounter: number = 0;
  if (!props.list[0]) {
    return (
      <h3>dont by shy!</h3>
    );
  }
  const ipList = props.list.map( item => {
    keyCounter += 1;
    return (
      <li key={keyCounter}><div>{item.ip}</div><div>{item.country}</div><Flag countryCode = {item.countryCode} /></li>
    );
  });
  return (
    <ul>
      {ipList}
    </ul>
  );
};

export default IpList;
