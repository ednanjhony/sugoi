import { BrowserRouter as Router } from 'react-router-dom';
import Routes  from './routes';

import { Globalstyle } from './styles/global';

function App() {
  return (
    <>
      <Router>
        <Routes />
        <Globalstyle />
      </Router>
    </>
  );
}

export default App;
