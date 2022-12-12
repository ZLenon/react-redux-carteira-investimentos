import { ACTION_USER } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_USER:
    return {
      ...state,
      ...action.payload,
    };
  default: return state;
  }
};

export default user;
