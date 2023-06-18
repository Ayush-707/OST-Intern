
import Landing from './pages/LandingPage'
// import Drawer from './Components/MUI/Drawer'




import { Route,Routes } from "react-router-dom"
import './App.css'

function App() {

  
  return (
  <>
  

 
      <Routes>
          
            <Route exact path = '/' element = {<Landing/>} />
            {/* <Route exact path = '/Side' element = {<Drawer/>} /> */}
            


           
          




            
        
      </Routes>
    

    
 
  </>
  );
}

export default App;

