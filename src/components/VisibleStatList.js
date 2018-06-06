import {connect} from 'react-redux';
import {updateStat} from '../actions/Actions';
import StatList from './StatList';

const mapStateToProps = state => ({
  stats: state.stats,
});

const mapDispatchToProps = dispatch => ({
  updateStat: stat => dispatch(updateStat(stat)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatList);
