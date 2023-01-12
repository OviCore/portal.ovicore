// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";


import Header from "layouts/profile/components/Header";
import Quarter from "layouts/taxes/components/Quarter";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TimelineItem from "examples/Timeline/TimelineItem";


function Data() {
    const data = [
        {
            name: "Human Heart",
            date: "2021-01-01",
            describe: "This is a description of the human heart",
            link: "https://sketchfab.com/models/ce09f4099a68467880f46e61eb9a3531/embed",
            category: "Health"
        },
        {
            name: "Human Heart",
            date: "2021-01-01",
            describe: "This is a description of the human heart",
            link: "https://sketchfab.com/models/ce09f4099a68467880f46e61eb9a3531/embed",
            category: "Health"
        },
    ]

    return(
        <SuiBox mb={3} ml={2}>
           <SuiBox p={2}>
        <Grid container spacing={0.5}>
          <Grid item>
          <SuiButton variant="contained" fontWeight="300" color="info">All</SuiButton>
          </Grid>
          <Grid item>
          <SuiButton variant="outlined" fontWeight="300" color="info">Math</SuiButton>
          </Grid>
          <Grid item>
            <SuiButton variant="outlined" fontWeight="300" color="info">Health</SuiButton>
          </Grid>
          <Grid item>
            <SuiButton variant="outlined" fontWeight="300" color="info">Astronomy</SuiButton>
          </Grid>
          <Grid item>
            <SuiButton variant="outlined" fontWeight="300" color="info">Statistics</SuiButton>
          </Grid>
          <Grid item>
            <SuiButton variant="outlined" fontWeight="300" color="info">Environment</SuiButton>
          </Grid>
          <Grid item>
            <SuiButton variant="outlined" fontWeight="300" color="info">Engineering</SuiButton>
          </Grid>
          <Grid item>
            <SuiButton variant="outlined" fontWeight="300" color="info">Chemistry</SuiButton>
          </Grid>
          <Grid item>
            <SuiButton variant="outlined" fontWeight="300" color="info">New</SuiButton>
          </Grid>
          <Grid item>
            <SuiButton variant="outlined" fontWeight="300" color="info">Other</SuiButton>
          </Grid>
        </Grid>
      </SuiBox>
      <Grid container spacing={3}>
        {data.map((item, index) => (
                  <Grid item>
                  <Card className="h-100" style={{ width: "300px", height: "280px"  }}>
                    <div class="sketchfab-embed-wrapper"> 
                      <iframe sandbox="allow-same-origin allow-scripts" title="" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src={item.link}>
                      </iframe> 
                      <TimelineItem
                        title={item.name}
                        description={item.describe}
                        dateTime={item.date}
                      />
                    </div>
                  </Card>
                </Grid>
        ))}
        </Grid>
        </SuiBox>
    );
}

export default Data;