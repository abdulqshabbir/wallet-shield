import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import loginUser from "../services/loginUser"
import ErrorCard from "../components/Authentication/ErrorCard"
import { setTokensInLocalStorage } from "../services/auth"
import jwt from "jwt-decode"
import { useUser } from "../contexts/User"
import getCategories from "../services/getCategories"
import getExpenses from "../services/getExpenses"
import { useCategories } from "../contexts/Categories"
import { useExpenses } from "../contexts/Expenses"
import Spinner from "../components/Spinner"
import Button from "../components/Button"

export default function Login() {
    // Local state
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")
    const [ loading, setLoading ] = useState(false)

    // Navigation
    const navigate = useNavigate()

    // Context
    const [ , setUser ] = useUser()
    const [ , setCategories ] = useCategories()
    const [ , setExpenses ] = useExpenses()

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

	return (
        <React.Fragment>
            <header className="h-14 pl-4 font-semibold flex justify-center items-center border-b-2 md:justify-start">
                <span>WALLET SHIELD</span>
            </header>
            <div className="max-w-[1000px] mx-auto">
                <main className="min-h-[700px] flex flex-col flex-wrap justify-center items-center md:flex-row">
                    <div className="order-1 w-full min-h-[400px] flex items-center flex-col justify-center md:p-16 md:w-1/2 md:-order-1">
                        <img alt="" src="login-image.png" width="400px"/>
                        <p className="mt-8 text-[1rem] hidden text-primaryGray-300 md:block">Wallet Shield is a budgeting app that helps you become aware of what you spend, get out of debt and take control of your financial freedom.</p>
                    </div>
                    <div className="w-full min-h-[350px] p-4 flex flex-col justify-evenly md:px-12 md:w-1/2">
                        <h1 className="text-center text-4xl font-bold">Log In</h1>
                        <h3 className="text-center text-[0.9rem] font-light text-primaryGray-300">New to Wallet Shield? <Link className="text-primaryBlue hover:underline" to="/signup">Sign up.</Link></h3>
                        <form>
                            <Input type={"email"} placeholder={"Email address"} value={email} onChangeHandler={e => setEmail(e.target.value)} onFocusHandler={e => setError("")} />
                            <Input type={"password"} placeholder={"Password"} value={password} onChangeHandler={e => setPassword(e.target.value)} onFocusHandler={e => setError("")} />
                        </form>
                        <Button onClick={handleUserLogin}>
                            { loading ? <Spinner /> : `Log In` }
                        </Button>
                        <ErrorCard message={error} /> 
                    </div>
                </main>
            </div>
        </React.Fragment>
	)
}

function Input({ type, placeholder, value, onChangeHandler, onFocusHandler }) {
    return (
        <input
            className="h-12 pl-4 mb-4 w-full border-primaryGray-300 border-[1px] rounded-md placeholder:text-sm placeholder:font-light"
            value={value}
            onChange={onChangeHandler}
            onFocus={onFocusHandler}
            placeholder={placeholder}
            type={type} 
        />
    )
}