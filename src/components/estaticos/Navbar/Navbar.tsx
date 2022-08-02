import { AppBar, Toolbar } from '@material-ui/core';
import { Box, Menu, Typography } from "@mui/material";
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./Navbar.css";

function Navbar() {
    const items = ["Home", "Sobre", "Habilidades", "Projetos", "Contato"];
    var ant = '#';
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position="sticky" className="appbar">
                <Toolbar variant="dense" className="toolbar">
                    <Box>
                        <img src="https://i.imgur.com/TG26dDJ.png" alt="Nome Horizontal" className="nomeHorizontal" />
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none', sm: 'none' }, justifyContent: "space-evenly" }}>
                        <Box paddingRight={1}>
                            Menu
                        </Box>
                        <Box onClick={handleOpenNavMenu}>
                            <MenuIcon />
                        </Box>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {items.map((item) => (
                                <a href={`${ant}${item}`} className="text-decoration-none sanduiche">
                                    <MenuItem key={item} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{item}</Typography>
                                    </MenuItem>
                                </a>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex', sm: 'flex' } }} >
                        {items.map((item) => (
                            <Box display="flex" alignItems="center" justifyContent="space-evenly" paddingRight={2}>
                                <a href={`${ant}${item}`} className="text-decoration-none">
                                    <Typography > {item} </Typography>
                                </a>
                            </Box>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}
{/*                     <Box paddingLeft={10}>
                            <img src="https://i.imgur.com/TG26dDJ.png" alt="Nome Horizontal" className="nomeHorizontal" />
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="space-evenly" paddingRight={10}>
                            <Box px={2}>
                                <a href="#home" className="text-decoration-none">
                                    <Typography > Home </Typography>
                                </a>
                            </Box>
                            <Box px={2}>
                                <a href="#sobre" className="text-decoration-none">
                                    <Typography > Sobre </Typography>
                                </a>
                            </Box>
                            <Box px={2}>
                                <a href="#habilidades" className="text-decoration-none">
                                    <Typography > Habilidades </Typography>
                                </a>
                            </Box>
                            <Box px={2}>
                                <a href="#projetos" className="text-decoration-none">
                                    <Typography > Projetos </Typography>
                                </a>
                            </Box>
                            <Box px={2}>
                                <a href="#contato" className="text-decoration-none">
                                    <Typography > Contato </Typography>
                                </a>
                            </Box>
                        </Box> */}


export default Navbar;