import { Box } from '@mui/material';
import React from 'react';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './components/sections/home/Home';

function App() {
  return (
    <div className="visualizacao">
      <Navbar />
      <Box display="flex" sx={{backgroundColor:"#43759B", justifyContent:"center"}}>
        <Home />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
