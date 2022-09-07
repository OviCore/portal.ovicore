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
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import CreateIcon from '@mui/icons-material/Create';
// Soft UI Dashboard React icons
import Cube from "examples/Icons/Cube";
import Document from "examples/Icons/Document";
import Settings from "examples/Icons/Settings";
import Switch from "@mui/material/Switch";


// Soft UI Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import burceMars from "assets/images/bruce-mars.jpg";
import curved0 from "assets/images/curved-images/curved0.jpg";

function Header() {
  const [autoPayroll, setAutoPayroll] = useState(true);
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(false);

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

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <SuiBox position="relative">
      
      <Card
        sx={{
          backdropFilter: `saturate(200%) blur(30px)`,
          backgroundColor: ({ functions: { rgba }, palette: { white } }) => rgba(white.main, 0.8),
          boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
          position: "relative",
          mt: 0,
          mx: 0,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={5} alignItems="center">
        <Grid item>
            <SuiBox sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "info",
              color: "white",
              border: "2px solid",
              
            }}>

           <CreateIcon  />
           </SuiBox>
        </Grid>
          <Grid item>
            <SuiBox height="100%" mt={0.5} lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                Pay Period 
              </SuiTypography>
              <SuiTypography variant="button" color="text" fontWeight="medium">
                August 1 - August 15, 2021
              </SuiTypography>
            </SuiBox>
          </Grid>
          <Grid item>
          <SuiBox height="100%" mt={0.5} lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                Check Date
              </SuiTypography>
              <SuiTypography variant="button" color="text" fontWeight="medium">
                August 15, 2021
              </SuiTypography>
            </SuiBox>
          </Grid>
          <Grid item>
          <SuiBox height="100%" mt={0.5} lineHeight={1}>
              <SuiTypography variant="h5" fontWeight="medium">
                Payroll Address 
              </SuiTypography>
              <SuiTypography variant="button" color="text" fontWeight="medium">
                1234 Main Street, Anytown, USA 12345
              </SuiTypography>
            </SuiBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs
                value={tabValue}
                onChange={handleSetTabValue}
                orientation={tabsOrientation}
                variant="scrollable"
                scrollButtons="auto"
                textColor="primary"
                indicatorColor="primary"
                >
                <Tab
                  label="Auto Payroll"
                  icon={<MotionPhotosAutoIcon />}
                  sx={{ minWidth: "auto" }}
                  
                >
                    

                </Tab>
                <Switch checked={tabValue} onChange={() => setTabValue(!tabValue)}/>
                </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </SuiBox>
  );
}

export default Header;
