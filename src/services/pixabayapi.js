import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '34120548-945725edde00f4b24886c20bc';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const axiosImg = (query,page = 1) => {
  const KEY = '34120548-945725edde00f4b24886c20bc';
  return axios
    .get(`/?key=${KEY}`, {
      params: {
            q: query,
          page: page,
        per_page: 12,
      },
    })
    .then(response => response.data.hits);
};

 