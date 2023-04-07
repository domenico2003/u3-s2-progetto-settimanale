import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import Home from "./components/Home";
import { Container } from "react-bootstrap";
import MyNav from "./components/MyNav";

function App() {
  return (
    <BrowserRouter>
      <Container className="shadow-xl p-0">
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
