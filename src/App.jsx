import { lazy, Suspense, useEffect } from "react";
import "../src/index.css";
import Topbar from "./components/Topbar";
import Nav from "./components/Nav";
import About from "./components/About";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import Spinner from "./components/Spinner";

const Benefits = lazy(() => import("./components/Benefits"));
const Contact = lazy(() => import("./components/Contact"));
const Coverage = lazy(() => import("./components/Coverage"));
const Prices = lazy(() => import("./components/Prices"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Topbar />
      <Nav />
      <Header />
      <About />
      <Banner />
      <Suspense fallback={<Spinner />}>
        <Benefits />
        <Coverage />
        <Prices />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
