import { ref, computed } from 'vue'
import { defineStore } from 'pinia';
import axios from '../http/axios.js'

export const authStore = defineStore('auth', () => {

    const token = ref(localStorage.getItem('token'))
    const user = ref(JSON.parse(localStorage.getItem('user')))
    const isAuth = ref(false)

    function  setToken(tokenValue) {
        localStorage.setItem('token', tokenValue)
        token.value = tokenValue
    }

    function setUser(userValue) {
        localStorage.setItem('user', JSON.stringify(userValue))
        user.value = userValue
    }

    const isAuthenticated = computed(()=>{
        return token.value && user.value

    })

    const userData = computed(()=>{
        if (user.value) {
            return user.value
        }
        return ''
    }) 

    async function checkToken() {
        try {
            const { data } = await axios.post('/api/v1/refresh')
            setToken(data.token)
            return data
        } catch (error) {
            clear()
        }
    }

    async function logout() {
        try {
            const { data } = await axios.post('/api/v1/logout')
            if (data) {
                clear()
            }
        } catch (error) {
            clear()
        }
    }

    function clear() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        isAuth.value = false
        token.value = ''
        user.value = ''
    }

    function setIsAuth(auth) {
        isAuth.value = auth
    }

    return {
        user,
        clear,
        token,
        logout,
        isAuth,
        setUser,
        userData,
        setToken,
        setIsAuth,
        checkToken,
        isAuthenticated,
    }

})