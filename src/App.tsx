import { Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import Habilidades from './components/sections/habilidades/Habilidades';
import Home from './components/sections/home/Home';
import Sobre from './components/sections/sobre/Sobre';

function App() {
  return (
    <div className="visualizacao" id="Home">
      <Navbar />
      <Grid container
        direction="column"
        alignItems="center"
        sm={12}
      >
        <Box className="gridItem-App" sx={{ backgroundColor: "#43759B" }}>
          <Home />
        </Box>
        <Box className="gridItem-App" sx={{ backgroundColor: "#486983" }} id="Sobre">
          <Sobre />
        </Box>
        <Box className="gridItem-App" sx={{ backgroundColor: "#1D2D39" }} id="Habilidades">
          <Habilidades />
        </Box>
      </Grid>
      {/* <Footer /> */}
    </div >
  );
}

export default App;
