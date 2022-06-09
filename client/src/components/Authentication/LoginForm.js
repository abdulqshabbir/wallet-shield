import React from "react"
import { Link } from "react-router-dom"

export default function LoginForm({ email, password, setEmail, setPassword, setError }){
    return(
        <React.Fragment>
            <h1 className="text-center text-4xl font-bold">
                Log In
            </h1>
            <h3 className="text-center text-[0.9rem] font-light text-primaryGray-300">
                New to Wallet Shield?
            <Link className="text-primaryBlue hover:underline" to="/signup">
                <span> Sign up.</span>
            </Link></h3>
            <form>
                <Input
                    type={"email"}
                    placeholder={"Email address"}
                    value={email}
                    onChangeHandler={e => setEmail(e.target.value)}
                    onFocusHandler={e => setError("")}
                />

                <Input
                    type={"password"}
                    placeholder={"Password"}
                    value={password}
                    onChangeHandler={e => setPassword(e.target.value)} onFocusHandler={e => setError("")}
                />
            </form>
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