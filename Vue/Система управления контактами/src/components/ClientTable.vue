<template>
  <main>
    <section class="client">
      <h1 class="header-client">Клиенты</h1>

      <div class="table-conteiner">


        <div v-show="$store.state.loaderShow === false" class="preloader">
          <svg class="preloader__image" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 20C2 29.941 10.059 38 20 38C29.941 38 38 29.941 38 20C38 10.059 29.941 2 20 2C17.6755 2 15.454 2.4405 13.414 3.243" stroke="#9873FF" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
          </svg>
        </div>

        <table class="table-client" cols="6">
          <thead>
            <tr>
              <th scope="cole" class="thead-th" @click.prevent="filterId($event)">
                ID
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4L7.295 3.295L4.5 6.085L4.5 0L3.5 0L3.5 6.085L0.71 3.29L0 4L4 8L8 4Z" fill="#9873FF"/>
                </svg>

                </th>
              <th scope="cole" class="thead-th" @click.prevent="filterName($event)">
                Фамилия Имя Отчество
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4L7.295 3.295L4.5 6.085L4.5 0L3.5 0L3.5 6.085L0.71 3.29L0 4L4 8L8 4Z" fill="#9873FF"/>
                </svg>
              </th>
              <th scope="cole" class="thead-th thead-th-size" @click.prevent="filterDate($event)">
                Дата и время создания
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4L7.295 3.295L4.5 6.085L4.5 0L3.5 0L3.5 6.085L0.71 3.29L0 4L4 8L8 4Z" fill="#9873FF"/>
                </svg>
                </th>
              <th scope="cole" class="thead-th thead-th-size" @click.prevent="filterDate($event)">
                Последние изменения
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4L7.295 3.295L4.5 6.085L4.5 0L3.5 0L3.5 6.085L0.71 3.29L0 4L4 8L8 4Z" fill="#9873FF"/>
                </svg>
                </th>
              <th scope="cole" colspan="2" class="thead-th">Действия</th>
            </tr>
          </thead>

          <tbody v-show="$store.state.loaderShow === true" class="client-tbody">
            <tr v-for="client in clientData" :key="client.id">
              <td class="tr-td tr-td-first">{{client.id}}</td>
              <td class="tr-td">{{`${client.surname} ${client.name} ${client.lastName}`}}</td>
              <td class="tr-td">{{client.createdAt | dateTimeFormat}}</td>
              <td class="tr-td">{{client.updatedAt | dateTimeFormat}}</td>
              <td class="tr-td tr-td-change" @click.prevent="showClientChange(client)">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z" fill="#9873FF"/>
                  </g>
                </svg>
                Изменить
              </td>
              <td class="tr-td tr-td-remove" @click.prevent="showClientDelete(client)">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#F06A4D"/>
                </svg>
                Удалить
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="add-client">
        <button class="btn-add-client" @click.prevent="showClientAdd">
          <svg class="btn-add-svg" width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 8C16.71 8 18.5 6.21 18.5 4C18.5 1.79 16.71 0 14.5 0C12.29 0 10.5 1.79 10.5 4C10.5 6.21 12.29 8 14.5 8ZM5.5 6V3H3.5V6H0.5V8H3.5V11H5.5V8H8.5V6H5.5ZM14.5 10C11.83 10 6.5 11.34 6.5 14V16H22.5V14C22.5 11.34 17.17 10 14.5 10Z" fill="#9873FF"/>
          </svg>
          Добавить клиента
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import ClientAddWindow from '@/components/ClientAddWindow.vue'
import { dateTimeFormat }  from '@/helpers/dateTimeFormat.js'
import { arrowRoat }  from '@/helpers/roatArrow.js'

