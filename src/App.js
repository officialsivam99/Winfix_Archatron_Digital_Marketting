import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './containers/Home';
import Aboutus from './containers/Aboutus';
import Teams from './containers/Teams';
import Services from './containers/Services';

import Notfound from './containers/Notfound';
import NewsLetters from './components/NewsLetters';
import Price from './containers/Price';
import Blog from './containers/Blog';
import DigitalMarketing from './containers/Digital';
import WebDesign from './containers/WebDesign';
import WebDevelopment from './containers/WebDevelopment';
import SocialMediaMarketing from './containers/SocialMedia';
import SEO from './containers/SEO';
import PPC from './containers/PPC'
import EmailMarketing from './containers/Email';
import DisclaimerPage from './components/DisclaimerPage';
import ReturnAndExchangePage from './components/ReturnAndExchangePage';
import TermsAndConditionsPage from './components/TermsAndConditionsPage';
import Contactus from './containers/Contactus';
import Privacy from './containers/Privacy';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/price" element={<Price />} />
        <Route path="/Contactus" element={<Contactus />} />
        {/* 404 Not Found route */}
        <Route path="*" element={<Notfound />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
        <Route path="/WebDesign" element={<WebDesign />} />
        <Route path="/WebDevelopment" element={<WebDevelopment />} />
        <Route path="/SocialMediaMarketing" element={<SocialMediaMarketing />} />
        <Route path="/SEO" element={<SEO />} />
        <Route path="/PPC" element={<PPC />} />
        <Route path="/EmailMarketing" element={<EmailMarketing />} />
        <Route path="/DisclaimerPage" element={<DisclaimerPage />} />
        <Route path="/ReturnAndExchangePage" element={<ReturnAndExchangePage />} />
        <Route path="/TermsAndConditionsPage" element={<TermsAndConditionsPage/>} />
        <Route path="/Privacy" element={<Privacy />} />

        
      </Routes>
      
      
      <Footer />
    </div>
  );
}

export default App;
