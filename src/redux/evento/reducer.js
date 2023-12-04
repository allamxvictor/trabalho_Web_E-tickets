const initialState = {
    currentEvento: ""
}


const eventoReducer = (state = initialState, action) => {
    if (action.type == "cadastrar/evento") {
        return {
            ...state,
            currentEvento:  action.payload,
        }
    }
    return state;
}

export default eventoReducer;