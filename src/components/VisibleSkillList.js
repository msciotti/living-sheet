import {connect} from 'react-redux';
import {toggleSkillProficiency} from '../actions/Actions';
import SkillList from './SkillList';

const mapStateToProps = state => ({
  skills: state.skills,
});

const mapDispatchToProps = dispatch => ({
  toggleProficiency: skill => dispatch(toggleSkillProficiency(skill)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillList);
