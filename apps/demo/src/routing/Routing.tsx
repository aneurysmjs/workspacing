import { FunctionComponent } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import HomeRoutes from '@/modules/products/routes/ProductsRoutes';

const Routing: FunctionComponent = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<HomeRoutes />} />
    </Routes>
  </Router>
);

export default Routing;
