import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import orders from '@/components/orders.vue';
const routes = [
  { path: '/signin',
    component: SignIn,
  
  },
  { path: '/signup', component: SignUp },
  {path:'/orders',
    component: orders,
    meta: { requiresAuth: true, roles: ['admin'] },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
