import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import "./Habilidades.css";
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';

function Habilidades() {
    var tecnologiasBackEnd = [
        { nome: "Java", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", descricao: "" },
        { nome: "Spring", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", descricao: "" },
        { nome: "Postman", imagem: "https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png", descricao: "" },
        { nome: "Swagger", imagem: "https://seeklogo.com/images/S/swagger-logo-A49F73BAF4-seeklogo.com.png", descricao: "" },
        { nome: "MySQL", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", descricao: "" }
    ];

    var tecnologiasFrontEnd = [
        { nome: "HTML", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", descricao: "" },
        { nome: "CSS", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", descricao: "" },
        { nome: "JavaScript", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", descricao: "" },
        { nome: "TypeScript", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", descricao: "" },
        { nome: "React.JS", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", descricao: "" },
    ];

    var VersionMetodologia = [
        { nome: "Git", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", descricao: "" },
        { nome: "Github", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", descricao: "" },
        { nome: "Ágil Scrum", imagem: "https://cdn-icons-png.flaticon.com/512/2784/2784065.png", descricao: "" },
        { nome: "Kanban", imagem: "https://cdn-icons-png.flaticon.com/512/5360/5360804.png", descricao: "" },
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
                    <Box className="box-Habilidades" sx={{ borderColor: "white", borderBottomStyle: "solid" }} marginTop={2}>
                        <Typography variant="h4">
                            Habilidades
                        </Typography>
                    </Box>
                    <Box className="box-Habilidades" marginTop={2}>
                        <SettingsIcon className="icones" />
                        <Typography variant="h6">
                            Back-End
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 202,
                            height: 50,
                        },
                        justifyContent: "center"
                    }}>
                        {tecnologiasBackEnd.map(item =>
                            <Paper className="paper"
                                elevation={10}
                                sx={{
                                    p: 2,
                                    margin: 'auto',
                                    maxWidth: 135,
                                    flexGrow: 1,
                                    backgroundColor: "bisque",
                                }}
                            >
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="space-evenly"
                                    alignItems="center"
                                    xs>
                                    <img src={item.imagem} alt={"Imagem do " + item.nome} className="logo" />
                                    {item.nome}
                                </Grid>
                            </Paper>
                        )}
                    </Box>
                    <Box className="box-Habilidades" marginTop={2}>
                        <SettingsIcon className="icones" />
                        <Typography variant="h6">
                            Front-End
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 202,
                            height: 50,
                        },
                        justifyContent: "center"
                    }}>
                        {tecnologiasFrontEnd.map(item =>
                            <Paper className="paper"
                                elevation={10}
                                sx={{
                                    p: 2,
                                    margin: 'auto',
                                    maxWidth: 135,
                                    flexGrow: 1,
                                    backgroundColor: "bisque",
                                }}
                            >
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="space-evenly"
                                    alignItems="center"
                                    xs>
                                    <img src={item.imagem} alt={"Imagem do " + item.nome} className="logo" />
                                    {item.nome}
                                </Grid>
                            </Paper>
                        )}
                    </Box>
                    <Box className="box-Habilidades" marginTop={2}>
                        <EditIcon className="icones" />
                        <Typography variant="h6">
                            Versionamento e Metodologias
                        </Typography>
                    </Box>
                    <Box marginBottom={2} sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                            width: 202,
                            height: 50,
                        },
                        justifyContent: "center"
                    }}>
                        {VersionMetodologia.map(item =>
                            <Paper className="paper"
                                elevation={10}
                                sx={{
                                    p: 2,
                                    margin: 'auto',
                                    maxWidth: 135,
                                    flexGrow: 1,
                                    backgroundColor: "bisque",
                                }}
                            >
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="space-evenly"
                                    alignItems="center"
                                    xs>
                                    <img src={item.imagem} alt={"Imagem do " + item.nome} className="logo" />
                                    {item.nome}
                                </Grid>
                            </Paper>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Habilidades
