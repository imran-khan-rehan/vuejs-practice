<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="submitForm">
      <input v-model="name" type="text" placeholder="Name" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
    {{ name }}
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const name = ref('name');
    const email = ref('');
    const password = ref('');

    const submitForm = () =>{
      // Handle form submission
      console.log('Name:', name.value);
      console.log('Email:', email.value);
      console.log('Password:', password.value);
    };
     name.value="imran khan";

    return {
      name,
      email,
      password,
      submitForm
    };
  }
};
</script>
