<<<<<<< HEAD
import "./App.css";
import theme from "./theme";
import AppRoutes from "./AppRoutes";
import {ThemeProvider} from "@mui/material";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <AppRoutes/>
      </ThemeProvider>
=======
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/customers/home'
import AddItems from './components/items/addItems';
import Header from './components/navigations/header';
import EditItems from './components/items/editItems';
import Category from './components/customers/category';
import StaffHome from './components/staff/staffHome';
import AddCustomer from './components/customers/addCustomers';
import EditCustomer from './components/customers/editCustomers';
import ContactUs from './components/customers/contact';
import StaffCategory from './components/staff/staffCategories';
import Cart from './components/customers/cart';
import StaffHeader from './components/navigations/staffHeader'
import Footer from './components/navigations/footer';
import Admin from './components/customers/viewCustomers';
import WelcomePage from './components/navigations/welcomePage';
import ViewCustomers from './components/customers/viewCustomers';
import ItemReport from './components/services/itemReport';

function App() {
  return (


    <Router>

      <Routes>
       <Route path="/customer" element={<Header/>} />
       <Route path="/customer/home" element={<><Header /><Home /><Footer/></>} />
       <Route path="/customer/cart/:id" element={<><Header /><Cart /><Footer/></>} />
       <Route path="/customer/category/:type" element={<><Header /><Category /><Footer/></>} />
       
       <Route path="/customer/ediCustomer" element={<><Header /><ediCustomer /><Footer/></>} />


       <Route path="/staff" element={<StaffHeader/>} />
       <Route path="/staff/staffHome" element={<><StaffHeader /><StaffHome /><Footer/></>} />
       <Route path="/staff/scategory/:type" element={<><StaffHeader /><StaffCategory /><Footer/></>} />
       <Route path="/staff/addItem" element={<><StaffHeader /><AddItems /><Footer/></>} />
       <Route path="/staff/editItem/:id" element={<><StaffHeader /><EditItems /><Footer/></>} />

       <Route path="/staff/addCustomer" element={<><StaffHeader /><AddCustomer /><Footer/></>} />

       
       <Route path="/" element={<WelcomePage />} />
       <Route path="/admin" element={<ViewCustomers />} />

       <Route path="/report" element={<ItemReport/>} />
     
      </Routes> 

     </Router>

    
>>>>>>> 11b332770f83287169b12784b39d788a354ad9e9
  );
}

export default App;
