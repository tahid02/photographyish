import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../components/shared/Sidebar";
import { service_description, service_gallery } from "../utils/serviceText";

const AddServices = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [imageURL, setIMageURL] = useState(null);

  const handleImageUpload = (event) => {
    console.log("btn clicked ");
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "a574dcbb50717480e9f504d58b7b8a0a");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response);
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    console.log(data);
    const serviceData = {
      service_name: data.type,
      service_price: data.price,
      service_overview: data.description,
      service_image: imageURL,
      service_description,
      service_gallery,
    };
    console.log("service Data", serviceData);
    const url = `https://arcane-headland-52408.herokuapp.com/addServices`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
    })
      .then((res) => console.log("server side response", res))
      .catch((err) => console.log("update error", err));
  };

  return (
    <section className="container-fluid">
      <h3> ADD SERVICE </h3>
      <div className="d-flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="">
          <form className="pay-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name"> Name </label>
              <input
                {...register("type", { required: true })}
                placeholder="service Name"
              />
              {errors.type && (
                <span className="error">service name is required</span>
              )}
            </div>

            <div>
              <label htmlFor="name"> price </label>
              <input
                type="number"
                {...register("price", { required: true })}
                placeholder="service price"
              />
              {errors.price && <span className="error">price is required</span>}
            </div>

            <div>
              <label htmlFor="name">Description </label>
              <input
                {...register("description", { required: true })}
                placeholder="service description"
              />
              {errors.description && (
                <span className="error">description is required</span>
              )}
            </div>

            <div>
              <input
                type="file"
                onChange={(event) => handleImageUpload(event)}
                name="image"
                required
              />
            </div>

            <input type="submit" value="Add" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddServices;
