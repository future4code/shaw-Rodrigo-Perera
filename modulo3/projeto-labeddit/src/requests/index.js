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

export const getAllPosts = () => {
    const {token} = localStorage
    const url = `${baseUrl}/posts`

    const promise = axios.get(url, {
        headers: {
            Authorization: token
        }
    })
    return promise
}

export const decideVote = (id, direction) => {
    const {token} = localStorage
    const url = `${baseUrl}/posts/${id}/votes`
    const body = {
        direction: direction
      }
    const promise = axios.post(url, body, {
        headers: {
            Authorization: token
        }
    })
    return promise
}

export const deleteVote = (id) => {
    const {token} = localStorage
    const url = `${baseUrl}/posts/${id}/votes`

    const promise = axios.delete(url, {
        headers: {
            Authorization: token
        }
    })
    return promise
}

export const createPost = (form) => {
    const {token} = localStorage
    const url = `${baseUrl}/posts`

    const promise = axios.post(url, form, {
        headers: {
            Authorization: token
        }
    })
    return promise
}