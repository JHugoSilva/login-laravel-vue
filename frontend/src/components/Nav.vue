<script setup>
  import { useRouter } from 'vue-router'
  import { authStore } from '../stores/auth.js'
  
  const auth = authStore()
  const router = useRouter()

  function logout() {
    auth.logout()
    router.push({name: 'login'})
  }
</script>
<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item" v-if="!auth.isAuth">
           <router-link class="nav-link" to="login">Login</router-link>
        </li>
         <li class="nav-item" v-if="!auth.isAuth">
         <router-link class="nav-link" to="register">Register</router-link>
        </li>
        <li class="nav-item" v-if="auth.isAuth">
         <router-link class="nav-link" to="dashboard">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <template v-if="auth.isAuth">
          <a href="#" class="nav-link">
            Olá, {{ auth.userData }}
            <button class="btn btn-sm btn-primary" @click="logout">Logout</button>
          </a>
          </template>
          <template v-else>
          <a href="#" class="nav-link">
            Olá, Visitante
          </a>
          </template>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>