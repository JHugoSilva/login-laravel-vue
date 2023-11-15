import axios from "axios";

// axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'http://localhost:8000'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-type': 'application/json'
    }
})

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
},(error) => {
    return Promise.reject(error);
}
);

export default axiosInstance