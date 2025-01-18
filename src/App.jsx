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
    <Router>
      <Routes>
        {/*path="" is required for localhost dev environment to work, but github pages is deployed as https://juvalta.github.io/cv/ so gh-pages requires path="/cv"*/}
        <Route exact path="/cv" element={<LandingPage />} />
        <Route exact path="" element={<LandingPage />} />
      </Routes>
    </Router>


  )
}

export default App
