import { message } from 'antd';
import axios from 'axios';

export function request(type, url, data) {
  return new Promise((resolve, reject) => {
    let promise;

    if (type === 'get') {
      promise = axios({
        method: type,
        url: url,
        params: data,
      });
    } else {
      promise = axios({
        method: type,
        url: url,
        data,
      });
    }

    promise
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        message.error(error.message);
        reject(error);
      });
  });
}
