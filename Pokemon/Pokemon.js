const pokeXplosion = function () { 
    for (let i = 1; i <= 151; i++) {
        const pokemon = document.createElement("img");
        pokemon.setAttribute("src", `./PkmnOldSprites/${i}.png`);
        pokemon.setAttribute("id", i);
        document.querySelector(".container").appendChild(pokemon);
        }
}
//`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${i}.png`

pokeXplosion();

const pokeNum = document.querySelectorAll(".container img");
const pokeTitle = document.querySelector(".pixelTitle");
console.log(pokeNum);

/* pokeNum.forEach() => { e.addEventListener() => e.target.id} */

const pokeCries = function(evt) { 
    const el = evt.target;
    const audio = new Audio(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${el.id}.ogg`);
    audio.volume = 0.8;
    audio.play();
}

const pokeColor = function(evt) {
    const el = evt.target;
    console.log(evt.target);
    el.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${el.id}.png`);
}

pokeNum.forEach(item => {
    item.addEventListener("click", pokeCries);
    item.addEventListener("mouseover", pokeColor);
});

const pokeMusicPause = function() {
    audio.pause();
}

const pokeMusic = function() {
    const audio = new Audio(`https://fi.zophar.net/soundfiles/gameboy-gbs/pokemon-red/02%20Opening%20%28part%202%29.mp3`)
    audio.volume = 0.3;
    audio.play();
    pokeTitle.removeEventListener("click", pokeMusic);
    pokeTitle.addEventListener("click", () => {
        audio.pause();
        pokeTitle.addEventListener("click", pokeMusic);
    });
}


pokeTitle.addEventListener("click", pokeMusic);

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/1.png

//`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${i}.png`

// `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/${i}.png`


/* const pokeXplosion = function () { 
    for (let i = 1; i <= 151; i++) {
        const pokemon = document.createElement("img");
        pokemon.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${i}.png`);
        document.querySelector("div").appendChild(pokemon);
        }
}

pokeXplosion(); */


/* const audioElement = new Audio("35.ogg");
audioElement.play(); */

