import background from './Assets/abstract-background.webp'

function App() {

  const myStyle = {
    backgroundImage: `url(${background})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div style={myStyle}>
      
    </div>
  );
}

export default App;
