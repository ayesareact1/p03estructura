import logo from './img/logo.svg'; // Los estáticos deben ser importados
import './App.css';

function App() {

  const mensaje = '¡Hola Mundo!';
  const urlPic = 'https://i.ibb.co/HH9yRts/2.jpg';

  const footer = <footer><p>&copy; 2022 ACME</p></footer>;

  return (
    <div className='container'>
      <h1>{mensaje}</h1>
      <img className='logo' src={logo} />
      <img className='logo' src={urlPic} />
      {footer}
    </div>
  );
}

export default App;
