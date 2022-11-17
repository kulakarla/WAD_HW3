<template>
    <div class = "post">
      <div class ="postheader">
        <img :src="profilePic" alt="profilepic" class="profilepic">

        <p>{{postDate}}</p>

      </div>
      <div class = "postbody">

        <img :src="postImage">

        <p>{{postParagraph}}</p>

      </div>
      <div class = "postfooter">
        <!--<img :src="require('@/assets/' +nation.drapeau)"/> -->
        <img :src="require('@/assets/like.png')" v-on:click.prevent="increment" class="likepilt">
        <p>Number of likes: {{ count }}</p>

      </div>
    </div>

</template>

<script>

export default {
  name: "PostEntity",
  props:{
    postDate: String,
    postImage: String,
    profilePic: String,
    postParagraph: String,



  },
  data: function() {
    return {
      count: 0

    }
  },
  methods: {
    increment () {
      this.count++;
    }
  }
}

</script>

<style scoped>
.posts{
  flex-direction: column;
  align-items: center;
  display: flex;
}
.post{
  width: 65%;
  overflow:auto;
  border-radius: 25px;
  background-color: darkgray;
  padding: 1%;
  margin: 10px;
}
.postbody > p{
  text-align: justify;
}
.postbody{
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.postheader{
  display: flex;
  justify-content: space-between;
  margin-bottom: 1%;
  align-items: center;
}
.postfooter{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.post > img + p{
  font-weight: bold;
}

.post > img ~ p{
  font-style: italic;
}

.profilepic{
  height: 43px;
  width: 43px;
}

.likepilt{
  height: 45px;
  width: 40px;
}

img{
  max-width: 100%;
  max-height: 100%;
}

</style>