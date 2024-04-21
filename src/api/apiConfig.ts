import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MTI.oT_lCZ0nfbAU-I8Bgg08LPqSIjJBacqV3mPT34MbdVDQZmVlAaQSGyGa6Vee',
  },
});
