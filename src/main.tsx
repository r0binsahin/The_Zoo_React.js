import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AnimalList } from './pages/AnimalList';
import { animalsLoader } from './loader/animalsLoader';
import { Error } from './pages/Error';
import { AnimalPage } from './pages/AnimalPage';
import { StartPage } from './pages/StartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage></StartPage>,
    errorElement: <Error></Error>,
  },
  {
    path: '/animals',
    element: <AnimalList />,
    loader: animalsLoader,
  },
  {
    path: 'animals/:id',
    element: <AnimalPage></AnimalPage>,
    loader: animalsLoader,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
