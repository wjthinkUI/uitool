import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AdminLogin } from './pages/adminLogin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLogin/> ,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
