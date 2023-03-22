<template>
    <div class="content flex">
        <div class="content-card" v-for="(post,index) in posts" :key="index">
            <figure>
                <img :src="require(`../assets/images/${post.image}`)"/>
            </figure>
                <h2 class="title">{{ post.title }}</h2>
                <p> {{ post.description }}</p>
         </div>
    </div>
</template>

<script>
import posts from '../assets/posts.js'
export default {
    name: 'Content',
    data () {
            return {posts}  
    }}
</script>

<style lang="scss">
@import "../assets/utilities/utilities.scss";
@media only screen and (min-width: 0) {
    .content {
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 30px;
        .content-card {
            box-sizing: content-box;
            margin-bottom: -25px;
            padding: 30px;
            width: 350px;
            height: 300px;
            figure {
                margin-bottom: -50px;
            img {
                width: 250px;
                width: 250px;
            }
        }
        .title {
            margin-bottom: -15px;
        }
        } 
    }   
}
@media only screen and (min-width: 778px) {
    
}
</style>