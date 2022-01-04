import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Project/Project";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div className="container lg:max-w-screen-xl px-5 mx-auto mt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:projectId" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
