import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { Typography } from "@mui/material";
import Feedback from "../Feedback";
import DashBanner from "assets/images/bannerdash.jpeg";

function RecentModules(  ) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

   useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      const displayName = user.displayName;
      setName(displayName);
      setEmail(user.email);     
    } 

  }, []);

  return (
    <Card sx={{ height: "345px" }}>
      <SuiBox p={3}>
        <Grid container spacing={3}>
        <SuiBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.8),
              rgba(gradients.info.state, 0.8)
            )}, url(${DashBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",

        }}
      >
        <SuiBox position="absolute" top={0} left={0} width="100%" height="100%" bgcolor="black"  >
          <Typography variant="h1" style={{ color: "white", textAlign: "center", paddingTop: "5rem" }}>Welcome to the Dashboard</Typography>

        </SuiBox>


      </SuiBox>
         <Feedback />

        </Grid>
      </SuiBox>
    </Card>
  );
}

export default RecentModules;
