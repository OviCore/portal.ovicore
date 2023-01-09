import React, { useState, useEffect } from 'react';
import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";
import SuiAvatar from "components/SuiAvatar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import Icon from "@mui/material/Icon";
import authorsTableData from "layouts/timesheet/data/authorsTableData";
import SuiInput from "components/SuiInput";
import { useNavigate } from "react-router-dom";

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import Demo from './components/WeeklyCalendar';

function Timesheet() {
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
        navigate('/timesheet')
    }
    if (!authToken) {
        navigate('/sign-in')
    }}, [])

  const { columns, rows } = authorsTableData;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
     
   
         
      </SuiBox>
     
      
      <Footer />
    </DashboardLayout>
   
  );
}

export default Timesheet;
