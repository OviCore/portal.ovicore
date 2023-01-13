// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";


import Header from "./Header";
import Quarter from "layouts/courses/components/Quarter";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Data from "./data";

function Modules() {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
        navigate('/modules')
    }
    if (!authToken) {
        navigate('/sign-in')
    }}, [])

  return (
    <DashboardLayout>
      <Header />
      <SuiBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={8} md={4} xl={2}>
            <Quarter />
          </Grid>
          <Data/>
         
        </Grid>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Modules;
