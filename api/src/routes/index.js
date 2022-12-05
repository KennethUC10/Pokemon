const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
//  const fetch = require('fetch');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//      Aqui traigo la informacion de la API
const getPokemons = async () => {
    const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon');
    //  console.log(apiUrl.data);

    const apiInfo = await apiUrl.data.map(el => {
        return {
            name: el.name,
            life: el.life,
            attack: el.attack,
            defense: el.defense,
            speed: el.speed,
            height: el.height,
            image: el.image
        }
    });
    return apiInfo;
}

module.exports = router;
