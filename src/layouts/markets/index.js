// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useNavigate } from "react-router-dom";

function Markets() {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
        navigate('/markets')
    }
    if (!authToken) {
        navigate('/sign-in')
    }}, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mt={4}>
        
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Markets;