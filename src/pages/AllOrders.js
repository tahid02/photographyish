import React, { useEffect, useState } from "react";
import AllOrdersCard from "../components/admin/AllOrdersCard";
import Sidebar from "../components/shared/Sidebar";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("https://arcane-headland-52408.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllOrders(data);
      });
  }, []);

  return (
    <div className="d-flex container">
      <h3> ALL ORDERS </h3>
      <div className="">
        <Sidebar />
      </div>
      <div className="">
        {allOrders.map((order) => (
          <AllOrdersCard {...order} />
        ))}
      </div>
    </div>
  );
};

export default AllOrders;
