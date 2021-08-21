import React from "react";

const UserOrdersCard = ({ service, orderTime }) => {
  const { service_image, service_price, service_name } = service;
  return (
    <div className="container">
      <div className="row shadow my-3">
        <div className="col">
          {
            <img
              src={service_image}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
          }
        </div>
        <div className="col d-flex align-items-center">
          <strong> {service_name} </strong>{" "}
        </div>
        <div className="col d-flex align-items-center"> ${service_price} </div>
        <div className="col d-flex align-items-center"> {orderTime} </div>
      </div>
    </div>
  );
};

export default UserOrdersCard;
