import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Upload from '../views/Upload.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Gallery',
    path: '/gallery',
    component: Gallery
  },
  { name: 'Upload',
    path: '/upload', 
    component: Upload
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})
