import "./App.css";
import AboutUs from "./Components/AboutUs";
import CreditCheck from "./Components/CreditCheck";
import FaqSection from "./Components/Faq";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import HowItWorks from "./Components/HowItWorks";
import Navbar from "./Components/Navbar";
import Testimonials from "./Components/Testimonials";
import WhyChoose from "./Components/WhyChoose";

function App() {
  return (
    <div className="">
      <Navbar/>
      <Homepage/>
      <WhyChoose/>
      <CreditCheck/>
      <HowItWorks/>
      <AboutUs/>
      <Testimonials/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}

export default App;
