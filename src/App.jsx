import "../src/index.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import Coverage from "./components/Coverage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Prices from "./components/Prices";
import Topbar from "./components/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Nav />
      <Header />
      <About />
      <Banner />
      <Benefits />
      <Coverage />
      <Prices />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
