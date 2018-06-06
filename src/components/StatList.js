import React from 'react';
import Stat from './Stat';

const StatList = ({stats, updateStat}) => (
  <ul>
    {stats.map(stat => {
      return <Stat key={stat.name} {...stat} onClick={() => updateStat(stat)} />;
    })}
  </ul>
);

export default StatList;
