import { Route, Routes } from 'react-router-dom';

import HomePage from '@/modules/home/pages/HomePage';
import Layout from '@/components/common/Layout';

const HomeRoutes = () => (
  <Routes>
    <Route element={<Layout />} path="/">
      <Route index element={<HomePage />} />
    </Route>
  </Routes>
);

export default HomeRoutes;
