import { useLayoutEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Typography, IconButton, Container, Avatar, Box, alpha, Card, Divider } from '@mui/material'
import Grid from '@mui/material/Grid2'
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function App() {

  const [height, setHeight] = useState(0)
  const profilePictureHeight = useRef(null)

  {/*
  useLayoutEffect(() => {

  });
  */}

  return (
    <>
      <div style={{ border: '0,1%', borderRadius: '1%', borderColor: "lightgray", backgroundColor: alpha('#25aeb0', 0.25) }}>
        <Typography variant="h3" style={{ paddingTop: '5%', paddingBottom: '5%' }}> Curriculum Vitae </Typography>

        {/* Tämä Grid pitää sisällään koko CV:n pääsisällön. #25aeb0 */}
        <Grid container style={{ marginLeft: '10%' }}>

          <Grid item size={5}>

            <Grid item size={6}>
              <div style={{ width: '70%', paddingBottom: '5%' }}>

                <Grid container spacing={3} direction={'row'} alignItems={"center"} style={{ width: '100%' }}>
                  <Grid size={1}>
                    {/*Left intentionally blank.*/}
                  </Grid>

                  <Grid size={4} align="center" style={{ justifyContent: "center" }}>

                    <Avatar src="/src/Assets/PfP.jpg" sx={{ width: 102, height: 102 }}></Avatar>

                  </Grid>
                  <Grid align="left" size={7}>

                    <Typography style={{ textAlign: 'left' }}> Juho Valtavaara </Typography>

                  </Grid>

                </Grid>
              </div>
            </Grid>





            <div style={{ width: '70%' }}>
              <Typography variant="h6" style={{ marginRight: '55%' }}> Esittely <br /> <br /> </Typography>
              <Typography align="left"> Oulun yliopiston tietojenkäsittelytieteitten maisterivaiheen opiskelija. Kirjoitin kandidaatin työni potilastietojärjestelmien käytettävyyden tasosta Suomessa, ja olenkin erityisesti kiinnostunut ohjelmistojen käytettävyyden parantamisesta. <br /> <br /> <br /> </Typography>
            </div>
            <div style={{ width: '70%' }}>
              <Typography variant="h6" style={{ marginRight: '55%' }}> Koulutus <br /> <br /> </Typography>
              <Typography variant="body1" align="left" style={{ lineHeight: '150%' }}>


                · Lukio (Oulun Suomalaisen Yhteiskoulun lukio) <br />

                · Luonnontieteitten kandidaatti, tietojenkäsittelytieteet. Keskiarvo 4,17. <br />

                · KieKuVi-opintokokonaisuus osana kandidaatin tutkintoa. Kieli-, kulttuuri- ja viestintä-opintoihini kuuluivat muun muassa italian ja saksan kielet. <br />

                · Nykyisellään maisterivaiheen opiskelija tietojenkäsittelytieteitten laitoksella Oulun yliopistolla.  </Typography>
              <Typography variant="h6" style={{ marginRight: '55%', marginTop: '5%' }}> Kielitaito <br /> <br /> </Typography>
              <Typography variant="body1" align="left" style={{ lineHeight: '150%' }}>


                · Suomi (äidinkieli) <br />

                · Englanti (erinomainen) <br />

                · Ruotsi (hyvä) <br />

                · Saksa (B1/B2, oikein hyvä) <br />

                · Italia ("hyvät alkeet") <br />

                · Venäjän (alkeet) <br />
              </Typography>
              <Typography variant="h6" style={{ marginRight: '55%', marginTop: '5%' }}> Ohjelmointikokemus <br /> <br /> </Typography>
              <Typography variant="body1" align="left" style={{ lineHeight: '150%' }}>

                · Github: https://github.com/juvalta <br />

                · React (Javascript, HTML, CSS, MongoDB:n käyttöönotto, Figma, MaterialUI, Auth0-integrointi, npm, Visual Paradigm, käyttöliittymän paperiprototypointi, Node.js) <br />

                · Java <br />

                · C++ <br />

                · Unity (C#). Useiden VR-pelien teko, olen päässyt myös Steamiin yhden VR-pelin tekijäksi. <br />

                · Python <br />
              </Typography>
            </div>
          </Grid>

          {/* Oikea puoli CV:stä on tämän Gridin alla */}
          <Grid item size={2}>
            
              <Divider orientation='vertical' style={{marginRight:'100%', borderRightWidth: 4}}/>
            
          </Grid>

          <Grid item size={5}>
            <Grid size={6}>
              {/*Left intentionally blank */}
              <div style={{ marginBottom: 125 }}>

              </div>
            </Grid>
            <div style={{ width: '70%', paddingBottom: '5%' }}>

              <Typography variant="h6" style={{ marginRight: "50%" }}> Taidot <br /> <br /> </Typography>
              <Typography variant="body1" style={{ textAlign: "left", lineHeight: '150%' }}>

                · Käyttäjälähtöinen suunnittelu <br />

                · Vieraiden kielien puhuminen <br />

                · Windows-käyttöjärjestelmän virhetilojen korjaaminen <br />

                · Videonmuokkausohjelmiston osaaminen (Davinci Resolve). <br />

                · Esittelytaidot. Olen LEGO-harrastukseni kautta ollut näytteilleasettajana eli esiintyjänä Suomen eri LEGO-messuilla omien LEGO-teosteni kanssa. Suurimmilla messuilla vierailijoita on ollut jopa kymmenen tuhatta, ja olen ollut esittelemässä sekä omia teoksiani että Palikkatakomon yhteisteoksia. <br />
              </Typography>

              <Typography variant="h6" style={{ marginRight: "50%", marginTop: '5%' }}> Työkokemus <br /> <br /> </Typography>
              <Typography variant="body1" style={{ textAlign: "left", lineHeight: '150%' }}>

                · Projektipäällikkö School of Gamingin Oulun yliopistolta tilaamalla kurssiprojektilla, jolla toteutettiin nettisivuprototyyppi asiakkaalle. Projektijohtajuuteen kuului tapaamisten järjestäminen, työn jakaminen, asiakaskontaktit, SCRUMin käyttö, ja projektin ohjaus oikeaan suuntaan. Projektissa oli käytössä muun muassa React, Node.js, MongoDB, Auth0, Figma, ja paperiprototypointi. <br />

                · Koodikärpät-kesätyö 6.6.-5.8.16. Pelin tekeminen ja suunnitteleminen Unityllä. <br />

                · Koodikärpät-kesätyö 3.7.-24.7.2017. Unity3D-peliohjelmointi. <br />

                · Kesätyöseteliharjoittelu Oulun yliopistolla. <br />

                · TET-harjoittelu Oulun Korussa. <br />

              </Typography>
            </div>
            <div style={{ width: '70%' }}>
              <Typography variant="h6" style={{ marginRight: "50%" }}> Vapaaehtoistyö <br /> <br /> </Typography>
              <Typography variant="body1" style={{ textAlign: "left", lineHeight: '150%' }}>

                · Palikkatakomon hallituksen jäsen. Tilasin Palikkatakomon nettisivuille käytettävyystestauksen Oulun yliopiston kurssin kautta, ja aloitin juuri työn nettisivujen modernisoimiseksi. <br />

                · Palikkatakomossa vastuualueeni on sosiaalisen median hallinta, jäsenien kanssa viestintä, Palikkatakomon LEGO-ambassadorin avustus erinäisissä tehtävissä. Olen myös avustanut yhteisteosten ja -tilausten järjestämisessä (mm. monituhatrivisen Excelin optimointi tulostukseen). Tapahtumissa olen auttanut tapahtumien pystytyksessä, yhteisteosten esittelemisessä, kilpailujen organisoinnissa, mediahaastatteluissa, jäsenrekrytoinnissa ja mainosvermeiden pystytyksessä. <br />  </Typography>
            </div>

          </Grid>
        </Grid>


        <footer style={{ paddingTop: '5%', paddingBottom: '5%' }}>
          <Container maxWidth='sm' style={{ color: "blue" }}> </Container>
          <Typography> Tämä CV on koodattu Javascriptillä, eli se on nettisivu! </Typography>
          <IconButton style={{ color: "lightblue" }}>
            <LinkedInIcon onClick={event => window.location.href = 'https://fi.linkedin.com/in/juho-valtavaara-028992258?trk=public_profile_browsemap'}></LinkedInIcon>
          </IconButton>
        </footer>
      </div>
    </>


  )
}

export default App
