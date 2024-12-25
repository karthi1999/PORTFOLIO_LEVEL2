import React, { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader';

// const Home = lazy(() => import('./pages/Home/Home'));
const Navbar = lazy(() => import('./pages/Navbar/Navbar'));

function App() {

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Navbar />
        {/* <Home /> */}
      </Suspense>
    </div>
  )
}

export default App
