<template>
  <div class="about">
    <Button></Button>
    <input type="number" v-model="number" />
    {{ filteredData }}
    <!-- <div v-if="number>0 && number <1001"> -->
    <ul>
      <li v-for="value in filteredData " :key="value.id">
        {{value.id}} - {{value.title}}
        <br />
        <a href>{{value.url}}</a>
        or
        <a href>{{value.thumbnailUrl}}</a>
      </li>
    </ul>
    <!-- </div> -->
    {{reversedMessage}}
    {{message}}
  </div>
</template> 

<script>
import Button from "../components/Button";
import axios from "axios";
export default {
  components: {
    Button
  },
  data() {
    return {
      albLists: [],
      number: 0,
      message: "Hello",
      messgag2: "222"
    };
  },
  created() {
    console.log("buoc1");
    this.display();
    console.log("buoc3");
  },
  computed: {
    filteredData() {
      //if (this.number < 1 || this.number > 1000) return "Khong co";

      return this.albLists.filter(e => {
        // return e.id == this.$route.params.id
        return e.id == this.number || e.id == this.$route.params.id;
      });
    },
    reversedMessage() {
      // `this` points to the vm instance
      return (
        this.message
          .split("")
          .reverse()
          .join("") + this.messgag2
      );
    }
  },
  watch: {},
  methods: {
    async display() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      this.albLists = response.data;
      console.log("buoc2");
    },
    sum() {
      this.number++;
    }
  },
  beforeRouteUpdate(to, from, next) {
    // called when the route that renders this component has changed,
    // but this component is reused in the new route.
    // For example, for a route with dynamic params `/foo/:id`, when we
    // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
    // will be reused, and this hook will be called when that happens.
    // has access to `this` component instance.
    // console.log('update')
    // this.display(to.params.id)
    next();
  }
};
</script>

<style >
.about {
  text-align: left;
}
</style>