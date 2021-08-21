import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      <div>{serviceDetail.service_price}</div>
    </div>
  );
};

export default ServiceDetails;
