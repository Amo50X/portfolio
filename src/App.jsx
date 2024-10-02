import './App.css';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio';
import Design from './Components/work/Design';


function App() {
  
  return (
    <>

       <Routes>
        <Route path='/' element={<Portfolio/>}/>
        <Route path='/model' element={<Design/>}/>
       </Routes>
    </>
  )
}

export default App
