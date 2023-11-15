<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import axios from '../http/axios.js'
import { authStore } from '../stores/auth.js'

const form = ref({
    email: 'test@example.com',
    password: 'password'
})

const router = useRouter()
const auth = authStore()

const submitLogin = async () => {
    await axios.post('/api/login', {
        email: form.value.email,
        password: form.value.password
    }).then((result) => {
       auth.setToken(result.data.token)
       auth.setUser(result.data.user.name)
       auth.setIsAuth(true)
    }).catch((err) => {
        console.log(err);
    });

    router.push('/')
}
</script>

<template>
  <div class="container">
    <div class="col-md-6 m-auto">
        <template v-if="!auth.isAuth">
            <h1>Login</h1>
            <form method="POST" @submit.prevent="submitLogin">
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Email</label>
                    <input
                    type="email"
                    v-model="form.email"
                    class="form-control"
                    id="email"
                    placeholder="name@example.com"
                    />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" v-model="form.password" class="form-control" id="password" placeholder="******" />
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
        </template>
        <template v-else>
            <h1>Logen In</h1>
        </template>
    </div>
  </div>
</template>
