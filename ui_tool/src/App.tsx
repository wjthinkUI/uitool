import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminLogin } from './pages/adminLogin';
import { AdminManageList } from './pages/adminManageList/adminList';
import TestPage from './pages/testPage';
import { EditPage } from '@pages/editPages/editPage';
import { EditPageTablet } from '@pages/editPages/editPageTablet';
import { EditPageMobile } from '@pages/editPages/editPageMobile';
import { EditPageDesktop } from '@pages/editPages/editPageDesktop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminLogin />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
  {
    path: '/edit/:id',
    element: <EditPage />,
    children: [
      {
        path: 'desktop',
        element: <EditPageDesktop />,
      },
      {
        path: 'tablet',
        element: <EditPageTablet />,
      },
      {
        path: 'mobile',
        element: <EditPageMobile />,
      },
    ],
  },
  {
    path: '/adminlist',
    element: <AdminManageList />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
