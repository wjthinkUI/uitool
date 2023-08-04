import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminLogin } from './pages/adminLogin';
import { AdminManageList } from './pages/adminManageList/adminManageMenu';
import { AdminManagePage } from '@pages/adminManageList/adminManagePage';
import { AdminManage } from '@pages/adminManageList/adminManage';
import TestPage from './pages/testPage';
import { EditPage } from '@pages/editPages/editPage';
import { CompoTest } from '@pages/componentTest';
import { AdminMangePageAction } from '@pages/adminManageList/adminManagePage';
import { AdminManageLoader } from '@pages/adminManageList/adminManage';
import { AdminMangeMenuAction } from '@pages/adminManageList/adminManageMenu';
import { editPageLoader } from '@pages/editPages/editPageLoaderAndAction';
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
    loader: editPageLoader,
  },
  {
    path: '/adminlist',
    element: <AdminManage />,
    loader: AdminManageLoader,
    children: [
      {
        path: '/adminlist/menu', //nav loader, action
        element: <AdminManageList />,
        action: AdminMangeMenuAction,
      },
      {
        path: '/adminlist/page',
        element: <AdminManagePage />,
        // loader: AdminManageLoader,
        action: AdminMangePageAction,
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
