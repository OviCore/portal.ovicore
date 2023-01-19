import { useEffect, useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import Link from "@mui/material/Link";
import TimelineItem from "examples/Timeline/TimelineItem";
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import { getAuth } from "firebase/auth";
import { collection, getDoc, getFirestore, doc, onSnapshot } from "firebase/firestore"; 
import { getApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import  '../modules/spinner.css';
// @mui material components
import Icon from "@mui/material/Icon";
import axios from "axios";
// Soft UI Dashboard React components
import SuiButton from "components/SuiButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function Module() {
  const [module, setModule] = useState([]);
  const [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token');
    if (authToken) {
        navigate('/modules/module')
    }
    if (!authToken) {
        navigate('/sign-in')
    }}, [])


    useEffect(() => {
      const API_TOKEN = sessionStorage.getItem('SketchFab');
      const modelId = sessionStorage.getItem('ModelId');
      const url = `https://api.sketchfab.com/v3/models/${modelId}`;
      const headers = {
          Authorization: `Token ${API_TOKEN}`,
      };
      async function fetchModel() {
          try {
              const { data } = await axios.get(url, { headers });
              console.log(data);
              setModule(data);
              setLoading(false);
          } catch (error) {
              console.log(`An API error occurred: ${error}`);
          }
      }

      fetchModel();
  }, []);

  const LoadingSpinner = () => {
    return (
      <SuiBox mb={5} mt={5} display="flex" justifyContent="center" alignItems="center">
      <SuiBox className="spinner-container" mb={5} mt={5}>
        <SuiBox className="loading-spinner" mb={5}>
        </SuiBox>
      </SuiBox>
      
      </SuiBox>
    );
  }
   const { innerWidth: width, innerHeight: height } = window;

   return (
    <DashboardLayout>
      <DashboardNavbar />
      {loading ? <LoadingSpinner /> : 
      <SuiBox mb={3}>
        <Card>
          <SuiBox pt={2} px={2}>
            <SuiBox display="flex"  justifyContent="space-between" mt="auto" >
            <SuiButton color="info" variant="outlined" size="small" onClick={() => navigate('/modules')}><ArrowBackIosIcon color="info" variant="outlined" size="small"/>
              Back to Modules</SuiButton>
              <SuiTypography variant="h3" fontWeight="light" pr={5}>
                {module.name} - {module.categories[0].name}
              </SuiTypography>
            </SuiBox>
            <SuiBox mb={1}>
              <SuiTypography variant="button" fontWeight="regular" color="text">
                
              </SuiTypography>
            </SuiBox>
          </SuiBox>
          <SuiBox p={2}>
            <Grid container spacing={3}>
                     <Grid item>
                     <Card className="h-100" style={{ width: innerWidth - 400, height: "525px"  }}>
                      
                       <div class="sketchfab-embed-wrapper"> 
                         <iframe sandbox="allow-same-origin allow-scripts" title="" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="100%" height="525px"  src={module.embedUrl}>
                         </iframe> 
                       </div>
                     </Card>
                   </Grid>
    
              <Grid item xs={12} md={6} xl={3}>
                 <SuiTypography variant="h6" fontWeight="medium">
                  Description: {module.description}
                </SuiTypography>
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                 <SuiTypography variant="h6" fontWeight="medium">
                  Date: {module.createdAt}
                </SuiTypography>
              </Grid>
            
            
            </Grid>
          </SuiBox>
          
        </Card>
        
      </SuiBox> }
      <Footer />
    </DashboardLayout>
  );
}

export default Module;
