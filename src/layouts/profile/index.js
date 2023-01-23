// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";


function Overview() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
        navigate('/profile')
    }
    if (!authToken) {
        navigate('/sign-in')
    }}, [])

    useEffect(() => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        setName(displayName);
        setEmail(user.email);
        if (!user.photoURL || user.photoURL.startsWith("https://example.com")) {
          setPhotoURL("https://st3.depositphotos.com/3102403/17634/v/600/depositphotos_176349124-stock-illustration-anonymous-user-circle-icon.jpg")
        } else
         {
           setPhotoURL(user.photoURL);
         }
       
        const emailVerified = user.emailVerified;
        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
      } else {
        // User is signed out
        // ...
      }
    }, []);

  return (
    <DashboardLayout>
      <Header name={name} email={email} photo={photoURL}/>
      <SuiBox mt={3} mb={3}>
        
            <PlatformSettings />
            
    
      </SuiBox>
      <SuiBox mb={3}>
       
       
      </SuiBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
