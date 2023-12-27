import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Rates from 'pages/Rates';
import { useEffect } from 'react';
import { getLocation } from 'service/location';

export const App = () => {
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      getLocation(pos.coords);
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="rates" element={<Rates />} />
        </Route>
      </Routes>
    </>
  );
};
