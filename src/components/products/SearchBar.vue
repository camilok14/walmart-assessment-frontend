<template>
  <div class="navbar">
    <b-field>
      <b-input
        :id="id"
        v-model="auxValue"
        type="search"
        icon="magnify"
        :placeholder="label"
        rounded
      />
    </b-field>
  </div>
</template>
<script>
export default {
  props: {
    label: { type: String, default: '' },
    value: { type: String, default: '' },
    id: { type: String, default: '' }
  },
  data() {
    return {
      auxValue: ''
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(newValue) {
        this.auxValue = newValue;
      }
    },
    auxValue: {
      immediate: true,
      handler(newValue) {
        this.$emit('input', newValue);
      }
    }
  }
};
</script>
<style scoped>
.navbar {
  background-color: #126fca;
  padding: 1% 0 1%;
  justify-content: center;
}
</style>
