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
import AddMembers from './components/members/addMembers';
import EditMembers from './components/members/editMembers';
import ShowMembers from './components/members/showMember';
import ViewCustomers from './components/customers/viewCustomers';
// import ViewCustomers from './components/customers/viewCustomers';
import ItemReport from './components/services/itemReport';
import CustomerLogin from './components/customers/customerLogin';
import EditProfile from './components/profile/editProfile';
import UserProfile from './components/profile/userProfile';
import AddStaff from './components/staff/addStaff';
import StaffList from './components/staff/viewStaffList';
import UpdateStaff from './components/staff/updateStaff';
import ViewStaff from './components/staff/viewStaff';

function App() {
  return (


    <Router>

      <Routes>
       <Route path="/customer" element={<Header/>} />
       <Route path="/customer/home" element={<><Header /><Home /><Footer/></>} />
       <Route path="/customer/cart/:id" element={<><Header /><Cart /><Footer/></>} />
       <Route path="/customer/category/:type" element={<><Header /><Category /><Footer/></>} />
       <Route path="/customer/customerLogin" element={<><StaffHeader /><CustomerLogin /><Footer/></>} />
       <Route path="/staff/editCustomer/:id" element={<><StaffHeader /><EditCustomer /><Footer/></>} />
       <Route path="/customer/userProfile" element={<><StaffHeader /><UserProfile /><Footer/></>} />
       <Route path="/customer/editProfile" element={<><StaffHeader /><EditProfile /><Footer/></>} />

       <Route path="/staff" element={<StaffHeader/>} />
       <Route path="/staff/staffHome" element={<><StaffHeader /><StaffHome /><Footer/></>} />
       <Route path="/staff/all" element={<><StaffHeader /><StaffList /><Footer/></>} />
       <Route path="/staff/scategory/:type" element={<><StaffHeader /><StaffCategory /><Footer/></>} />
       <Route path="/staff/addStaff" element={<><StaffHeader /><AddStaff /><Footer/></>} />
       <Route path="/staff/editStaff/:id" element={<><StaffHeader /><UpdateStaff /><Footer/></>} />
       <Route path="/staff/view/:id" element={<><StaffHeader /><ViewStaff /><Footer/></>} />

       <Route path="/staff/addCustomer" element={<><StaffHeader /><AddCustomer /><Footer/></>} />
       {/* <Route path="/staff/admin" element={<><StaffHeader /><Admin /><Footer/></>} /> */}

       <Route path="/staff/addMember" element={<><StaffHeader /><AddMembers /><Footer/></>} />
       <Route path="/staff/editMember/:id" element={<><StaffHeader /><EditMembers /><Footer/></>} />
       <Route path="/staff/ShowMember" element={<><StaffHeader /><ShowMembers /><Footer/></>} />
       <Route path="/staff/showCustomers" element={<><StaffHeader /><ViewCustomers/><Footer/></>} />

       
       <Route path="/" element={<WelcomePage />} />
       {/* <Route path="/admin" element={<ViewCustomers />} /> */}

       <Route path="/report" element={<ItemReport/>} />
     
      </Routes> 

     </Router>

    
  );
}

export default App;