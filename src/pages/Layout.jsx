import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <div>
    <div className="fixed top-6">
    <Navbar />
    </div>
      
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout