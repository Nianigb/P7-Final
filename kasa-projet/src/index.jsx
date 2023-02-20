import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import About from './pages/AboutUs/AboutUs';
import Error from './pages/Error/Error';
import Logements from './pages/Logements/Logements'


// Création des routes pour l'application en single page
// On définit l'index comme étant la racine du projet
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="singleproduct/:id" element={<Logements />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
