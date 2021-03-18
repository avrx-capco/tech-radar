import React from 'react';
import { radial } from './data';
import RadialChart from './RadialChart';

const RadialPage = () => {
  return (
    <div>
      <RadialChart data={radial} />
    </div>
  );
};

export default RadialPage;
