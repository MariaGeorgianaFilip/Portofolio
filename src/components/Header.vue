<template>
    <header class="header flex space">
        <h3>Maria Georgiana Filip</h3>
        <nav class="nav-bar flex space">
            <router-link class="link" title="Home" to="/">Home</router-link>
            <router-link class="link" title="ManageProjects" to="/manage_projects">Manage Projects</router-link>
            <router-link class="link" title="Contact" to="/contact">Contact</router-link>
        </nav>
        <div>
          <span class="hamb-menu">|||</span>
        </div>
      </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    props: {
      msg: String
    }
  }
  </script>
  
<style lang="scss">
  @import "../assets/utilities/utilities.scss";
  @media screen and (min-width: 0) {
  .header {
    margin: 0;
    padding: 0;
    width: 100%;
    align-items: center;
    background-color: #7DB9B6;
    h3 { 
      font-size: 12px;
      padding: 10px;
      margin-left: 20px;
    }
    .nav-bar {
    display: none;
      }
    .hamb-menu {
      transform: rotate(90deg);
      // letter-spacing: -5px;
      // line-height: 15px;
      margin-right: 15px;
      width: 20px;
      height: 20px;
      color: white;
      background-color:#68A7AD;
      border: none
      }
    }
  }
@media screen and (min-width: 778px) {
  .header {
    h3 { 
      font-size: 22px;
      padding: 20px;
      margin-left: 40px;
    }
    .nav-bar {
      display: inline-block;
      justify-content: space-between;
      padding: 0;
      margin-right: 20px;
        .link {
          padding: 20px;
          font-size: 16px;
          text-decoration: none;
          cursor: pointer;
          color: black;
        } 
      }
    .hamb-menu {
      display: none
    }
  }
  }
  </style>