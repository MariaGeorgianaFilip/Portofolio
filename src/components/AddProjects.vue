<template>
    <section class="add-projects">
        <ul class="current-projects">
            <li class="card" v-for="(post,index) in posts" :key="index">
                <figure>
                    <img :src="require(`../assets/images/${post.image}`)"/>
                </figure>
                <h2 class="title">{{ post.title }}</h2>
                <br>
                <p> {{ post.description }}</p>
            </li>
        </ul>
        <div class="add-form">
        <form>
            <div class="input_field">
                <label style=" color:#1f2b85; font-size: 20px; font-weight: 600;">Title</label>
                <br/>
                <input class="title"
                    type="text"
                    v-model="title"
                    placeholder="Title"
                    >
            </div>
            <div class="input_field">
                <label style=" color:#1f2b85; font-size:20px; font-weight: 600;">Description</label>
                <br/>
                <input class="description"
                    type="text"
                    v-model="description"
                    placeholder="Description"
                    >
            </div>
            <!-- <div class="input_field">
                <label style=" color:#1f2b85; font-size:20px; font-weight: 600;">Photo</label>
                <br/>
                <input class="photo"
                    type="file"
                    >
            </div> -->
            <button class="button-add-project" @click.prevent="addProject"  type="submit">Add new project</button>
    </form>
    </div> 
</section>    
</template>

<script>
import posts from '../assets/posts.js'

export default {
  name: 'AddProjects',
  data () {
    return {
        title:'',
        image: '',
        description:'',
        posts
    }},

   methods: {
    addProject () {
        if (this.title.length === 0 && this.description.length === 0) {
        return; 
        } else {
        this.posts.push({
            title: this.title,
            description: this.description
        })
        }
    }}}
</script>

<style lang="scss">
@media screen and (min-width: 0) {
.add-projects {
    .current-projects {
        .card {
            align-items: center;
            margin-top: 25px;
            list-style-type: none;
            padding: 10px;
            // figure{
            //     img{
            //         width: 300px;
            //         height: 200px;
            //     }
            }}}
    .add-form {
        form {
            margin-top: 60px;
            margin-bottom: 30px;
            text-align: center;
            .title {
                width: 50%;
                height: 50px;
                border: 1px solid black;
            }
            .description {
                width: 50%;
                height: 200px;
                margin: 0 auto;
            }
            .button-add-project {
                width: 120px;
                height: 40px;
                margin-top: 30px;


            }
        }
    }
}
</style>