import { CardMedia, Grid } from '@material-ui/core';
import { Box, Card, CardContent, Typography } from '@mui/material';
import blogpessoal from "../../imagens/blog-pessoal.png";
import conectaong from "../../imagens/conecta-ong.png";
import ecommerce from "../../imagens/ecommerce.png";
import portifolio from "../../imagens/portifolio.png";
import Paper from '@mui/material/Paper';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import "./Projetos.css";

function Projetos() {
    var projetos = [
        { tipo: "Rede Social", nome: "BlogPessoal", imagem: "https://i.imgur.com/JgkccR7.png", github: "https://github.com/JVitor25/blog-pessoal-react", site: "https://blogjvitor.netlify.app" },
        { tipo: "Rede Social", nome: "ConetaONG", imagem: "https://i.imgur.com/WiuAj18.png", github: "https://github.com/JVitor25/ConectaONG", site: "https://conectaong.netlify.app" },
        { tipo: "Landing Page", nome: "Portifólio", imagem: "https://i.imgur.com/mk9rUvV.png", github: "https://github.com/JVitor25/Portifolio", site: "https://portifoliojoaovitor.netlify.app" },
        { tipo: "Ecommerce", nome: "Amor em Papeis", imagem: "https://i.imgur.com/qyNNCoF.png", github: "https://github.com/JVitor25/E-Commerce_Papelaria", site: "https://github.com/JVitor25/E-Commerce_Papelaria" },
    ];

    return (
        <>
            <Grid
                container
                direction="column"
                spacing={2}
                xs={12}
                sm={11}
                md={10}
                lg={9}
                xl={8}>
                <Grid item alignItems="center">
                    <Box className="box-Projetos" sx={{ borderColor: "white", borderBottomStyle: "solid" }} marginTop={5} p={1}>
                        <Typography variant="h4">
                            Projetos
                        </Typography>
                    </Box>
                    <Box marginBottom={2} sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            marginInline: 6,
                            marginTop: 3,
                            maxWidth: 500,
                            maxheight: 400,
                        },
                        justifyContent: "center",
                        // backgroundColor: "bisque"
                    }}>
                        {projetos.map(projeto =>
                            <Card sx={{ maxWidth: 500, backgroundColor: "#25262A", color: "white" }}>
                                <CardContent sx={{ fontStyle: "italic" }}>
                                    <Typography variant="subtitle1" >
                                        {projeto.tipo}
                                    </Typography>
                                </CardContent>
                                {/* <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    width="100"
                                    height="221"
                                    image={projeto.imagem}
                                /> */}
                                <a href={projeto.site} target="_blank" className="text-decoration-none">
                                    <Box paddingX={0.5}>
                                        <img src={projeto.imagem} className="imagem" />
                                    </Box>
                                </a>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {projeto.nome}
                                    </Typography>
                                    {/* <Typography variant="body2">
                                        Descrição:
                                    </Typography> */}
                                </CardContent>
                                <Box className="box-Projetos" sx={{ borderColor: "white", borderTopStyle: "solid" }} marginTop={2} p={2} marginX={2}>
                                    <a href={projeto.github} target="_blank">
                                        <GitHubIcon className="icone-rede-sociais" />
                                    </a>
                                    <a href={projeto.site} target="_blank">
                                        <LanguageIcon className="icone-rede-sociais" />
                                    </a>
                                </Box>
                            </Card>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Projetos