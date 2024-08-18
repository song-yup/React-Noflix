import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import TV from "./Routes/TV";
import Search from "./Routes/Search";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/tv" element={<TV />} />
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
