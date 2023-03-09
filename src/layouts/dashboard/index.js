// @mui material components
import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DashBanner from "assets/images/bannerdash.jpeg";
// Dashboard layout components
import RecentModules from "layouts/dashboard/components/RecentModules";
import Discover from "layouts/dashboard/components/Discover";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { getAuth } from "firebase/auth";


function Dashboard() {
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
              rgba(gradients.info.main, 0.8),
              rgba(gradients.info.state, 0.8)
            )}, url(${DashBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",

        }}
      >
        <SuiBox position="absolute" top={0} left={0} width="100%" height="100%" bgcolor="black" sx={{
          marginTop: "3rem"
        }} >
          <Typography variant="h1" style={{ color: "white", textAlign: "center", paddingTop: "5rem" }}>Welcome to the Dashboard, {name}</Typography>
        </SuiBox>
       

      </SuiBox>
      <SuiBox py={1}>
       
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
      </SuiBox>
    </DashboardLayout>
  );
}

export default Dashboard;
