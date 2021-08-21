import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import { createContext, useEffect, useState } from "react";
import LoginSignup from "./components/login/LoginSignup";
import CheckOut from "./components/checkOut/CheckOut";
import PrivateRoute from "./components/login/PrivateRoute";
import UserOrders from "./components/user/UserOrders";
import AllOrders from "./pages/AllOrders";
import AddService from "./pages/AddService";
import ManageServices from "./pages/ManageServices";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://arcane-headland-52408.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("is admin", data);
        setIsAdmin(data);
      });
  }, [loggedInUser?.email]);

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          loggedInUser,
          setLoggedInUser,
          isAdmin,
          setIsAdmin,
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/serviceDetails/:id">
              <ServiceDetails />
            </Route>
            <PrivateRoute path="/checkOut/:id">
              <CheckOut />
            </PrivateRoute>
            <Route path="/login">
              <LoginSignup />
            </Route>
            <PrivateRoute path="/userOrders">
              <UserOrders />
            </PrivateRoute>
            <PrivateRoute path="/allOrders">
              <AllOrders />
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService />
            </PrivateRoute>
            <PrivateRoute path="/manageServices">
              <ManageServices />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
