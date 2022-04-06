const initialState = { value: ""}

function tokenReducer(state = initialState, action){
    switch (action.type){
        case "mytoken":
            return {...state, value: action.payload}
        default :
            return state
    }
}

export default tokenReducer