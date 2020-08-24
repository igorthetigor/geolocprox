import React from 'react';

interface Ccode {
  countryCode: string | undefined;
}

const Flag = ( { countryCode }: Ccode ) => {
  return <img src={`https://www.countryflags.io/${countryCode}/shiny/64.png`} />
};

export default Flag;
