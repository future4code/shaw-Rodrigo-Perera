import axios from "axios"
import { baseUrl } from "../constants/baseURL"

export const login = (form) => {
    const url = `${baseUrl}/users/login`
    const promise = axios.post(url, form)
    return promise
}

export const signUp = (form) => {
    const url = `${baseUrl}/users/signup`
    const promise = axios.post(url, form)
    return promise
}