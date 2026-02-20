import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App.jsx';

//P A G E S
import HomePage from './assets/pages/HomePage';
import FeaturesPage from './assets/pages/FeaturesPage.jsx';
import ThemesPage from './assets/pages/ThemesPage.jsx';
import BlogPage from './assets/pages/BlogPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/features',
        element: <FeaturesPage />,
      },
      {
        path: '/themes',
        element: <ThemesPage />,
      },
      {
        path: '/blog',
        element: <BlogPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
