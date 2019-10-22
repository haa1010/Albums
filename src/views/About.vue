<template>
  <div class="about">
    <div class="row">
      <div class="col-3">
        {{ bienA }}
      <List :lists="albLists" @thongBaoA="hamXuLyThongBao"></List>
      </div>
      <div class="col-9">
         <router-view :key="$route.params.id"></router-view>
      </div>
    </div>
   

   
  </div>
</template> 

<script>
import List from '../components/List'
import axios from "axios";
export default {
  components : {
    List
  },
  data() {
    return {
      albLists: []
    };
  },
  created() {
    
    console.log('1')
    this.display();
    console.log('3')
  },
  computed: {
        bienA () {
            return this.$store.state.bienA
        }
    },
  methods: {
    async display() {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/albums")
        this.albLists = res.data;
        console.log(res)
        console.log('2')
      } catch (error) {
        console.log(error)
      }  
    },
    display1() {
      axios.get("https://jsonplaceholder.typicode.com/user/1")
        .then(res => {
          console.log(res.data)
          this.user = res.data
          axios.get("https://jsonplaceholder.typicode.com/user/1/albums")
            .then(res => {
              this.album = res.data
              axios.get(`https://jsonplaceholder.typicode.com/user/1/albums/${res.data.id}`)
              .then(res => {
                this.songs = res.data
              })
            })

        })
        .catch(error => {
          console.log(error)
        })
    },
    hamXuLyThongBao (value) {
      console.log(value)
    }
  }
};
</script>

<style >
.about {
  text-align: left;
}
</style>