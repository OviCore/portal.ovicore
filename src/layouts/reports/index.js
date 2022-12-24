import Grid from "@mui/material/Grid";
import SuiTypography from "components/SuiTypography";
import SuiBox from "components/SuiBox";

import MixedChart from "examples/Charts/MixedChart";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import PieChart from "examples/Charts/PieChart";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import History from "layouts/reports/components/History";
import BillingInformation from "layouts/reports/components/BillingInformation";
import typography from "assets/theme/base/typography";
import Icon from "@mui/material/Icon";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Reports() {

  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
        navigate('/reports')
    }
    if (!authToken) {
        navigate('/sign-in')
    }}, [])


  const { size } = typography;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mt={4}>
        <SuiBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                <VerticalBarChart
                    title="Hours Per Week"
                    chart={{
                      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                      datasets: [{
                        label: "Work Hours",
                        color: "dark",
                        data: [15, 40, 32, 60, 25, 15, 10],
                      }],
                    }}
                    height={'560px'}
                   
                  />
                </Grid>
                
                <Grid item xs={12} md={6} xl={3} >
                  <DefaultInfoCard
                    icon="attach_money"
                    title="Total Clocked Hours"
                    description="Billable Hours & Non-Billable Hours"
                    value="124.21 hours"
                  />
                  <SuiBox mt={4}/>
                  <DefaultInfoCard
                    icon="attach_money"
                    title="Total Gross Income"
                    description="Income from Clocked Hours"
                    value="$124.21"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3} >
                  <DefaultInfoCard
                    icon="attach_money"
                    title="Hourly Rate"
                    description="Billable Hours & Non-Billable Rate"
                    value="$16.75/hour"
    
                  />
                  <SuiBox mt={4}/>
                  <DefaultInfoCard
                    icon="attach_money"
                    title="Taxes and Deductions"
                    description="Tax withholding & other deductions"
                    value="-$14.21"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <History />
            </Grid>
          </Grid>
        </SuiBox>
        <SuiBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
            <PieChart
              title="Year to Date"
              chart={{
                labels: ["Net Pay", "Tax Withheld", "Deductions", "Other"],
                datasets: {
                  label: "Projects",
                  backgroundColors: ["info", "primary", "dark", "secondary", "primary"],
                  data: [15, 20, 12, 60],
                },
              }}
            />
            </Grid>
          </Grid>
        </SuiBox>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Reports;
