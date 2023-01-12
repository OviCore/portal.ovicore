import { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';

// react-router-dom components
import { Link, useNavigate} from "react-router-dom";
import FormControl from '@mui/material/FormControl';

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";
import Grid from '@mui/material/Grid';
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";
import banner from "assets/images/illustrations/banner.jpg";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignUp() {
  const [agreement, setAgremment] = useState(true);
  const handleSetAgremment = () => setAgremment(!agreement);
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [organization, setOrganization] = useState('None'); 
  const [activeButton, setActiveButton] = useState("student");

  
  const authentication = getAuth();

  const updateOrganization =  ()  => {
    const parts = email.split("@");
    const organization = parts[parts.length - 1];
    console.log(organization); // Output: "gmail.com"
    // get rid of .
    const organizationParts = organization.split(".");
    const organizationName = organizationParts[0];
    if (organizationName === "gmail") {
      setOrganization("None");
    }
    else {
      setOrganization(organizationName);
    }
  }

  const handleNewUser = async () => {
    const uid = sessionStorage.getItem('Auth Token');
    const db = getFirestore();
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      organization: organization,
      role: activeButton,
    };
    await setDoc(doc(db, "users", uid), data).then(() => {
      console.log("Document written with ID: ", uid);
    })
    .catch(error => {
      console.error("Error writing document: ", error);
      toast.error("Error creating account: ", error);
    });
  }


  let navigate = useNavigate();
  const handleSignUpAction = (id) => {
    if (!email || !password || !firstName || !lastName) {
      toast.error('All fields are required');
      return;
    } 
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
      createUserWithEmailAndPassword(authentication, email, password)
        .then( (response) => {
          console.log(response.user.uid);
          sessionStorage.setItem('Auth Token', response.user.uid)
          handleDocRef();
          handleNewUser();
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
          } 
          if (error.code === 'auth/invalid-email') {
            toast.error('Invalid Email');
          }
          if (error.code === 'auth/weak-password') {
            toast.error('Weak Password');
          }
          console.log(error);

        })
  }
  const handleDocRef = () => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: firstName + " " + lastName,
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      console.log('Profile Updated');
      updateOrganization();
      navigate('/dashboard');
    }).catch((error) => {
       console.log(error);
    });
  }

  return (
    <BasicLayout
      title="Welcome!"
      description="Please sign up to continue."
      image={banner}
    >
      <ToastContainer />
      <Card>
        <SuiBox p={3} mb={0.5} textAlign="center">
        <SuiTypography variant="h2" fontWeight="medium" mb={2}>
            Ovicore Technologies
          </SuiTypography>
          <SuiTypography variant="h5" fontWeight="medium">
            Register with
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={1}>
          <Socials />
        </SuiBox>
        <Separator />
        <SuiBox pt={1} pb={3} px={3}>
          <SuiBox ml={2}>
          </SuiBox>
          <SuiBox component="form" role="form" mt={1}>
          <Grid container spacing={1} mb={1}>
      <Grid item xs={12} sm={6}>
        <SuiButton variant={activeButton === "student" ? "contained" : "outlined"} color="info" fullWidth onClick={() => setActiveButton('student')}>Student</SuiButton>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SuiButton variant={activeButton === "educator" ? "contained" : "outlined"} color="info" fullWidth onClick={() => setActiveButton('educator')}>Educator</SuiButton>
      </Grid>
    </Grid>
            <Grid container spacing={1} mb={1}>
              <Grid item xs={12} sm={6}>
                <SuiInput placeholder="First Name"  value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SuiInput placeholder="Last Name"  value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              </Grid>
            </Grid>
            <SuiBox mb={1}>
              <SuiInput type="email" placeholder="Organization Email" 
              value={email} onChange={(e) => setEmail(e.target.value)}/>
            </SuiBox>
             
            <SuiBox mb={1}>
              <SuiInput type="password" placeholder="Password" 
              value={password} onChange={(e) => setPassword(e.target.value)}/>
            </SuiBox>
            <SuiBox mb={1}>
              <SuiInput type="password" placeholder="Confirm Password" 
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </SuiBox>
            <SuiBox display="flex" alignItems="center">
              <Checkbox checked={agreement} onChange={handleSetAgremment} />
              <SuiTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetAgremment}
                sx={{ cursor: "poiner", userSelect: "none" }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </SuiTypography>
              <SuiTypography component="a" href="#" variant="button" fontWeight="bold" textGradient>
                Terms and Conditions
              </SuiTypography>
            </SuiBox>
            <SuiBox mt={4} mb={1}>
              <SuiButton variant="gradient" color="dark" fullWidth
              onClick={handleSignUpAction}
              >
                sign up
              </SuiButton>
             
            </SuiBox>
            <SuiBox mt={3} textAlign="center">
              <SuiTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SuiTypography
                  component={Link}
                  to="/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SuiTypography>
              </SuiTypography>
            </SuiBox>
          </SuiBox>
        </SuiBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
