import { Oval } from "react-loader-spinner";

interface IProps {
    height?: string,
    width?: string,
    color?: string,
}

export default function Spinner({ height, width, color} : IProps) {
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