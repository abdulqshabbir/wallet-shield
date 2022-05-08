import { Oval } from "react-loader-spinner";

export default function Spinner() {
    return (
        <Oval
            height={`2.5rem`}
            width={`2.5rem`}
            ariaLabel="loading-indicator"
            strokeWidthSecondary={4}
            color="white"
            secondaryColor="transparent"
        /> 
    )
}