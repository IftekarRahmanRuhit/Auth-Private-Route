import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../Firebase.init"


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null)




    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signINUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser  = () => {

        return signOut(auth);
        

    }

    useEffect(()=>{

       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        
                console.log('currently user loged', currentUser)
                setUser(currentUser)
      
        })

        return()=>{
            unSubscribe();
        }



    },[])




    const authInfo = {
        name: 'Ruhit',
        createUser,
        signINUser,
        user,
        signOutUser,
    }



  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
