import home_page_first_pic from './images/home_page_first_pic.JPG';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      <header>
        <img src={home_page_first_pic} alt="hpfp" style={{ maxWidth: '100%', height: 'auto' }}/> 
      </header>
    </div>
  );
}

export default App;
