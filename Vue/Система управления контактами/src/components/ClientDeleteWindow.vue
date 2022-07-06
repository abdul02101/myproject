<template>
  <div class="b-popup" >
    <div class="b-popup-content">
      <button class="btn-close" @click.prevent="deleteClientWindow">
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2332 7.73333L21.2665 6.76666L14.4998 13.5334L7.73318 6.7667L6.76652 7.73336L13.5332 14.5L6.76654 21.2667L7.73321 22.2333L14.4998 15.4667L21.2665 22.2334L22.2332 21.2667L15.4665 14.5L22.2332 7.73333Z" fill="#B0B0B0"/>
        </svg>
      </button>

      <h2 class="header-delete">Удалить клиента</h2>
      <p class="b-popup-text">Вы действительно хотите удалить данного клиента?</p>

      <div class="container-btn">
        <button type="submit" class="btn-save" @click.prevent="deleteClient">Удалить</button>

        <button class="btn-delet">Отмена</button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {

    methods: {
      deleteClientWindow() {
        this.$store.commit('updateCloseWindoweDelete', false)
      },

      deleteClient() {
        this.$store.dispatch('deleteClient')
      }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 450px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.15);
    padding: 22px 30px;
  }

  .header-delete{
    margin-bottom: 11px;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;

    color: #333333;
  }

  .b-popup-text{
    max-width: 275px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;

    color: #333333;
  }




  .container-btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

  }

  .btn-contact{
    display: flex;
    align-items: center;
    padding: 8px 0;
    margin-bottom: 25px;

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
    max-width: 130px;
    padding: 12px 0;
    margin-bottom: 10px;
    background-color: #9873FF;

    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-align: center;

    color: #FFFFFF;

  }

  .btn-delet{
    cursor: pointer;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    border-bottom: 1px solid rgba(0,0,0,0.5);

    color: #333333;
  }
  .btn-close{
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    padding: 10px;
  }
</style>
