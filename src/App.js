import background from './Assets/abstract-background.webp'
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './Pages/About-me';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import 'react-bootstrap-icons'
function App() {

  const myStyle = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
  }

  return (
    <div>
      <Header/>
      <Navigation/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>

  );
}

export default App;
