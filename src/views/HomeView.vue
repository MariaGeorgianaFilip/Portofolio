<template>
    <section class="main-page">
        <div class="homeview flex">
        <img src="../assets/images/digital.jpg" alt="">
        <div class="home">
          <p> Hello! I am Maria, </p><br/>
          <p style=" color:#1f2b85; font-weight: 800;"> a FRONTEND DEVELOPER </p><br/>
          <p> based in Bucharest.</p>
        </div>
      </div>
      <hr>
      <Content />
    </section>
</template>

<script>
import Content from '@/components/Content.vue'
export default {
  name: 'HomeView',
  components :{
    Content
  }
  }
</script>

<style lang="scss">
@media screen and (min-width:0) {
.main-page  {
  margin: 0;
  padding: 0;
  width: 100%;
  .homeview {
    img {
      display: none;
    }
    .home {
      height: 340px;
      padding-top: 70px;
      p {
        margin: 0;
        padding: 20px;
        font-size: 20px;
        letter-spacing: normal;
      }
    }
  } 
  hr {
  }
}
}
@media screen and (min-width:778px) {
.main-page {
  .homeview {
    justify-content: center;
    img {
      display: inline;
      height: 200px;
      margin-top: 30px;
    }
    .home {
      p {
        font-size: 46px;
        letter-spacing: 1.5px;
        text-align: center;
      }
    }
  }
  hr {
    border-style: none;
    border-top-style: dotted;
    border-color: #68A7AD;
    border-width: 5px;
    width: 40%;
    margin-right: 195px;
    margin-top: -25px;
  }}}
</style>
