<template>
  <div id="products-grid" class="columns is-multiline is-centered row">
    <div
      v-for="product in value"
      :key="product.id"
      class="column is-3"
    >
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="`https://${product.image}`">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p :id="`product-${product.id}-brand`" class="title is-4">{{ product.brand }}</p>
              <p v-if="product.priceWithDiscount" :id="`product-${product.id}-price-with-discount`" class="subtitle is-6 discount">
                Oferta: {{ formatToCLP(product.priceWithDiscount) }}
              </p>
              <p :id="`product-${product.id}-price`" class="subtitle is-6">
                {{ product.priceWithDiscount ? 'Precio normal: ':'' }}{{ formatToCLP(product.price) }}
              </p>
            </div>
          </div>
          <div class="content">
            <table>
              <tr><td :id="`product-${product.id}-description`">{{ product.description }}</td></tr>
              <tr><td :id="`product-${product.id}-id`"><strong>Id: </strong>{{ product.id }}</td></tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    formatToCLP(value) {
      const valueAsString = `${value}`;
      const stack = [];
      for (let i = 0; i < valueAsString.length; i += 1) {
        if (i % 3 === 0 && i !== 0) {
          stack.unshift('.');
        }
        stack.unshift(valueAsString.charAt(valueAsString.length - 1 - i));
      }
      stack.unshift('$');
      return stack.join('');
    }
  }
};
</script>
<style scoped>
.row {
  padding: 1%;
}
.discount{
  color: blue;
  font-weight: bold;
}

</style>
