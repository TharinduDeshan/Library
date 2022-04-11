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

function App() {
  return (


    <Router>
        <Header/>

      <Routes>

       <Route exact path="/" element={<Home/>} />
       <Route exact path="/add" element={<AddItems/>} />
       <Route exact path="/edit" element={<EditItems/>} />
       <Route exact path="/category" element={<Category/>} />
       <Route exact path="/shome" element={<StaffHome/>} />
       <Route exact path="/addCustomer" element={<AddCustomer/>} />
       <Route exact path="/ediCustomer" element={<EditCustomer/>} />
       <Route exact path="/contact" element={<ContactUs/>} />
     
       </Routes> 
     </Router>

    
  );
}

export default App;