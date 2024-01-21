import Header from './components/Header'
import './App.css'
import { Routes ,Route} from 'react-router-dom'
import Body from './components/Body'
import Footer from './components/Footer'
import Men from './components/Men'
import Women from './components/Women'

function App() {


  return (
   <>
   
   <Header/>
   <Routes>
   <Route path="/" element={<Body/>}>
  </Route>
   <Route path="/men" element={<Men/>}>
  </Route>
   <Route path="/women" element={<Women/>}>
  </Route>
   </Routes>
   
   <Footer/>


   
   
   </>
  )
}

export default App
