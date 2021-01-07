import React, { useContext, useState, createContext, useEffect } from 'react'
import { firebase } from '../firebase/firebase'
import { ContextDevTool } from 'react-context-devtool'
import cookie from 'js-cookie'

export const authContext = createContext({})

function AuthProvider({ children }) {
    const auth = firebase.auth()
    const provider = {
        google: new firebase.auth.GoogleAuthProvider(),
    }

    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    async function login() {
        try {
            setLoading(true)

            const { user } = await auth.signInWithPopup(provider.google)

            if (!user) return
            cookie.set('userId', user.uid)
            setUser(user)
            setLoading(false)
        } catch (error) {
            setError(error.message)

            setTimeout(() => {
                setError(null)
            }, 4000)
        }
    }

    function authStateChange() {
        return auth.onAuthStateChanged((user) => {
            if (user !== null) {
                cookie.set('userId', user.uid)
                setUser(user)
            }
        })
    }

    async function logout() {
        try {
            await auth.signOut()
            cookie.remove('userId')
            setUser(null)
        } catch (error) {
            setError(error.message)

            setTimeout(() => {
                setError(null)
            }, 4000)
        }
    }

    useEffect(() => {
        const unsub = authStateChange()

        if (error) {
            // set a toast using react-toastify
        }
        return () => unsub()
    }, [error])

    const values = {
        user,
        loading,
        login,
        logout,
        error,
    }

    return (
        <authContext.Provider value={values}>
            {process.env.NODE_ENV === 'Production' ? null : (
                <ContextDevTool
                    context={authContext}
                    id='auth'
                    displayName='Auth'
                />
            )}
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(authContext)
}

export default AuthProvider
