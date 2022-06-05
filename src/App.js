import './App.css';
import {
  BrowserRouter ,
  Routes,
  Route,
  
} from "react-router-dom";

  import About from './components/About';
 import Home from './components/Home';
import Topic from './components/Topic';
import Nav from './components/Nav';

function App() {
  return (
   
   <>
       <BrowserRouter>
       <Nav/>
      <Routes>
        <Route exact path="/" element={<Home />} />
          
        
        <Route path="/about" element={<About />}/>
        <Route path="/topic" element={<Topic />}/>
        </Routes>
    
  </BrowserRouter>
  </>
);
  }


export default App;
