import { useEffect, useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import './module.css'

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
          <SuiBox className="loading-spinner" mb={5}></SuiBox>
      </SuiBox>
      </SuiBox>
    );
  }

  const height = window.innerHeight - 300;

   return (
    <DashboardLayout>
      <DashboardNavbar />
      {loading ? <LoadingSpinner /> : 
      <SuiBox mb={3}>
        <Card>
          <SuiBox pt={2} px={2} sx={{
            zIndex: 999999,
          }}>
            <SuiBox display="flex"  justifyContent="space-between" mt="auto">
            <SuiButton color="info" variant="outlined" size="small" onClick={() => navigate('/modules')}><ArrowBackIosIcon color="info" variant="outlined" size="small"/>
              Back to Modules</SuiButton>
              <SuiButton color="secondary" variant="contained" size="small" onClick={() => navigate('/modules')}>View In AR<SuiBox mr={1}></SuiBox><Icon>3d_rotation</Icon>
             </SuiButton>
              <SuiTypography variant="h3" fontWeight="light" pr={2}>
                {module.name} - {module.categories[0].name}
              </SuiTypography>
            </SuiBox>
            <SuiBox mb={1}>
              <SuiTypography variant="button" fontWeight="regular" color="text">
                
              </SuiTypography>
            </SuiBox>
          </SuiBox>
          <SuiBox p={2}>
            <Grid container>
                     <Grid item xs={12}>
                  
                     <Card className="viewer-container">
                       <SuiBox class="sketchfab-embed-wrapper" style={{ width: "100%", height: height }}> 
                         <iframe src={module.embedUrl + `?autostart=1&camera=0&ui_hint=2`} 
                              sandbox="allow-same-origin allow-scripts" 
                              frameborder="0" allow="autoplay; fullscreen; xr-spatial-tracking" 
                              xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered 
                              ui_hint="2"
                              width="100%" height={height}
                              className="iframe-border"
                              >
                          </iframe> 
                          <div className="control-cover-top"></div>
                          <div className="control-cover-bottom"></div>
                       </SuiBox>
                     </Card>
                   </Grid>
    
              <Grid item xs={12} mt={2} sx={{
            zIndex: 999999,
          }}>
                 <SuiTypography variant="h6" fontWeight="medium">
                  Description: {module.description}
                </SuiTypography>
              </Grid>
              <Grid item xs={12} sx={{
            zIndex: 999999,
          }}>
                 <SuiTypography variant="h6" fontWeight="medium" mt={2}>
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