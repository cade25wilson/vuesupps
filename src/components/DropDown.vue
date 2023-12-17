<template>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li><a class="dropdown-item" href="#" v-if="isLoggedIn">Profile</a></li>
        <li><a class="dropdown-item" href="/favorites" hx-get="/favorites" hx-target="main" hx-push-url="true" v-if="isLoggedIn">Favorites</a></li>
        <li><a class="dropdown-item" href="#" v-if="isLoggedIn" @click="logout">Logout</a></li>
        <li><router-link class="dropdown-item" to="/signin" v-if="!isLoggedIn">Sign In</router-link></li>
        <li><router-link class="dropdown-item" to="/signup" v-if="!isLoggedIn">Sign Up</router-link></li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DropDown',
  methods: {
    logout() {
      // localStorage.removeItem('authToken');
      // this.$router.push({ path: '/' });
      axios.post('http://laravel.discountsupplinks.com/api/favorites', {
            // Request data
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            }
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
            // log the request that was made
            
        });
    }
  },
  computed: {
    isLoggedIn() {
      return !!localStorage.getItem('authToken');
    }
  },
}
</script>

<style>

</style>