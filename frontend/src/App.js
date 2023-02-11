import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main/Main'
import ImportFile from './components/ImportFile';
const App=()=> {
 return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/main' element={<Main/>}/>
  </Routes>
  </BrowserRouter>
  </>
 )
}

export default App;
