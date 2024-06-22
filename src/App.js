import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Organisers from './pages/Organisers';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/organisers' element={<Organisers />} />
      </Routes>
    </div>
  );
}

export default App;


