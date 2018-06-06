import React from 'react';

const Skill = ({onClick, name, value, isProficient, proficiency}) => (
  <div>
    <input type="checkbox" onChange={onClick} />
    {value} - {name}
  </div>
);

export default Skill;
