import { ACTION_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_WALLET:
    return {
      ...state,
      currencies: action.payload,
    };
  default: return state;
  }
};

export default wallet;
