const INITAL_STATE={
    currentUser:null,
    error:null
}


const userReducer=(state=INITAL_STATE,action)=>{
    switch (action.type) {
      case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
      case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
      case 'SIGN_IN_FAILURE':
        case 'SIGN_UP_FAILURE':
          return {
            ...state,
            error: action.payload
          };
        default:
            return state;
    }
}

export default userReducer;