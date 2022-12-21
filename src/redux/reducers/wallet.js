import {
  ACTION_WALLET_CURRENCIES,
  ACTION_WALLET_EXPENSES,
  ACTION_WALLET_DELETE,
  ACTION_WALLET_EDIT,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ACTION_WALLET_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case ACTION_WALLET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case ACTION_WALLET_DELETE:
    return {
      ...state,
      expenses: action.payload,
    };
  case ACTION_WALLET_EDIT:
    return {
      ...state,
      editor: true,
      idToEdit: action.id,
    };
  default: return state;
  }
};

export default wallet;
