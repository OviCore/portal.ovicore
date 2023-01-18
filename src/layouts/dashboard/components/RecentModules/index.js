// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";


import SuiButton from "components/SuiButton";
import TimelineItem from "examples/Timeline/TimelineItem";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";


function RecentModules(  ) {
  const [name, setName] = useState("");


   useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      setName(displayName);
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
    } else {
      // User is signed out
      // ...
    }
  }, []);


   
  return (
    <Card sx={{ height: "320px" }}>
      <SuiBox p={2}>
        <Grid container spacing={3}>
          <Grid item  gridAutoColumns>
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiBox pt={1} mb={0.5}>
                <SuiTypography variant="body2" color="text" fontWeight="medium"> May 15, 2020</SuiTypography>
              </SuiBox>
              <SuiTypography variant="h2" fontWeight="text" gutterBottom>
                Welcome {name},
              </SuiTypography>
              
            

            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </Card>
  );
}

export default RecentModules;
