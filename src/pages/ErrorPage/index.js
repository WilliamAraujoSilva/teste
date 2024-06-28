import "./style.css"
import error404 from "../../svg/404error.svg"
import ButtonHome from "../../components/ButtonHome"

export const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-box">
        <img className="error404" src={error404} alt="error404" />
        <p className="errorText"><span className="rocketTeam">A equipe Rocket</span> venceu desta vez.</p>
        <ButtonHome
          texto='Voltar'
          customClass="secondary"
        />
      </div>
      
    </div>
  )
}
