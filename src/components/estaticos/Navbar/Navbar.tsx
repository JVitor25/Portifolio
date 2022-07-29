import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react'
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky" className="appbar">
                    <Toolbar variant="dense" className="toolbar">
                        <Box paddingLeft={10}>
                            <img src="https://i.imgur.com/TG26dDJ.png" alt="Nome Horizontal" className="nomeHorizontal" />
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="space-evenly" paddingRight={10}>
                            <Box px={2}>
                                <Typography> Home </Typography>
                            </Box>
                            <Box px={2}>
                                <Typography> Habilidades </Typography>
                            </Box>
                            <Box px={2}>
                                <Typography> Projetos </Typography>
                            </Box>
                            <Box px={2}>
                                <Typography> Contato </Typography>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;