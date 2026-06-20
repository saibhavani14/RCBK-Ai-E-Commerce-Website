import { Link } from "react-router-dom";
import "./CategoryBar.css";

function CategoryBar() {

  return (
    <div className="category-bar">

      <Link to="/category/mobiles">
        Mobiles
      </Link>

      <Link to="/category/electronics">
        Electronics
      </Link>

      <Link to="/category/beauty">
        Beauty
      </Link>

      <Link to="/category/fashion">
        Fashion
      </Link>

      <Link to="/category/accessories">
        Accessories
      </Link>

      <Link to="/category/gaming">
        Gaming
      </Link>

      <Link to="/category/smart-watches">
        Smart Watches
      </Link>

      <Link to="/category/home-appliances">
        Home Appliances
      </Link>

    </div>
  );
}

export default CategoryBar;