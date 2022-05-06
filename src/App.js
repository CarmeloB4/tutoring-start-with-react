import "./App.css";
import Home from "./pages/Home";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
