import React from 'react';
import Contatos from './components/Contatos';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Sobre from './components/Sobre';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Sobre/>
      <Services/>
      <Contatos/>
      <Footer/>
    </div>
  );
}

export default App;
