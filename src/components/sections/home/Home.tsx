import { Grid, Typography } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import React from 'react'
import "./Home.css";
import foto from "../../imagens/joao.png";
import nome from "../../imagens/nome.png";

function Home() {
    return (
        <>
            <Grid className="GridContainerHome"
                container
                direction="row"
                alignItems="stretch"
                xs={10}
                sm={10}
                md={7}>
                <Grid item container direction="column" sm={6} xs={12} className="GridItemHome">
                    <Box className="box-Home">
                        <Box sx={{ fontFamily: "italic" }}> <Typography variant="h4" noWrap={false}>João Vitor Lima</Typography></Box>
                    </Box>
                    <Box className="box-Home" py={0.1}>
                        <Typography variant="h5">Desenvolvedor Web Full-stack</Typography>
                    </Box>
                    <Box className="box-Home" paddingTop={2}>
                        <Typography variant="h6">Bem-vindo(a) ao meu portfólio, conheça alguns projetos desenvolvidos.</Typography>
                    </Box>
                    <Box className="box-Home botao" paddingTop={6}>
                        <Button variant="contained" color="secondary"> Projetos </Button>
                    </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Box className="box-Foto zoom">
                        <img src={foto} alt="" className="foto zoom" />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;