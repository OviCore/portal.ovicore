// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import { useNavigate } from "react-router-dom";
import SuiButton from "components/SuiButton";
import TimelineItem from "examples/Timeline/TimelineItem";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import axios from "axios";

function RecentModules(  ) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [modules, setModules] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      setName(displayName);
      setEmail(user.email);
      if (user.photoURL === null) {
        setPhoto("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
      } else {
        setPhoto(user.photoURL);
      }
      const emailVerified = user.emailVerified;
      const uid = user.uid;
    } else {
      // User is signed out
      // ...
    }
  }, []);

  useEffect(() => {
    const API_TOKEN = sessionStorage.getItem('SketchFab');
    async function getCollection() {
        const collectionName = "f1116b012abc4fc797590515fb7e5c15"
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
            console.log("No Collection, Recent Modules");
            return;
        } else {
            setModules(collection.results)
        }
    }
    main();
  }, [])

  const handleNavigateModule = (embedUrl) => {
    const modelId = embedUrl.split('/')[4];
    sessionStorage.setItem('ModelId', modelId);
    navigate('/modules/module')
}


   
  return (
    <Card sx={{ height: "345px" }}>
      <SuiBox p={2}>
        <Grid container spacing={3}>
          <Grid item  gridAutoColumns>
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiBox display="flex"  justifyContent="space-between" mt="auto">
                <SuiAvatar src={photo} alt="profile-image" variant="rounded" size="xl" shadow="sm"/>  
                <Grid item  gridAutoColumns mt={1} ml={2}>
                  <SuiTypography variant="body2" color="text" fontWeight="medium"> {email}</SuiTypography>
                  <SuiTypography variant="h2" fontWeight="text" gutterBottom> Welcome {name},</SuiTypography>
                </Grid>
            </SuiBox>
            
             
              <SuiBox display="flex"  justifyContent="space-between" mt="auto">
                  <SuiButton variant="outlined" color="info" size="small"  fullWidth onClick={() => navigate("/profile")}>View Profile</SuiButton>
                  <SuiBox mr={0.7} />
                 <SuiButton variant="outlined" color="info" size="small" fullWidth onClick={() => navigate("/organization")}>Organization</SuiButton>
              </SuiBox>
            </SuiBox>
            <SuiBox display="flex" alignItems="center" justifyContent="space-between" mt="auto">
                <SuiTypography variant="button" fontWeight="regular" textColor="text">
                  <Icon className="fas fa-circle text-success" fontSize="small" /> Top Viewed
                </SuiTypography>
            </SuiBox>
          </Grid>
          <Grid container ml={1} mt={2} spacing={2}>
            {modules ? modules.map((module, index) => (
              <Grid item key={index} justifyContent="center">
              <Card sx={{ height: "150px", width: "175px"}} onClick={() => handleNavigateModule(module.embedUrl)} >
                <SuiBox >
                    <Grid item  gridAutoColumns>
                      <SuiBox display="flex" flexDirection="column" height="95px">
                          <img src={module.thumbnails.images[0].url} alt="profile-image" variant="rounded" size="xl" shadow="sm" width={"175px"}/>
                      </SuiBox>
                      <SuiTypography variant="caption" color="text" fontWeight="medium" ml={1}> {module.name.substring(0, 20)}...</SuiTypography>
                    </Grid>

                   
                </SuiBox>
              </Card>
              </Grid>
            )) : <div></div>

            
            }
                                    <SuiButton variant="text" color="info" size="small" buttonIcon="fas fa-arrow-right" pb={1} onClick={() => navigate("/courses")}>View All</SuiButton>

          </Grid> 

        </Grid>
      </SuiBox>
    </Card>
  );
}

export default RecentModules;
