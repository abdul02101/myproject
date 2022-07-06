<template>
  <div class="b-popup" >
    <div class="b-popup-content">
      <button class="btn-close" @click.prevent="closeClientWindow" >
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2332 7.73333L21.2665 6.76666L14.4998 13.5334L7.73318 6.7667L6.76652 7.73336L13.5332 14.5L6.76654 21.2667L7.73321 22.2333L14.4998 15.4667L21.2665 22.2334L22.2332 21.2667L15.4665 14.5L22.2332 7.73333Z" fill="#B0B0B0"/>
        </svg>
      </button>
      <h1 class="header-modal">
        Новый клиент
      </h1>

      <form action="" method="POST" class="form-add-client" @submit.prevent="addNewClient">

        <div class="container-input">
          <BaseFormText v-model="formData.surname" title="Фамилия*" name="surname" type="text" />
          <BaseFormText v-model="formData.name" title="Имя*" name="name" type="text" />
          <BaseFormText v-model="formData.lastName" title="Отчество" name="middleName" type="text" />
        </div>

        <div class="error" v-if="errorForm">
          <p class="error-text">
            Ошибка:
          </p>
          <p class="error-text" v-for="error in err" :key="error.id">
            {{error.message}}
          </p>
        </div>

        <div class="container-btn">
          <button type="submit" class="btn-save">Добавить</button>
        </div>



      </form>
    </div>
  </div>
</template>

<script>
  import BaseFormText from '@/components/BaseFormText.vue'


  export default {
    components: {BaseFormText},
    data(){
      return {
        formData: {},
        err: null
      }
    },

    computed:{
      errorForm(){
        return this.$store.state.formError ? this.err = this.$store.state.formError : null
      }
    },

    methods: {
      addNewClient(){
        this.$store.commit('updateClientAdd', this.formData)
        this.$store.dispatch('addClient')
        this.formData = {}

      },

      closeClientWindow() {
        this.$store.commit('updateCloseWindoweAdd', false)
        this.formData = {}
        this.$store.state.formError = null
      },
    },



  }


</script>



