import React, { useState } from "react"
import { Link } from "react-router-dom"
import signupUser from "../services/signupUser"
import ErrorCard from "../components/Authentication/ErrorCard"

export default function Signup() {
    const [ email, setEmail ] = useState("")
    const [ password , setPassword ] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")
    const [ error, setError ] = useState("")
    const [ success, setSuccess ] = useState("")

    async function handleSignup() {
        const res = await signupUser(email, password, confirmPassword)
        if (res.status > 200) {
            const { error } = await res.json()
            setError(error)
        } else {
            const { message } = await res.json()
            setSuccess(message)
        }
    }

    function clearMessages () {
        setSuccess("")
        setError("")
    }

	return (
        <React.Fragment>
            <header className="h-14 pl-4 font-semibold flex justify-center items-center border-b-2 md:justify-start">
                <span>WALLET SHIELD</span>
            </header>
            <div className="max-w-[1000px] mx-auto">
                <main className="min-h-[700px] flex flex-col flex-wrap justify-center items-center md:flex-row">
                    <div className="order-1 w-full min-h-[450px] flex items-center flex-col justify-center md:p-16 md:w-1/2 md:-order-1">
                        <img alt="" src="login-image.png" width="400px"/>
                        <p className="mt-8 text-[1rem] hidden text-primaryGray-300 md:block">Wallet Shield is a budgeting app that helps you become aware of what you spend, get out of debt and take control of your financial freedom.</p>
                    </div>
                    <div className="w-full min-h-[350px] p-4 flex flex-col justify-evenly md:px-12 md:w-1/2">
                        <h1 className="mb-4 text-center text-4xl font-bold">Signup</h1>
                        <h3 className="mb-4 text-center text-[0.9rem] font-light text-primaryGray-300">Already have a Wallet Shield account?<Link to="/login" className="text-primaryBlue hover:underline"> Log in.</Link></h3>
                        <form>
                            <Input type={"email"} placeholder={"Email address"} value={email} onChangeHandler={e => setEmail(e.target.value)} onFocusHandler={clearMessages} />
                            <Input type={"password"} placeholder={"Password"} value={password} onChangeHandler={e => setPassword(e.target.value)} onFocusHandler={clearMessages} />
                            <Input type={"password"} placeholder={"Confirm Password"} value={confirmPassword} onChangeHandler={e => setConfirmPassword(e.target.value)} onFocusHandler={clearMessages} />
                        </form>
                        <ErrorCard message={error} successMessage={success} setSuccessMessage={setSuccess} />
                        <SuccessCard message={success} />
                        <button
                            className="h-12 text-white font-light bg-primaryBlue rounded-md hover:bg-blue-400"
                            onClick={handleSignup}>
                                Sign up
                        </button>
                    </div>
                </main>
            </div>
        </React.Fragment>
	)
}

function SuccessCard({ message }) {
    if (message === "") return null

    return (
        <div className="h-10 mb-4 rounded-md text-[1rem] flex justify-center items-center font-light bg-green-100">
            <p>{ message }</p>
        </div>
    )
}

function Input({ type, placeholder, value, onChangeHandler, onFocusHandler }) {
    return <input onChange={onChangeHandler} value={value} onFocus={onFocusHandler} className="h-12 pl-4 mb-4 w-full border-primaryGray-300 border-[1px] rounded-md placeholder:text-sm placeholder:font-light" placeholder={placeholder} type={type} />
}