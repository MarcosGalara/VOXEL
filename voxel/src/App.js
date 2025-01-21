
import { Landing } from './views/index.js';
import { Route, Routes } from 'react-router-dom';

function App() {

  //para generar el ternario de que muestre la navbar en todo viewport a excepcion de en el landing
  //const location = useLocation();

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Landing />}/>
      </Routes>
    </>
  );
}

export default App;
