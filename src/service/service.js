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

myApi.deleteFestival = (id) => {
    return myApi.delete(`/api/festivals/${id}`)
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

myApi.getAllStands = () => {
    return myApi.get('/api/stand')
}

myApi.createStand = (stand) => {
    return myApi.post('/api/stand', stand)
}

myApi.getOneStand = (id) => {
    return myApi.get(`/api/stand/${id}`)
}

myApi.updateStand = (id, stand) => {
    return myApi.patch(`/api/stand/${id}`, stand)
}

myApi.deleteStand = (id) => {
    return myApi.delete(`/api/stand/${id}`)
}

myApi.addProduct = (id, product) => {
    return myApi.patch(`/api/stand/${id}/addProduct`, product)
}

export default myApi