import { ScrollRestoration } from 'react-router-dom';
import './App.css';
import Routers from './routers';
import { Provider } from 'react-redux';
import { store } from './Store/store';

function App() {
  return <Routers />;
}

export default App;
