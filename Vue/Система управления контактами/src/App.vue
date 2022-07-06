<template>
  <div class="app">
    <div class="container-app">
      <header class="header">
        <div class="header-container">
          <div class="header-logo">
            <img src="../public/img/logo.png" alt="">
          </div>
          <RequestInput />
        </div>
      </header>

      <ClientTable />
    </div>

    <ClientAddWindow v-show="radioClintAddWindow"/>

    <ClientChangedWindow v-show="radioClintChangeWindow"/>

    <ClientDeleteWindow v-show="radioClintDeleteWindow"/>



  </div>

</template>

<script>
  import RequestInput from '@/components/RequestInput.vue'
  import ClientTable from '@/components/ClientTable.vue'
  import ClientAddWindow from '@/components/ClientAddWindow.vue'
  import ClientChangedWindow from '@/components/ClientChangedWindow.vue'
  import ClientDeleteWindow from '@/components/ClientDeleteWindow.vue'


  export default {

    components: {RequestInput, ClientTable, ClientAddWindow, ClientChangedWindow, ClientDeleteWindow},

    computed: {


      radioClintAddWindow(){
        return this.$store.state.closeWindowAdd
      },
      radioClintChangeWindow(){
        return this.$store.state.closeWindowChange
      },
      radioClintDeleteWindow() {
        return this.$store.state.closeWindowDelete
      },

    },

    created(){
      this.$store.dispatch('loadClient')
    },


  }
</script>

<style>
  .app{
    overflow: hidden;
  }
  .container-app{
    max-width: 1020px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 30px;
  }

  .header{
    margin-bottom: 40px;
    background: #FFFFFF;
    box-shadow: 0px 9.03012px 27.0904px rgba(176, 190, 197, 0.32), 0px 3.38629px 5.64383px rgba(176, 190, 197, 0.32);
  }

  .header-container{
    height: 90px;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .header-logo{
    margin-right: 50px;
  }

</style>
