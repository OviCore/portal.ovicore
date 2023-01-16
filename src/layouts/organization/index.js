import { useEffect, useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Select from "@mui/material/Select";
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import { getAuth } from "firebase/auth";
import { setDoc, getFirestore, doc, onSnapshot, getDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
// @mui material components
import Header from "./Header";
import { MenuItem } from "@mui/material";
import organizations from "assets/wa-colleges.js";

// Soft UI Dashboard React components
import SuiButton from "components/SuiButton";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

function Organization() {
  const [orgs, setOrgs] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [selectPosition, setSelectPosition] = useState("");
  const [show, setShow] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
        navigate('/organization')
    }
    if (!authToken) {
        navigate('/sign-in')
    }}, [])

    useEffect(async () => {
      const auth = sessionStorage.getItem("Auth Token");
      const db = getFirestore();
      const docRef = doc(db, "users", auth);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setShow(false);
        setSelectedOrganization(docSnap.data().organization);
        setSelectPosition(docSnap.data().role);
        navigate('/organization')
      } else {
        // doc.data() will be undefined in this case
        console.log("Failed to get document in Organization");
        setShow(true);
      }
      setOrgs(organizations);
  
    }, []);

  const handleChange = (event) => {
    setSelectedOrganization(event.target.value);
  };

  const handlePositionChange = (event) => {
    setSelectPosition(event.target.value);
  };

  const [saveInfo, setSaveInfo] = useState(false);



  useEffect(() => {
    if (selectedOrganization === "" && selectPosition === "") {
      return;
    }
    const auth = getAuth();
    const uid = sessionStorage.getItem('Auth Token');
    const userRef = doc(getFirestore(), "users", uid);
    const db = getFirestore();
    const unsub = onSnapshot(userRef, async () => {
        const data = {
          firstName: auth.currentUser.displayName.split(" ")[0],
          lastName: auth.currentUser.displayName.split(" ")[1],
          email: auth.currentUser.email,
          organization: selectedOrganization,
          role: selectPosition,
        };
        await setDoc(doc(db, "users", uid), data).then(() => {
          console.log("Document written with ID: ", uid); 
          toast.success("Organization successfully added!");
          setShow(false);
        })
        .catch(error => {
          console.error("Error writing document: ", error);
          toast.error("Error creating account: ", error);
        });
    });
  }, [saveInfo]);

   return (
    <DashboardLayout>
      <Header organization={selectedOrganization} role={selectPosition} />
      <ToastContainer />

          <Grid item xs={12} md={6} xl={4} mb={2}>
            {show ? (
            <SuiBox mb={5} mt={5} ml={2}>
              <SuiTypography variant="h6" fontWeight="medium">
                No Organization is currently selected.
              </SuiTypography>
              <SuiTypography variant="button" textColor="text" fontWeight="regular">
                Please select an organization to view its properties.
              </SuiTypography>
              <SuiBox mt={2}>
                <Grid container spacing={2}>
              <Grid item xs={1.5} md={2} xl={1.5} mb={2}>
                  <Select
              variant="outlined"
              value={selectedOrganization}
              onChange={handleChange}
              displayEmpty 
              size="small"

              >
                <MenuItem value="" disabled>Select Organization</MenuItem>
                {orgs.map((org) => (
                  <MenuItem value={org.college}>{org.college}</MenuItem>
                ))}
            </Select>
              </Grid> 
              <Grid item xs={1.5} md={2} xl={1.5} mb={2}>
                  <Select
              variant="outlined"
              value={selectPosition}
              onChange={handlePositionChange}
              displayEmpty 
              size="small"
              >
                <MenuItem value="" disabled>Select Role</MenuItem>
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="educator">Educator</MenuItem>
                <MenuItem value="other">Other</MenuItem> 
            </Select>
              </Grid> 
              <Grid item xs={1.5} md={2} xl={1.5} mb={2}>
              <SuiButton
                variant="contained"
                color="primary"
                size="small"
                onClick={() => setSaveInfo(!saveInfo)}
              >
                Save
              </SuiButton>
              </Grid>
              </Grid>
              </SuiBox>
             
            </SuiBox> 
            ) : (
              <SuiBox mb={5} mt={5} ml={2}>
              <SuiTypography variant="h6" fontWeight="medium">
                Organization has not posted any courses yet.
              </SuiTypography>
              </SuiBox>
            )}
                
          </Grid>
      <Footer />
    </DashboardLayout>
  );
}

export default Organization;
