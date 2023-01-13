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

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiButton from "components/SuiButton";

function Module() {
  const [moduleNumber, setModuleNumber] = useState();

  useEffect(() => {
    setModuleNumber(sessionStorage.getItem('Module Number'))
  }, [])

  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
        navigate('/modules/module')
    }
    if (!authToken) {
        navigate('/sign-in')
    }}, [])


    /*useEffect(() => {
       const auth = getAuth();
       const app = getApp();
       const db = getFirestore(app);
       // users - documents - properties 
       const propertiesRef = collection(db, "users");
       const userRef = doc(propertiesRef, auth.currentUser.uid);
       const propRef = collection(userRef, "properties");
       const propSnapshot = onSnapshot(propRef, (snapshot) => {
        const properties = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            }
            );
            setProperties(properties);
            console.log(properties);
        }
        );
    }, []); */



    
  


   return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mb={3}>
        <Card>
          <SuiBox pt={2} px={2}>
            <SuiBox mb={0.5}>
              <SuiTypography variant="h3" fontWeight="medium">
                Human Lungs
              </SuiTypography>
            </SuiBox>
            <SuiBox mb={1}>
              <SuiTypography variant="button" fontWeight="regular" color="text">
                Here you can manage your properties.
              </SuiTypography>
            </SuiBox>
          </SuiBox>
          <SuiBox p={2}>
            <Grid container spacing={3}>
                
                     <Grid item>
                     <Card className="h-100" style={{ width: "550px", height: "425px"  }}>
                      
                       <div class="sketchfab-embed-wrapper"> 
                         <iframe sandbox="allow-same-origin allow-scripts" title="" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="550" height="350"  src="https://sketchfab.com/models/ce09f4099a68467880f46e61eb9a3531/embed">
                         </iframe> 
                         <TimelineItem
                           title="Human Anatomy"
                           description="This is a 3D model of the human anatomy."
                           dateTime="2021-05-24"
                         />
                       </div>
                       
                     </Card>
                     
                   </Grid>
      


              <Grid item xs={12} md={6} xl={3}>
              
              </Grid>
            
            </Grid>
          </SuiBox>
          
        </Card>
        
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Module;
