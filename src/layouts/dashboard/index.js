// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import SuiAvatar from "components/SuiAvatar";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import RecentModules from "layouts/dashboard/components/RecentModules";
import Discover from "layouts/dashboard/components/Discover";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import holones from "assets/images/illustrations/holobes2.jpg";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import DayCalendar from "./components/DayCalendar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={1}>
        <SuiBox mb={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
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
