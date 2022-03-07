

const loadPokemon = document.getElementById('loadpokemon')
const pokemon = document.getElementById('pokemon')


loadPokemon.addEventListener('click', function () {

  const randomNum = Math.floor(Math.random() * 898)

  fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
    .then(res => res.json())
    .then(pokeData => {

      renderPokemon(pokeData)

    })

  function renderPokemon(pokeData) {

    if (document.getElementById('pokemon') !== null) { document.getElementById('pokemon').remove() }

    let pokeContainer = document.createElement('div')
    let gridBox = document.createElement('div')
    let pokeName = document.createElement('h2')
    let pokeNum = document.createElement('h5')
    let pokeTypes = document.createElement('ul')

    pokeContainer.id = "pokemon"
    gridBox.classList.add('grid')

    pokeName.innerText = pokeData.name
    pokeNum.innerText = "ID: " + `#${pokeData.id}`
    pokeTypes.innerText = "Type: "

    gridBox.append(pokeTypes)
    pokeContainer.append(pokeName, pokeNum, gridBox);

    createPokeImg(pokeData.id)
    createTypes(pokeData.types, pokeTypes)

    function createPokeImg(pokeNum) {

      let pokeImg = document.createElement('img')
      pokeImg.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`

      gridBox.append(pokeImg)
    }

    function createTypes(types, ul) {
      types.forEach(function (type) {

        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        pokeTypes.append(typeLi)

        document.body.append(pokeContainer)
      })
    }
  }
})

