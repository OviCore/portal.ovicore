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
import { Typography } from "@mui/material";

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
      console.log("user.photoURL", user.photoURL)
      // if user.ptotoURL starts https://example.com then set to default image
      if (!user.photoURL || user.photoURL.startsWith("https://example.com")) {
        setPhoto("https://st3.depositphotos.com/3102403/17634/v/600/depositphotos_176349124-stock-illustration-anonymous-user-circle-icon.jpg")
      } else
       {
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
                <Typography variant="h6" color="text" fontWeight="medium" ml={1}> Most Viewed</Typography>

            
            </SuiBox>
            
          </Grid>
          <Grid container ml={1} mt={0.5} spacing={2}>
            {modules ? modules.map((module, index) => (
              <Grid item key={index} justifyContent="center">
              <Card sx={{ height: "125px", width: "200px"}} onClick={() => handleNavigateModule(module.embedUrl)} >
                <SuiBox >
                    <Grid item  gridAutoColumns>
                      <SuiBox display="flex" flexDirection="column" height="60px">
                          <img src={module.thumbnails.images[0].url} alt="profile-image" variant="rounded" size="xl" shadow="sm" width={"200px"}  />
                      </SuiBox>
                      <SuiTypography variant="caption" color="text" fontWeight="medium" ml={1}> {module.name.substring(0, 25)}...</SuiTypography>
                    </Grid>
                   
                </SuiBox>
              </Card>
              </Grid>
            )) : <div></div>

            
            }
            
          </Grid> 

        </Grid>
      </SuiBox>
    </Card>
  );
}

export default RecentModules;
