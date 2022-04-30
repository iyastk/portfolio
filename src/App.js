import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
import Intro from "./Component/Intro/intro";
import Services from "./Component/Services/Services";
import Experiences from "./Component/Experiences/Experiences";
import Contact from "./Component/Contact/Contact";
import Testimonial from "./Component/Testimonial/Testimonial";
import Footer from "./Component/footer/Footer";
import { themeContext } from "./Context.js";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
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
