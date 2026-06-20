import Navbar from "./Navbar";
import Footer from "./Footer";
import CategoryBar from "./CategoryBar";

import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">

      <Navbar />

      <CategoryBar />

      <main className="main-content">
        {children}
      </main>

      <Footer />

    </div>
  );
}

export default Layout;