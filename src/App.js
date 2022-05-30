import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { IdeaPage } from "./components/IdeaPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user/:userId" element={<IdeaPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
