const baseURL = process.env.REACT_APP_API

const cars = '/cars'
const auth = '/auth'
const users = '/users'
const urls = {
    cars: {
        base: cars,
        byId: (id: number): string => `${cars}/${id}`,
        photo: (id: number): string => `${cars}/${id}/photo`
    },
    auth: {
        login: auth,
        refresh: `${auth}/refresh`,
        register: users,
        me: `${auth}/me`
    }
}

export {
    baseURL,
    urls
}

