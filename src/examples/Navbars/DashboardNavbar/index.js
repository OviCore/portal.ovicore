import { useState, useEffect } from "react";
import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SuiTypography from "components/SuiTypography";
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import ThreeDRotationRoundedIcon from '@mui/icons-material/ThreeDRotationRounded';
import SuiInput from "components/SuiInput";
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import axios from 'axios';
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";
import {
  useSoftUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";
import SuiButton from "components/SuiButton";

function SearchModal(modules) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [backupModules, setBackupModules] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setBackupModules(modules.modules);
    console.log(modules.modules);
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setBackupModules(modules.modules);
    } else {
      setBackupModules(modules.modules.filter((module) => {
        return module.name.includes(searchTerm) || module.name.includes(searchTerm);
      }));
    }

   
  }, [searchTerm]);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '0.5px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

  return (
    <div>
      <Button onClick={handleOpen}>
      <SuiInput placeholder="Search here..." icon={{ component: "search", direction: "left" }}/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="caption" >
            Search Modules
          </Typography>
        <SuiInput placeholder="Type here..."  icon={{ component: "search", direction: "left" }} id="search" onInput={(e) => {
          setSearchTerm(e.target.value);
      }}/>
      <div style={{height: 300, overflow: "auto"}}>
      {backupModules.map((module) => {
        return (
          <div>
            
            <Typography id="modal-modal-description" >
              {module.name}
            </Typography>
            </div>
        );
      })}
      </div>





        </Box>
      </Modal>
    </div>
  );
}



function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);
  const [modules, setModules] = useState([]);

  const moduleUrls = [
    {
      name: "Anatomy",
      url: `https://api.sketchfab.com/v3/collections/${sessionStorage.getItem('Anatomy')}/models`,
    },
    {
      name: "Biology",
      url: `https://api.sketchfab.com/v3/collections/${sessionStorage.getItem('Biology')}/models`,
    },
    {
      name: "Chemistry",
      url: `https://api.sketchfab.com/v3/collections/${sessionStorage.getItem('Chemistry')}/models`
    }
  ]


  useEffect(() => { 
    const API_TOKEN = sessionStorage.getItem('SketchFab');     
    try { 
      const headers = {
       Authorization: `Token ${API_TOKEN}`,
      };
      moduleUrls.forEach(async (moduleUrl) => {
        const response = await axios.get(moduleUrl.url, { headers });
        console.log(response.data.results);
        // add it to the modules array
        if (response.data.results) {
          response.data.results.forEach((module) => {
               modules.push(module);
          });
        }
      });
    } catch (error) {
          console.log(`An API error occurred: ${error}`);
      }
     
}, []);

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

 

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        image={<ViewInArRoundedIcon color="success" fontSize="medium"/>}
        title={["New Module", "Human Brain"]}
        date="2 days ago"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        image={<CheckCircleIcon color="info" fontSize="medium"/>}
        title={["Module Updated", "Human Heart"]}
        date="1 day"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        color="warning"
        image={<ThreeDRotationRoundedIcon color="info" fontSize="medium"/>}
        title={["New Model Viewer", ""]}
        date="22 days"
        onClick={handleCloseMenu}
      />
    </Menu>
  );

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <SuiBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
        </SuiBox>
        {isMini ? null : (
          <SuiBox sx={(theme) => navbarRow(theme, { isMini })}>
            <SuiBox pr={1}>
             
              <SearchModal modules={modules}/>
            </SuiBox>
            <SuiBox color={light ? "white" : "inherit"}> 
              
              <IconButton
                color="inherit"
                width="10%"
                onClick={handleConfiguratorOpen}>
                <SettingsOutlinedIcon/>
              </IconButton>
              <IconButton size="medium"
                color="inherit"
                aria-controls="notification-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleOpenMenu}
              >
                <NotificationsNoneOutlinedIcon />
              </IconButton>
              {renderMenu()}
              <IconButton
                color="inherit"
                onClick={handleMiniSidenav}
              >
                <Icon className={light ? "text-white" : "text-dark"}>
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>

            </SuiBox>
          </SuiBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
