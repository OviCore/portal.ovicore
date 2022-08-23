// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/rocket.png";
import SuiButton from "components/SuiButton";
import Clock from 'react-live-clock';

function BuildByDevelopers() {
  return (
    <Card>
      <SuiBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiBox pt={1} mb={0.5}>
                <SuiTypography variant="body2" color="text" fontWeight="medium">
                  Clocked Out   12h : 30m 
                </SuiTypography>
              </SuiBox>
              <SuiTypography variant="h5" fontWeight="bold" gutterBottom>
                Punch
              </SuiTypography>
              <SuiBox mb={3}>
                <SuiTypography variant="body2" color="text">
                  <strong>Last Punch:</strong> Clocked Out at 12:42 PM on May 15, 2020 <br />
                  <strong>Cost Center:</strong> Cost Center 1
                </SuiTypography>
              </SuiBox>
              <SuiBox mb={6}>
                <SuiTypography variant="h2" color="text" mb={2}>
                <Clock
                  ticking={true}
                  date={'1997-12-31T14:15:23+01:00'}
                  format={'dddd Mo, h:mm:ss A'}
                  timezone={'US/Pacific'} />
                </SuiTypography>
                <SuiButton variant="contained" color="info" fullWidth>
                  Clock In <SuiBox mr={2}/> <Icon ml={2}>play_circle_outline</Icon>
                </SuiButton>
                <SuiBox mt={2}/>
                <SuiButton component="a" variant="outlined" color="secondary" fullWidth>
                <Icon ml={2}>sell</Icon><SuiBox mr={2}/> No Tag Selected
                </SuiButton>
              </SuiBox>
            </SuiBox>
          </Grid>
          <Grid item xs={12} lg={5} sx={{ position: "relative", ml: "auto" }}>
            <SuiBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              bgColor="info"
              borderRadius="lg"
              variant="gradient"
            >
              <SuiBox
                component="img"
                src={wavesWhite}
                alt="waves"
                display="block"
                position="absolute"
                left={0}
                width="100%"
                height="100%"

              />
              <SuiBox 
              display="grid"
              justifyContent="center"
              alignItems="center"
              padding={2}
              >
                <SuiTypography variant="h5" color="white" fontWeight="bold">
                  Your Latest Paycheck 
                </SuiTypography>
                <SuiBox mt={2}>
                <SuiButton variant="outlined" color="white" mt={5}>
                  Net Pay: $1,000.00
                </SuiButton>
                &nbsp;
                <SuiButton variant="outlined"  color="white" mt={1}>
                  Hours Worked: 75.42
                </SuiButton>
                </SuiBox>
                <SuiTypography variant="body2" color="white" mt={1}>
                Paid on Aug 22, 2022
                </SuiTypography>
                <SuiTypography variant="body2" color="white" mt={0}>
                Pay Period Aug 01 - Aug 15, 2022
                </SuiTypography>
                <SuiBox mt={2}>
                  <SuiButton variant="contained" color="info" fullWidth>
                    View Details <SuiBox mr={2}/> <Icon ml={2}>rocket</Icon>
                  </SuiButton>
                 </SuiBox>
              </SuiBox>
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </Card>
  );
}

export default BuildByDevelopers;
