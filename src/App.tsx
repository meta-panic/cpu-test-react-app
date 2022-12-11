import Routes from './routes';

import { BrowserRouter } from 'react-router-dom';
import ThemeLayer from './themes';

function App() {
  return (
    <div>
      <ThemeLayer>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeLayer>
    </div>
  );
}

export default App;
