import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react'
import "./Home.css";
import foto from "../../imagens/joao.png";

function Home() {
    return (
        <>
            <Grid className="GridContainerHome"
                container
                direction="row"
                alignItems="stretch"
                xs={11}
                sm={11}
                md={10}
                lg={9}
                xl={8}>
                <Grid item container direction="column" xs={12} sm={7} md={6} className="GridItemHome">
                    <Box sx={{ maxWidth: "460px" }}>

                        <Box className="box-Home">
                            <Box sx={{ fontFamily: "italic" }}> <Typography variant="h4" noWrap={false}>João Vitor Lima</Typography></Box>
                        </Box>
                        <Box className="box-Home" py={0.1}>
                            <Typography variant="h5">Desenvolvedor Web Full-stack</Typography>
                        </Box>
                        <Box className="box-Home" paddingTop={2}>
                            <Typography variant="h6">Bem-vindo(a) ao meu portfólio, conheça alguns projetos desenvolvidos.</Typography>
                        </Box>
                        <Box className="box-Home botao" paddingTop={2}>
                            <a href="#projetos" className="text-decoration-none">
                                <button className="grow_skew_forward"> Projetos </button>
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5} md={6}>
                    <Box className="box-Foto zoom">
                        <img src={foto} alt="" className="foto zoom" />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;