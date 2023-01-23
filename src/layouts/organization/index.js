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
import curved0 from "assets/images/curved-images/curved0.jpg";

// Soft UI Dashboard React components
import SuiButton from "components/SuiButton";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

function Organization() {
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [selectPosition, setSelectPosition] = useState("");
  const [show, setShow] = useState(false);
  const [banner, setBanner] = useState("");
  const [logo, setLogo] = useState("");
  const [website, setWebsite] = useState("");
  let navigate = useNavigate();

  const organizations = [
    {
        college: "Central Washington University",
        website_url: "https://www.cwu.edu/",
        banner: "https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
    },
    {
        college: "Eastern Washington University",
        website_url: "https://www.ewu.edu/",            
        banner: "https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
    },
    {
        college: "Gonzaga University",
        website_url: "https://www.gonzaga.edu/",
        banner: "https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
    },
    {
        college: "Northwest University",
        website_url: "https://www.northwestu.edu/",
        banner: "https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
    },
    {
        college: "Pacific Lutheran University",
        website_url: "https://www.plu.edu/",
        banner: "https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
     },
    {
        college: "Saint Martin's University",
        website_url: "https://www.stmartin.edu/",
        banner: "https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
    },
    {
        college: "Seattle Pacific University",
        website_url: "https://www.spu.edu/",
        banner: "https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
    },
    {
        college: "Seattle University",
        website_url: "https://www.seattleu.edu/",
        banner: "https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
    },
    {
        college: "University of Puget Sound",
        website_url: "https://www.pugetsound.edu/",
        banner: "https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
    },
    {
        college: "University of Washington",
        website_url: "https://www.washington.edu/",
        banner: "https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
    },
  
    {
        college: "Walla Walla University",
        website_url: "https://www.wallawalla.edu/",
        banner: "https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
    },
    {
        college: "Washington State University",
        website_url: "https://www.wsu.edu/",
        banner: "https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
    },
    {
        college: "Western Governors University",
        website_url: "https://www.wgu.edu/",
        banner: "https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
    },
    {
        college: "Western Washington University",
        website_url: "https://www.wwu.edu/",
        banner: "https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
    },
    {
        college: "Whitman College",
        website_url: "https://www.whitman.edu/",
        banner: "https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
    },
    {
        college: "Whitworth University",
        website_url: "https://www.whitworth.edu/",
        banner: "https://www.commonapp.org/static/8b267091de413fd8a7de56c3770edd25/gonzaga-university_105.jpg",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Gonzaga_Bulldogs_logo.svg/1200px-Gonzaga_Bulldogs_logo.svg.png"
    }
]

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
      if (docSnap.exists() && docSnap.data().organization !== "None") {
        setShow(false);
        setSelectedOrganization(docSnap.data().organization);
        setSelectPosition(docSnap.data().role);
        const org = organizations.find((org) => org.college === docSnap.data().organization);
        setLogo(org.logo);
        setBanner(org.banner);
        setWebsite(org.website_url);
        navigate('/organization')
      } else {
        setBanner(curved0);
        // doc.data() will be undefined in this case
        console.log("Failed to get document in Organization");
        setShow(true);
      }
  
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
    const org = organizations.find((org) => org.college === selectedOrganization);
    setLogo(org.logo);
    setBanner(org.banner);
    setWebsite(org.website_url);
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
      <Header organization={selectedOrganization} role={selectPosition} banner={banner} logo={logo} web={website}/>
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
                {organizations.map((org) => (
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
