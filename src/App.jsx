import Navbar from './components/Navbar/Navbar'
import Coin from './pages/coin/Coin';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
 
  return (
   <div className='app'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/coin/:id' element={<Coin />} />
    </Routes>
    </BrowserRouter>
    
   </div>
      )
}

export default App
