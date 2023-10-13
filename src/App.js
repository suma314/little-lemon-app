import React from 'react';
import Navbar from './components/Nav';
import Footer from  './components/Footer';
import MainLayout from './components/main';

import 'App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <MainLayout />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
