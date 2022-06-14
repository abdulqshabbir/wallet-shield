// general modules
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import jwt from "jwt-decode"

//services
import loginUser from "../services/loginUser"
import { setTokensInLocalStorage } from "../services/auth"
import { useUser } from "../contexts/User"

// contexts
import getCategories from "../services/getCategories"
import getExpenses from "../services/getExpenses"
import { useCategories } from "../contexts/Categories"
import { useExpenses } from "../contexts/Expenses"

// components
import ErrorCard from "../components/Authentication/ErrorCard"
import Spinner from "../components/Shared/Spinner"
import Button from "../components/Shared/Button"
import AuthHeader from "../components/Authentication/AuthHeader"
import LoginForm from "../components/Authentication/LoginForm"
import LoginImage from "../components/Authentication/LoginImage"

export default function Login() {
    // Local state
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")
    const [ loading, setLoading ] = useState(false)

    // Hooks
    const navigate = useNavigate()
    const [ , setUser ] = useUser()
    const [ , setCategories ] = useCategories()
    const [ , setExpenses ] = useExpenses()

	return (
        <React.Fragment>
            <AuthHeader />
                <main className="max-w-[1000px] mx-auto min-h-[700px] flex flex-col flex-wrap justify-center items-center md:flex-row">
                    <LoginImage />
                    <div className="w-full min-h-[350px] p-4 flex flex-col justify-evenly md:px-12 md:w-1/2">
                        <LoginForm
                            email={email} 
                            password={password}
                            setEmail={setEmail}
                            setPassword={setPassword}
                            setError={setError}
                        /> 
                        <Button
                            onClick={handleUserLogin}
                            width={"100%"}
                        >
                            { loading ? <Spinner /> : `Log In` }
                        </Button>
                        <ErrorCard message={error} /> 
                    </div>
                </main>
        </React.Fragment>
	)

    async function handleUserLogin() {
        setLoading(true)
        let res = await loginUser(email, password)
        if (res.status > 200) {
            let { error } =  await res.json()
            setLoading(false)
            setError(error)
        } else {
            try {
                // set tokens in local storage
                let { accessToken, refreshToken } = await res.json()
                setTokensInLocalStorage(accessToken, refreshToken)
    
                // set user in react state
                let userFromToken = jwt(refreshToken)
                setUser({ email: userFromToken.email })
    
                // set user info on log in
                let userCategories = await getCategories()
                if (userCategories) {
                    setCategories(userCategories)
                }
                let userExpenses = await getExpenses()
                if (userExpenses) {
                    setExpenses(userExpenses)
                }
    
                setLoading(false)
                // navigate
                navigate('/')
            } catch(e) {
                console.log(e)
            }
        }
    }
}