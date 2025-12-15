import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import ScrollRouter from "./components/ScrollRouter";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <ScrollRouter />

        <Home id="home" />
        <About id="about" />
        <Project id="projects" />
        <Resume id="resume" />
        <Contact id="contact" />
      </BrowserRouter>
  );
}

export default App;



