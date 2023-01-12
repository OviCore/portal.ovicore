import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
// Soft UI Dashboard React examples
import TimelineItem from "examples/Timeline/TimelineItem";
import { height } from "@mui/system";

function OrdersOverview() {
  return (
    <Card className="h-100" sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      justifyContent: "left",
      minHeight: "100%",

    }}>
      <SuiBox pt={3} px={3}>
        <SuiTypography variant="h6" fontWeight="medium">
          Recommended Modules
        </SuiTypography>
        <SuiBox mt={0} mb={0}>
          <SuiTypography variant="button" color="text" fontWeight="regular">
            <SuiTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ fontWeight: "bold", color: ({ palette: { success } }) => success.main }}>
                arrow_upward
              </Icon>
            </SuiTypography>
            &nbsp;
            <SuiTypography variant="button" color="text" fontWeight="medium">
              3 modules
            </SuiTypography>{" "}
            this month
          </SuiTypography>
        </SuiBox>
      </SuiBox>
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
      <SuiBox p={2}>
      <Grid container spacing={1}>
          <Grid item>
            <Card className="h-100" style={{ width: "300px", height: "280px"  }}>
              <div class="sketchfab-embed-wrapper"> 
                <iframe sandbox="allow-same-origin allow-scripts" title="" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/2db0c6813c9b471e9e9eb2b4d8a01d08/embed"> 
                </iframe> 
                <TimelineItem
                  title="Wolf"
                  description="The wolf is a canine native to the wilderness and remote areas of Eurasia and North America."
                  dateTime="12 March 2023"
                />
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card className="h-100" style={{ width: "300px", height: "280px" }}>
              <div class="sketchfab-embed-wrapper"> 
                <iframe sandbox="allow-same-origin allow-scripts" title="" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/e402d3d541eb4b199c57d5410f5d3c57/embed"> 
                </iframe> 
                <TimelineItem
                  title="Human Muscle Group"
                  description="The human body is composed of many types of muscle tissue."
                  dateTime="12 March 2023"
                />
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card className="h-100" style={{ width: "300px", height: "280px"  }}>
              <div class="sketchfab-embed-wrapper"> 
                <iframe sandbox="allow-same-origin allow-scripts" title="" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/ce09f4099a68467880f46e61eb9a3531/embed"> 
                </iframe> 
                <TimelineItem
                  title="Human Lungs"
                  description="The human lungs are a pair of spongy organs in the chest of humans and some other animals."
                  dateTime="12 March 2023"
                />
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card className="h-100" style={{ width: "300px", height: "280px"  }}>
              <div class="sketchfab-embed-wrapper"> 
                <iframe sandbox="allow-same-origin allow-scripts" title="" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/b3328386cff14905a60ea1a44db17d65/embed"> 
                </iframe> 
                <TimelineItem
                  title="Flavin Adenine Dinucleotide"
                  description="FAD is a coenzyme composed of an adenosine monophosphate and a flavin mononucleotide bound by a pyrophosphate bond."
                  dateTime="12 March 2023"
                />
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card className="h-100" style={{ width: "300px", height: "280px"  }}>
              <div class="sketchfab-embed-wrapper"> 
                <iframe sandbox="allow-same-origin allow-scripts" title="" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="false" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6991ad7fb51341618f5c257b5ce9b204/embed"> 
                </iframe> 
                <TimelineItem
                  title="Human Brain"
                  description="The human brain is the central organ of the human nervous system, and with the spinal cord makes up the central nervous system."
                  dateTime="12 March 2023"
                />
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card className="h-100" style={{ width: "300px", height: "280px"  }}>
              <div class="sketchfab-embed-wrapper"> 
                <iframe sandbox="allow-same-origin allow-scripts" title="" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="false" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/c6dd9c3ef4a04a698fd5bdd4a47113aa/embed"> 
                </iframe> 
                <TimelineItem
                  title="Surface Scanned Wax Head"
                  description="Surface scan of wax ecorche sculpture revealing the physical complications of severe and enduring eating disorders."
                  dateTime="12 March 2023"
                />
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card className="h-100" style={{ width: "300px", height: "280px"  }}>
              <div class="sketchfab-embed-wrapper"> 
                <iframe sandbox="allow-same-origin allow-scripts" title="" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="false" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/26f31197479e4d76aa7e5302f386e16f/embed"> 
                </iframe> 
                <TimelineItem
                  title="Ubiquinone Oxidoreductase"
                  description="Ubiquinone oxidoreductase is an enzyme that catalyzes the chemical reactions of the electron transport chain."
                  dateTime="12 March 2023"
                />
              </div>
            </Card>
          </Grid>

        </Grid>
      </SuiBox>
    </Card>
  );
}

export default OrdersOverview;
