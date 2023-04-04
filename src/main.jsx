import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css'
import { RecoilRoot } from 'recoil';
import About from './pages/about';
import VehicleModels from './pages/vehicle-models';
import Team from './pages/team';
import Contact from './pages/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/vehicle-models",
    element: <VehicleModels />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>      
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
