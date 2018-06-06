import React from 'react';
import Skill from './Skill';

const SkillList = ({skills, toggleProficiency}) => (
  <ul>
    {skills.map(skill => {
      return <Skill key={skill.name} {...skill} onClick={() => toggleProficiency(skill)} />;
    })}
  </ul>
);

export default SkillList;
