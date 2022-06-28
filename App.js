import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './Components/About';
import Contact from './Components/Contact';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Api from './Components/Api';
import Button from './Components/Button';
import Login from './auth/login/Login';
import Settings from './Components/Settings';
import Footer from './Components/Footer';
import SignupForm from './Components/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      
      {/* <Route path="/" element={<h1>Salaam React Router</h1>}/> */}
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/api" element={<Api/>}/>
      {/* <Route path="/settings" element={<Settings />}/> */}
      <Route path="/settings" element={<Settings/>}/>
      
     
      </Routes>
     
      {/* <Footer /> */}
      <Footer footerName="@Karbh IT Solutions 2022" 
                    footerClassName ="footer"  />

    </BrowserRouter>
    </>
  );
  }
export default App;
