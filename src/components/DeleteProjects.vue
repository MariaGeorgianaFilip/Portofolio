<template>
    <div>
    <div class="delete-projects">
      <p>My projects list:</p>
      <ul class="projects-list">
            <li v-for="(post,index) in posts" :key="index" >
              <h3> TITLE: {{ post.title }}</h3>
              <div class="buttons">
                <button @click="removePost(post.id)">DELETE</button>
              </div>
            </li>
      </ul>
    </div>
    <!-- <form>
        <div class="input_field">
            <label>Title</label>
            <input
            type="text"
            v-model="title"
            placeholder="title"
            >
          </div>
          <button @click.prevent="addPost">ADD POST</button>
    </form> -->
        </div>
</template>

<script>
import posts from '../assets/posts.js'
export default {
  name: 'DeleteProjects',
  data () {
          return {
            title:'',
            posts
          }  
    },
  methods: {
  // addPost () {
  //   if (this.title.length === 0) {
  //     return;
  //   }
  //   this.posts.push({
  //     title: this.title,
  //     id: this.id 
  //   });
  // },
  removePost(postId) {
    this.posts = this.posts.filter(post => post.id !== postId);
    }   
  }
}
</script>

<style lang="scss">
@import "../assets/utilities/utilities.scss";
@media only screen and (min-width: 0) {
  .delete-projects {
    p {
      margin-top: 65px;
      font-size: 24px;
      font-weight: 600px;
      margin-left: 50px;
    }
    .projects-list {
      li {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        margin: 15px;
        padding: 7px;
        border: 1px solid black;  
      .buttons {
        align-items: center;
      button {
        margin: 10px;
        border: none;
        padding: 10px;
        width: 80px;
        height: 60px;
        color: white;
        text-align: center;
        background-color: #1f2b85;
      }}
    }
  } 
}}
</style>