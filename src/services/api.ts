import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vaga-react.vercel.app/api',
});

export { api };
