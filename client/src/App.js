import React from 'react'
import './Stylesheet/App.css';
import HomePage from './components/HomePage';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Sell from './components/Sell';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/sell-product" element={<Sell />} />
      <Route path="/" element={ <HomePage /> }>
      </Route>
      <Route path="/user-signup" element={<div> <Header /> <SignUp /> </div>} > 
      </Route>
    </Routes>
    </BrowserRouter>
    /* <div className="App">
      <HomePage />
      <SignUp />
    </div> */
  );
}

export default App;
