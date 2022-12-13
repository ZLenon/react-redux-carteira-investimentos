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
