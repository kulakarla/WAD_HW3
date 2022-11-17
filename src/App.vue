<template>
  <HeaderBox titleText="Homepage"/>
  <div v-for="post in postListStuff" :key="post.id" class="posts">
    <PostEntity :postDate="post.date" :profilePic="post.profilepic" :postImage="post.img" :postParagraph="post.paragraph"></PostEntity>
  </div>
  <FooterBox />
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderBox from "@/components/Header";
import FooterBox from "@/components/Footer";
import PostEntity from "@/components/Post";

export default {
  name: 'App',
  components: {
    FooterBox,
    HeaderBox,
    HelloWorld,
    PostEntity
  },
  computed: {
    postListStuff(){
      return this.$store.getters.postListStuff
    },
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
</style>
