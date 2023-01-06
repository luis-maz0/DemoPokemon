const container = document.querySelector("#container");
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for(let i = 1; i<=151; i++){
    const pokemon = document.createElement("div");
    const img = document.createElement("img");
    const label = document.createElement("span");
    
    label.innerText = `#${i}`; 
    img.src = `${baseURL}${i}.png`;

    pokemon.appendChild(img); 
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}
