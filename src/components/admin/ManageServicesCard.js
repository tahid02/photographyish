const ManageServicesCard = ({ service }) => {
  const { service_image, service_name, service_price, _id } = service;

  const deleteProduct = (e, id) => {
    console.log("delete clicked", e.target.parentNode.parentNode);
    fetch(`https://arcane-headland-52408.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log({ res });
        res.json();
      })
      .then((data) => {
        if (data) {
          console.log({ data });
          e.target.parentNode.parentNode.style.display = "none";
        }
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <>
      <tr className="">
        <td>
          <img src={service_image} alt="service " />
        </td>
        <td> {service_name}</td>
        <td>{service_price}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={(e) => deleteProduct(e, _id)}
          >
            delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ManageServicesCard;
