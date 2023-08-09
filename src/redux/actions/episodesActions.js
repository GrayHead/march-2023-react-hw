const episodesActionsTypes = {
    SET: 'SET'
}
const episodesActions = {
    set: (payload) => ({type: episodesActionsTypes.SET, payload})
}

export {
    episodesActions,
    episodesActionsTypes
}
