import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Blog from './components/Blog';
import Menu from './components/Menu';
import Page from './components/Page';
import Shop from './components/Shop';
import Contact from './components/Contact';


function App() {
  return (

    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/page" element={<Page />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}


export default App;
