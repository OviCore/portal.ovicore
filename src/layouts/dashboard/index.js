// @mui material components
import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Dashboard layout components
import RecentModules from "layouts/dashboard/components/RecentModules";
import Discover from "layouts/dashboard/components/Discover";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function Dashboard() {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
        navigate('/dashboard')
    }
    if (!authToken) {
        navigate('/sign-in')
    }}, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={1}>
        <SuiBox mb={1}>
          <Grid container spacing={2}>
            <Grid item xs>
              <RecentModules />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Discover />
            </Grid>
          </Grid>
        </SuiBox>
        <SuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <SuiBox mb={3} >
                <OrderOverview />
              </SuiBox>
            </Grid>
          </Grid>
        </SuiBox>
    
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
