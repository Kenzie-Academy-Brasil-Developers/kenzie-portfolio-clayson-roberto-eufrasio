import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '@/styles/Global';
import { NavBar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { About } from './pages/about';
import { Home } from './pages/home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle>
        <NavBar />
        <Home />
        <Footer />
    </GlobalStyle>
  </React.StrictMode>
)
