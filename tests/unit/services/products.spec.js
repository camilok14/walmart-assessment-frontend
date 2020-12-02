import axios from 'axios';
import { getProducts } from '@/services/products';
import { requestInstance } from '@/services/request';

describe('services/products', () => {
  it('should get products using searchString', async () => {
    requestInstance.get = jest.fn(async () => ({ data: 'foundProducts' }));
    function CancelTokenMock(cancelExecutorIn) {
      cancelExecutorIn();
    }
    axios.CancelToken = CancelTokenMock;
    const cancelExecutor = jest.fn();
    const result = await getProducts('searchString', cancelExecutor);
    expect(result).toBe('foundProducts');
    expect(requestInstance.get).toHaveBeenCalledWith(
      'products',
      {
        params: { searchString: 'searchstring' },
        cancelToken: new CancelTokenMock(() => {})
      }
    );
    expect(cancelExecutor).toHaveBeenCalled();
  });
});
