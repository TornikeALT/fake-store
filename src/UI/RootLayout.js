import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Outlet } from 'react-router-dom';
import Slider from '../components/Slider';

function RootLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
