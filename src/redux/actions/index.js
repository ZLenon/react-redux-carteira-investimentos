import awesomeapi from '../../components/serviceAPI/awesomeapi';

export const ACTION_USER = 'ACTION_USER';
export const ACTION_WALLET = 'ACTION_WALLET';

export const actionUser = (userInfo) => ({
  type: ACTION_USER,
  payload: userInfo,
});

export const actionWallet = (walletInfo) => ({
  type: ACTION_WALLET,
  payload: { ...walletInfo },
});

export const fetchAPI = async (dispatch) => {
  const data = await awesomeapi();
  delete data.USDT;
  const coinsKeys = Object.keys(data);
  dispatch(actionWallet(coinsKeys));
};
