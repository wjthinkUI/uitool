import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminLogin } from './pages/adminLogin';
import { AdminManageList } from './pages/adminManageList/adminManageList';
import { AdminManagePage } from '@pages/adminManageList/adminManagePage';
import { AdminManage } from '@pages/adminManageList/adminManage';
import TestPage from './pages/testPage';
import { EditPage } from '@pages/editPages/editPage';
import { CompoTest } from '@pages/componentTest';

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
  },
  {
    path: '/adminlist',
    element: <AdminManage />,
    children: [
      {
        index: true,
        path: '/adminlist/menu',
        element: <AdminManageList />,
      },
      {
        path: '/adminlist/page',
        element: <AdminManagePage />,
      },
    ],
  },
  {
    path: 'compotest',
    element: <CompoTest />,
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
