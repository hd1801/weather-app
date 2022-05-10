import { Route,Routes } from "react-router";
import {Navbar,Container } from "react-bootstrap"
import { Home } from "./Components/home";
import { WeatherDetails } from "./Components/WeatherDetails";

function App() {
  return <>
  <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand >
      WEATHER APP
    </Navbar.Brand>
  </Container>
  </Navbar>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="weather" element={<WeatherDetails/>} ></Route>
    </Routes>
  </>
}

export default App;
