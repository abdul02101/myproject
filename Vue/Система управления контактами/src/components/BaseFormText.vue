<template>
  <BaseFormField :title="title" >
    <input v-model="dataValue" name="name" class="form-input" @change="changeInput" :type="type"  v-bind:placeholder="placeholder">
  </BaseFormField>
</template>

<script>
  import formFieldMixin from '@/mixins/formFieldMixins.js';

  export default {
    mixins: [formFieldMixin],
  };
</script>

<style>

  .form-input{
    border: none;
    border-bottom: 1px solid rgba(200,197,209, 0.5);
  }

</style>
