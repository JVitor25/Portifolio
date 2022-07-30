import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react'
import "./Sobre.css";

function Sobre() {
    return (
        <>
            <Grid className="GridContainerSobre"
                container
                direction="row"
                alignItems="stretch"
                xs={10}
                sm={10}
                md={9}
                lg={7}
                xl={7}>
                <Grid item sm={6} xs={12}>
                    <Box className="box-Ilustracao">
                        <img src="https://img.freepik.com/vetores-gratis/icones-de-jogos-isometricos-icones-3d-planos-com-simbolos-de-jogos_1284-53075.jpg?w=826&t=st=1659191144~exp=1659191744~hmac=c194cea40c6e862a2e849fc2f57e7f32c1ea2f68861bae074e26d82f299bc5e1" alt="Imagem Ilustratviva" className="ilustracao" />
                    </Box>
                </Grid>
                <Grid item container direction="column" sm={6} xs={12} justifyContent="flex-start" className="GridItemSobre">
                    <Box className="box-Sobre">
                        <Box sx={{ borderColor: "white", borderBottomStyle:"solid"}}>
                            <Typography variant="h4">
                                Sobre mim
                            </Typography>
                        </Box>
                        <Box py={3}>
                            <Typography>
                                Olá! sou João Vitor Lima, tenho 19 anos e sou um jovem mineiro apaixonado por matemática e resoluções de problemas. Conheci a  programação no primeiro ano do meu curso técnico em Automação Industrial, onde tive o contato com a linguagem C. Sou um desenvolvedor Java Full Stack Júnior formado pela ONG Generation Brasil, e atualmente curso Engenharia de Controle e Automação.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                Me identifico muito o segmento da área de tecnologia e por isso eu sei que posso agregar muito ao mundo Tech.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Sobre