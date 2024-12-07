import Home from './pages/Home';
import Gallery from './pages/Gallery/Gallery';
import Events from './pages/Events';
import {BrowserRouter, Routes,Route} from "react-router-dom"

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/events'  element={<Events/>} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App;