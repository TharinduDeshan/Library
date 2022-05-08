import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import Home from "./Home";
import CustomerDetails from "./CustomerDetails";
import CustomerMessage from "./CustomerMessage";
import StaffMemberDetails from "./StaffMemberDetails";
import StaffMemberRequest from "./StaffMemberRequest";
import IssuedBooks from "./IssuedBooks";
import ContactUs from "./ContactUs";
import AddStaffMember from "./AddStaffMember";

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <DashboardLayout>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/customerDetails">
                        <CustomerDetails/>
                    </Route>
                    <Route path="/customerMessage">
                        <CustomerMessage/>
                    </Route>
                    <Route path="/staffMemberDetails">
                        <StaffMemberDetails/>
                    </Route>
                    <Route path="/staffMemberRequest">
                        <StaffMemberRequest/>
                    </Route>
                    <Route path="/issuedBooks">
                        <IssuedBooks/>
                    </Route>
                    <Route path="/contactUs">
                        <ContactUs/>
                    </Route>
                    <Route path="/addStaffMember">
                        <AddStaffMember/>
                    </Route>
                </DashboardLayout>
            </Switch>



        </Router>
    );
};

export default AppRoutes;
