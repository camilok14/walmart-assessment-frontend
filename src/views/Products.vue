<template>
  <div>
    <SearchBar id="search-input" v-model="searchString" />
    <ResultsGrid v-if="!isLoading && !isError" v-model="products" />
    <div v-if="isLoading || isError" class="columns is-centered">
      <div class="column is-3">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <b-loading v-model="isLoading" :is-full-page="false" />
              <b-notification
                v-model="isError"
                type="is-danger is-light"
                :closable="false"
              >
                Ha ocurrido un error al tratar de obtener la lista de productos
              </b-notification>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SearchBar from '@/components/products/SearchBar.vue';
import ResultsGrid from '@/components/products/ResultsGrid.vue';
import { getProducts } from '@/services/products';

export default {
  name: 'Products',
  components: {
    SearchBar,
    ResultsGrid
  },
  data() {
    return {
      searchString: '',
      products: [],
      isLoading: false,
      isError: false,
      cancelGetProducts: () => {}
    };
  },
  watch: {
    async searchString(newValue) {
      const onlyNumbers = /^[0-9]+$/.test(newValue);
      const moreThan3Chars = newValue.length >= 3;
      if (!onlyNumbers && !moreThan3Chars) return;
      if (this.isLoading) {
        this.cancelGetProducts('canceled');
      }
      this.isLoading = true;
      this.isError = false;
      try {
        this.products = await getProducts(newValue, cancelFunction => {
          this.cancelGetProducts = cancelFunction;
        });
        this.isLoading = false;
      } catch (error) {
        if (error.message === 'canceled') return;
        this.isLoading = false;
        this.isError = true;
      }
    }
  }
};
</script>
