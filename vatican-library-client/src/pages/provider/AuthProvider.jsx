import { createContext, useEffect, useState } from "react";
import auth from '../../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    //create account on firebase with email and password
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //login user who already created account with email and password
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //login user using google
    const loginWIthGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //sign Out user
    const logOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect ( () =>{
        const disconnect = onAuthStateChanged(auth, activeUser =>{
            setUser(activeUser)
            setLoading(false)
        });
        return () =>{
            disconnect()
        }
    }, [])
    const userInfo = {
        user,
        createUser,
        loading,
        loginUser,
        loginWIthGoogle,
        logOutUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;