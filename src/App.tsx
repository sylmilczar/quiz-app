import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import BaseLayout from './layouts/BaseLayout';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  [
    {
      children: [
        { element: <HomePage />, path: '/' },
        { element: <GamePage />, path: '/game' },
      ],
      element: <BaseLayout />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    },
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
