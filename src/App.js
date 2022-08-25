
import AllRoutes from './AllRoutes';
import './App.css';
import Footer from './component/Footer';
import Free from './component/Free';
import Navbar from './component/Navbar';
import Slider from './slider/slider';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <AllRoutes/>
      <Footer/>
      <Free/>
    </div>
  );
}

export default App;
