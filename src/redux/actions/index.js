import awesomeapi from '../../components/services/awesomeapi';

export const ACTION_USER = 'ACTION_USER';
export const ACTION_WALLET_CURRENCIES = 'ACTION_WALLET_CURRENCIES';

export const actionUser = (userInfo) => ({
  type: ACTION_USER,
  payload: userInfo,
});

export const actionWalletCurrencies = (walletInfo) => ({
  type: ACTION_WALLET_CURRENCIES,
  payload: walletInfo,
});

export const fetchAPI = () => async (dispatch) => {
  const data = await awesomeapi();
  delete data.USDT;
  const coinsKeys = Object.keys(data);
  dispatch(actionWalletCurrencies(coinsKeys));
};
