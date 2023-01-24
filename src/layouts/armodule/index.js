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
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import  '../modules/spinner.css';
// @mui material components
import Icon from "@mui/material/Icon";
import axios from "axios";


function ARModule() {
  const [module, setModule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [arUrl , setArUrl] = useState([]);
   let { id } = useParams();
  let navigate = useNavigate();

    useEffect(() => {
      const API_TOKEN = sessionStorage.getItem('SketchFab');
      const modelId = id;
      const url = `https://api.sketchfab.com/v3/models/${modelId}`
      const headers = {
          Authorization: `Token ${API_TOKEN}`,
      };
      async function fetchModel() {
          try {
              const { data } = await axios.get(url, { headers });
              console.log(data);
              setModule(data);
              let ARurl = data.embedUrl + '?autostart=1&cardboard=1&internal=1&tracking=0&ui_ar=0&ui_infos=0&ui_snapshots=1&ui_stop=0&ui_theatre=1&ui_watermark=0';
              setArUrl(ARurl);
              // wait for resources to load
                setTimeout(() => {  setLoading(false); }, 1000);
              
          } catch (error) {
              console.log(`An API error occurred: ${error}`);
          }
      }
    // ?autostart=1&cardboard=1&internal=1&tracking=0&ui_ar=0&ui_infos=0&ui_snapshots=1&ui_stop=0&ui_theatre=1&ui_watermark=0
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
 
   const windowHeight = window.innerHeight;

   return (
      <>{loading ? <LoadingSpinner /> : 
       <iframe src={arUrl} width="100%" height={windowHeight} frameBorder="0" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
     
      }</>
  );
}

export default ARModule;