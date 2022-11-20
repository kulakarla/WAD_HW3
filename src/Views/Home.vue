<template>
  <HeaderBox titleText="Homepage"/>
  <div v-for="post in postListStuff" :key="post.id" class="posts">
    <PostEntity ref="post"
                :postDate="post.date"
                :profilePic="post.profilepic"
                :postImage="post.img"
                :postParagraph="post.paragraph"></PostEntity>
  </div>
  <button @click="resetCounters" class = "resetbutton">Reset Likes</button>
  <FooterBox />
</template>

<script>
import HeaderBox from "@/components/Header";
import FooterBox from "@/components/Footer";
import PostEntity from "@/components/Post";

export default {
  name: 'HomeView',
  components: {
    FooterBox,
    HeaderBox,
    PostEntity
  },
  computed: {
    postListStuff(){
      return this.$store.getters.postListStuff
    },
  },
  methods: {
    resetCounters() {
      this.$refs.post.forEach(p => p.reset());
    }

  }
}
</script>

<style>
.posts{
  display: flex;
  justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.resetbutton{
  background-color: darkgray;
  border-radius: 2%;
  margin: 10px;
  font-family: Avenir, Avenir, Helvetica, Arial, sans-serif;
}
</style>
