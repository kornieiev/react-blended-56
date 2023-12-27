import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Rates from 'pages/Rates';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBaseCurrency } from '../redux/operations';
import { setBaseCurrency } from '../redux/currencySlice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      dispatch(fetchBaseCurrency(pos.coords));
    }

    function error(err) {
      dispatch(setBaseCurrency('USD'));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

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
