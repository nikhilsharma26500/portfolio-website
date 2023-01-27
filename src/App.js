<<<<<<< HEAD
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        {/* Adding path for the home component with path set as home component */}
        <Route index element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
=======
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        {/* Adding path for the home component with path set as home component */}
        <Route index element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
>>>>>>> 6baae46a645b1d48ba59b4d98f774b1dff548cfd
