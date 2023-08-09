const baseURL = process.env.REACT_APP_API

const episodes = '/episode'
const characters = '/character'

const urls = {
    episodes,
    characters: {
        byIds: (iDs) => `${characters}/${iDs}`
    }
}

export {
    baseURL,
    urls
}
