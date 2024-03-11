import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TimelineItem from "examples/Timeline/TimelineItem";
import axios from 'axios';
import './spinner.css';

function Data() {
    let navigate = useNavigate();
    const [modules, setModules] = useState([]);
    const [anatomyModules, setAnatomyModules] = useState([]);
    const [biologyModules, setBiologyModules] = useState([]);
    const [chemistryModules, setChemistryModules] = useState([]);
    const [selected, setSelected] = useState('');
    const [loading, setLoading] = useState(true);
      
    const handleNavigateModule = (embedUrl) => {
        const modelId = embedUrl.split('/')[4];
        sessionStorage.setItem('ModelId', modelId);
        navigate('/modules/module')
    }

    const LoadingSpinner = () => {
        return (
          <SuiBox mb={5} mt={5} sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
          <SuiBox className="spinner-container" mb={5} mt={5}>
            <SuiBox className="loading-spinner" mb={5}>
            </SuiBox>
          </SuiBox>
          </SuiBox>
        );
      }

    useEffect(() => {
      setSelected('Anatomy')
      const API_TOKEN = sessionStorage.getItem('SketchFab');
      async function getCollection() {
          const collectionName = sessionStorage.getItem('Anatomy');
          const url = `https://api.sketchfab.com/v3/collections/${collectionName}/models`;
          const myCollectionsEndpoint =  url;
          const headers = {
              Authorization: `Token ${API_TOKEN}`,
          };
          try {
              const response = await axios.get(myCollectionsEndpoint, { headers });
              return response.data;
          } catch (error) {
              console.log(`An API error occurred: ${error}`);
              process.exit(1);
          }
      }
      async function main() {
          console.log('Getting models from your profile...');
          const collection = await getCollection();

          if (!collection) {
              console.log("You don't seem to have any collection, let's create one!");
              return;
          } else {
              console.log('Your collections:');
              console.log(collection.results);
              setModules(collection.results);
              setLoading(false);
          }
      }
      main();
    }, [])

    const getAnatomyModules = () => {
      setSelected('Anatomy')
      if(anatomyModules.length > 0) {
        setModules(anatomyModules)
        return;
     }
      const API_TOKEN = sessionStorage.getItem('SketchFab');
      async function getCollection() {
          const collectionName = sessionStorage.getItem('Anatomy');
          const url = `https://api.sketchfab.com/v3/collections/${collectionName}/models`;
          const myCollectionsEndpoint =  url;
          const headers = {
              Authorization: `Token ${API_TOKEN}`,
          };
          try {
              const response = await axios.get(myCollectionsEndpoint, { headers });
              return response.data;
          } catch (error) {
              console.log(`An API error occurred: ${error}`);
              process.exit(1);
          }
      }
      async function main() {
          console.log('Getting models from your profile...');
          const collection = await getCollection();

          if (!collection) {
              console.log("You don't seem to have any collection, let's create one!");
              return;
          } else {
              console.log('Your collections:');
              console.log(collection.results);
              setAnatomyModules(collection.results);
              setModules(collection.results);
          }
      }
      main();
      setIsLoading(true);
    }

    const getBiologyModules = () => {
      setSelected('Biology')
        if(biologyModules.length > 0) {
            setModules(biologyModules)
            return;
        }

      const API_TOKEN = sessionStorage.getItem('SketchFab');
      async function getCollection() {
          const collectionName = sessionStorage.getItem('Biology');
          const url = `https://api.sketchfab.com/v3/collections/${collectionName}/models`;
          const myCollectionsEndpoint =  url;
          const headers = {
              Authorization: `Token ${API_TOKEN}`,
          };
          try {
              const response = await axios.get(myCollectionsEndpoint, { headers });
              return response.data;
          } catch (error) {
              console.log(`An API error occurred: ${error}`);
              process.exit(1);
          }
      }
      async function main() {
          console.log('Getting models from your profile...');
          const collection = await getCollection();

          if (!collection) {
              console.log("You don't seem to have any collection, let's create one!");
              return;
          } else {
              console.log('Your collections:');
              console.log(collection.results);
              setBiologyModules(collection.results);
              setModules(collection.results)
          }
      }
      main();
      setIsLoading(true);
    }     

    const getChemistryModules = () => {
      setSelected('Chemistry')
      if(chemistryModules.length > 0) {
            setModules(chemistryModules)
            return;
        }

      const API_TOKEN = sessionStorage.getItem('SketchFab');
      async function getCollection() {
          const collectionName = sessionStorage.getItem('Chemistry');
          const url = `https://api.sketchfab.com/v3/collections/${collectionName}/models`;
          const myCollectionsEndpoint =  url;
          const headers = {
              Authorization: `Token ${API_TOKEN}`,
          };
          try {
              const response = await axios.get(myCollectionsEndpoint, { headers });
              return response.data;
          } catch (error) {
              console.log(`An API error occurred: ${error}`);
              process.exit(1);
          }
      }
      async function main() {
          console.log('Getting models from your profile...');
          const collection = await getCollection();

          if (!collection) {
              console.log("You don't seem to have any collection, let's create one!");
              return;
          } else {
              console.log('Your collections:');
              console.log(collection.results);
              setModules(collection.results);
              setChemistryModules(collection.results);
          }
      }
      main();
    }
    
    return(
        <SuiBox mb={3} ml={2}>
          <SuiBox p={2}>
            <Grid container spacing={0.5}>
              <Grid item>
                <SuiButton variant={selected  === 'Anatomy' ? "contained" : "outlined"} fontWeight="300" color="info" onClick={() => getAnatomyModules()}>Anatomy</SuiButton>
              </Grid>
              <Grid item>
                <SuiButton variant={selected  === 'Biology' ? "contained" : "outlined"} fontWeight="300" color="info" onClick={() => getBiologyModules()}>Biology</SuiButton>
              </Grid>
              <Grid item>
                <SuiButton variant={selected  === 'Chemistry' ? "contained" : "outlined"} fontWeight="300" color="info" onClick={() => getChemistryModules()}>Chemistry</SuiButton>
              </Grid>
            </Grid>
          </SuiBox>
      <Grid container spacing={2} p={1}>
        {loading ? <LoadingSpinner /> : modules.map((item, index) => (
                  <Grid item key={index} xs={12} sm={6} md={5} lg={4} xl={3}>
                  <Card className="h-100" style={{ width: "100%", height: "19rem"  }}>
                   
                    <div class="sketchfab-embed-wrapper embed-responsive embed-responsive-4by3">
                      
                      <img src={item.thumbnails.images[2].url} title="A 3D model" alt="A 3D model" className="sketchfab-embed-placeholder" style={{ width: "100%", height: "8rem", objectFit: "cover" }}></img>
                      <TimelineItem
                        title={item.name}
                        // only show the first 100 characters of the description
                        description={item.description.substring(0, 50)}
                      
                      /> 
                    </div>
                    <SuiButton variant="outlined" fontWeight="300" color="info" onClick={() => handleNavigateModule(item.embedUrl)} sx={
                        {
                            width: "96%",
                            fontSize: "12px",
                            textTransform: "none",
                            borderRadius: "10px",
                            position : "absolute",
                            bottom: "2px",
                            left: "5px",
                        }
                        
                    }>View</SuiButton>
                  </Card>
                  
                </Grid>
        ))}
        </Grid>
        </SuiBox>
    );
}

export default Data;