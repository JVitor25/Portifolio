import { Typography } from '@material-ui/core';
import { Box, Grid, TextField } from '@mui/material';
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactsIcon from '@mui/icons-material/Contacts';
import "./Contato.css";

function Contato() {
    return (
        <>
            <Grid className="GridContainerContato"
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                xs={11}
                sm={11}
                md={8}
                lg={6}
            >
                <Grid
                    item
                    container
                    justifyContent={{ xs: "center", sm: "space-between" }}
                    alignItems="center"
                    rowSpacing={{ xs: 2, sm: 0 }}
                    direction={{ xs: "column", sm: "row" }}
                    xs>
                    <Grid item >
                        <Box display="flex" paddingRight={1}>
                            <Typography variant="h4"> <ContactsIcon /> Contato </Typography>
                        </Box>
                    </Grid>
                    <Grid item >
                        <a href="mailto:joaovitorsocial25@gmail.com" target="_blank" className="text-decoration-none">
                            <Box display="flex">
                                <Box paddingRight={1}><EmailIcon /></Box>
                                <Typography variant="subtitle1"> joaovitorsocial25@gmail.com </Typography>
                            </Box>
                        </a>
                    </Grid>
                    <Grid item >
                        <a href="https://api.whatsapp.com/send?phone=5531993371380" target="_blank" className="text-decoration-none">
                            <Box display="flex">
                                <Box paddingRight={1}><PhoneIcon /></Box>
                                <Typography variant="subtitle1"> +55 (31) 99337-1380 </Typography>
                            </Box>
                        </a>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    marginTop={2}
                    justifyContent={{ xs: "center", sm: "space-evenly" }}
                    alignItems="center"
                    direction={{ xs: "column", sm: "row" }}
                    xs>
                    <Grid item xs={5}>
                        <Box className="Campo-Nome">
                            <TextField id="filled-basic" label="Nome" variant="filled" fullWidth />
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box className="Campo-Nome">
                            <TextField id="filled-basic" label="E-mail" variant="filled" fullWidth />
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    direction={{ xs: "column", sm: "row" }}
                    xs>
                    <Grid item xs={10}>
                        <Box className="Campo-Texto">
                            <TextField
                                id="filled-multiline-flexible"
                                label="Escreva sua mensagem aqui..."
                                multiline
                                rows={2}
                                maxRows={4}
                                variant="filled"
                                fullWidth
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default Contato