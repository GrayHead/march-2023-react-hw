import {baseURL} from "../constants/urls";

class ApiService {
    constructor() {
        this.baseURL = baseURL
    }

    get(endpoint) {
        return fetch(`${this.baseURL}${endpoint}`)
    }

    post(endpoint, body) {
        return fetch(`${this.baseURL}${endpoint}`, {
            headers: {"Content-type": "application/json"},
            method: 'POST',
            body: JSON.stringify(body)
        })
    }

    patch(endpoint, body) {
        return fetch(`${this.baseURL}${endpoint}`, {
            headers: {"Content-type": "application/json"},
            method: 'PATCH',
            body: JSON.stringify(body)
        })
    }

    put(endpoint, body) {
        return fetch(`${this.baseURL}${endpoint}`, {
            headers: {"Content-type": "application/json"},
            method: 'PUT',
            body: JSON.stringify(body)
        })
    }

    delete(endpoint, body) {
        return fetch(`${this.baseURL}${endpoint}`, {
            method: 'DELETE',
        })
    }
}

export const apiService = new ApiService()
