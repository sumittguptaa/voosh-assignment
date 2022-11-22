import axios from 'axios';
const API = axios.create({ baseURL: 'https://voosh-assignment.herokuapp.com/'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})
export const fetchPost = (id) => API.get(`/url/get-order/${id}`);
export const createPost = (newPost) => API.post("/url/add-order", newPost);
export const signin = (formData) => API.post('/user/login-user',formData)
export const signup = (formData) => API.post('/user/add-user', formData)




