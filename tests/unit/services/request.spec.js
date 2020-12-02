import axios from 'axios';

describe('@/services/request', () => {
  beforeAll(() => {
    axios.create = jest.fn(() => 'requestInstance');
    axios.CancelToken = { source: () => 'cancelToken' };
  });
  it('should create request instance', async () => {
    const { requestInstance } = await import('@/services/request');
    expect(requestInstance).toBe('requestInstance');
  });
});
