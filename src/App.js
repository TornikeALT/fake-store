import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './UI/RootLayout';
import All from './pages/All';
import HomePage from './pages/HomePage';
import Electronics from './pages/Electronics';
import Jewelry from './pages/Jewelery';
import MenCloth from './pages/MenCloth';
import WomenCloth from './pages/WomenCloth';
import CategoriesLayout from './UI/CategoriesLayout';
import ProductDetail from './pages/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/cart', element: <Cart /> },

      {
        path: '/categories',
        element: <CategoriesLayout />,
        children: [
          { path: '/categories/all', element: <All /> },
          { path: '/categories/electronics', element: <Electronics /> },

          { path: '/categories/jewelery', element: <Jewelry /> },

          { path: '/categories/mencloth', element: <MenCloth /> },

          { path: '/categories/womencloth', element: <WomenCloth /> },
        ],
      },
      {
        path: `/categories/women's clothing/:productId`,
        element: <ProductDetail />,
      },
      {
        path: `/categories/men's clothing/:productId`,
        element: <ProductDetail />,
      },
      {
        path: '/categories/electronics/:productId',
        element: <ProductDetail />,
      },
      {
        path: '/categories/jewelery/:productId',
        element: <ProductDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
