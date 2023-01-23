import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '@/styles/Global';
import { NavBar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RouteMain } from './routes/MainRouter';
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle>
        <NavBar />
        <RouteMain />
        <Footer />
      </GlobalStyle>
    </BrowserRouter>
  </React.StrictMode>
)
