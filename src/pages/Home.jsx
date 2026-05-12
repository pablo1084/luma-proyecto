import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Story from "../components/Story";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <Story />
      <Services />
      <Footer />
    </div>
  );
}

export default Home;