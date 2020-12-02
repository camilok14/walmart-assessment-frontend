import { shallowMount, createLocalVue } from '@vue/test-utils';
import Products from '@/views/Products.vue';

describe('views/Products.vue', () => {
  const localVue = createLocalVue();
  const getWrapper = () => shallowMount(Products, {
    localVue,
    stubs: {
      SearchBar: { template: '<div/>' },
      ResultsGrid: { template: '<div/>' },
      'b-loading': { template: '<div/>' },
      'b-notification': { template: '<div/>' }
    }
  });
  it('should do nothing if searchString is not a product id and is shorter than 3 chars', async () => {
    const wrapper = getWrapper();
    await wrapper.setData({ searchString: 'ab' });
    expect(wrapper.vm.products).toMatchObject([]);
  });
  it('should show error message if getProducts throws error', async () => {
    const productsService = await import('@/services/products');
    productsService.getProducts = jest.fn(async () => {
      throw new Error();
    });
    const wrapper = getWrapper();
    await wrapper.setData({ searchString: 'abc' });
    expect(wrapper.vm.isLoading).toBe(false);
    expect(wrapper.vm.isError).toBe(true);
  });
  it('should cancel request', async () => {
    const productsService = await import('@/services/products');
    productsService.getProducts = jest.fn(async () => {
      throw new Error('canceled');
    });
    const wrapper = getWrapper();
    await wrapper.setData({ searchString: 'abc' });
    expect(wrapper.vm.isLoading).toBe(true);
    expect(wrapper.vm.isError).toBe(false);
  });
  it('shuld trigger cancelGetProducts', async () => {
    const productsService = await import('@/services/products');
    productsService.getProducts = jest.fn(async (searchString, cancelExecutor) => {
      cancelExecutor();
      return ['product'];
    });
    const wrapper = getWrapper();
    await wrapper.setData({ isLoading: true, searchString: 'abc' });
    expect(wrapper.vm.isLoading).toBe(false);
    expect(wrapper.vm.isError).toBe(false);
    expect(wrapper.vm.products).toMatchObject(['product']);
  });
});
