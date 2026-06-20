import { Link } from "react-router-dom";
import "./AdminSidebar.css";

function AdminSidebar() {
  return (
    <div className="admin-sidebar">

      <h2>RCBK Admin</h2>

      <Link to="/admin">
        Dashboard
      </Link>

      <Link to="/admin/add-product">
        Add Product
      </Link>

      <Link to="/admin/products">
        Manage Products
      </Link>

      <Link to="/admin/users">
        Manage Users
      </Link>

      <Link to="/admin/orders">
        Manage Orders
      </Link>

    </div>
  );
}

export default AdminSidebar;