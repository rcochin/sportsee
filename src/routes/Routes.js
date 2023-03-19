import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Profil from "../pages/Profil/Profil";
import Error from "../pages/Error/Error";
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
        <Route index element={<Navigate to="/profil/12" />} />
        <Route path="/profil/:userId" element={<Profil />} />
        <Route path="*" element={<Error />} />
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