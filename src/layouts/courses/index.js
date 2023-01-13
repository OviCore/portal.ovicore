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

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// Overview page components
import Header from "layouts/profile/components/Header";
import Quarter from "layouts/courses/components/Quarter";

// Data
import profilesListData from "layouts/profile/data/profilesListData";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Courses() {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
        navigate('/courses')
    }
    if (!authToken) {
        navigate('/sign-in')
    }}, [])
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mt={5} mb={5} ml={5}>
        <Grid container spacing={3}>
            <SuiTypography variant="h6" fontWeight="medium" textTransform="uppercase" textColor="text">
              There are currently no courses available by your organization.
            </SuiTypography>

          
        </Grid>
      </SuiBox>
 

      <Footer />
    </DashboardLayout>
  );
}

export default Courses;
