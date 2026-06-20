import Layout from "../components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import products from "../assets/data/products";

function CategoryProducts() {

  const { category } = useParams();

  const filteredProducts = products.filter(
    product =>
      product.category
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-") ===
      category.toLowerCase()
  );

  console.log("URL Category:", category);
  console.log("Products Found:", filteredProducts);

  return (
    <Layout>

      <div className="container">

        <h1>{category}</h1>

        <div className="product-grid">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => (

              <div
                key={product.id}
                className="product-card"
              >

                <img
                  src={product.image}
                  alt={product.name}
                />

                <h3>{product.name}</h3>

                <p>₹{product.price}</p>

                <Link
                  to={`/product/${product.id}`}
                >
                  <button>
                    View Details
                  </button>
                </Link>

              </div>

            ))

          ) : (

            <h2>No Products Found</h2>

          )}

        </div>

      </div>

    </Layout>
  );
}

export default CategoryProducts;