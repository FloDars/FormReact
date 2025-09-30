// const {sleep} = require("./10_promise");
const sleep = (ms) => new Promise(resolve => setTimeout(resolve,ms));

/**
 * Créez une fonction synchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser .then
 * 
 * contrainte:
 *    - votre fonction doit être synchrone et ne pas retourner de Promise
 *    - ne pas utiliser async await
 * 
 */
const usingThen = (callback) => sleep(2000).then(() => callback());
console.log("deb")
usingThen(console.log);
console.log("fin")
/**
 * Créez une fonction asynchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser await
 * 
 * contrainte:
 *   - votre fonction doit être asynchrone et retourner une Promise
 *   - ne pas utiliser .then
 */

const usingAwait = async () => {
    await sleep(2000);
    console.log("wait end")
};
console.log("await deb");
usingAwait()

/**
 * Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
 * retourne le résultat de la requête (body)
 * 
 * Vous pouvez utiliser axios, mais n'oubliez pas d'installer le package et de l'importer
 * npm install axios
 * 
 * votre réponse doit être un objet json
 * 
 * url de test: https://jsonplaceholder.typicode.com/todos/1
 */

//décommentez la ligne suivante une fois le package installé
const axios = require("axios");

const apiResponse = async (url) => {
    const res = await axios.get(url);
    // console.log(res.data)
    return res.data;
};
apiResponse("http://jsonplaceholder.typicode.com/todos/1")
console.log("http://jsonplaceholder.typicode.com/todos/1")
module.exports = {usingThen, usingAwait, apiResponse};