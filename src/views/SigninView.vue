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
                            console.log(response.data.token);
                        })
                        .catch(error => {
                            console.log(error.response.data);
                            // this.error = error.response.data.error;
                        });
                });
        },

        test() {
            axios.get('http://laravel.discountsupplinks.com/api/test', {
                withCredentials: true
            })
                .then(response => {
                    // Handle the response, e.g. save the email in your component's data
                    this.email = response.data.email;
                    console.log(response.data);
                })
                .catch(error => {
                    // Handle the error, e.g. show an error message
                    console.error(error);
                });
        },

        handleKeyDown(event) {
            if (event.ctrlKey && event.key === 'r') {
                event.preventDefault();
                this.test();
            }
        },

    },
};
</script>