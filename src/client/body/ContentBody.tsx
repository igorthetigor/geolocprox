import React, { useEffect, useState} from 'react';
import InputIp from './InputIp';
import IpList from './ListIp';
import axios, { AxiosResponse } from 'axios';

import { IExpressanswer } from '../../Types';

const ContentBody: React.FC = () => {
  const [ip, setIp] = useState<string | ''>('');
  const [ipList, setIpList] = useState<IExpressanswer[] | []>([]);

  const [isLoading, setLoading] = useState<boolean>(false);
  const helperFunc = (a: IExpressanswer[], b: IExpressanswer): IExpressanswer[] => {
    const result: IExpressanswer[] = a;
    result.unshift(b);
    return result;  
  };

  let liKey:number = 0;
  const someKey = (): number => {
    liKey += 1;
    return liKey;
  };

  const fetchData = async () => {
    setLoading(true);

    await fetch('/api/proxip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ip: ip}),
    })
    .then(res => res.json())
    .then(res => {
      setIpList(helperFunc(ipList, res.iplookup))
    });;
    setLoading(false);
  };

  console.log(Array.isArray(ipList));
  console.log(ipList);

  return (
    <div>
      <InputIp
        ip={ip}
        onChange={(e: React.FormEvent<HTMLInputElement>):void => setIp(e.currentTarget.value)}
        onClick={fetchData}
      />
      {isLoading? (
        <div>loading...</div>
      ) : (
        <ul>
          {(ipList as Array<IExpressanswer>).map((item: IExpressanswer) => {
            return (<IpList key={someKey()} {...item} />);
          })}
        </ul>
      )

      }
    </div>
  );
};

export default ContentBody;
