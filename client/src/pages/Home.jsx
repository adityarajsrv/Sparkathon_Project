import GridComponent from "../components/GridComponent"
import Navbar from "../components/Navbar"
import Services from "../components/Services"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Services />
        <GridComponent />
    </div>
  )
}

export default Home