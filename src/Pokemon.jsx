function RandomPokemon(){
    const randNumb = Math.trunc(Math.random() * 150) + 1;
    const imagePoke = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randNumb}.png`
    return <div><h2> Pokemon #{randNumb}</h2>
    <img src={imagePoke} className="flex w-6/12" /> </div> 
}

export default RandomPokemon
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png