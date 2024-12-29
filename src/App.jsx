import React, { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader';
import "@fortawesome/fontawesome-free/css/all.css";

const Navbar = lazy(() => import('./pages/Navbar/Navbar'));
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

function App() {

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </Suspense>
    </div>
  )
}

export default App
