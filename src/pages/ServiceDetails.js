import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavigationBar from "../components/home/navigationbar/NavigationBar";

const ServiceDetails = () => {
  const { id } = useParams();
  const [serviceDetail, setServiceDetail] = useState({});

  useEffect(() => {
    fetch(`https://arcane-headland-52408.herokuapp.com/checkOut/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("service  data ", data);
        setServiceDetail(data);
      });
  }, [id]);

  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <div className="img-fluid">
          <img src={serviceDetail.service_image} alt="" />
        </div>
        <div className="">
          <strong> Service Name: {serviceDetail.service_name} </strong>
        </div>
        <div className="">
          <strong> Service price : ${serviceDetail.service_price} </strong>
        </div>
        <div className="">
          <strong>Service Description :</strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          nobis vero earum sequi quas, est eos recusandae praesentium inventore
          fuga adipisci dolores minima aperiam qui illo quae laborum in beatae.
          nobis vero earum sequi quas, est eos recusandae praesentium inventore
          fuga adipisci dolores minima aperiam qui illo quae laborum in beatae.
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <Link to={`/checkOut/${id}`}>
          <button className="btn btn-success"> checkOut </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
