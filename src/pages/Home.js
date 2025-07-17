import React from "react";
import HeroSlider from "../components/sliders/HeroSlider";
import FeaturedSlider from "../components/sliders/FeaturedSlider";
import SectionsHead from "../components/common/SectionsHead";
import TopProducts from "../components/product/TopProducts";
import Services from "../components/common/Services";
import Middle from "../components/common/Middle";
import Items from "../components/common/Items";

const Home = () => {
  return (
    <main>
      <section id="hero">
        <HeroSlider />
      </section>

      <section id="featured" className="section">
        <div className="container">
          <SectionsHead heading="Featured Products" />
          <FeaturedSlider />
        </div>
      </section>
      <section id="products" className="section">
        <div className="container">
          <Items />
        </div>
      </section>

      <section id="products" className="section">
        <div className="container">
          <SectionsHead heading="Top Products" />
          <TopProducts />
        </div>
      </section>
      <Middle />
      <Services />
    </main>
  );
};

export default Home;
