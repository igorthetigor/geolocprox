import React,{useState} from 'react';


interface Props {
  ip: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => (void);
  onClick: () => void;
}

const InputIp = (props: Props) => {
  return (
    <div>
      <button>myIP</button>
      <input placeholder='127.0.0.1' value={props.ip} onChange={
        props.onChange
      }
      />
      <button onClick={props.onClick} >Check this!</button>
    </div>
  );
};

export default InputIp;