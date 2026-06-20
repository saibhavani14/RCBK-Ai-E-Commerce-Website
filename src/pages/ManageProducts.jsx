import Layout from "../components/layout/Layout";
import products from "../assets/data/products";
import "./ManageProducts.css";

function ManageProducts() {

  return (
    <Layout>

      <div className="container">

        <h1>Manage Products</h1>

        <button>
          Add Product
        </button>

        <table
          border="1"
          width="100%"
        >

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {products.map(product => (

              <tr key={product.id}>

                <td>
                  {product.id}
                </td>

                <td>
                  {product.name}
                </td>

                <td>
                  ₹{product.price}
                </td>

                <td>

                  <button>
                    Edit
                  </button>

                  <button>
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </Layout>
  );
}

export default ManageProducts;