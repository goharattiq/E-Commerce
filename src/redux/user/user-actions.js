export const setCurrentUser= user=>({
    type:   'SET_CURRENT_USER',
    payload:user
})

export const checkUserSession= () =>({
    type:   'CHECK_USER_SESSION'
})


export const signInSuccess= user=>({
    type:   'SIGN_IN_SUCCESS',
    payload:user
})

export const signInFailure = errorMessage =>({
    type:   'SIGN_IN_FAILURE',
    payload:errorMessage
})

export const googleSignInSuccess= user=>({
    type:   'GOOGLE_SIGN_IN_SUCCESS',
    payload:user
})

export const googleSignInFailure = errorMessage =>({
    type:   'GOOGLE_SIGN_IN_FAILURE',
    payload:errorMessage
})

export const signUpSuccess= user=>({
    type:   'SIGN_UP_SUCCESS',
    payload:user
})

export const signUpFailure = errorMessage =>({
    type:   'SIGN_UP_FAILURE',
    payload:errorMessage
})

