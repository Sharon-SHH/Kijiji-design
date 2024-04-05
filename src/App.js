import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import UserProfile from "./components/UserProfile/UserProfile";
import MenuBar from "./components/MenuBar/MenuBar";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <Header />
          <MenuBar className="mobile" />
        </header>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
