import { Navbar } from "../Navbar"
import logoHeader from "../../img/LogoHeader.png"
import "./style.css"

function Header() {
  return (
    <header>
      <div className="container-header">
        <div className="header">
          <img
            className="logo-header"
            src={logoHeader}
            alt="Logo Pokemon"
          ></img>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header
