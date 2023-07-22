import { Outlet } from 'react-router-dom';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';

function CategoriesLayout() {
  return (
    <>
      <Categories />
      <Outlet />
    </>
  );
}

export default CategoriesLayout;
