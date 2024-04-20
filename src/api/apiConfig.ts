import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.hE-Xl_WINEGqSr63OdEa_sf4i9NsGAtawQMIbmyV1jHoFWEFG8bHHnE-yDox',
  },
});
