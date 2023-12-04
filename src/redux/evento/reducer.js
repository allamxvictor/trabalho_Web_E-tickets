const initialState = {
    currentEvento: "" // dados cadastrados no formCadEvento
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