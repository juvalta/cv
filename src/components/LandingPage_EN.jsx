import { useLayoutEffect, useState, useRef } from 'react'

import { Typography, IconButton, Container, Avatar, Box, alpha, Card, Divider } from '@mui/material'
import Grid from '@mui/material/Grid2'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import pfp from '../assets/cv_pfp_square.jpg'
import TitleNamePFP from './TitleNamePFP';

function LandingPage() {

  const [height, setHeight] = useState(0)
  const profilePictureHeight = useRef(null)

  {/*
  useLayoutEffect(() => {

  });
  */}

  return (
    <>


      <div style={{ border: '0,1%', borderRadius: '1%', borderColor: "lightgray", backgroundColor: alpha('#25aeb0', 0.25) }}>
      <Typography variant="h3" style={{ paddingTop: '5%', paddingBottom: '5%', fontStyle: 'italic' }}> Curriculum Vitae </Typography>


      {/* Tämä Grid pitää sisällään koko CV:n pääsisällön. #25aeb0 */}



      {/*Mobiilioptimoitu puoli alkaa tästä. Mobiililla näkyy yksi sarake kahden sijasta.*/}

      <Grid container justifyContent="center">
        <Grid item size="grow">

        </Grid>
        <Grid item size={{ xs: 10, sm: 4 }}>

          <div style={{ paddingBottom: '5%' }}>

            <Grid container spacing={3} direction={'column'} alignItems={"center"} style={{ width: '100%' }}>

              <Grid size={{ xs: 12, sm: 4 }} align="center" style={{ justifyContent: "center" }}>

                <Avatar src={pfp} sx={{ width: 102, height: 102 }}></Avatar>

              </Grid>
              <Grid align="left" size={{ xs: 12, sm: 4 }}>

                <Typography style={{ textAlign: 'center' }}> Juho Valtavaara </Typography>

              </Grid>

            </Grid>
          </div>

          <div >
            <Typography variant="h6" style={{ marginTop: "10%", marginBottom: "5%" }}> <strong> Introduction </strong> <br /> <br /> </Typography>
            <Typography align="left"> Master's student in Information Processing Science at the University of Oulu.
              I wrote my bachelor's about the usability of electronic health records in use in Finland,
              and I'm especially interested about usability and user-centred design.
              <br /> <br /> <br /> </Typography>
          </div>
          <div >
            <Typography variant="h6" style={{ marginTop: "10%", marginBottom: "5%" }}> <strong> Education </strong> <br /> <br /> </Typography>
            <Typography variant="body1" align="left" style={{ lineHeight: '150%' }}>


              · Upper secondary (Oulun Suomalaisen Yhteiskoulun lukio) <br />

              · Bachelor of science, Information Processing Science. GPA 4,17. <br />

              · Language, Culture and Communication studies (KieKuVi) as part of my bachelor's. <br />
            </Typography>
            <Typography variant="h6" style={{ marginTop: "10%", marginBottom: "5%" }}> <strong> Language proficiency </strong> <br /> <br /> </Typography>
            <Typography variant="body1" align="left" style={{ lineHeight: '150%' }}>


              · Finnish (native) <br />

              · English (C1 advanced/C2) <br />

              · Swedish (B1/B2) <br />

              · German (B1/B2) <br />

              · Italian (A1/A2) <br />

              · Russian (A1) <br />
            </Typography>
            <Typography variant="h6" style={{ marginTop: "10%", marginBottom: "5%" }}> <strong> Coding experience </strong> <br /> <br /> </Typography>
            <Typography variant="body1" align="left" style={{ lineHeight: '150%' }}>

              · Github: <a href="https://github.com/juvalta">https://github.com/juvalta</a> <br />

              · Web development using React (e.g. MongoDB, Figma, MaterialUI, Auth0-integration, Lighthouse) <br />

              · Setting up a development environment with WSL2 (Ubuntu, Python venv, Lektor CMS) <br />

              · Java <br />

              · C++ <br />

              · Unity (extensive C# experience). <br />

              · VR-games, Such as Moonatees. <br />

              · Python <br />
            </Typography>
            <Typography variant="h6" style={{ marginTop: "10%", marginBottom: "5%" }}> <strong> Projects </strong> <br /> <br /> </Typography>
            <Typography variant="body1" align="left" style={{ lineHeight: '150%' }}>

              · Source code of this CV: <a href="https://github.com/juvalta/cv">https://github.com/juvalta/cv</a> <br />

              · <a href="https://store.steampowered.com/app/607770/Moonatees/">Moonatees</a> <br />
            </Typography>
          </div>

          <div style={{}}>

            <Typography variant="h6" style={{ marginTop: "10%", marginBottom: "5%" }}> <strong> Skills </strong> <br /> <br /> </Typography>
            <Typography variant="body1" style={{ textAlign: "left", lineHeight: '150%', marginLeft: "0%" }}>

              · User-centred design and usability. <br />

              · Resolving Windows errors. <br />

              · Video editing (Davinci Resolve). <br />

              · Experience as an exhibitor or representing an association. <br />

              · Exhibitor at various different LEGO exhibitions in Finland (visitor counts up to 10000). <br />

              · Harassment contact person training. <br />
            </Typography>

            <Typography variant="h6" style={{ marginTop: '10%', marginBottom: "5%" }}> <strong> Working experience </strong> <br /> <br /> </Typography>
            <Typography variant="body1" style={{ textAlign: "left", lineHeight: '150%' }}>

              · Project manager & SCRUM master for School of Gaming project at the University of Oulu during a course project (7.1.-14.5.21).<br />

              · Summer job at Koodikärpät 6.6.-5.8.16. Unity3D. <br />

              · Summer job at Koodikärpät 3.7.-24.7.2017. Unity3D. <br />

              · Summer work voucher trainee at University of Oulu. <br />

              · TET-practice at Oulun Koru and Työelämän kehittämispalvelu v. 2013. <br />

            </Typography>
          </div>
          <div style={{}}>
            <Typography variant="h6" style={{ marginTop: "10%", marginBottom: "5%" }}> <strong> Volunteering </strong> <br /> <br /> </Typography>
            <Typography variant="body1" style={{ textAlign: "left", lineHeight: '150%', marginBottom: "15%" }}>

              <Typography variant="h10" style={{ marginTop: "10%", marginBottom: "5%" }}> <strong> Palikkatakomo </strong> <br /> <br /> </Typography>
              · Member of the board during 2024. Usability testing Takomo's website and ongoing re-development. I have also done: <br />
              · managing social media <br />
              · assisting the LAN-ambassador <br />
              · organizing group orders and collaborations <br />
              · media representation <br />
              · recruiting members <br />
              · organizing competitions <br />
              · writing web articles (Textpattern CMS) <br />
            </Typography>
            <Typography variant="body1" style={{ textAlign: "left", lineHeight: '150%' }}>

              <Typography variant="h10" style={{ marginTop: "10%", marginBottom: "5%" }}> <strong> Blanko ry </strong> <br /> <br /> </Typography>
              · Member of the board, 2025. Head of relations. Responsibilities include: <br />
              · recruiting sponsors <br />
              · advertising sponsor vacancies <br />
              · organizing meet the partners -evening <br />
              · managing the relations team <br />
              · messaging with sponsors <br />
              · cleaning and supervising events <br />
            </Typography>
          </div>
        </Grid>
        <Grid item size="grow">

        </Grid>
      </Grid>


      <footer style={{ paddingTop: '10%', paddingBottom: '5%' }}>
        <Container maxWidth='sm' style={{ color: "blue" }}> </Container>
        <Typography> This CV is coded with Javascript, so it's a website! </Typography>
        <IconButton style={{ color: "lightblue" }}>
          <LinkedInIcon sx={{ fontSize: 40 }} size='large' onClick={event => window.location.href = 'https://fi.linkedin.com/in/juho-valtavaara-028992258?trk=public_profile_browsemap'}></LinkedInIcon>
        </IconButton>
      </footer>

    </div>

    </>


  )
}

export default LandingPage
