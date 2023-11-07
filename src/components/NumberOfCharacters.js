import data from "../data/characters.json"
const characters = require('../data/characters.json');

function NumberOfCharacters(){
    return(<h1>Number of characters : {characters.length}</h1>);
  }
  
export default NumberOfCharacters