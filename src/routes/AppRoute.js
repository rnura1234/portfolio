import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home/home';
import Contact from '../pages/contact/contact';
import About from '../pages/about/about';
import Project from '../pages/project/project';

function AppRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='contact' caseSensitive={false} element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='project' element={<Project />} />
    </Routes>
  );
}

export default AppRoute;
