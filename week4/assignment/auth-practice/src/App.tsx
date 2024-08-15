import './App.css';

import { Global } from '@emotion/react';
import { authRoutes, mainRoutes, userRoutes } from '@routes';
import { GlobalStyle } from '@styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([...mainRoutes, ...authRoutes, ...userRoutes]);

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
