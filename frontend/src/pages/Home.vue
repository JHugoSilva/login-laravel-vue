<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const user = ref()

// onMounted(async () => {
//     const data = await axios.post('/api/v1/me')
//     user.value = data.data
// })
</script>

<template>
    <div>
        <h1>Home</h1>
    </div>
</template>