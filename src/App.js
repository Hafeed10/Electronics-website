import { CommonProvider } from './contexts/common/commonContext';
import { CartProvider } from './contexts/cart/cartContext';
import Header from './components/common/Header';
import RouterRoutes from './routes/RouterRoutes';
import Footer from './components/common/Footer';
import BackTop from './components/common/BackTop';
import { FiltersProvider } from './contexts/filters/filtersContext';
import { Analytics } from "@vercel/analytics/react";
import OfferPopup from './components/common/OfferPopup';
import img from '../src/assets/BRIGHT ELECTRONICS & ELECTRICALS SALES & SERVICE (2).png'


const App = () => {
  return (
    <>
      <CommonProvider>
        <FiltersProvider>
          <CartProvider>
             <OfferPopup imageSrc={img} /> {/* Show offer popup */}
            <Header />
            <RouterRoutes />
            <Footer />
            <BackTop />
            <Analytics /> {/* vercel*/}
          </CartProvider>
        </FiltersProvider>
      </CommonProvider>
    </>
  );
};

export default App;

