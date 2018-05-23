import React from 'react';
import styles from '../styles/Checkbox.css';

class Checkbox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleCheck = this.handleCheck.bind(this);
  }

  render() {
    return this.state.checked ? (
      <div className={styles.checked} onClick={this.handleCheck} />
    ) : (
      <div className={styles.unchecked} onClick={this.handleCheck} />
    );
  }

  handleCheck() {
    this.setState({
      checked: !this.state.checked,
    });
    this.props.onCheck && this.props.onCheck();
  }
}

module.exports = Checkbox;
