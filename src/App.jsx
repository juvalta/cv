import { useLayoutEffect, useState, useRef } from 'react'
import './App.css'
import { Typography, IconButton, Container, Avatar, Box, alpha, Card, Divider } from '@mui/material'
import Grid from '@mui/material/Grid2'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import pfp from './assets/cv_pfp_square.jpg'
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Solita from './components/Solita';
import LandingPage_EN from './components/LandingPage_EN';
import CV2 from './components/CV2';

function App() {

  const [height, setHeight] = useState(0)
  const profilePictureHeight = useRef(null)

  {/*
  useLayoutEffect(() => {

  });
  */}

  return (
    
    <Router basename= {"/"}>
      <Routes>
        {/*path="" is required for localhost dev environment to work, but github pages is deployed as https://juvalta.github.io/cv/ so gh-pages requires path="/cv"*/}
        <Route exact path="/cv" element={<LandingPage />} />
        <Route exact path="" element={<LandingPage />} />
        <Route exact path="/cv/solita" element={<Solita />} />
        <Route exact path="/en" element={<LandingPage_EN />} />
        <Route exact path="./en" element={<LandingPage_EN />} />
        <Route exact path="/cv2" element={<CV2 />}/>
        <Route exact path="/cv/cv2" element={<CV2 />}/>
      </Routes>
    </Router>

  )
}

export default App
