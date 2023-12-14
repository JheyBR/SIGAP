import { BarraSuperior } from './ppal/BarraSuperior';
import { BarraSecundaria } from './ppal/BarraSecundaria';
import { AllDashBoard } from './ppal/AllDashBoard';
import { FooterApp } from './ppal/FooterApp';
import { LeftBarra } from './ppal/LeftBarra';
import { MenuLeftBarra } from './ppal/MenuLeftBarra';
import { MenuCardsDashBoard } from './ppal/MenuCardDashBoard';
import { CardDashBoard } from './ppal/CardDashBoard';
import { defaulttitlecards } from './App_data';
import { defaulttitleleftbarra } from './App_data';
import React from 'react';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import './App.css';
import ToDos from './Pages/ToDos';





function App() {
  return (
      
    <React.Fragment>
          <BarraSuperior />
          <BarraSecundaria />
          <AllDashBoard >  
              <MenuLeftBarra >
                {defaulttitleleftbarra.map(titleleftarray => (
                  <LeftBarra
                  key={titleleftarray.leftoption} 
                  leftoption={titleleftarray.leftoption} 
                  iconleft={titleleftarray.iconleft}
                  iconSTleft={titleleftarray.iconSTleft}
                  linkleft={titleleftarray.linkleft}
                  /> ))}  
              </MenuLeftBarra>  
              <MenuCardsDashBoard >
                  {defaulttitlecards.map(titlecardarray => (
                    <CardDashBoard 
                    key={titlecardarray.titlecard} 
                    titlecard={titlecardarray.titlecard} 
                    subtitlecard={titlecardarray.subtitlecard}
                    iconcard={titlecardarray.iconcard}
                    linkcard={titlecardarray.linkcard}
                    iconStcard={titlecardarray.iconStcard}
                    /> ))}
              </MenuCardsDashBoard>
          </AllDashBoard>
          <FooterApp />
    </React.Fragment>
   
      
      );
}



export default App;

