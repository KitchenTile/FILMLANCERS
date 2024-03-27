import home_page_first_pic from './images/home_page_first_pic.JPG';
import './App.css';
import MainComponent from './Components/ReusableCommps/MainPageComps';
import ImageHoverComponent from './Components/ImagesOnHover/MainPageImage';
// import "D:/REACTFILMLANCERS/filmlancers/src/images/home_page_photo_bw.jpg";
// import "D:/REACTFILMLANCERS/filmlancers/src/images/home_page_photo.jpg";

export const App = () => {
  return (
    <div className="App">
      <header>
        <img src={home_page_first_pic} alt="hpfp" style={{ maxWidth: '100%', height: 'auto' }}/> 
      </header>
      <ImageHoverComponent />
      <MainComponent />
    </div>

  );
}

export default App;
