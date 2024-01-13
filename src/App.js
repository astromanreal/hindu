import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Gods from "./components/pages/Gods";
import Blogs from "./components/pages/Blogs";
import Texts from "./components/pages/Texts";
import Shlokas from "./components/pages/Shlokas";
import Aarti from "./components/pages/Aarti";
import Explore from "./components/pages/Explore";
import Navbar from "./components/items/Navbar";
import {
  DevGod,
  DevtaGod,
  RigvedicGod,
  TrimurtiGod,
} from "./components/Gods/GodsItems";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="god" element={<Gods />} />
        <Route path="god/trimurti" element={<TrimurtiGod />} />
        <Route path="god/dev" element={<DevGod />} />
        <Route path="god/devta" element={<DevtaGod />} />
        <Route path="god/rigvedic" element={<RigvedicGod />} />

        <Route path="texts" element={<Texts />} />
        <Route path="shlokas" element={<Shlokas />} />
        <Route path="aarti" element={<Aarti />} />

        <Route path="explore" element={<Explore />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes>
    </>
  );
}

export default App;
