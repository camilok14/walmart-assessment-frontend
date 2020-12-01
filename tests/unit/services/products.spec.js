import { getProducts } from '@/services/products';
import requestInstance from '@/services/request-instance';

describe('services/products', () => {
  it('should get products using searchString', async () => {
    requestInstance.get = jest.fn(async () => ({ data: 'foundProducts' }));
    const result = await getProducts('searchString');
    expect(result).toBe('foundProducts');
    expect(requestInstance.get).toHaveBeenCalledWith('products', { params: { searchString: 'searchString' } });
  });
});
