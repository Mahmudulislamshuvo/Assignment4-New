import { useState } from "react";
import Contents from "./components/Contents/Contents";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import CartPage from "./components/CartPage/CartPage";
import { CartProvider } from "./provider";

const App = () => {
  const [isCartItems, setIsCartItems] = useState(false);
  return (
    <div>
      <CartProvider>
        <Navbar onCartClick={setIsCartItems} />
        {isCartItems ? (
          <CartPage />
        ) : (
          <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
            <Hero />
            <Contents />
          </main>
        )}
      </CartProvider>
      <Footer />
    </div>
  );
};

export default App;
