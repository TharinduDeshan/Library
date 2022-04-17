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

function App() {
  return (


    <Router>
        <Header/>

      <Routes>

       <Route exact path="/" element={<Home/>} />
    
       <Route exact path="/category" element={<Category/>} />
       <Route exact path="/addCustomer" element={<AddCustomer/>} />
       <Route exact path="/editCustomer" element={<EditCustomer/>} />
       <Route exact path="/contact" element={<ContactUs/>} />
       <Route exact path="/cart" element={<Cart/>} />

       <Route exact path="/shome" element={<StaffHome/>} />
       <Route exact path="/sCat" element={<StaffCategory/>} />
       <Route exact path="/add" element={<AddItems/>} />
       <Route exact path="/edit" element={<EditItems/>} />
     
       </Routes> 
     </Router>

    
  );
}

export default App;