

const initialState={
    userDetails:{firstName:''},
    allUser:[]

}


const dataReducer=(state=initialState,action)=>{
    switch(action.type){
        case "firstName":
            return{...state, firstName: action.payload};
        case "allUser":{
            const { email } = action.payload;

            // Check if the user already exists in the allUser array
            const userExists = state.allUser.some(user => user.email === email);

            if (userExists) {
                // Update the existing user's details
                return {
                    ...state,
                    allUser: state.allUser.map(user =>
                        user.email === email ? { ...user, ...action.payload } : user
                    ),
                    userDetails: { ...state.userDetails, ...action.payload }
                };
            } else {
                // Add a new user
                return {
                    ...state,
                    allUser: [...state.allUser, action.payload],
                    userDetails: { ...state.userDetails, ...action.payload }
                };
            }
        }

            
            default:
            return state
    }
}
export default dataReducer;