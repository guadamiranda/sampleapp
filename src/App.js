import CountriesSearch from './Components/CountiresSearch/CountriesSearch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountriesList from './Components/CountiresList/CountriesList';
import HooksSection from './Components/HooksSection/HooksSection';
import ApiSection from './Components/ApiSection/ApiSection';
import HomeComponent from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="*" element={<HomeComponent/>} />
        <Route path="/hooks" element={<HooksSection/>} />
        <Route path="/api" element={<ApiSection/>} />
        <Route path="/countriesList" element={<CountriesList/>}></Route>
        <Route path="/countrieSearch" element={<CountriesSearch/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
