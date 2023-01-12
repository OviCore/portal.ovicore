import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import banner from "assets/images/illustrations/banner.jpg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import ErrorIcon from '@mui/icons-material/Error';
import { Image } from "@mui/icons-material";
import Socials from "../components/Socials";
import Separator from "../components/Separator";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  let navigate = useNavigate();

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
          navigate('/dashboard')
          sessionStorage.setItem('Auth Token', response.user.uid)
      })
      .catch((error) => {
        console.log(error);
        if(error.code === 'auth/wrong-password'){
          toast.error('Incorrect Password or Email');
        }
        if(error.code === 'auth/user-not-found'){
          toast.error('User Not Found!');
        }
      });
  };

  return (
    <CoverLayout
      title="Welcome back"
      description="Sign in to continue to your account."
      image={banner}
    >
      <ToastContainer />
      <SuiBox mb={1}>
          <Socials />
        </SuiBox>
        <Separator />
      <SuiBox component="form" role="form">
        <SuiBox mb={2}>
          <SuiBox mb={1} ml={0.5}>
            <SuiTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SuiTypography>
          </SuiBox>
          <SuiInput type="email" placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </SuiBox>
        <SuiBox mb={2}>
          <SuiBox mb={1} ml={0.5}>
            <SuiTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SuiTypography>
          </SuiBox>
          <SuiInput type="password" placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
          />
        </SuiBox>
        <SuiBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SuiTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SuiTypography>
        </SuiBox>
        <SuiBox mt={4} mb={1}>
          <SuiButton variant="gradient" color="info" fullWidth onClick={handleSignIn} >sign in</SuiButton>
        </SuiBox>
        <SuiBox mt={3} textAlign="center">
          <SuiTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SuiTypography
              component={Link}
              to="/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SuiTypography>
          </SuiTypography>
        </SuiBox>
      </SuiBox>
    </CoverLayout>
  );
}

export default SignIn;
