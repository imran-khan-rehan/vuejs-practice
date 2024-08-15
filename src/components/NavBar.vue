<template>
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <!-- Add more links as needed -->
        <li>
          <button @click="toggleDropdown">{{ user ? user.name : 'Account' }}</button>
          <div v-if="showDropdown" class="dropdown">
            <router-link v-if="user" to="/profile">Profile</router-link>
            <router-link v-if="user" to="/logout" @click.native="logout">Logout</router-link>
            <router-link v-else to="/signin">Sign In</router-link>
            <router-link v-else to="/signup">Sign Up</router-link>
          </div>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const router = useRouter();
      const user = ref(null); // Replace with your user state or authentication logic
      const showDropdown = ref(false);
  
      function toggleDropdown() {
        showDropdown.value = !showDropdown.value;
      }
  
      function logout() {
        // Perform logout logic here
        user.value = null;
        router.push('/signin');
      }
  
      return {
        user,
        showDropdown,
        toggleDropdown,
        logout
      };
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #333;
    color: white;
  }
  
  .navbar ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .navbar li {
    margin: 0 10px;
  }
  
  .navbar a {
    color: white;
    text-decoration: none;
  }
  
  .navbar a:hover {
    text-decoration: underline;
  }
  
  .dropdown {
    position: absolute;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    min-width: 160px;
    z-index: 1;
  }
  
  .dropdown a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown a:hover {
    background-color: #f1f1f1;
  }
  </style>
  