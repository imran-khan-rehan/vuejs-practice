<template>
  <div>
    <h2>Sign In</h2>
    <form @submit.prevent="submitForm">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const submitForm = () => {
      // Handle form submission
      console.log('Email:', email.value);
      console.log('Password:', password.value);
    };

    return {
      email,
      password,
      submitForm
    };
  }
};
</script>
