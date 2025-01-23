import { useLayoutEffect, useState, useRef } from 'react'

import { Typography, IconButton, Container, Avatar, Box, alpha, Card, Divider } from '@mui/material'
import Grid from '@mui/material/Grid2'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import pfp from '../assets/cv_pfp_square.jpg'

function TitleNamePFP() {

  const [height, setHeight] = useState(0)
  const profilePictureHeight = useRef(null)

  {/*
  useLayoutEffect(() => {

  });
  */}

  return (
    <>
      <Typography variant="h3" style={{ paddingTop: '5%', paddingBottom: '5%', fontStyle: 'italic' }}> Curriculum Vitae </Typography>

      <Grid container justifyContent="center">
        <Grid item size="grow">

        </Grid>
        <Grid item size={{ xs: 10, sm: 4 }}>

          <div style={{ paddingBottom: '5%' }}>

            <Grid container spacing={3} direction={'column'} alignItems={"center"} style={{ width: '100%' }}>

              <Grid container direction={'row'}>
                <Grid item size={{ xs: 1, sm: 4 }}>

                </Grid>

                <Grid item size={{ xs: 10, sm: 4 }}>

                  <Grid size={{ xs: 12, sm: 4 }} >

                    <Avatar src={pfp} sx={{ width: 102, height: 102 }}></Avatar>

                  </Grid>
                  <Grid align="left" size={{ xs: 12, sm: 4 }}>

                    <Typography style={{ textAlign: 'center' }}> Juho Valtavaara </Typography>

                  </Grid>

                </Grid>


                <Grid item size={{ xs: 1, sm: 4 }}>

                </Grid>
              </Grid>


            </Grid>
          </div>
        </Grid>
      </Grid>


    </>
  )
}

export default TitleNamePFP
