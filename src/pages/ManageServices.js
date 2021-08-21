import React, { useEffect, useState } from "react";
import ManageServicesCard from "../components/admin/ManageServicesCard";
import Sidebar from "../components/shared/Sidebar";

const ManageServices = () => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    fetch("https://arcane-headland-52408.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServiceList(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <h3>MANAGE SERVICES </h3>
      <div className="d-flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="">
          <table className="table table-hover text-start">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {serviceList.map((service) => (
                <ManageServicesCard service={service} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
