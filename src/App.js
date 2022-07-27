import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="card-container">
          <Card name="Mineral Water" price={20} indi={250} />
        </div>
      </div>
    </div>
  );
}

export default App;
