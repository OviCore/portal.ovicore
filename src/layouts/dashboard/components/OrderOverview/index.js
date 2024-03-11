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
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
function OrdersOverview() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  const handleNavigateModule = (embedUrl) => {
    const modelId = embedUrl.split('/')[4];
    sessionStorage.setItem('ModelId', modelId);
    navigate('/modules/module')
  }

  useEffect(() => {
    const API_TOKEN = sessionStorage.getItem('SketchFab');
    async function getCollection() {
        const collectionName = 'a06673c9f16c460d87ea064a952227d8';
        const url = `https://api.sketchfab.com/v3/collections/${collectionName}/models`;
        const myCollectionsEndpoint =  url;
        const headers = {
            Authorization: `Token ${API_TOKEN}`,
        };
        try {
            const response = await axios.get(myCollectionsEndpoint, { headers });
            return response.data;
        } catch (error) {
            console.log(`An API error occurred: ${error}`);
            process.exit(1);
        }
    }
    async function main() {
        console.log('Getting models from your profile...');
        const collection = await getCollection();

        if (!collection) {
            console.log("You don't seem to have any collection, let's create one!");
            return;
        } else {
            console.log('Your collections:' + collection.results);
            setModules(collection.results);
            setLoading(false);
        }
    }
    main();
  }, [])

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
          Modules Assigned by Instructor
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
              4 modules
            </SuiTypography>{" "}
            this week
          </SuiTypography>
        </SuiBox>
      </SuiBox>
    
      {loading ? (  <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "20px",
        fontWeight: "bold",
        color: "grey",
      
      }}><CircularProgress color="inherit" /></div> 

      ) : (
      <SuiBox p={2}>
      <Grid container spacing={2}>
      {modules.map((item, index) => (
                  <Grid item key={index} xs={12} sm={6} md={5} lg={4} xl={3}>
                  <Card className="h-100" style={{ width: "100%", height: "19rem"  }}>
                   
                    <div class="sketchfab-embed-wrapper embed-responsive embed-responsive-4by3">
                      
                      <img src={item.thumbnails.images[2].url} title="A 3D model" alt="A 3D model" className="sketchfab-embed-placeholder" style={{ width: "100%", height: "8rem", objectFit: "cover" }}></img>
                      <TimelineItem
                        title={item.name}
                        // only show the first 100 characters of the description
                        description={item.description.substring(0, 50)}
                      />
                    </div>
                    <SuiButton variant="outlined" fontWeight="300" color="info" onClick={() => handleNavigateModule(item.embedUrl)} sx={
                        {
                            width: "96%",
                            fontSize: "12px",
                            textTransform: "none",
                            borderRadius: "10px",
                            position : "absolute",
                            bottom: "2px",
                            left: "5px",
                        }
                        
                    }>View (AR Device Required)</SuiButton>
                  </Card>
                  
                </Grid>
        ))}

        </Grid>
      </SuiBox> )}
    </Card>
  );
}

export default OrdersOverview;
