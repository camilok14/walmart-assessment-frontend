import axios from 'axios';

describe('@/services/request-instance', () => {
  it('should create request instance', async () => {
    axios.create = jest.fn(() => 'requestInstance');
    const requestInstance = await import('@/services/request-instance');
    expect(requestInstance.default).toBe('requestInstance');
  });
});
