<template>
  <div class="search">
    <input v-model="inputValue" type="text" class="search-input" placeholder="Введите запрос" @input="inputInterval">
  </div>
</template>




<script>
import { dateTimeFormat }  from '@/helpers/dateTimeFormat.js'

export default {

  data() {
    return {
      inputValue: '',
      intervalId: null,
      filterClientData: []
    }
  },
  computed:{
    clientData() {
      return this.$store.state.clientData ? this.$store.state.clientData : [];
    },
  },


  methods: {
    inputInterval() {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.filterClientData = this.clientData.filter((el) => {

          let createdAt = dateTimeFormat(el.createdAt).substring(0, this.inputValue.length)
          let updatedAt = dateTimeFormat(el.updatedAt).substring(0, this.inputValue.length)

          if( el.id.substring(0, this.inputValue.length) == this.inputValue) return el;
          if( createdAt == this.inputValue || updatedAt == this.inputValue ) return el;

          this.inputValue = this.inputValue.toLowerCase()

          if( el.name.toLowerCase().substring(0, this.inputValue.length) == this.inputValue ||
              el.surname.toLowerCase().substring(0, this.inputValue.length) == this.inputValue ||
              el.lastName.toLowerCase().substring(0, this.inputValue.length) == this.inputValue )
              return el;
        })
        this.$store.commit('filterClientData', this.filterClientData)
        clearInterval(this.intervalId);
      }, 300)
    }
  },

}
</script>



<style>
  .search{
    width: 100%;
    max-width: 581px;
  }

  .search-input{
    width: 100%;
    padding: 12px 16px;
    border: 1px solid rgba(51, 51, 51, 0.2);
  }
</style>
