import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Sidebar = () => {
  const { isAdmin } = useContext(UserContext);
  console.log({ isAdmin });
  return (
    <div>
      {isAdmin ? (
        <div>
          <Link to="/userOrders" className="link">
            <div> Orders </div>
          </Link>
          <Link to="/allOrders" className="link">
            <div>All Orders </div>
          </Link>

          <Link to="/addService" className="link">
            <div> Add Service </div>
          </Link>

          <Link to="/manageServices" className="link">
            <div>Manage Services </div>
          </Link>
          <Link to="/" className="link ">
            <div style={{ fontSize: "20px" }}>HOME</div>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/userOrders" className="link">
            <div>Orders </div>
          </Link>

          <Link to="/" className="link ">
            <div>HOME</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
