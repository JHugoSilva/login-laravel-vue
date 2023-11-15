<script setup></script>

<template>
  <div class="container">
    <div class="col-md-6 m-auto">
        <h1>Register</h1>
      <div class="mb-3 mt-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Name" />
      </div>
      <div class="mb-3 mt-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="******" />
      </div>
      <div class="mb-3">
        <button type="button" class="btn btn-primary">Login</button>
      </div>
    </div>
  </div>
</template>
