const baseURL = process.env.REACT_APP_API

const urls = {
    episodes: '/episode',
    characters: (ids) => `/character/${ids}`
}

export {
    urls,
    baseURL
}
