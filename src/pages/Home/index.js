import "./style.css"
import BannerHome from "../../components/BannerHome"
import TextosHome from "../../components/TextoHome"

function Home() {
  return (
    <div className="container-home">
      <div className="home">
        <TextosHome />
        <BannerHome />
      </div>
    </div>

  )
}

export default Home
