import {combineReducers} from 'redux';
import {UPDATE_STAT, TOGGLE_SKILL_IS_PROFICIENT} from '../actions/Actions';
import {Skills, Stats, StatForSkill} from '../Constants';

const initialStats = Object.keys(Stats).map(x => {
  return {
    name: Stats[x],
    value: 1,
    bonus: 0,
  };
});

const initialSkills = Object.keys(Skills).map(x => {
  return {
    name: Skills[x],
    value: initialStats.find(stat => stat.name === StatForSkill[x]).value,
    isProficient: false,
  };
});

const initialState = {
  stats: initialStats,
  skills: initialSkills,
  proficiency: 2,
};

const characterSheet = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STAT:
      return {
        ...state,
        stats: {
          ...stats,
          [action.payload.name]: action.payload.value,
        },
      };
    case TOGGLE_SKILL_IS_PROFICIENT:
      return {
        ...state,
        skills: state.skills.map(x => {
          return x.name === action.payload.name
            ? {
                ...x,
                isProficient: !x.isProficient,
                value: x.isProficient ? x.value - state.proficiency : x.value + state.proficiency,
              }
            : x;
        }),
      };
    default:
      return state;
  }
};

export default characterSheet;
