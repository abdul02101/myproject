import BaseFormField from '@/components/BaseFormField.vue';

export default {
  props: ['title', 'error', 'placeholder', 'type', 'value'],

  data() {
    return {
      inputValue: null,
    }
  },
  components: { BaseFormField },
  computed: {
    dataValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },

  methods: {
    changeInput(){
      if(this.type === 'text'){
        this.dataValue = this.dataValue.split(' ').map(el => {
          el = el.trim().toLowerCase()
          let indndn = el.charAt(0)
          return el.replace(indndn, indndn.toUpperCase())
        }).join(' ')
      }
    }
  }
};
