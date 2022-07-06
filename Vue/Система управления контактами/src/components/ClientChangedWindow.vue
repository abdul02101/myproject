<template>
  <div class="b-popup" >
    <div class="b-popup-content">
      <button class="btn-close" @click.prevent="closeClientWindow">
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2332 7.73333L21.2665 6.76666L14.4998 13.5334L7.73318 6.7667L6.76652 7.73336L13.5332 14.5L6.76654 21.2667L7.73321 22.2333L14.4998 15.4667L21.2665 22.2334L22.2332 21.2667L15.4665 14.5L22.2332 7.73333Z" fill="#B0B0B0"/>
        </svg>
      </button>
      <h1 class="header-modal">
        Изменить данные
        <span class="hedar-modal-id"> :{{clientChange.id}}</span>
      </h1>

      <form action="" method="POST" class="form-add-client" @submit.prevent="changeClient">

        <div class="container-input">
          <BaseFormText v-model="formDataChange.name" :error="formErrorChange.name" title="Имя*" name="name" type="text" :placeholder="clientChange.name"/>
          <BaseFormText v-model="formDataChange.surname" :error="formErrorChange.surname" title="Фамилия*" name="surname" type="text" :placeholder="clientChange.surname"/>
          <BaseFormText v-model="formDataChange.lastName" :error="formErrorChange.middleName" title="Отчество" name="middleName" type="text" :placeholder="clientChange.lastName"/>
        </div>

        <div class="container-btn">
          <button type="submit" class="btn-save">
            Изменить
          </button>
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
        formDataChange: {},
        formErrorChange: {},
      }
    },

    computed:{
      clientChange() {
        return this.$store.state.clientChange
      },
    },

    methods: {
      changeClient(){
        this.$store.commit('updateClientChange', {...this.formDataChange, id: this.clientChange.id})
        this.$store.dispatch('changeClient')
        this.formDataChange = {}
      },

      closeClientWindow() {
        this.$store.commit('updateCloseWindoweChange', false)
      },
    },
  }
</script>



