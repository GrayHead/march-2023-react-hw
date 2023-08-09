const charactersActionsTypes = {
    SETC: 'SETC'
}
const charactersActions = {
    set: (payload) => ({type: charactersActionsTypes.SETC, payload})
}

export {
    charactersActions,
    charactersActionsTypes
}
