import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header/Header';
import Pricing from './components/Pricing/Pricing ';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Support from './components/Support/Support';
import Blog from './components/Blog/Blog';
import Start from './components/Modal/Start';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <Router>
<Navbar />
<Routes>
  <Route path="/" element={<Header/>} />
  <Route path="/start" element={<Start/>} />
  <Route path="/services" element={<Services/>} />
  <Route path="/pricing" element={<Pricing/>} />
  <Route path="/contact" element={<Contact/>} />
  
</Routes>
<Footer/>

</Router>
  );
}


export default App;
