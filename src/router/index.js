import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManageProjects from '../views/ManageProjects.vue'
import AddProjects from '../components/AddProjects.vue'
import DeleteProjects from '../components/DeleteProjects.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/manage_projects',
    name: 'manage_projects',
    component: ManageProjects,
    children:[
      { path: 'add_projects',
      name: 'add_projects',
      component: AddProjects,
      },
      { path: 'delete_projects',
      name: 'delete_projects',
      component: DeleteProjects,
      }
    ]
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
