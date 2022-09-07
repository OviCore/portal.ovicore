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

// Overview page components
import Workers from "layouts/people/components/Workers";

// Data
import profilesListData from "layouts/profile/data/profilesListData";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Header from "layouts/people/components/Header";

function People() {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
        navigate('/people')
    }
    if (!authToken) {
        navigate('/sign-in')
    }}, [])
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Header />
      <SuiBox mt={3} mb={3}>
        <Workers />
      </SuiBox>
      <SuiBox mb={3}>
       
      </SuiBox>

      <Footer />
    </DashboardLayout>
  );
}

export default People;
