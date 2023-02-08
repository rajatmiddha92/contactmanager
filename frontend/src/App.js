import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Login from './components/Login';
import Signup from './components/Signup';
import ImportFile from './components/ImportFile'
import ImportComplete from './components/ImportComplete'
import DeleteContactComfirmation from './components/DeleteContactComfirmation';
import DeleteSuccessfullyFile from './components/DeleteSuccessfullyFile';
const App=()=> {
 return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
  </Routes>
  </BrowserRouter>
  </>
 )
}

export default App;
