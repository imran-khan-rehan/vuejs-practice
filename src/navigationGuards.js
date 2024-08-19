import store from '@/store'; // Assuming you're using Vuex or a global state management system
import router from './router';

router.beforeEach((to, from, next) => {
  const isAuthenticated = false; //store.getters['auth/isAuthenticated'];
  const userRole = 'user';//store.getters['auth/userRole'];

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'Login' });
    } else if (to.matched.some(record => record.meta.roles && !record.meta.roles.includes(userRole))) {
      next({ name: 'Home' }); // Redirect to home or a 403 page
    } else {
      next();
    }
  } else {
    next();
  }
});
