import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import reportWebVitals from '../../filmlancers/src/reportWebVitals';
import RentalCameraPage from './Pages/Rentalcamerapage';
import Rentalpage from './Pages/Rentalpage'; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RentalCostumePage from './Pages/Rentalcostumespage';
import RentalLightingPage from './Pages/Rentallightingpage';
import RentalPropPage from './Pages/Rentalproppage';
import RentalSoundPage from './Pages/Rentalsoundpage';
import RentAllPage from './Pages/Rentallpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/RentalPage",
    element: <Rentalpage />
  },

  {
    path: "/RentalCostumePage",
    element: <RentalCostumePage />
  },
  {
    path: "/RentalCameraPage",
    element: <RentalCameraPage />
  },
  {
    path: "/RentalLightingPage",
    element: <RentalLightingPage />
  },
  {
    path: "/RentalPropPage",
    element: <RentalPropPage />
  },
  {
    path: "/RentalSoundPage",
    element: <RentalSoundPage />
  },
  {
    path: "/RentAllPage",
    element: <RentAllPage />
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Header />
  //   <App />
  //   <Rentalpage />
  //   <RentalCameraPage />
  // </React.StrictMode>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
