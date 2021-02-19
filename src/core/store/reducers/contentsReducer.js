const contentsReducer = (state, action) => {
    switch (action.type) {
        case 'SAVE_CONTENT':
            return [...action.content]
        default:
            return state
    }
}

export default contentsReducer;