// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Images
import ivancik from "assets/images/ivancik.jpg";

function WorkWithTheRockets() {
  return (
    <Card sx={{ height: "100%" }}>
      <SuiBox position="relative" height="100%" p={2}>
        <SuiBox
          display="flex"
          flexDirection="column"
          height="100%"
          py={2}
          px={2}
          borderRadius="lg"
          sx={{
            backgroundColor: "white",
            backgroundSize: "cover",
          }}
        >
          <SuiBox mb={3} pt={1}>
            <SuiTypography variant="h5" color="black" fontWeight="bold">
              Sick Leave
            </SuiTypography>
          </SuiBox>
          <SuiBox mb={2}>
            <SuiTypography variant="body2" color="black">
              Hours remaining: <strong>8</strong><br />
              Hours used this year: <strong>0</strong><br />
              Hours pending: <strong>0</strong>
            </SuiTypography>
            
          </SuiBox>
          <SuiTypography
            component="a"
            href="#/timesheet"
            variant="button"
            color="black"
            fontWeight="medium"
            sx={{
              mt: "auto",
              mr: "auto",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translate(2px, -0.5px)`,
                transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
              },

              "&:hover .material-icons-round, &:focus  .material-icons-round": {
                transform: `translate(6px, -0.5px)`,
              },
            }}
          >
            Read More
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </SuiTypography>
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default WorkWithTheRockets;
