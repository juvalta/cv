import { useLayoutEffect, useState, useRef } from 'react'
import './App.css'
import { Typography, IconButton, Container, Avatar, Box, alpha, Card, Divider } from '@mui/material'
import Grid from '@mui/material/Grid2'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import pfp from './assets/cv_pfp_square.jpg'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {

  const [height, setHeight] = useState(0)
  const profilePictureHeight = useRef(null)

  {/*
  useLayoutEffect(() => {

  });
  */}

  return (
    <>
      <LandingPage />
      


        <footer style={{ paddingTop: '10%', paddingBottom: '5%' }}>
          <Container maxWidth='sm' style={{ color: "blue" }}> </Container>
          <Typography> Tämä CV on koodattu Javascriptillä, eli se on nettisivu! </Typography>
          <IconButton style={{ color: "lightblue" }}>
            <LinkedInIcon sx={{fontSize: 40}} size='large' onClick={event => window.location.href = 'https://fi.linkedin.com/in/juho-valtavaara-028992258?trk=public_profile_browsemap'}></LinkedInIcon>
          </IconButton>
        </footer>
    </>


  )
}

export default App
