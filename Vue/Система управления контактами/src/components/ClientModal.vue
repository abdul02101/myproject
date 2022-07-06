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
          <BaseFormText v-model="formData.name" :error="formError.name" title="Имя*" name="name" type="text" />
          <BaseFormText v-model="formData.surname" :error="formError.surname" title="Фамилия*" name="surname" type="text" />
          <BaseFormText v-model="formData.lastName" :error="formError.middleName" title="Отчество" name="middleName" type="text" />
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
        formError: {},
        formErrorMessage: '',

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
      },
    },


  }


</script>



<style>

  .b-popup{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    width: 100%;
    min-height: 100%;
    background-color: rgba(0,0,0,0.5);
    top: 0px;
  }

  .b-popup-content{
    position: absolute;
    width: 100%;
    max-width: 450px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.15);
    padding: 30px 30px;
  }

  .header-modal{
    margin-bottom: 15px;

    font-weight: 700;
    font-size: 18px;
    line-height: 25px;

    color: #333333;
  }

  .hedar-modal-id{
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #B0B0B0;
  }

  .container-input{
    display: flex;
    flex-direction: column;
  }

  .form-add-client{
    width: 100%;
    max-width: 278px;
  }




  .container-btn{
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  .btn-contact{
    display: flex;
    align-items: center;
    padding: 8px 0;
    margin-bottom: 25px;

    cursor: pointer;

    font-weight: 600;
    font-size: 14px;
    line-height: 19px;

    color: #333333;
  }

  .btn-contact-svg{
    width: 25px;
  }


  .btn-save{
    cursor: pointer;
    width: 100%;
    max-width: 147px;
    padding: 12px 0;
    margin-bottom: 10px;
    background-color: #9873FF;

    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-align: center;

    color: #FFFFFF;

  }

  .btn-close{
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    padding: 10px;
  }
</style>
