export const UPDATE_STAT = 'UPDATE_STAT';
export const TOGGLE_SKILL_IS_PROFICIENT = 'TOGGLE_SKILL_IS_PROFICIENT';
export const ADD_INVENTORY_ITEM = 'ADD_INVENTORY_ITEM';
export const REMOVE_INVENTORY_ITEM = 'REMOVE_INVENTORY_ITEM';

export const updateStat = stat => ({
  type: UPDATE_STAT,
  payload: stat,
});

export const toggleSkillProficiency = skill => ({
  type: TOGGLE_SKILL_IS_PROFICIENT,
  payload: skill,
});
