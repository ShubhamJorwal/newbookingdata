import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Womenservices from "../pages/Home/homeComps/Services/Womenser";
import Mensservices from "../pages/Home/homeComps/Services/Menservices";
import Childservices from "../pages/Home/homeComps/Services/Chilservices";

import PaymentSec from "../pages/Home/homeComps/PaymentsSer/Checkout";
// import Login from "../pages/SecondDashboard/creates/CreateApt/login/Login";
// import Bookings from "../pages/SecondDashboard/pagesForDashboard/bookings/Bookings";
// import Bills from "../pages/SecondDashboard/pagesForDashboard/bills/Bills";
// import Products from "../pages/SecondDashboard/pagesForDashboard/products/Products";
// import Customers from "../pages/SecondDashboard/pagesForDashboard/customers/Customers";
// import StylistList from "../pages/SecondDashboard/pagesForDashboard/Stylists/StylistList";
import MainLogin from "../pages/Login/Main-Login";
// import CreateApt from "../pages/SecondDashboard/creates/CreateApt/CreateApt";
// import CorrectedDashBoard from "../pages/SecondDashboard/DashBoard/CorrectedDashBoard";
// import SaveAppointment from "../pages/SecondDashboard/DashBoard/SaveAppointment";
// import CancelAppointment from "../pages/SecondDashboard/DashBoard/CancelAppointment.jsx";
// import ConfirmAppointment from "../pages/SecondDashboard/DashBoard/ConfirmAppointment.jsx";
// import SavedApt from "../pages/SecondDashboard/DashBoard/SavedApt";

// import CreateBooking from '../pages/SecondDashboard/creates/CreateBooking/CreateBooking'
import ProtectedRouteForUser from "./AuthRoutes";
import UserEndBooking from "../pages/Home/NewCreateBooking";
// import Test02 from "../pages/test/Test2";
// import WomenserApt from "../pages/SecondDashboard/creates/CreateApt/ServicesOfApt/WomenserApt";
// import ChildServicesApt from "../pages/SecondDashboard/creates/CreateApt/ServicesOfApt/ChilservicesApt";
// import MenservicesApt from "../pages/SecondDashboard/creates/CreateApt/ServicesOfApt/MenservicesApt";
// import CheckoutOfApt from "../pages/SecondDashboard/creates/CreateApt/checkoutsofApt/CheckoutOfApt";
// import AddCustomer from "../pages/SecondDashboard/pagesForDashboard/customers/AddCustomer/AddCustomer";
// import CustomerDetails from "../pages/SecondDashboard/pagesForDashboard/customers/CustomerDetails/CustomerBookDetails";
// import BillDetails from "../pages/SecondDashboard/pagesForDashboard/bills/BillsDetail.jsx/BillDetails";
// import CreateCusForNewBook from "../pages/SecondDashboard/pagesForDashboard/bookings/CreateCusForNewBook";
// import BookWomenServices from "../pages/SecondDashboard/pagesForDashboard/bookings/servicesForbooking/BookWomenser";
// import BookMenServices from "../pages/SecondDashboard/pagesForDashboard/bookings/servicesForbooking/BookMenservices";
// import BookChildServices from "../pages/SecondDashboard/pagesForDashboard/bookings/servicesForbooking/BookChilservices";
// import SalonEndBooking from "../pages/SecondDashboard/pagesForDashboard/bookings/HandleCrnbok/SalonCreateBooking";
// import SalonEndCancelBooking from "../pages/SecondDashboard/pagesForDashboard/bookings/HandleCrnbok/SalonCancelBook";
// import Dashboard from "../pages/SecondDashboard/DashBoard/Dashboard";
// import ConfirmCreateBooking from "../pages/SecondDashboard/creates/CreateBooking/ConfirmCreateBooking";
// import UserEndBooking2O from "../pages/SecondDashboard/creates/CreateBooking/BookCOm";
// import ApointmentSuces from "../pages/SecondDashboard/creates/CreateApt/login/ApointmentSuces";
// import CreateNewBooking from "../pages/SecondDashboard/creates/NewBooking/CreateNewBooking";
// import ConfCancBooking from "../pages/SecondDashboard/pagesForDashboard/bookings/HandleBookings/ConfCancBooking";
import Checkout2 from "../pages/Home/homeComps/checkout2/checkout2";
import Womenservices2 from "../pages/Home/homeComps/checkout2/Womenservices2";
import BillCreation from "../pages/Home/homeComps/Services/billCreation";
import MainLogin2 from "../pages/Login/Main-LogBr2";
import MainLogin3 from "../pages/Login/Main-LogBr3";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLogin />,
  },
  {
    path: "/1",
    element: <MainLogin />,
  },
  {
    path: "/2",
    element: <MainLogin2 />,
  },
  {
    path: "/3",
    element: <MainLogin3 />,
  },
  // {
  //   path: "/01",
  //   element: <Test02 />,
  // },
  {
    path: "/home",
    element:<ProtectedRouteForUser> <Home /> </ProtectedRouteForUser>,
  },  
  {
    path: "/services/women",
    element:<ProtectedRouteForUser> <Womenservices /> </ProtectedRouteForUser>,
  },
  {
    path: "/services/women2",
    element:<ProtectedRouteForUser> <Womenservices2 /> </ProtectedRouteForUser>,
  },
  {
    path: "/services/men",
    element:<ProtectedRouteForUser> <Mensservices /> </ProtectedRouteForUser>,
  },
  {
    path: "/services/child",
    element:<ProtectedRouteForUser> <Childservices /> </ProtectedRouteForUser>,
  },

  {
    path: "/checkout",
    element:<ProtectedRouteForUser> <PaymentSec /> </ProtectedRouteForUser>,
  },
  {
    path: "/checkout2",
    element:<ProtectedRouteForUser> <Checkout2 /> </ProtectedRouteForUser>,
  },
  {
    path: "/checkout/booking/processing",
    element:<ProtectedRouteForUser> <UserEndBooking /> </ProtectedRouteForUser>,
  },
  {
    path: "/checkout/bill/processing",
    element:<ProtectedRouteForUser> < BillCreation/> </ProtectedRouteForUser>,
  },
  
