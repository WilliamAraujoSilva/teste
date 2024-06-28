import "./style.css"
import ButtonHome from "../ButtonHome"

function TextoHome() {
  return (
    <div className="texto-container">
      <h1 className="titulo-home">
        Encontre todos os seus Pokemons favoritos
      </h1>
      <p className="texto-home">
        Você pode conhecer o tipo de Pokémon, seus pontos fortes, desvantagens e
        habilidades
      </p>
      <ButtonHome
       texto = 'veja mais pokemons'
      />

    </div>
  )
}

export default TextoHome
