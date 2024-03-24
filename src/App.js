import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './components/Home';
import Cartpage from './components/Cartpage';
import { useState } from 'react';
function App() {
  const [cart,setcart]=useState([])

  return (
    <BrowserRouter>
          <Header/>
<div className="App">
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Cartpage" element={<Cartpage/>} />
</Routes>

</div>
    </BrowserRouter>
  );
}

export default App;
