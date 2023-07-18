import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComponent from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import HooksSection from './Components/HooksSection/HooksSection';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="*" element={<HomeComponent/>} />
        <Route path="/hooks" element={<HooksSection/>} />
      </Routes>
    </Router>
  );
}

export default App;
