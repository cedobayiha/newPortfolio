import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./Components/Layout"
import About from "./Pages/About"
import Projects from "./Pages/Projects"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NotFound />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
