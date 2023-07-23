import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminLogin } from './pages/adminLogin';
import { AdminManageList } from './pages/adminManageList/adminList';
import TestPage from './pages/testPage';
import { EditPage } from '@pages/editPages/editPage';
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
    path: '/edit',
    element: <EditPage />,
    children: [
      {
        path: '/edit/:device',
        element: <EditPage />,
        children: [
          {
            path: '/edit/:device/:id',
            element: <EditPage />,
          }
        ]
      }
    ]
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
