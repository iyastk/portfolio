import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
import Intro from "./Component/Intro/intro";
import Services from "./Component/Services/Services";
import Experiences from "./Component/Experiences/Experiences";
import Contact from "./Component/Contact/Contact";
import Testimonial from "./Component/Testimonial/Testimonial";
import Footer from "./Component/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Experiences></Experiences>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
