import awesomeapi from '../../components/services/awesomeapi';

export const ACTION_USER = 'ACTION_USER';
export const ACTION_WALLET_CURRENCIES = 'ACTION_WALLET_CURRENCIES';
export const ACTION_WALLET_EXPENSES = 'ACTION_WALLET_EXPENSES';
export const ACTION_WALLET_DELETE = 'ACTION_WALLET_DELETE';
export const ACTION_WALLET_EDIT = 'ACTION_WALLET_EDIT';

export const actionUser = (userInfo) => ({
  type: ACTION_USER,
  payload: userInfo,
});

export const actionWalletCurrencies = (walletInfo) => ({
  type: ACTION_WALLET_CURRENCIES,
  payload: walletInfo,
});

export const fetchApiCurrencies = () => async (dispatch) => { // duas arrow para funcionar
  const data = await awesomeapi(); // api
  delete data.USDT; // delete removeu a chave USDT do retorno da api
  const coinsKeys = Object.keys(data); // objectKey pega so as chaves
  dispatch(actionWalletCurrencies(coinsKeys));// atraves do dispatch mandei para action da linha 12
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

export const actionWalletDelete = (id, infoAll) => ({
  type: ACTION_WALLET_DELETE,
  payload: infoAll.filter((expenses) => expenses.id !== id),
});

export const actionWalletEdit = (id) => ({
  type: ACTION_WALLET_EDIT,
  payload: id,
});
