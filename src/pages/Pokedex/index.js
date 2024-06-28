import Input from "../../components/Input"
import "./style.css"

function Pokedex() {
  return (
    <div className="container-pokedex">
      <div className="pokedex">
        <div className="pokedex-title">
          800 <strong className="strong">Pokemons</strong> para você escolher o seu favorito</div>
          <Input/>
      </div>
      
    </div>
  )
}

export default Pokedex
