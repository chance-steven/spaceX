import { BrowserRouter, Route, Routes } from "react-router"
import Layout from "./pages/Layout"
import Section from "./components/Section"
import Hero from "./components/Hero"


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path="" element={<Section />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
