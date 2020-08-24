import React,{useState} from 'react';

interface Props {
  ip: string;
  handleInput: (e: string) => void;
  confirmInput: () => void;
}

const InputIp = (props: Props) => {
  return (
    <div>
      <button>myIP</button>
      <input placeholder='127.0.0.1' value={props.ip} onChange={(e: any): void => {
        props.handleInput(e.target.value);
      }}
      />
      <button onClick={() => props.confirmInput()} >Check this!</button>
    </div>
  );
};

export default InputIp;