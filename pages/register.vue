<template>
    <div class="container">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <div class="user">
                                <div class="form-group row">
                                    <div class="col-sm-12 mb-sm-0">
                                        <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                            placeholder="User Name" v-model="username">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                        placeholder="Email Address" v-model="email">
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" class="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Password" v-model="password">
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" class="form-control form-control-user"
                                            id="exampleRepeatPassword" placeholder="Repeat Password"
                                            v-model="repeatPassword">
                                    </div>
                                </div>
                                <button href="login" class="btn btn-primary btn-user btn-block" @click="register">
                                    Register Account
                                </button>
                                <hr>
                                <a href="/" class="btn btn-google btn-user btn-block">
                                    <i class="fab fa-google fa-fw"></i> Register with Google
                                </a>
                                <a href="/" class="btn btn-facebook btn-user btn-block">
                                    <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                </a>
                            </div>
                            <hr>
                            <div class="text-center">
                                <a class="small" href="forgot-password">Forgot Password?</a>
                            </div>
                            <div class="text-center">
                                <a class="small" href="login">Already have an account? Login!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'RegisterPage',
    middleware: 'guest',
    layout: 'empty',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            repeatPassword: '',
            error: null
        }
    },
    methods: {
        async register() {
            try {
                await this.$axios.post('register', {
                    username: this.username,
                    email: this.email,
                    password: this.password
                })

                await this.$auth.loginWith('local', {
                    data: {
                        email: this.email,
                        password: this.password
                    },
                })
                this.$router.push('/')
            } catch (e: any) {
                this.error = e.response.data.message
            }
        }
    }
})
</script>
