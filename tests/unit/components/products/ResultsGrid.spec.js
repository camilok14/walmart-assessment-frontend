import { shallowMount, createLocalVue } from '@vue/test-utils';
import ResultsGrid from '@/components/products/ResultsGrid.vue';

describe('components/products/ResultsGrid.vue', () => {
  const localVue = createLocalVue();
  const getWrapper = () => shallowMount(ResultsGrid, { localVue });
  it('should format value to CLP', () => {
    const wrapper = getWrapper();
    const result = wrapper.vm.formatToCLP(1234567);
    expect(result).toBe('$1.234.567');
  });
});
