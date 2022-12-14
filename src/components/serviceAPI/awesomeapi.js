const awesomeapi = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};
export default awesomeapi;
