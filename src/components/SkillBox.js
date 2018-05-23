import React from 'react';
import RowWithProficiency from './RowWithProficiency';
import {Skills} from '../Constants';
import styles from '../styles/SkillBox.css';

class SkillBox extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Here' + Skills);
    const skills = Object.keys(Skills).map(key => {
      return <RowWithProficiency key={key} name={Skills[key]} value={4} proficiency={2} />;
    });
    console.log('skills', skills);
    return <div className={styles.container}>{skills}</div>;
  }
}

module.exports = SkillBox;
