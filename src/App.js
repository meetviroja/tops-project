import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import MainRoutes from './MainRoutes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={MainRoutes} />
    </div>
  );
}

export default App;
