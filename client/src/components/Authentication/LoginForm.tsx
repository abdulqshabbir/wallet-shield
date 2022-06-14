import React from "react"
import { Link } from "react-router-dom"

interface IProps {
    email: string,
    password: string,
    setEmail: (email: string) => void,
    setPassword: (pass: string) => void,
    setError: (error: string) => void
}

export default function LoginForm({ email, password, setEmail, setPassword, setError }: IProps){
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
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)}
                    onFocusHandler={(e: React.FocusEvent<HTMLInputElement>) => setError("")}
                />

                <Input
                    type={"password"}
                    placeholder={"Password"}
                    value={password}
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement> ) => setPassword(e.target.value)}
                    onFocusHandler={(e: React.FocusEvent<HTMLInputElement> ) => setError("")}
                />
            </form>
        </React.Fragment>
    )
}

interface InputProps {
    type: "text" | "password" | "email",
    placeholder: string,
    value: string,
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement> ) => void,
    onFocusHandler: (e: React.FocusEvent<HTMLInputElement> ) => void
}

function Input({ type, placeholder, value, onChangeHandler, onFocusHandler }: InputProps) {
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