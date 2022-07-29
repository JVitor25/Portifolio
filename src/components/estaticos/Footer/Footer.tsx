import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <>
      <Grid className="GridContainerFooter"
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        xs={12}>

        <Grid
          className="GridItemFooter"
          item>
          <Box display="flex" sx={{ justifyContent: "center", height: "100%", alignItems: "center" }} mx={10}>
            <Typography className="texto"> Desenvolvido por João Vitor Lima. </Typography>
          </Box>
        </Grid>

        <Grid
          className="GridItemFooter"
          item>
          <Box className="BoxTextoRedesSociais" mx={10}>
            <Typography className="texto"> Redes sociais </Typography>
          </Box>

          <Box display="flex" alignItems="center" justifyContent="center" marginTop={0.5}>
            <a href="https://github.com/JVitor25" target="_blank">
              <GitHubIcon className="icone-rede-sociais" />
            </a>
            <a href="https://www.instagram.com/joao3062/" target="_blank">
              <InstagramIcon className="icone-rede-sociais" />
            </a>
            <a href="https://www.linkedin.com/in/joão-vitor-lima25/" target="_blank">
              <LinkedInIcon className="icone-rede-sociais" />
            </a>
          </Box>
        </Grid>

      </Grid>
    </>
  )
}

export default Footer;