<template>
    <div class="container">
        <div class="col-6 offset-3 text-center">
            <h2>Login</h2>
            <form @submit.prevent="login">
                <div class="row">
                    <div class="form-group col-6 offset-3">
                        <label>Email:</label>
                        <input type="email" class="form-control" v-model="email" required>
                    </div>  
                </div>
                <div>
                    <div class="form-group col-6 offset-3">
                        <label>Password:</label>
                        <input type="password" class="form-control" v-model="password" required>
                    </div>  
                </div>
                <button class="btn btn-primary mt-3" type="submit">Login</button>
            </form>
            <p v-if="error">{{ error }}</p>
        </div>  
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
            axios.get('https://laravel.discountsupplinks.com/sanctum/csrf-cookie')
                .then(() => {
                    axios.post('https://laravel.discountsupplinks.com/api/login', {
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