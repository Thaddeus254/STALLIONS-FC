import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FixturesPage from './pages/Fixtures';
import Team from './pages/Team';
import PlayerBio from './pages/PlayerBio';
import Academy from './pages/Academy';
import Staff from './pages/Staff';
import Gallery from './pages/Gallery';
import Partners from './pages/Partners';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/fixtures" element={<FixturesPage />} />
          <Route path="/player/:id" element={<PlayerBio />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
