import home_page_first_pic from '../images/RENTALIMAGES/home_page_first_pic.JPG';
import './App.css';
import MainComponent from '../Components/ReusableComps/MainPageComps';
import Header from '../Components/Header/Header';
import React from 'react';



export const App = () => {

  return (
    <div className="App">
      <Header />
      <header>
        <img src={home_page_first_pic} alt="hpfp" style={{ maxWidth: '100%', height: 'auto' }}/> 
      </header>
      {/* <ImageHoverComponent /> */}
      <MainComponent />

    </div>

  );
}


export default App;

