export default function LoginImage() {
    return(
        <div className="order-1 w-full min-h-[400px] flex items-center flex-col justify-center md:p-16 md:w-1/2 md:-order-1">
            <img alt="" src="login-image.png" width="400px"/>
            <p className="mt-8 text-[1rem] hidden text-primaryGray-300 md:block">Wallet Shield is a budgeting app that helps you become aware of what you spend, get out of debt and take control of your financial freedom.</p>
        </div>
    )
}