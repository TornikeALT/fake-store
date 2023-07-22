import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Outlet } from 'react-router-dom';
import Newsletter from '../components/Newsletter';

function RootLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Newsletter />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default RootLayout;
