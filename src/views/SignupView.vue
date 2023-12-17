<template>
    <div class="container p-4">
        <div class="col-6 offset-3 text-center">
            <!-- <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p> -->
            <form class="w-100" @submit.prevent="submitForm">
                <div class="row">
                    <div class="form-group col-6">
                        <label for="fullname">Full Name</label>
                        <input type="text" class="form-control" v-model="full_name" placeholder="Full Name" required>
                    </div>
                    <div class="form-group col-6">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp"
                            placeholder="Enter email" required>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-6">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" v-model="password" placeholder="Password" required>
                    </div>
                    <div class="form-group col-6">
                        <label for="password">Confirm Password</label>
                        <input type="password" class="form-control" v-model="password_confirmation"
                            placeholder="Confirm Password" required>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary mt-3">Sign Up</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            full_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: [],
        }
    },
    methods: {
        submitForm() {
            this.errors = [];
            if (this.password !== this.password_confirmation) {
                alert('Passwords do not match');
                this.password = '';
                this.password_confirmation = '';
                return;
            }
            // validate email
            if (!this.validateEmail(this.email)) {
                alert('Please enter a valid email address');
                this.email = '';
                return;
            }

            axios.post('http://laravel.discountsupplinks.com/api/signup', {
                full_name: this.full_name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            })
                .then((response) => {
                    console.log(response.data.token);
                    localStorage.setItem('authToken', response.data.token);
                    this.$router.push({ path: '/' });
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log(error);
                });
        },
        validateEmail(email) {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        },
    },
}
</script>

<style></style>