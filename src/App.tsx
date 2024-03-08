import { Routes, Route } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<>error</>} />
      </Route>
    </Routes>
  );
}

export default App;
