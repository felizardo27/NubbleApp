import axios from 'axios';

export const api = axios.create({
  // fix [AxiosError: Network Error] on Android
  baseURL: 'http://192.168.0.1:3333/',
  // baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.b69FlW05OnxmlkDX1n3yEAr2QjbISCMjienXWGcxnxAXJSPD1JJg1mEZghbS',
  },
});
