import BellasLandingHeader from "./BellasLandingHeader"
import CallToAction from "./CallToAction"
import Gallery from "./Gallery"
import Glow from "./Glow"
import Hours from "./Hours"
import Relax from "./Relax"
import Services from "./Services"


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