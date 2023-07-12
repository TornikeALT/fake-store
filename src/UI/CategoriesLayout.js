import { Outlet } from 'react-router-dom';
import Categories from '../components/Categories';

function CategoriesLayout() {
  return (
    <>
      <Categories />
      <Outlet />
    </>
  );
}

export default CategoriesLayout;
