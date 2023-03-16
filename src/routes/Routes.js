import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Profil from "../pages/Profil/Profil"

/**
 * React component for managing the application routes.
 *
 * @return {JSX.Element} React component for the application routes.
 */
const Routes = () => {

    // Create the router and define the application routes.
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Navbar />}>
          <Route path="/profil/:userId" element={<Profil />} />
        </Route>
      )
    );
  
    /**
     * React component for managing the application routes.
     *
     * @return {JSX.Element} React component for the application routes.
     */
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  };
  
  export default Routes;