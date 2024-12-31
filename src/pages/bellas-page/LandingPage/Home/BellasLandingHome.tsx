import BellasLandingHeader from "../../../../components/LandingPage/BellasLandingHeader"
import CallToAction from "../../../../components/LandingPage/CallToAction"
import Gallery from "../../../../components/LandingPage/Gallery"
import Glow from "../../../../components/LandingPage/Glow"
import Hours from "../../../../components/LandingPage/Hours"
import Relax from "../../../../components/LandingPage/Relax"
import Services from "../../../../components/LandingPage/Services"


const BellasLandingHome = () => {
  return (
    <div className="bg-[#f5f1fd] ">
        <BellasLandingHeader />
        <Hours />
        <Services />
        <Relax />
        <Gallery />
        <Glow />
        <CallToAction />
    </div>
  )
}

export default BellasLandingHome