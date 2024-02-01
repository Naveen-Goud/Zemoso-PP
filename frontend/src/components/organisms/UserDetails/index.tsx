import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserCard from "../../molecules/UserCard"; 
import { UserBody, UserComments } from "../../../services/types";
import { theme } from "../../../theme";
import Typography from "../../atoms/Typography";
import { COMMENTHEADER } from "../../../constants";
import { getUserComments, getUserDetails } from "../../../services";

const UserDetails = () => {
  const [userData, setUserData] = useState<UserBody>();
  const [userComments, setUserComments] = useState([]);
  useEffect(() => { 
       getUserDetails(1)
      .then((res) => (setUserData(res), console.log(res)));
       getUserComments(1)
      .then((res) => (setUserComments(res.data), console.log(res.data)));
  }, []);

  return (
    <Grid
      justifyContent={"center"}
      alignContent={"center"}
      ml={theme.spacing(6)}
    >
      <UserCard name={""} title={userData?.title} body={userData?.body} />
      {userComments &&
        userComments.map((comments: UserComments) => (
          <Grid gap={theme.spacing(2)}>
            <Typography variant={"h1"}  textColor={theme.palette.textColor.highEmp}>{COMMENTHEADER + (comments.id).toString()}</Typography>
            <UserCard
              name={comments.name}
              title={comments.email}
              body={comments.body}
            />
          </Grid>
        ))}
    </Grid>
  );
};
export default UserDetails;
