import type { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';

import BazPage from '@/modules/home/pages/BazPage';

export const BazRouter: FunctionComponent = () => (
  <Routes>
    <Route element={<BazPage />} path="/baz" />
  </Routes>
);
