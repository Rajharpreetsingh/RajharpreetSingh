
import Navbar from "./Navbar.jsx";
import HeroSection from "./Hero.jsx"
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Skills from "./Skills.jsx";
import Certifications from "./Certifications.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Footer from "./Footer.jsx"
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';


export default function App() 
{

  return (
    <>

   <BrowserRouter>
    
      <Navbar/>
   
      
    <Routes>

      <Route path="/" element={ <HeroSection/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/Certifications" element={<Certifications/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/experience" element={<Experience/>} />
      <Route path="/about" element={<About/>} />
      

     
  
      </Routes>
      </BrowserRouter>

    <Footer/>
    </>
  );
}
