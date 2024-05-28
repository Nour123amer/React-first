
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import './App.css'
import Home from './pages/home/home'
import Contact from "./pages/Contact";


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home />},
        {
          path: "/about",
          element: <About />,
         
        },
        {
          path:"/portfolio",
          element:<Portfolio />,
        },
        {
          path: "/contact",
          element: <Contact/>,
         
        }]

      }])

  return (
    <>

    <RouterProvider router={routes}>

      </RouterProvider>
    
    </>
  )
}

export default App
