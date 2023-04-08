import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import Home from "./components/Home";
import { Container } from "react-bootstrap";
import MyNav from "./components/MyNav";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Container className="shadow-xl p-0 pb-6">
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:coordinate" element={<Details />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
