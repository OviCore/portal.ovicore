import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { doc, onSnapshot, getFirestore } from "firebase/firestore";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Badge from '@mui/material/Badge';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';import { updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const Profile = (show ) => {
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
        if (!user.photoURL || user.photoURL.startsWith("https://example.com")) {
          setPhoto("https://st3.depositphotos.com/3102403/17634/v/600/depositphotos_176349124-stock-illustration-anonymous-user-circle-icon.jpg")
        } else
         {
           setPhoto(user.photoURL);
         }
  
      } 
    }, []);

    const onFileUpload = () => {
        // get fileUploader id
        const fileUploader = document.getElementById('fileUploader');
        // get the file
        const file = fileUploader.files[0];
        // GET CURRENT USER
        const auth = getAuth();
        const user = auth.currentUser.uid;
        const storage = getStorage();
        // Create a reference to 'mountains.jpg'
        const photoRef = ref(storage, user + '/profilePicture/' + file.name);    
        // 'file' comes from the Blob or File API
        uploadBytes(photoRef, file).then((snapshot) => {
          console.log('Uploaded a blob or file!');
          // get the url of the uploaded file
          const photoURL = "https://firebasestorage.googleapis.com/v0/b/omi-app-94406.appspot.com/o/" + user + "%2FprofilePicture%2F" + file.name + "?alt=media&token=1f1b0b0f-8b1a-4b1a-8f1a-8b1a4b1a8f1a";
          // update the user profile
          setPhoto(photoURL);
          updateProfile(auth.currentUser, {
            photoURL: photoURL
          }).then(() => {
            console.log('Profile updated successfully!');
          }
          ).catch((error) => {
            console.log(error);
          }
          );
        }).catch((error) => {
          console.log(error);
        });
        // clear the file input
        fileUploader.value = '';
      }
  
    return (
      <SuiBox px={3} py={1} display="flex" alignItems="center">
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
           <IconButton color="info" aria-label="upload picture" component="label" sx={{
            color: (theme) => theme.palette.info.contrastText,
            backgroundColor: (theme) => theme.palette.light.main,
            '&:hover': {
                backgroundColor: (theme) => theme.palette.info.main,
                color: (theme) => theme.palette.light.main,
            },
            width: 28,
            height: 28,
        }}
            >
             <input hidden accept="image/*" type="file" id="fileUploader" onChange={onFileUpload} />
            <CameraAltOutlinedIcon /> 
          </IconButton>
          }
        >
          <SuiAvatar alt="Travis Howard" size="large" src={photo} />
        </Badge>
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

export default Profile;