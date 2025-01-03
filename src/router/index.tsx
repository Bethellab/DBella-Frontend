import { createBrowserRouter, Outlet } from "react-router-dom";

import BellasLayout from "@/pages/bellas-page";
import BellasHome from "@/pages/bellas-page/BellasHome";
import Details from "@/pages/bellas-page/Details";
import Success from "@/pages/bellas-page/Success";
import Login from "@/pages/bellas-auth/Login";
import SignUp from "@/pages/bellas-auth/SignUp";
import ResetPassword from "@/pages/bellas-auth/ResetPassword";
import UpdatePassword from "@/pages/bellas-auth/UpdatePassword";
import BellaLandingPage from "@/pages/bellas-page/LandingPage/BellaLandingPage";
import BellasLandingHome from "@/pages/bellas-page/LandingPage/Home/BellasLandingHome";
import About from "@/pages/bellas-page/LandingPage/About/About";
import Contact from "@/pages/bellas-page/LandingPage/Contact/Contact";
import DashboardLayout from "@/components/layout/DashboardLayout";

import Overview from "@/components/Dashboard/Overview/Overview";
import Schedules from "@/components/Dashboard/Schedules/Schedules";
import Orders from "@/components/Dashboard/Orders/Orders";
import Transactions from "@/components/Dashboard/Transactions/Transactions";
import Profile from "@/components/Dashboard/Profile/Profile";


const router = createBrowserRouter([
  {
   
    element: <BellaLandingPage />,
    children: [
      { path: "/home", element: <BellasLandingHome /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },

  {
    element: <BellasLayout />,
    children: [
      { path: "/", element: <BellasHome /> },
      {path: "/details/:id", element : <Details /> },
      {path: "/success", element : <Success/> },
      {path: "/bella-login", element : <Login /> },
      {path: "/bella-signup", element : <SignUp /> },
      {path: "/bella-reset", element : <ResetPassword /> },
      {path: "/bella-update", element : <UpdatePassword /> },

    ],
  },


  {
    
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      { path: "/overview", element: <Overview /> },
      { path: "/schedules", element: <Schedules /> },
      { path: "/orders", element: <Orders /> },
      { path: "/transactions", element: <Transactions /> },
      { path: "/profile", element: <Profile /> },
      
    ],
  },







 


 

]);

export { router };
