import logo from './logo.svg';
// import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Offers from './Asets/offers';
import Header from './Asets/menuBar/header';
import Footer from './Asets/menuBar/footer';
import Array from './Asets/array';
function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Routes>
    {/* <Route path='/' element={<Array />}/> */}
    <Route path='/' element={<Offers/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
