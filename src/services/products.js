import requestInstance from './request-instance';

export const getProducts = async searchString => {
  const result = await requestInstance.get('products', { params: { searchString } });
  return result.data;
};
