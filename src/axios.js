import axios from "axios"

const instance = axios.create({
    baseURL: "https://puspesh-tinder-clone.herokuapp.com"
})

export default instance;