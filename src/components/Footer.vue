<template>
  <footer class="footer flex">
    <img src="../assets/images/snap.png" alt="">
    <img src="../assets/images/in.png" alt="">
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
@media only screen and (min-width: 0) {
  .footer {
    justify-content: center;
    background-color: #7DB9B6;
    align-items: center;
    img {
      width: 36px;
      height: 36px;
      margin: 20px;
  }
  }
   
}
@media only screen and (min-width: 778px) {

}
</style>
