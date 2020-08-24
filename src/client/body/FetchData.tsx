import React, { useState } from 'react';
import IpList from './ListIp';
import { Expressanswer } from '../../Types';
import InputIp from './InputIp';

const FetchData = () => {

  const [ip, setIp] = useState<string | ''>('');
  const [list, setList] = useState<Array<Expressanswer>>([]);

  const handleInput = (e: string): void => {
    setIp(e);
  };

  const confirmInput = ():void => {
    console.log(ip);
    fetchApi(ip);
  };

  const fetchApi = async (ip: string): Promise<void> => {
    console.log(ip);
    fetch('/api/proxip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ip: ip}),
    })
    .then(res => res.json())
    .then(res => {
      console.log('resLOOKUP', {...res.iplookup})
      console.log('list prev', {...list})
      setList([...list] + {...res.iplookup})
    });
  };
  console.log(list);
  return(
    <div>
      <InputIp ip={ip} handleInput={handleInput} confirmInput={confirmInput} />
      <IpList list={list}/>
    </div>
  );
};

export const fetchApi = (ip: string): void => {
  console.log(ip);
  fetch('/api/proxip', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ip: ip}),
  })
  .then(res => res.json())
  .then(res => console.log(res.iplookup));
};

export default FetchData;