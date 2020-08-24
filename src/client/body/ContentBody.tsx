import React, { useState, Suspense} from 'react';
// import InputIp from './InputIp';
import FetchData from './FetchData';
// import { Props } from '../../Types';

// const FetchData = React.lazy(() => import('./FetchData'));

const ContentBody: React.FC = () => {

  // const [ip, setIp] = useState<string | ''>('');

  // const handleInput = (e: string): void => {
  //   setIp(e);
  // };

  // const confirmInput = ():void => {
  //   console.log(ip);
  //   fetchApi(ip);
  // };

  // const props: Props = {ip: ip, handleInput: handleInput, confirmInput: confirmInput};

  return (
    <div>
      {/* <InputIp props={props} /> */}
      <Suspense fallback={<div>loading...</div>}>
        <FetchData />
      </Suspense>
    </div>
  );
};

export default ContentBody;
