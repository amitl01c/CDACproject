
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import UserRegistration from './pages/UserRegister';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/userregistration' element={<UserRegistration/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
