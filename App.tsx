
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AirportDetails from './components/AirportDetails';
import AirportShuttleDetail from './components/AirportShuttleDetail';
import AirportPrivateDetail from './components/AirportPrivateDetail';
import LeisureDetails from './components/LeisureDetails';
import ShoppingDetails from './components/ShoppingDetails';
import ThemeParkDetails from './components/ThemeParkDetails';
import EventDetails from './components/EventDetails';
import LocalTripDetails from './components/LocalTripDetails';
import Support from './components/Support';

const App: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airport" element={<AirportDetails />} />
        <Route path="/airport/icn-seoul-shuttle" element={<AirportShuttleDetail />} />
        <Route path="/airport/icn-gangnam-private" element={<AirportPrivateDetail />} />
        <Route path="/leisure" element={<LeisureDetails />} />
        <Route path="/shopping" element={<ShoppingDetails />} />
        <Route path="/theme-park" element={<ThemeParkDetails />} />
        <Route path="/event" element={<EventDetails />} />
        <Route path="/local-trip" element={<LocalTripDetails />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
};

export default App;
