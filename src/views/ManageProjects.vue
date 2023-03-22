<template>
      <div class="manage-projects">
        <ul class="manage-list flex">
          <li><router-link class="manage-button" to="/manage_projects/add_projects">ADD PROJECTS</router-link></li>
          <li><router-link class="manage-button" to="/manage_projects/delete_projects">DELETE PROJECTS</router-link></li>
        </ul>
      <router-view/>
      <hr>
      </div>
</template>
  
<script>
import AddProjects from '@/components/AddProjects.vue'
import DeleteProjects from '@/components/DeleteProjects.vue'
export default {
    name: 'ManageProjects',
    components: {
    AddProjects,
    DeleteProjects
    }
  }
</script>
  
<style lang="scss">
@import "../assets/utilities/utilities.scss";
@media screen and (min-width: 0) { 
  .manage-projects {
    .manage-list { 
      justify-content: center;
      margin-top: 50px;
      color: black;
      list-style-type: none;
      .manage-button {
        color: white;
        text-decoration: none;
        height: 50px;
        width: 170px;
        border: 1px solid #1f2b85;
        background-color: #1f2b85;
        list-style-type: none;
        padding: 20px;
        margin: 20px;
        text-align: center;
      }
    }
    hr {
    border-top-style: none;
    border-color: #68A7AD;
    margin-top: 50px;
    margin-left: 260px;
    border-width: 3px;
    width: 60%;
    margin-bottom: 225px;
  }
  }  
}
@media screen and (min-width: 778px) {
  .manage-projects {

  }
}
  
</style>