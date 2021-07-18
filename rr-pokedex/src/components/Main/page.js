function page(props) {

  const {
    pokemonList,
    alerts
  } = props;

  return (
    <div>
      <h1>{alerts.textAlert}</h1>
      <div>
        {
          pokemonList.error === '' ? 
          pokemonList.pokemons.map( (pokemon, index) => <h2 key={index+'pk'} > Un {pokemon.name} salvaje ha aparecido </h2>)
          :
          <h2>{pokemonList.error}</h2>
            
        }
      </div> 
    </div>
  )
}



export default page;
