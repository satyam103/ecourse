import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/tailwind.css";
import "./App.css";
import "./assets/styles/Animation.css";
import "./assets/styles/IconHover.css";
import "./assets/styles/FullCard.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
