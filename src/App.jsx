import Contents from "./components/Contents/Contents";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <Hero />
        <Contents />
      </main>
      <Footer />
    </div>
  );
};

export default App;
