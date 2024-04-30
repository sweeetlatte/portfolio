import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';
import './App.scss';

const Main = lazy(() => import('./layouts/Main'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Works = lazy(() => import('./pages/Works'));
const Contact = lazy(() => import('./pages/Contact'));
const ErrorPage = lazy(() => import('./pages/Error'));

function App() {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Main />}>
        <Route index element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.WORKS} element={<Works />} />
        <Route path={routes.CONTACT} element={<Contact />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
