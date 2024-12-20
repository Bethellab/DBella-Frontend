import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"


const BellaLandingPage = () => {
  return (
    <div>
      <div className=" my-2">
                <Navbar />
                <main  >
                    <Outlet />
                </main>
                <Footer />
            </div>
    </div>
  )
}

export default BellaLandingPage