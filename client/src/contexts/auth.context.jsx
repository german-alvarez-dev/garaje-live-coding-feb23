import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [user, setUser] = useState(null)

    const authenticateUser = () => {

        const storedToken = localStorage.getItem("authToken")

        if (storedToken) {

            axios
                .get('http://localhost:5005/api/auth/verify', {
                    headers: { Authorization: `Bearer ${storedToken}` }
                })
                .then(({ data }) => setUser(data))
                .catch(err => console.log(err))
        }
    }

    const logoutUser = () => {
        localStorage.removeItem('authToken')
        setUser(null)
    }


    useEffect(() => {
        authenticateUser()
    }, [])


    return (
        <AuthContext.Provider value={{ user, authenticateUser, logoutUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }