import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './components/layout/MainLayout';
import SplashScreen from './components/common/SplashScreen';
import { cinematicAudio } from './utils/cinematicAudio';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  // Splash Screen initial state: shows on initial site entry/link click, then fades out smoothly
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
    // When splash screen finishes and reveals the website, trigger hero audio
    cinematicAudio.onEnterHero();
  };

  return (
    <>
      {/* Initial Brand Entry Splash Screen with automatic fade-out */}
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen
            key="premiere-splash"
            onComplete={handleSplashComplete}
          />
        )}
      </AnimatePresence>

      {/* Main Website Application Routes */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
