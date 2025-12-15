
// import { BrowserRouter , Router, Routes, Route, BrowserRouter } from "react-router-dom";

// import Home from "./pages/Home"
// import About from "./pages/About"
// import Project from "./pages/Project"
// import Resume from "./pages/Resume"
// import Contact from "./pages/Contact"
// import NonFound from "./pages/NonFound"
// import Header from "./components/Header";

// function App(){

//     return(
//       <BrowserRouter>
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Header/>} >
//                 <Route index element={<Home/>}/>
//                 <Route path="/about" element={<About/>} />
//                 <Route path="/projects" element={<Project/>} />
//                 <Route path="/resume" element={<Resume/>} />
//                 <Route path="/contact" element={<Contact/>} />
//                 <Route path="*" element={<NonFound/>}/>
//                 </Route>
//             </Routes>
//         </Router>
//       </BrowserRouter>
//     )

// }

// export default App;




import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NonFound from "./pages/NonFound";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter
        future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
      >
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Project />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NonFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


