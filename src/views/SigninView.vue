<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div>
                <label>Email:</label>
                <input type="email" v-model="email" required>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" v-model="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
            error: null,
        };
    },
    mounted() {
        window.addEventListener('keydown', this.handleKeyDown);
    },
    methods: {
        login() {
            axios.get('http://laravel.discountsupplinks.com/sanctum/csrf-cookie')
                .then(() => {
                    axios.post('http://laravel.discountsupplinks.com/api/login', {
                        email: this.email,
                        password: this.password,
                    })
                        .then(response => {
                            localStorage.setItem('authToken', response.data.token);
                            this.$router.push({ path: '/' });
                        })
                        .catch(error => {
                            console.log(error.response);
                            // this.error = error.response.data.error;
                        });
                });
        },
    },
};
</script>