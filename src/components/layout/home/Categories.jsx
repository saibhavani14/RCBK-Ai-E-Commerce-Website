import { Link } from "react-router-dom";
import "./Categories.css";

function Categories() {

  return (
    <div className="categories">

      <h2>Categories</h2>

      <div className="category-grid">

        <Link to="/category/mobiles" className="category-card">
          Mobiles
        </Link>

        <Link to="/category/electronics" className="category-card">
          Electronics
        </Link>

        <Link to="/category/beauty" className="category-card">
          Beauty
        </Link>

        <Link to="/category/accessories" className="category-card">
          Accessories
        </Link>

        <Link to="/category/fashion" className="category-card">
          Fashion
        </Link>

        <Link to="/category/gaming" className="category-card">
          Gaming
        </Link>

        <Link to="/category/smart-watches" className="category-card">
          Smart Watches
        </Link>

        <Link to="/category/home-appliances" className="category-card">
          Home Appliances
        </Link>

      </div>

    </div>
  );
}

export default Categories;