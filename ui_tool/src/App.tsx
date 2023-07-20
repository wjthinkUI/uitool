import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AdminLogin } from './pages/adminLogin';
import { AdminList } from './pages/adminList';
import TestPage from './pages/testPage';
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
    path: '/adminlist',
    element: <AdminList />,
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
