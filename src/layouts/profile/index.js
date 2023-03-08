import SuiBox from "components/SuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Overview() {


  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
        navigate('/profile')
    }
    if (!authToken) {
        navigate('/sign-in')
    }}, [])


  return (
    <DashboardLayout>
      <Header />
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
