
export default {
  name: 'header',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {
   
  },
  mounted () {
    
  },
  methods: {
    toggle() {
      var wrapper = document.querySelector('#wrapper');
      wrapper.classList.toggle("toggled");
    }
  }
}


