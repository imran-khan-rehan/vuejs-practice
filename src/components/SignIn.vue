<template>
    <div class="signin">
      <h2>Sign In</h2>
      <form @submit.prevent="handleSignIn">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <a href="/signup" >signup</a>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async handleSignIn() {
        try {
          const response = await axios.post('/api/signin', {
            email: this.email,
            password: this.password
          });
          // Handle successful sign in (e.g., redirect, store token)
        } catch (error) {
          // Handle error (e.g., show error message)
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  