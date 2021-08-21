import { useEffect } from "react";
import { useState } from "react";
import OurServicesCard from "./OurServicesCard";

const OurServices = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch("https://arcane-headland-52408.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServicesData(data);
      });
  }, []);
  console.log(servicesData[0]);
  return (
    <section style={{}}>
      <section className="container-fluid">
        <h3 className="text-center">Our Services </h3>
        <div className="row g-4">
          {servicesData.map((service) => (
            <OurServicesCard service={service} key={service.id} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default OurServices;
