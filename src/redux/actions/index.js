import awesomeapi from '../../components/services/awesomeapi';

export const ACTION_USER = 'ACTION_USER';
export const ACTION_WALLET_CURRENCIES = 'ACTION_WALLET_CURRENCIES';
export const ACTION_WALLET_EXPENSES = 'ACTION_WALLET_EXPENSES';

export const actionUser = (userInfo) => ({
  type: ACTION_USER,
  payload: userInfo,
});

export const actionWalletCurrencies = (walletInfo) => ({
  type: ACTION_WALLET_CURRENCIES,
  payload: walletInfo,
});

export const fetchApiCurrencies = () => async (dispatch) => {
  const data = await awesomeapi();
  delete data.USDT;
  const coinsKeys = Object.keys(data);
  dispatch(actionWalletCurrencies(coinsKeys));
};

export const actionWalletExpenses = (expenses) => ({
  type: ACTION_WALLET_EXPENSES,
  payload: expenses,
});

export function fetchApi() {
  return async () => {
    const data = await awesomeapi();
    delete data.USDT;
    return data;
  };
}
