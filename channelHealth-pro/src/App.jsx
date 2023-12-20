import "./App.css";
import Homepage from "./components/HomePage/Homepage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Homepage />
    </div>
  );
};

export default App;
