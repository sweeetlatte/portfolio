import { Routes, Route } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import routes from './routes';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Main />}>
        <Route index element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.WORKS} element={<Works />} />
        <Route path={routes.CONTACT} element={<Contact />} />
        <Route path='*' element={<div className='full-scr-flex-container'>error</div>} />
      </Route>
    </Routes>
  );
}

export default App;
