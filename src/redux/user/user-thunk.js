import {auth,googleProvider,createUserProfileDocument} from '../../Firebase/firebase';
import {signInSuccess,signInFailure} from './user-actions';
import {googleSignInSuccess,googleSignInFailure} from './user-actions';
import {signUpSuccess,signUpFailure} from './user-actions';
import {setCurrentUser} from './user-actions';

export const signInStartAsync = ({email,password})=>{
    return async dispatch =>{
       try {
        await auth.signInWithEmailAndPassword(email, password);
        dispatch(signInSuccess({email,password}));
      } catch(error){
          dispatch(signInFailure(error.message));
    }
    }
}


export const googleSignInStartAsync=()=>{
    return async dispatch=>{
        try{
            googleProvider.setCustomParameters({ prompt: 'select_account' });
            await auth.signInWithPopup(googleProvider);
            dispatch(googleSignInSuccess());
        }catch(error){
            dispatch(googleSignInFailure());
        }
        
    }
}

export const signUpStartAsync = ({displayName,email,password,confirmPassword})=>{
    return async dispatch =>{
        if(password !==confirmPassword){
            alert("Password don't match");
            return;
          }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName})
            dispatch(signUpSuccess(user,{displayName}));
          }catch(error){
            dispatch(signUpFailure(error.message));
          }
    }
}


export const checkUserSession = ()=>{
    let unSubscribe=null;
    return async dispatch =>{
       
        auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
              const userRef = await createUserProfileDocument(userAuth);
      
              unSubscribe =  userRef.onSnapshot(snapShot => {
                dispatch(setCurrentUser({
                    id: snapShot.id,
                    ...snapShot.data()
                  }));
              });
              return unSubscribe;
            }
            dispatch(setCurrentUser(userAuth));
          });
      
    }
}