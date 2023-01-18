// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import TimelineItem from "examples/Timeline/TimelineItem";
// Images
import ivancik from "assets/images/modules/heart.jpg";
// https://sketchfab.com/models/003ec6e9706548a8a8ed487c46c28bbd/embed?autostart=1&cardboard=1&internal=1&tracking=0&ui_infos=0&ui_snapshots=1&ui_stop=0&ui_watermark=0
function Discover() {
  return (
    <Card sx={{ height: "100%" }}>
      <SuiBox position="relative" height="100%" p={2}>
        <SuiBox
          display="flex"
          flexDirection="column"
          height="100%"
          py={1}
          px={2}
          borderRadius="lg"
          sx={{
            backgroundColor: "white",
            backgroundSize: "cover",
          }}
        >
          <SuiBox mb={1} pt={1}>
            <SuiTypography variant="h4" color="black" fontWeight="bold">
              Discover
            </SuiTypography>
          </SuiBox>

          <div class="sketchfab-embed-wrapper flex-grow-1"> 
          <iframe sandbox="allow-same-origin allow-scripts" title="" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="340" height="135" src="https://sketchfab.com/models/e48637d3399a4e5184bdf169929dc36e/embed"> 
            </iframe> 
            <TimelineItem
                  title="Human Heart"
                  description="The human heart is a muscular organ in most animals, which pumps blood through the blood vessels of the circulatory system. "
                  dateTime="12 March 2023"
            />
          </div>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default Discover;
