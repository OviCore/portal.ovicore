// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import PayrollList from "./components/PayrollList";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";

// Overview page components
import Header from "layouts/payroll/components/Header";
import Pay from "layouts/payroll/components/Pay";

// Data
import profilesListData from "layouts/profile/data/profilesListData";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SuiButton from "components/SuiButton";

function Payroll() {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
        navigate('/payroll')
    }
    if (!authToken) {
        navigate('/sign-in')
    }}, [])
  return (
    <DashboardLayout>
       <DashboardNavbar />
      <Header />
      <SuiBox mt={2} mb={2}>
        <Pay />
      </SuiBox>
      <SuiBox mb={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <Card>
              <SuiBox pt={2} px={2} sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

              }}>
                <SuiTypography variant="text" fontWeight="medium" textTransform="capitalize">
                  Regular
                </SuiTypography>
                <SuiBox ml={0}>
                    <SuiButton variant="outlined" color="warning" size="small" >
                      Pending
                    </SuiButton>
                  </SuiBox>
              </SuiBox>
              <SuiBox pt={0.5} pb={2} px={2} lineHeight={1.25}>
                <SuiTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                  Bi-weekly #1
                </SuiTypography>

                <SuiBox sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                  <SuiTypography variant="h6" fontWeight="regular" color="text" textTransform="capitalize">
                    1/1/2021 - 1/15/2021
                  </SuiTypography>
                  <SuiTypography variant="h6" fontWeight="regular" color="text" textTransform="capitalize">
                  Total Gross Pay: $1,000.00
                  </SuiTypography>
                  <SuiTypography variant="h6" fontWeight="regular" color="text" textTransform="capitalize">
                  Total Hours: 423.00
                  </SuiTypography>
                  <SuiTypography variant="h6" fontWeight="regular" color="text" textTransform="capitalize">
                    
                    People: 10
                  </SuiTypography>
                  <SuiBox sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "1rem",
                  }}>
                  <SuiButton variant="contained" color="info" size="small">
                    View Report
                  </SuiButton>
                  <SuiBox ml={1}/>
                  <SuiButton variant="outlined" color="info" size="small">
                    Quick Details
                  </SuiButton>
                  
                  </SuiBox>

                </SuiBox>
              
              </SuiBox>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
          <Card>
              <SuiBox pt={2} px={2} sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

              }}>
                <SuiTypography variant="text" fontWeight="medium" textTransform="capitalize">
                  Regular
                </SuiTypography>
                <SuiBox ml={0}>
                    <SuiButton variant="outlined" color="success" size="small" >
                      Completed
                    </SuiButton>
                  </SuiBox>
              </SuiBox>
              <SuiBox pt={0.5} pb={2} px={2} lineHeight={1.25}>
                <SuiTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                  Bi-weekly #1
                </SuiTypography>

                <SuiBox sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                  <SuiTypography variant="h6" fontWeight="regular" color="text" textTransform="capitalize">
                    1/1/2021 - 1/15/2021
                  </SuiTypography>
                  <SuiTypography variant="h6" fontWeight="regular" color="text" textTransform="capitalize">
                  Total Gross Pay: $1,000.00
                  </SuiTypography>
                  <SuiTypography variant="h6" fontWeight="regular" color="text" textTransform="capitalize">
                  Total Hours: 423.00
                  </SuiTypography>
                  <SuiTypography variant="h6" fontWeight="regular" color="text" textTransform="capitalize">
                    
                    People: 10
                  </SuiTypography>
                  <SuiBox sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "1rem",
                  }}>
                  <SuiButton variant="contained" color="info" size="small">
                    View Report
                  </SuiButton>
                  <SuiBox ml={1}/>
                  <SuiButton variant="outlined" color="info" size="small">
                    Quick Details
                  </SuiButton>
                  
                  </SuiBox>

                </SuiBox>
              
              </SuiBox>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
          <Card>
              <SuiBox pt={2} px={2} sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

              }}>
                <SuiTypography variant="text" fontWeight="medium" textTransform="capitalize">
                  Regular
                </SuiTypography>
                <SuiBox ml={0}>
                    <SuiButton variant="outlined" color="success" size="small" >
                      Completed
                    </SuiButton>
                  </SuiBox>
              </SuiBox>
              <SuiBox pt={0.5} pb={2} px={2} lineHeight={1.25}>
                <SuiTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
                  Bi-weekly #1
                </SuiTypography>

                <SuiBox sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                  <SuiTypography variant="h6" fontWeight="regular" color="text" textTransform="capitalize">
                    1/1/2021 - 1/15/2021
                  </SuiTypography>
                  <SuiTypography variant="h6" fontWeight="regular" color="text" textTransform="capitalize">
                  Total Gross Pay: $1,000.00
                  </SuiTypography>
                  <SuiTypography variant="h6" fontWeight="regular" color="text" textTransform="capitalize">
                  Total Hours: 423.00
                  </SuiTypography>
                  <SuiTypography variant="h6" fontWeight="regular" color="text" textTransform="capitalize">
                    
                    People: 10
                  </SuiTypography>
                  <SuiBox sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: "1rem",
                  }}>
                  <SuiButton variant="contained" color="info" size="small">
                    View Report
                  </SuiButton>
                  <SuiBox ml={1}/>
                  <SuiButton variant="outlined" color="info" size="small">
                    Quick Details
                  </SuiButton>
                  
                  </SuiBox>

                </SuiBox>
              
              </SuiBox>
            </Card>
          </Grid>
      </Grid>
      </SuiBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Payroll;
