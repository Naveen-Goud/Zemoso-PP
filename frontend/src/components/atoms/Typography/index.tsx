import { Typography as MuiTypography} from "@mui/material";
import React from "react";

interface TypographyProps {
    variant: "h1" | "subtitle1" | "subtitle2";
    children: string | undefined;
    textColor: string;
}
const Typography = (props: TypographyProps)=>{
    return(
     <MuiTypography variant={props.variant} color={props.textColor}>{props.children}</MuiTypography>
    )
}
export default Typography;