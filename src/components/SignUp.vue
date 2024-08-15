<template>
    <div class="signup">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSignUp">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <div>
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" v-model="confirmPassword" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {{ email }}
      <a href="/signin">signin</a>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      async handleSignUp() {
        if(this.checkEmailValid())
      {

      
        if (this.password !== this.confirmPassword) {
          // Handle password mismatch error
          return;
        }
        try {
        //   const response = await axios.post('/api/signup', {
        //     email: this.email,
        //     password: this.password
        //   });
          // Handle successful sign up (e.g., redirect, show success message)
        } catch (error) {
          // Handle error (e.g., show error message)
        }
    }
      },
      checkEmailValid(){
        if(this.email == "imran@g")
      {
        this.email="imran.liaqat1925";
      }
      return
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  