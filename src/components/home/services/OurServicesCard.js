import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./OurServices.css";

const OurServicesCard = ({ service }) => {
  console.log(service);
  const { service_name, service_price, service_image, service_overview, _id } =
    service;
  //   const [loggedInUser, setLoggedInUser, isAdmin] = useContext(UserContext);

  return (
    <div className="col-md-4 col-sm-6 col-12 ">
      <div className="card h-100">
        <img src={service_image} className="card-img-top " alt="..." />
        <div className="card-body">
          <h3> {service_price} </h3>
          <h5 className="card-title"> {service_name} </h5>
          <p className="card-text"> {service_overview} </p>
        </div>
        <div className="card-footer d-flex justify-content-evenly">
          <Link to={`/serviceDetails/${_id}`}>
            <button className="btn btn-info">Detail </button>
          </Link>
          <Link to={`/checkOut/${_id}`}>
            <button className="btn btn-success"> Buy </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServicesCard;
