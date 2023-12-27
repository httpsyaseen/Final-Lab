import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dragon from "./feature/dragons/Dragon";
import Mission from "./feature/missions/Mission";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dragon />} />
          <Route path="/missions" element={<Mission />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
