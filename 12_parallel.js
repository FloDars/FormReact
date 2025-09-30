/**
 * Utilisez la fonction Promise.all pour exécuter 3 appels API en parallèle
 * 
 * urls:
 * - http://jsonplaceholder.typicode.com/todos/1
 * - http://jsonplaceholder.typicode.com/todos/2
 * - http://jsonplaceholder.typicode.com/todos/3
 * 
 * Retournez un tableau contenant les 3 résultats
 * 
 * Vous pouvez utiliser votre fonction apiResponse créé précedement: const {apiResponse} = require("./11_async");
 * 
 * documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
*/

const {apiResponse} = require("./11_async");

const parallel = (url1,url2,url3) => {
    const values = Promise.all([apiResponse(url1), apiResponse(url2) , apiResponse(url3)]).then((values) => console.log(values));
    console.log(values);
    return values;
}
parallel("http://jsonplaceholder.typicode.com/todos/1" ,"http://jsonplaceholder.typicode.com/todos/2" , "http://jsonplaceholder.typicode.com/todos/3")
module.exports = {parallel};
