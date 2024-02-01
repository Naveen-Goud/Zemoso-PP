import { Grid, styled} from "@mui/material";
import React from "react";
import Typography from "../../atoms/Typography";
import { theme } from "../../../theme";
interface UserCardProps{
    name: string ;
    title: string ;
    body: string ;
}

const ContentGrid=styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: theme.spacing(3),
    backgroundColor: theme.palette.primary[300]
})

const UserCard=(props: UserCardProps)=>{
    return(
        <Grid container width={"30vw"} height={"15vh"} justifyContent={"center"} alignItems={"center"}>
            <ContentGrid item xs >
               <Typography variant={"h1"} textColor={theme.palette.textColor.highEmp} >{props?.name}</Typography>
               <Typography variant={"subtitle1"} textColor={theme.palette.textColor.medEmp} >{props.title}</Typography>
               <Typography variant={"subtitle1"} textColor={theme.palette.textColor.medEmp} >{props.body}</Typography>
            </ContentGrid>
        </Grid>
    )
}
export default UserCard;