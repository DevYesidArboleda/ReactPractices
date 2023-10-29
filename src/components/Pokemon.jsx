
  const Pokemon = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await res.json();
      //console.log("respuesta Pokemon", data.results);
      //data.results.map((poke) => console.log(poke));
      const filter = data.results.filter((poken) => poken.name !== "bulbasaur");
      //console.log("filter", filter);
    } catch (error) {
      console.log(error);
    }
  };
  

  export default Pokemon;