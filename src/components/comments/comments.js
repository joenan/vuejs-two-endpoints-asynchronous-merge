
export default {
  name: 'comments',
  components: {},
  props: [],
  data () {
    return {
      userInformation: {},
      comments:{},
      mergedUserAndComments:{},
      userList:[]
    }
  },
  computed: {

  },
  mounted () {
    this.getUser(1);
    this.getAllUsers();
  },
  methods: {
    getUser (id) {
      let userUrl = 'http://jsonplaceholder.typicode.com/users/'+id;
      this.axios.get(userUrl).then(response => {
          this.userInformation = response.data;
          this.getUserComments(this.userInformation.id)
      },
      error=> {
        console.log(error)
      }
      );
  },

  getAllUsers() {
    let userUrl = 'http://jsonplaceholder.typicode.com/users/';
    this.axios.get(userUrl).then(response => {
        this.userList = response.data;
    },
    error=> {
      console.log(error)
    }
    );
  },


  getUserComments(id) {
    let commentUrl = 'http://jsonplaceholder.typicode.com/posts?userId='+id;

    this.axios.get(commentUrl).then(response => {
      let comments = response.data;
      this.mergedUserAndComments = {...this.userInformation, comments};
    },
    error=> {
      console.log(error.error.message);
    }
    )
 }



  }
}


