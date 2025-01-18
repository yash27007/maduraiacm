import { lazy, Suspense, useState, useEffect } from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './Components/Loader/Loader'; // Import the Loader component

// Lazy load the Gallery and Events components
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));
const Events = lazy(() => import('./pages/Events/Events'));
const NotFound = lazy(() => import('./pages/NotFound.jsx')); // Import the NotFound component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate the initial loading phase of the website
    setTimeout(() => {
      setIsLoading(false); // Hide the loader after 3 seconds (can be adjusted)
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loader />; // Show the loader while the app is loading
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        
        {/* Gallery Route with Suspense and the Loader as fallback */}
        <Route 
          path='/gallery' 
          element={
            <Suspense fallback={<Loader />}> {/* Show Loader during lazy loading */}
              <Gallery />
            </Suspense>
          } 
        />

        {/* Events Route with Suspense and the Loader as fallback */}
        <Route 
          path='/events' 
          element={
            <Suspense fallback={<Loader />}> {/* Show Loader during lazy loading */}
              <Events />
            </Suspense>
          } 
        />

        {/* NotFound Route with Suspense and the Loader as fallback */}
        <Route 
          path='*' 
          element={
            <Suspense fallback={<Loader />}> {/* Show Loader during lazy loading */}
              <NotFound />
            </Suspense>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
