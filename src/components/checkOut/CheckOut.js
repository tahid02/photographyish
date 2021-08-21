import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import NavigationBar from "../home/navigationbar/NavigationBar";

const CheckOut = () => {
  const { loggedInUser } = useContext(UserContext);
  const [serviceCheckOut, setServiceCheckOut] = useState({});
  const history = useHistory();

  const { id } = useParams();
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    fetch(`https://arcane-headland-52408.herokuapp.com/checkOut/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("service  data ", data);
        setServiceCheckOut(data);
      });
  }, [id]);

  const { service_name, service_price, service_image, service_overview } =
    serviceCheckOut;

  const onSubmit = async (userData) => {
    let orderDetails = await {
      email: loggedInUser.email,
      service: serviceCheckOut,
      orderTime: new Date().toString(),
      orderStatus: "pending",
      ...userData,
    };
    console.log({ orderDetails });
    if (userData) {
      const url = `https://arcane-headland-52408.herokuapp.com/addOrder`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      })
        .then((res) => {
          console.log("server side response", res);
          history.push("/userOrders");
        })
        .catch((err) => console.log(err));
    } else {
      alert("please fill up the form ");
    }
  };

  return (
    <div>
      <div className="">
        <NavigationBar />
      </div>
      <div className="d-flex justify-content-evenly">
        <div className="card h-100">
          <img src={service_image} className="card-img-top " alt="..." />
          <div className="card-body">
            <h3> {service_price} </h3>
            <h5 className="card-title"> {service_name} </h5>
            <p className="card-text"> {service_overview} </p>
          </div>
        </div>
        <div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name">Name </label>
              <input
                type="text"
                name="name"
                defaultValue={loggedInUser.name}
                {...register("name", { required: true })}
              />
              {/* {errors.name && <p className="errorMsg"> name is required </p>} */}
            </div>
            <div>
              <label htmlFor="phoneNumber">phoneNumber </label>
              <input
                type="phoneNumber"
                name="phoneNumber"
                {...register("phoneNumber", {
                  required: "phoneNumber is required.",
                  minLength: {
                    value: 6,
                    message: "phoneNumber should be at-least 6 characters.",
                  },
                })}
              />
            </div>
            <div>
              <label htmlFor="address">Address </label>
              <input
                type="text"
                name="address"
                {...register("address", { required: true })}
              />
              {/* {errors.address && <p className="errorMsg"> address is required </p>} */}
            </div>

            <button type="submit" className="btn btn-success sign-in mt-3">
              Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
