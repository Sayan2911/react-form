

const initialState={
    userDetails:{firstName:''},
    allUser:[]

}


const dataReducer=(state=initialState,action)=>{
    switch(action.type){
        case "firstName":
            return{...state, firstName: action.payload};
        case "allUser":
            
            return{ ...state,allUser: [...state.allUser, action.payload] };
            default:
            return state
    }
}
export default dataReducer;