import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Sidebar from "../shared/Sidebar";
import UserOrdersCard from "./UserOrdersCard";

const UserOrders = () => {
  const { loggedInUser } = useContext(UserContext);
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    fetch(
      `https://arcane-headland-52408.herokuapp.com/userOrders?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("user rented data ", data);
        setUserOrders(data);
      });
  }, [loggedInUser.email]);
  return (
    <div className="container-fluid">
      <div className="d-flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="">
          {!userOrders.length && <p>you didn't order any service </p>}
          {userOrders.map((order) => (
            <UserOrdersCard {...order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
