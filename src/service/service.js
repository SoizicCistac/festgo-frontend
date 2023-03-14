import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const myApi = axios.create({
    baseURL: BACKEND_URL
})

myApi.getAllFestivals = () => {
    return myApi.get(`/api/festivals`)
}

myApi.createFestival = (festival) => {
    return myApi.post('/api/festivals', festival)
}

myApi.getOneFestival = (id) => {
    return myApi.get(`/api/festivals/${id}`)
}

myApi.updateFestival = (id, festival) => {
    return myApi.patch(`/api/festivals/${id}`, festival)
}

myApi.addImage = (image) => {
    return myApi.post('/api/festivals/images', image)
}

myApi.signUp = (user) => {
    return myApi.post('/api/auth/signup', user)
}

myApi.logIn = (user) => {
    return myApi.post('/api/auth/login', user)
}

export default myApi