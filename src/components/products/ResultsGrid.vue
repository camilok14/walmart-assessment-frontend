<template>
  <div class="columns is-multiline is-centered row">
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
              <p class="title is-4">{{ product.brand }}</p>
              <p class="subtitle is-6">{{ formatToCLP(product.price) }}</p>
            </div>
          </div>
          <div class="content">
            <table>
              <tr><td>{{ product.description }}</td></tr>
              <tr><td><strong>Id: </strong>{{ product.id }}</td></tr>
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

</style>
