import { Oval } from "react-loader-spinner";

export default function Spinner({ height, width, color }) {
    return (
        <Oval
            height={height ? height: `2.5rem`}
            width={width? width: `2.5rem`}
            ariaLabel="loading-indicator"
            strokeWidthSecondary={4}
            color={color? color: "white"}
            secondaryColor="transparent"
        /> 
    )
}