//   {
//     path: "/dashboard/create-new-booking",
//     element:<CreateNewBooking /> ,
//   },


//   // Salon Dashboard
//   {
//     path: "/dashboard",
//     // element: <CorrectedDashBoard />,
//     element: <Dashboard />,
//     // element: <ProtectedRouteForUser> <Dashboard /> </ProtectedRouteForUser>,
//   },
//   {
//     path: "/bookings",
//     element: <Bookings />,
//   },
//   {
//     path: "/customer/booking/:id",
//     element: <ConfCancBooking />,
//   },
//   {
//     path: "/bookings/services/women",
//     element: <BookWomenServices />,
//   },
//   {
//     path: "/bookings/services/men",
//     element: <BookMenServices />,
//   },
//   {
//     path: "/bookings/services/child",
//     element: <BookChildServices />,
//   },
//   {
//     path: "/create-new-booking/customer-details",
//     element: <CreateCusForNewBook />,
//   },
//   {
//     path: "/dashboard/booking/checkout",
//     element: <CreateBooking />,
//   },
//   {
//     path: "/create-new-booking/customer-details/booking",
//     element: <SalonEndBooking />,
//   },
//   {
//     path: "/create-new-booking/customer-details/cancel-booking",
//     element: <SalonEndCancelBooking />,
//   },

//   {
//     path: "/bills",
//     element: <Bills />,
//   },
//   {
//     path: "/bill/:billId",
//     element: <BillDetails />,
//   },
//   {
//     path: "/products",
//     element: <Products />,
//   },
//   {
//     path: "/customers",
//     element: <Customers />,
//   },
//   {
//     path: "/stylist",
//     element: <StylistList />,
//   },
//   // add a customer
//   {
//     path: "/add/customer",
//     element: <AddCustomer />,
//   },

// // create a booking

// {
//   path: "/create/booking",
//   element: <CreateBooking />,
// },
// {
//   path: "/confirm/create/booking",
//   element: <ConfirmCreateBooking />,
// },

// {
//   path: "/bookings/booking/processing",
//   element:<UserEndBooking2O />,
// },

//   // creates
//   {
//     path: "/create/appointment",
//     element: <Login />,
//   },
//   {
//     path: "/create/appointment/success",
//     element: <ApointmentSuces />,
//   },
//   {
//     path: "/create/appointment",
//     element: <CheckoutOfApt />,
//   },
//   {
//     path: "/appointment/services/women",
//     element: <WomenserApt />,
//   },
//   {
//     path: "/appointment/services/men",
//     element: <MenservicesApt />,
//   },
//   {
//     path: "/appointment/services/child",
//     element: <ChildServicesApt />,
//   },
//   // {
//   //   path: "/dashboard01",
//   //   element: <Dashboard />,
//   // },

//   {
//     path: "/save/appointment/",
//     element: <SaveAppointment />,
//   },
//   {
//     path: "/saved/appointment/:id",
//     element: <SavedApt />,
//   },
//   {
//     path: "/saved/appointment/cancel/:id",
//     element: <CancelAppointment />,
//   },
//   {
//     path: "/saved/appointment/confirm/:id",
//     element: <ConfirmAppointment />,
//   },

//   // store for dashboard users
//   // booking with dashboard
  


//   // end

//   // {
//   //   path: "/create/appointment",
//   //   element: <CreateApt />,
//   // },
  
//   // creates
//   {
//     path: "/create/appointment",
//     element: <CreateApt />,
//   },

  
]);

export default router;
