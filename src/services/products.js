import axios from 'axios';
import { requestInstance } from './request';

export const getProducts = async (searchString, cancelExecutor) => {
  const cancelToken = new axios.CancelToken(cancelExecutor);
  const options = {
    params: { searchString },
    cancelToken
  };
  const result = await requestInstance.get('products', options);
  return result.data;
};
