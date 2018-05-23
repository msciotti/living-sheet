import React from 'react';
import Checkbox from './Checkbox';
import styles from '../styles/RowWithProficiency.css';

class RowWithProficiency extends React.PureComponent {
  constructor(props) {
    super(props);
    const {value, proficiency} = this.props;
    this.state = {
      isProficient: false,
      proficiency: proficiency,
      value: value,
    };
    this.handleCheck = this.handleCheck.bind(this);
  }
  render() {
    console.log(styles.row);
    const {isProficient, value, proficiency} = this.state;
    const points = isProficient ? value + proficiency : value;

    return (
      <div className={styles.row}>
        <Checkbox onCheck={this.handleCheck} />
        {points}
        <label>
          {' '}
          <b>{this.props.name}</b>
        </label>
      </div>
    );
  }

  handleCheck() {
    this.setState({
      isProficient: !this.state.isProficient,
    });
  }
}

module.exports = RowWithProficiency;
