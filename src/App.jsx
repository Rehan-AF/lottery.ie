import { ScrollRestoration } from 'react-router-dom';
import './App.css';
import Routers from './routers';

function App() {
  return (
    <ScrollRestoration onBeforeRestore={() => window.scrollTo(0, 0)}>
      <Routers />
    </ScrollRestoration>
  );
}

export default App;
