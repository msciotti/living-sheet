import React from 'react';

const Stat = ({onClick, name, value, bonus}) => (
  <div>
    <input type="text" onChange={onClick} defaultValue={value} />
    {name}
  </div>
);

export default Stat;
