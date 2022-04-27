import React from "react"
import { Link } from "react-router-dom"

export default function Login() {
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
                            <Input type={"email"} placeholder={"Email address"}/>
                            <Input type={"password"} placeholder={"Password"} />
                            <Input type={"password"} placeholder={"Confirm Password"} />
                        </form>
                        <button className="h-12 text-white font-light bg-primaryBlue rounded-md hover:bg-blue-400">Log In</button>
                    </div>
                </main>
            </div>
        </React.Fragment>
	)
}

function Input({ type, placeholder }) {
    return <input className="h-12 pl-4 mb-4 w-full border-primaryGray-300 border-[1px] rounded-md placeholder:text-sm placeholder:font-light" placeholder={placeholder} type={type} />
}