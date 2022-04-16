import background from './Assets/abstract-background.webp'
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './Pages/About-me';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  const myStyle = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
  }

  return (
    <div style={myStyle}>
      <Header/>
      <Navigation/>

    </div>

  );
}

export default App;
