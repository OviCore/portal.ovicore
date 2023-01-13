import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";

// Soft UI Dashboard React examples
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Soft UI Dashboard React icons
import Cube from "examples/Icons/Cube";
import Document from "examples/Icons/Document";
import Settings from "examples/Icons/Settings";

// Soft UI Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import burceMars from "assets/images/bruce-mars.jpg";
import curved0 from "assets/images/curved-images/curved0.jpg";
import SuiButton from "components/SuiButton";
import SuiInput from "components/SuiInput";

import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";


function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [showInput, setShowInput] = useState(false);
  const [newOrgName, setNewOrgName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [type , setType] = useState("");
  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);
   
  useEffect(async () => {
    const auth = sessionStorage.getItem("Auth Token");
    const db = getFirestore();
    const docRef = doc(db, "users", auth);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setOrgName(docSnap.data().organization);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

  }, []);

  const handleTabsChange = () => {
    // show the suiinput to edit the name
    setShowInput(!showInput);

  };

  return (
    <SuiBox position="relative">
      <DashboardNavbar absolute light />
      <SuiBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.0),
              rgba(gradients.info.state, 0.0)
            )}, url(https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          backdropFilter: `saturate(200%) blur(30px)`,
          backgroundColor: ({ functions: { rgba }, palette: { white } }) => rgba(white.main, 0.8),
          boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <SuiAvatar
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKBqz362k3ms8Gmcv___TLR_4q-njTXqt5oA&usqp=CAU"}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <SuiBox height="100%" mt={0.5} lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                {orgName ? orgName : "Organization Name"}
              </SuiTypography>
              <SuiTypography variant="button" color="text" fontWeight="medium">
                {type ? type : "Your Role"}
                
              </SuiTypography>
            </SuiBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              {showInput ? (
                <Grid container spacing={1} alignItems="center">
                 <Grid item>
                <SuiInput
                  placeholder="New Organization Name"
                  inputProps={{
                    "aria-label": "search",
                  }}
                  value={newOrgName}
                  onChange={(e) => setNewOrgName(e.target.value)}
          
                />
                </Grid>
                <Grid item>
                <SuiButton variant="contained" color="warning" onClick={handleTabsChange}>
                 Cancel
                </SuiButton>
                </Grid>
                <Grid item>
                <SuiButton variant="outlined" color="info" onClick={handleTabsChange}>
                 Save
                </SuiButton>
                </Grid>
                
                </Grid>
              ) : (
                <SuiButton variant="contained" color="warning" onClick={handleTabsChange}>
                Change Organization
              </SuiButton>
              )
              }
              
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </SuiBox>
  );
}

export default Header;
