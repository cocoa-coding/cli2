<template>
  <div class="hello container mt-30">
    <div class="input-group mb-3">
      <input type="text" v-model="message" class="form-control" placeholder="Search for..."  aria-describedby="button-addon2">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="submitMessage()" id="button-addon2">Go</button>
      </div>
    </div>
    <div class="media my-4" v-for="item in messages">
      <img v-if="item.username !== 'user1'" class="mr-3 rounded-circle" src="http://placehold.jp/64x64.jpg" alt="Generic placeholder image">
      <div class="media-body ">
        <h5 class="mt-0">{{item.username}}</h5>
        <p>{{item.message}}</p>
        <a href="#">test</a>
      </div>
      <img v-if="item.username == 'user1'" class="ml-3 rounded-circle" src="http://placehold.jp/64x64.jpg" alt="Generic placeholder image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      messages: [
      {
      username: 'user1',
      message: 'hello'
      },
      {
        username: 'user2',
        message: 'hello'
      },
      ],
      message: ''

    }
  },
  methods:{
    submitMessage(){
      let self = this;
      self.messages.push({username:'chiya', message: self.message})
      self.message = '';
    }
  }
}
</script>

 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.media {
  background-color: rgba(0,0,0,.5);
}

h5 {
    color : white
}

p {
  margin-bottom: 0;
}

a {
  color : white;
}

a:hover {
  color : red;
}

/*.media {
  background-color: rgba(0,0,0,.5);

  h5 {
    color : white
  }

  p {
  margin-bottom: 0;
  }

  a {
    color : white;
    &:hover {
      color : red;
    }
  }
}*/

@media (max-width: 767px) {
  .media {
    background-color: rgba(0,0,0);
  }
  h5{
      color : blue;
  }
}

/*
@media (max-width: 767px) {
  .media {
    background-color: rgba(0,0,0);
    h5{
      color : blue;
    }
  }
}
*/

</style>
