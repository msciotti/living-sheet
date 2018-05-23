import React from 'react';
import ReactDOM from 'react-dom';
import SkillBox from './components/SkillBox';
import styles from './index.css';

class CharacterSheet extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div
          style={{
            gridRowStart: 1,
            gridRowEnd: 'auto',
            gridColumnStart: 1,
            gridColumnEnd: 'end',
            backgroundColor: 'red',
            textAlign: 'center',
          }}>
          <b>TITLE BAR</b>
        </div>
        <div
          style={{
            gridRowStart: 2,
            gridRowEnd: 'auto',
            gridColumnStart: 1,
            gridColumnEnd: 'end',
            backgroundColor: 'green',
            textAlign: 'center',
          }}>
          <b>INSPI/PROF/SPELLCAST/DC/SAD</b>
        </div>
        <div
          style={{
            gridRowStart: 3,
            gridRowEnd: 'auto',
            gridColumnStart: 3,
            gridColumnEnd: 'auto',
            backgroundColor: 'yellow',
          }}>
          x
        </div>
        <div
          style={{
            gridRowStart: 4,
            gridRowEnd: 'auto',
            gridColumnStart: 3,
            gridColumnEnd: 'auto',
            backgroundColor: 'brown',
          }}>
          z
        </div>
        <div
          style={{
            gridRowStart: 5,
            gridRowEnd: 'auto',
            gridColumnStart: 3,
            gridColumnEnd: 'auto',
            backgroundColor: 'black',
          }}>
          z
        </div>
        <div
          style={{
            gridRowStart: 2,
            gridRowEnd: 6,
            gridColumnStart: 1,
            gridColumnEnd: 'auto',
            backgroundColor: 'blue',
            textAlign: 'center',
          }}>
          <b>STATS</b>
        </div>
        <SkillBox />
        <div
          style={{
            gridRowStart: 6,
            gridRowEnd: 'auto',
            gridColumnStart: 1,
            gridColumnEnd: 'span 2',
            backgroundColor: 'purple',
          }}>
          c
        </div>
        <div
          style={{
            gridRowStart: 4,
            gridRowEnd: 'end',
            gridColumnStart: 4,
            gridColumnEnd: 'auto',
            backgroundColor: 'pink',
          }}>
          c
        </div>
      </div>
    );
  }
}

var mount = document.getElementById('index');
ReactDOM.render(<CharacterSheet />, mount);
