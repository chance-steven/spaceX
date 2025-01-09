import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./pages/Layout"
import Section from "./components/Section"
import Hero from "./components/Hero"
import Falcon9 from "./pages/Falcon9"
import FalconHeavy from "./pages/FalconHeavy"
import FalconH from "./pages/FalconH"


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Section />} />
        <Route path="/falcon9" element ={<Falcon9 />} />
        <Route path="/falconHeavy" element={<FalconHeavy />} />
        <Route path="/falconH" element ={<FalconH />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
