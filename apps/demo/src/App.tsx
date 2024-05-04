import { FunctionComponent, StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './assets/css/styles.css';

import Routing from '@/routing';

const queryClient = new QueryClient();

const App: FunctionComponent = () => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Routing />
    </QueryClientProvider>
  </StrictMode>
);

export default App;
