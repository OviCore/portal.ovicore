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
import SuiInput from "components/SuiInput";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Feedback() {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmition = async () => {
    const uid = sessionStorage.getItem('Auth Token');
    const db = getFirestore();
    const data = {
      uid: uid,
      feedback: feedback,
      date: new Date().toLocaleString(),
    };
    const auth = getAuth();
    const user = auth.currentUser;
    await setDoc(doc(db, "feedback", user.displayName), data).then(() => {
      console.log("Document written with ID (Feedback): ", uid);
      toast.success("Feedback Sent!")
    })
    .catch(error => {
      console.error("Error writing document (Feedback): ", error);
      toast.error("Feedback Failed to send ", error);
    });
    setFeedback('');
  }


  return (
    <>
      <ToastContainer />
      <SuiBox py={1}>
          <SuiBox py={1} px={4}>
            <SuiTypography variant="h6" fontWeight="medium">
              Your Feedback
            </SuiTypography>
            <SuiBox>
              <SuiTypography variant="button" fontWeight="regular" textColor="text">
                The feedback you provide will help us improve our services, and we will use it to make your experience better.
              </SuiTypography>
            </SuiBox>
            <SuiBox mt={1}>
              <SuiInput
                placeholder="Enter your feedback here"
                multiline
                rows={4}
                fullWidth
                value={feedback} 
                onChange={(e) => setFeedback(e.target.value)}
              />
            </SuiBox>
          
              <SuiBox mt={1}>
                <SuiButton variant="contained" color="info" onClick={handleFeedbackSubmition}>
                  Submit
                </SuiButton>
              </SuiBox>
            </SuiBox>
      </SuiBox>
      
     
      
     </>
   
  );
}

export default Feedback;
