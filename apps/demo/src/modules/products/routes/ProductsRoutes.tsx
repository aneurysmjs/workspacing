import { Route, Routes } from 'react-router-dom';

import HomePage from '@/modules/products/pages/ProductsPage';
// import Layout from '@/components/common/Layout';
import SidebarLayout from '@/modules/products/layouts/SidebarLayout';
import StoreLayout from '@/modules/products/layouts/StoreLayout';

const HomeRoutes = () => (
  <Routes>
    <Route element={<StoreLayout />} path="/">
      <Route index element={<HomePage />} />
    </Route>
  </Routes>
);

export default HomeRoutes;
