import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import './style.scss';

export default function Main() {
  return (
    <div className="main">
      <Navbar />
      <Outlet />
    </div>
  );
}
