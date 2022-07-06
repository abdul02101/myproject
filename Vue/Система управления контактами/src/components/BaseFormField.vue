<template>
  <label class="form-label">
    <span class="form__value">{{title}}</span>
    <slot/>
  </label>
</template>

<script>
export default {
  props: ['title', 'error'],
};
</script>

<style>
  .form-label{
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  .form__value, .form__error{
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;

    color: #B0B0B0;
  }
  .form__value{
    margin-bottom: 5px;
  }
  .form__error{
    color: red;
  }
</style>
