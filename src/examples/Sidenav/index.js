import { useEffect, useState } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavCard from "examples/Sidenav/SidenavCard";
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";
import LogoImage from "assets/images/logos/logonopbg.png";
import { useSoftUIController, setMiniSidenav } from "context";
import {getAuth} from "firebase/auth";
import { doc, onSnapshot, getFirestore } from "firebase/firestore"; 
import SuiAvatar from "components/SuiAvatar";


function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];  

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const db = getFirestore();
      const unsub = onSnapshot(doc(db, "users", auth.currentUser.uid), (doc) => {
    });
    } else {
      console.log("User is not logged in");
    }
  } , []);

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, route, href, owner }) => {
    let returnValue;
     
      if (type === "collapse") {
        returnValue = href ? (
          <Link
            href={href}
            key={key}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <SidenavCollapse
              color={color}
              name={name}
              icon={icon}
              active={key === collapseName}
              noCollapse={noCollapse}
            />
          </Link>
        ) : (
          <NavLink to={route} key={key}>
            <SidenavCollapse
              color={color}
              key={key}
              name={name}
              icon={icon}
              active={key === collapseName}
              noCollapse={noCollapse}
            />
          </NavLink>
        );
      
    } else if (type === "title") {
        returnValue = (
          <SuiTypography
            key={key}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            opacity={0.6}
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </SuiTypography>
        );
      } else if (type === "divider") {
        returnValue = <Divider key={key} />;
      }
      else if (type == "non-visible") {
        returnValue = null;
      } 
    
    return returnValue ;
  });

  let navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/sign-in')
  }

  return (
    <SidenavRoot {...rest} variant="permanent" ownerState={{ transparentSidenav, miniSidenav }}>
      <SuiBox pt={3} pb={1} px={4} textAlign="center">
        <SuiBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <SuiTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </SuiTypography>
        </SuiBox>
        <SuiBox component={NavLink} to="/" display="flex" alignItems="center">
          {brand && <SuiBox component="img" src={LogoImage} alt="OviCore Logo" width="10rem" />}
          <SuiBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <Divider />
      <Profile />
      <Divider />
      <List>
       {renderRoutes}</List>
      <SuiBox pt={2} my={2} mx={2} mt="auto">
        <SidenavCard />
        <SuiBox mt={2}>
          <SuiButton
            component="a"
            onClick={handleLogout}
            variant="gradient"
            color={color}
            fullWidth
          >
            Log Out
          </SuiButton>
        </SuiBox>
      </SuiBox>
    </SidenavRoot>
  );
}

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");


  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      setName(displayName);
      setEmail(user.email);
      console.log("user.photoURL", user.photoURL)
      // if user.ptotoURL starts https://example.com then set to default image
      if (!user.photoURL || user.photoURL.startsWith("https://example.com")) {
        setPhoto("https://st3.depositphotos.com/3102403/17634/v/600/depositphotos_176349124-stock-illustration-anonymous-user-circle-icon.jpg")
      } else
       {
         setPhoto(user.photoURL);
       }
      const emailVerified = user.emailVerified;
      const uid = user.uid;
    } else {
      // User is signed out
      // ...
    }
  }, []);

  return (
    <SuiBox px={4} py={1} display="flex" alignItems="center">
      <SuiAvatar src={photo} alt="profile-image" variant="rounded" size="xl" shadow="sm"/>  
      <SuiBox ml={2}>
        <SuiTypography variant="h6" fontWeight="medium">
          {name}
        </SuiTypography>
        <SuiTypography variant="caption" fontWeight="regular" textColor="text">
          {email}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );


}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
