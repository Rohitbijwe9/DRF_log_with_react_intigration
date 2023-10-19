import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Add from './Component/Add';
import Show from './Component/Show';
import Update from './Component/Update';
import Delete from './Component/Delete';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/show' element={<Show/>}/>
    <Route path='/update/:pk/' element={<Update/>}/>
    <Route path='/delete/:pk/' element={<Delete/>}/>
   </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
