import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { Typography } from "@mui/material";
import Feedback from "../Feedback";

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
          <Grid item  gridAutoColumns>
            <SuiBox display="flex" flexDirection="column" height="100%">
                <Typography variant="h2" color="text" fontWeight="medium" ml={1}> Welcome, {name}!</Typography>
                <Typography variant="caption" color="text" fontWeight="medium" ml={1}> {email} </Typography>
            </SuiBox>
            
          </Grid>
         <Feedback />

        </Grid>
      </SuiBox>
    </Card>
  );
}

export default RecentModules;
