// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import { useNavigate } from "react-router-dom";
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import TimelineItem from "examples/Timeline/TimelineItem";
// https://sketchfab.com/models/003ec6e9706548a8a8ed487c46c28bbd/embed?autostart=1&cardboard=1&internal=1&tracking=0&ui_infos=0&ui_snapshots=1&ui_stop=0&ui_watermark=0


function Discover() {
  let navigate = useNavigate();

    const handleNavigateModule = (embedUrl) => {
        const modelId = embedUrl.split('/')[4];
        sessionStorage.setItem('ModelId', modelId);
        navigate('/modules/module')
    }

 
  return (
    <Card sx={{ height: "100%" }}>
      <SuiBox position="relative" height="100%" p={2}>
        <SuiBox
          display="flex"
          flexDirection="column"
          height="290px"
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
              Discover New Models
            </SuiTypography>
          </SuiBox>

               <Card className="h-100" style={{ width: "360px", height: "250px"}} >
                      <img src={"https://media.sketchfab.com/models/e48637d3399a4e5184bdf169929dc36e/thumbnails/3f47f989397747f6bbe422427c971aec/d1d1f89f7d294447b1cb6b6986494ca5.jpeg"} title="A 3D model" alt="A 3D model" className="sketchfab-embed-placeholder" style={{ width: "360px", height: "220px" }}></img>
                  </Card>
                  <SuiTypography variant="h6" fontWeight="bold" color="black" mb={1}>
                    Human Heart - Anatomy
                  </SuiTypography>
                    
                    <SuiButton variant="outlined" fontWeight="300" color="info" onClick={() => handleNavigateModule("https://sketchfab.com/models/e48637d3399a4e5184bdf169929dc36e/embed")} 
                   >View</SuiButton>

         
        </SuiBox>
      </SuiBox>
    </Card>
  );
}

export default Discover;
