import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminLogin } from './pages/adminLogin';
import { AdminManageList } from './pages/adminManageList/adminManageMenu';
import { AdminManagePage } from '@pages/adminManageList/adminManagePage';
import { AdminManage } from '@pages/adminManageList/adminManage';
import TestPage from './pages/testPage';
import { EditPage } from '@pages/editPages/editPage';
import { AdminMangePageAction } from '@pages/adminManageList/adminManagePage';
import { AdminManageLoader } from '@pages/adminManageList/adminManage';
import { AdminMangeMenuAction } from '@pages/adminManageList/adminManageMenu';
import {
  editPageLoader,
  editPageAction,
} from '@pages/editPages/editPageLoaderAndAction';
import { PreviewPage } from '@pages/previewPages/previewPage';
import { previewPageLoader } from '@pages/previewPages/previewPageLoader';
import { previewPageAction } from '@pages/previewPages/previewPageLoader';
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
    action: editPageAction,
  },
  {
    path: '/preview/:id',
    element: <PreviewPage />,
    loader: previewPageLoader,
    action: previewPageAction,
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
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
