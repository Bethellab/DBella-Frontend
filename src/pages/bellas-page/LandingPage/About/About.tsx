import BrandStory from "@/components/LandingPage/About/BrandStory"
import CallToAction from "@/components/LandingPage/About/CallToAction"
import Founder from "@/components/LandingPage/About/Founder"
import Header from "@/components/LandingPage/About/Header"


const About = () => {
  return (
    <div className="bg-[#f5f1fd]">
        <Header />
        <BrandStory />   
        <Founder /> 
        <CallToAction />
    </div>
  )
}

export default About
