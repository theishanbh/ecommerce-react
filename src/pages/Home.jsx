import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"


function Home() {
    return (
        <div>
            <Announcement></Announcement>
            <Navbar/>
            <Slider></Slider>
        </div>
    )
}

export default Home
