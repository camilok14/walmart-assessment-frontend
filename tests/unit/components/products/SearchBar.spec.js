import { shallowMount, createLocalVue } from '@vue/test-utils';
import SearchBar from '@/components/products/SearchBar.vue';

describe('components/products/SearchBar.vue', () => {
  const localVue = createLocalVue();
  const getWrapper = (label, value) => shallowMount(SearchBar, {
    localVue,
    propsData: { label, value },
    stubs: {
      'b-field': { template: '<div/>' }
    }
  });
  it('should emit input event when value changes', async () => {
    const wrapper = getWrapper('Buscar...', 'lavadora');
    expect(wrapper.vm.auxValue).toBe('lavadora');
    await wrapper.setProps({ value: 'televisor' });
    expect(wrapper.vm.auxValue).toBe('televisor');
    expect(wrapper.emitted()).toMatchObject({
      input: [['lavadora'], ['televisor']]
    });
  });
});
