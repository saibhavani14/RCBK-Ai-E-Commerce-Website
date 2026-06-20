import Layout from "../components/layout/Layout";

import HeroSlider from "../components/layout/home/HeroSlider";
import Categories from "../components/layout/home/Categories";
import FeaturedProducts from "../components/layout/home/FeaturedProducts";
import Offers from "../components/layout/home/Offers";
import AiSearch from "../components/ai/AiSearch";

function Home() {
  return (
    <Layout>
      <AiSearch />

      <HeroSlider />

      <Categories />

      <FeaturedProducts />

      <Offers />

    </Layout>
  );
}

export default Home;