export default {
  components: {ClientAddWindow},

  data() {
    return {
      checkFilterId: true,
      checkFilterName: true,
      checkFilterData: true,
    }
  },

  filters: {
    dateTimeFormat
  },

  computed: {
    clientData() {
      if(this.$store.state.filterClient) return this.$store.state.filterClient
      return this.$store.state.clientData
    },


  },


  methods: {
    filterId(event) {
      this.checkFilterName = true
      this.checkFilterData = true
      arrowRoat(event.currentTarget)
      if(this.checkFilterId){
        event.currentTarget.classList.toggle('thead-th-reverse')
        this.checkFilterId = false
        return this.clientData.sort((a, b) => a.id - b.id)
      }
      event.currentTarget.classList.toggle('thead-th-reverse')
      this.checkFilterId = true
      this.clientData.reverse()
    },

    filterName(event) {
      this.checkFilterId = true
      this.checkFilterData = true
      arrowRoat(event.currentTarget)
      if(this.checkFilterName){
        event.currentTarget.classList.toggle('thead-th-reverse')
        this.checkFilterName = false
        return this.clientData.sort((a, b) => {
          const nameClientOne = `${a.surname} ${a.name} ${a.lastName}`.split(" ")
          const nameClientTwo = `${b.surname} ${b.name} ${b.lastName}`.split(" ")

          if (nameClientOne[nameClientOne.length - 1] < nameClientTwo[nameClientTwo.length - 1]) return -1;
          if (nameClientOne[nameClientOne.length - 1] > nameClientTwo[nameClientTwo.length - 1]) return 1;

          return 0;
        })
      }

      event.currentTarget.classList.toggle('thead-th-reverse')
      this.checkFilterName = true
      this.clientData.reverse()

    },

    filterDate(event) {
      this.checkFilterId = true
      this.checkFilterName = true
      arrowRoat(event.currentTarget)
      if(this.checkFilterData){
        event.currentTarget.classList.toggle('thead-th-reverse')
        this.checkFilterData = false
        return this.clientData.sort((a, b) => {
          if (new Date(a.createdAt) > new Date(b.createdAt)) return -1;
          if (new Date(a.createdAt) < new Date(b.createdAt)) return 1;

          return 0;
        })
      }
      this.checkFilterData = true
      event.currentTarget.classList.toggle('thead-th-reverse')
      this.clientData.reverse()
    },

    showClientAdd(){
      this.$store.commit('updateCloseWindoweAdd', true)
    },

    showClientChange(client){
      return new Promise (res => {

        this.$store.commit('updateClientChange', client)
        if(this.$store.state.clientChange){
          this.$store.commit('updateCloseWindoweChange', true)
          res()
        }
      })
    },

    showClientDelete(client){
      this.$store.commit('updateClientDelete', client)
      this.$store.commit('updateCloseWindoweDelete', true)
    },



  },

}

</script>


<style>


  .header-client{
    margin-bottom: 20px;
    padding-left: 20px;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;

    color: black;
  }



  .table-conteiner{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 300px;
  }

  .preloader {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 1001;
  }

  .preloader__image {
    position: relative;
    top: 60%;
    left: 50%;
    margin-top: -35px;
    margin-left: -35px;
    text-align: center;
    animation: preloader-rotate 2s infinite linear;
  }

  @keyframes preloader-rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  .loaded_hiding .preloader {
    transition: 0.3s opacity;
    opacity: 0;
  }

  .loaded .preloader {
    display: none;
  }

  .table-client{
    table-layout: fixed;
    max-width: 984px;
    background-color: transparent;
    margin-bottom: 40px;
  }
  .thead-th{
    cursor: pointer;
    font-size: 12px;
    line-height: 16px;
    color: #B0B0B0;
    text-align: start;
    padding: 8px 20px;
  }

  .thead-th:last-child{
    cursor: auto;
    max-width: 203px;
  }

  .thead-th-reverse svg {
    transform: rotate(0.5turn);
  }

  .client-tbody{
    background-color: #FFFFFF;
  }

  .thead-th-size{
    max-width: 128px;
  }
  .tr-td{
    padding: 8px 20px;
    border-bottom: 1px solid rgba(200, 197, 209, 0.5);
    font-size: 14px;
    line-height: 19px;
    color: #333333;
  }
  .tr-td-first{
    font-size: 12px;
    line-height: 16px;
    color: #B0B0B0;
  }

  .tr-td-change, .tr-td-remove {
    cursor: pointer;
  }

 .add-client{
    display: flex;
    justify-content: center
  }
  .btn-add-client{
    display: flex;
    align-items: center;
    padding: 26px;
    border: 1px solid #9873FF;

    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-align: center;

    color: #9873FF;
  }

  .btn-add-svg{
    width: 22px;
    height: 16px;
    padding-right: 10px;
  }
</style>
