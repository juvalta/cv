import { useLayoutEffect, useState, useRef } from 'react'

import { Typography, IconButton, Container, Avatar, Box, alpha, Card, Divider } from '@mui/material'
import Grid from '@mui/material/Grid2'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import pfp from '../assets/cv_pfp_square.jpg'

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

                <Grid size={{xs: 12, sm:4}} align="center" style={{ justifyContent: "center" }}>

                  <Avatar src={pfp} sx={{ width: 102, height: 102 }}></Avatar>

                </Grid>
                <Grid align="left" size={{xs:12, sm:4}}>

                  <Typography style={{ textAlign: 'center' }}> Juho Valtavaara </Typography>

                </Grid>

              </Grid>
            </div>

            <div >
              <Typography variant="h6" style={{ marginTop: "10%", marginBottom: "5%" }}> <strong> Esittely </strong> <br /> <br /> </Typography>
              <Typography align="left"> Oulun yliopiston tietojenkäsittelytieteen maisterivaiheen opiskelija. Kirjoitin kanditutkielmani potilastietojärjestelmien käytettävyyden tasosta Suomessa, ja olenkin erityisesti kiinnostunut käytettävyydestä ja käyttäjäystävällisestä suunnittelusta. <br /> <br /> <br /> </Typography>
            </div>
            <div >
              <Typography variant="h6" style={{ marginTop: "10%", marginBottom: "5%" }}> <strong> Koulutus </strong> <br /> <br /> </Typography>
              <Typography variant="body1" align="left" style={{ lineHeight: '150%' }}>


                · Lukio (Oulun Suomalaisen Yhteiskoulun lukio) <br />

                · Luonnontieteen kandidaatti, tietojenkäsittelytieteet. Keskiarvo 4,17. <br />

                · KieKuVi-opintokokonaisuus osana kandidaatin tutkintoa. Kieli-, kulttuuri- ja viestintä-opintoihini kuuluivat muun muassa italian ja saksan kielet. <br />
              </Typography>
              <Typography variant="h6" style={{ marginTop: "10%", marginBottom: "5%" }}> <strong> Kielitaito </strong> <br /> <br /> </Typography>
              <Typography variant="body1" align="left" style={{ lineHeight: '150%' }}>


                · Suomi (äidinkieli) <br />

                · Englanti (erinomainen) <br />

                · Ruotsi (hyvä) <br />

                · Saksa (B1/B2, sujuva) <br />

                · Italia (tyydyttävä) <br />

                · Venäjä (alkeet) <br />
              </Typography>
              <Typography variant="h6" style={{ marginTop: "10%", marginBottom: "5%" }}> <strong> Ohjelmointikokemus </strong> <br /> <br /> </Typography>
              <Typography variant="body1" align="left" style={{ lineHeight: '150%' }}>

                · Github: https://github.com/juvalta <br />

                · Nettisivukehitys Reactilla (mm. MongoDB:n käyttöönotto, Figma, MaterialUI, Auth0-integrointi) <br />

                · Java <br />

                · C++ <br />

                · Unity (C#). <br />
                · VR-pelit, kuten Moonatees. <br />

                · Python <br />
              </Typography>
            </div>

            <div style={{}}>

              <Typography variant="h6" style={{ marginTop: "10%", marginBottom: "5%" }}> <strong> Taidot </strong> <br /> <br /> </Typography>
              <Typography variant="body1" style={{ textAlign: "left", lineHeight: '150%', marginLeft: "0%" }}>

                · Käyttäjälähtöinen suunnittelu <br />

                · Windows-käyttöjärjestelmän virhetilojen korjaaminen <br />

                · Videonmuokkaus (Davinci Resolve) <br />

                · Esiintymistilanteissa toimiminen. <br />
                · Esiintyjänä Suomen eri LEGO-messuilla (vierailijoita on ollut jopa 10000). <br />
              </Typography>

              <Typography variant="h6" style={{ marginTop: '10%', marginBottom: "5%" }}> <strong> Työkokemus </strong> <br /> <br /> </Typography>
              <Typography variant="body1" style={{ textAlign: "left", lineHeight: '150%' }}>

                · Projektipäällikkö School of Gamingin Oulun yliopistolta tilaamalla kurssiprojektilla. <br />

                · Koodikärpät-kesätyö 6.6.-5.8.16. Unity3D. <br />

                · Koodikärpät-kesätyö 3.7.-24.7.2017. Unity3D. <br />

                · Kesätyöseteliharjoittelu Oulun yliopistolla. <br />

                · TET-harjoittelu Oulun Korussa ja Työelämän kehittämispalveluissa v. 2013. <br />

              </Typography>
            </div>
            <div style={{}}>
              <Typography variant="h6" style={{ marginTop: "10%", marginBottom: "5%" }}> <strong> Vapaaehtoistyö </strong> <br /> <br /> </Typography>
              <Typography variant="body1" style={{ textAlign: "left", lineHeight: '150%' }}>

                · Palikkatakomon hallituksen jäsen. Takomon sivujen käytettävyystestaus ja käynnissä oleva uudelleenkehitys. Olen myös tehnyt: <br />
                · somehallintaa <br />
                · LAN-Ambassadorin avustusta <br />
                · yhteisteosten ja -tilausten organisointia <br />
                · mediaedustusta <br />
                · jäsenrekrytointia <br />
                · kilpailujen organisointia <br />
              </Typography>
            </div>
          </Grid>
          <Grid item size="grow">

          </Grid>
        </Grid>


        <footer style={{ paddingTop: '10%', paddingBottom: '5%' }}>
          <Container maxWidth='sm' style={{ color: "blue" }}> </Container>
          <Typography> Tämä CV on koodattu Javascriptillä, eli se on nettisivu! </Typography>
          <IconButton style={{ color: "lightblue" }}>
            <LinkedInIcon sx={{fontSize: 40}} size='large' onClick={event => window.location.href = 'https://fi.linkedin.com/in/juho-valtavaara-028992258?trk=public_profile_browsemap'}></LinkedInIcon>
          </IconButton>
        </footer>
      </div>
    </>


  )
}

export default LandingPage
