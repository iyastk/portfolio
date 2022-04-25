import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
import Intro from "./Component/Intro/intro";
import Services from "./Component/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
    </div>
  );
}

export default App;
