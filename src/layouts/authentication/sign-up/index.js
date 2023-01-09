import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
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

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";
import banner from "assets/images/illustrations/banner.jpg";
import Logo from "assets/images/logos/logo-name.png";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [agreement, setAgremment] = useState(true);
  const handleSetAgremment = () => setAgremment(!agreement);
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();
  const handleSignUpAction = (id) => {
    const authentication = getAuth();
    
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/dashboard');
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
          }
        })
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
            Ovicore Labs.
          </SuiTypography>
          <SuiTypography variant="h5" fontWeight="medium">
            Register with
          </SuiTypography>
        </SuiBox>
        <SuiBox mb={2}>
          <Socials />
        </SuiBox>
        <Separator />
        <SuiBox pt={2} pb={3} px={3}>
          <SuiBox ml={2}>
          </SuiBox>
          <SuiBox component="form" role="form" mt={2}>

            <SuiBox mb={2}>
              <SuiInput placeholder="Name" />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput type="email" placeholder="Email" 
              value={email} onChange={(e) => setEmail(e.target.value)}
              />
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput type="password" placeholder="Password" 
              value={password} onChange={(e) => setPassword(e.target.value)}
              />
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
