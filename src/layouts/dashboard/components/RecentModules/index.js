// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import image1 from "assets/images/modules/biology.jpg";
import image2 from "assets/images/modules/calc.jpg";
import image3 from "assets/images/modules/stats.jpg";
import image4 from "assets/images/modules/bio2.jpg";

import SuiButton from "components/SuiButton";
import TimelineItem from "examples/Timeline/TimelineItem";
function RecentModules() {
  const modules = [
   
    {
      name: "Biological Sciences",
      image: image1,
    },
  {
      name: "Calculus III",
      image: image2,
    },
    {
      name: "Statistics",
      image: image3,
    },

  ];
  return (
    <Card sx={{ height: "320px" }}>
      <SuiBox p={2}>
        <Grid container spacing={3}>
          <Grid item  gridAutoColumns>
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiBox pt={1} mb={0.5}>
                <SuiTypography variant="body2" color="text" fontWeight="medium"> May 15, 2020</SuiTypography>
              </SuiBox>
              <SuiTypography variant="h2" fontWeight="text" gutterBottom>
                Welcome Oliver Williams,
              </SuiTypography>
              <SuiTypography variant="h4" color="text" mb={2}> Recent Modules </SuiTypography>
              <SuiBox mb={3} flexDirection="row" display="flex">
               
                 
                 
                  {modules.map((module) => (
                  <><Card mb={1} display="flex" flexDirection="column" style={{
                    backgroundImage: `url(${module.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "150px",
                    width: "200px",
                    borderRadius: "10px",
                    margin: "10px",
              }}> 
              <Card style={
                {
                  marginTop: "50%",
                  backgroundColor: "rgba(0,0,0,0.9)",
                  color: "white",
                }
              }>
             
              </Card> </Card>
              <TimelineItem
                  title={module.name}
                  description="The human heart is a muscular organ in most animals, which pumps blood through the blood vessels of the circulatory system. "
                  dateTime="12 March 2023"
            />          
                </>
                ))}

              </SuiBox>
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </Card>
  );
}

export default RecentModules;
