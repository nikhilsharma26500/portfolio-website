import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/" element={<Sidebar/>}/>
        {/* Adding path for the home component with path set as home component */}
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
