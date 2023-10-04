import data from "../characters.json"
const characters = require('../characters.json');
function ListeCharacters(){
    return(<ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li> 
          ))}
          </ul>);
          }

export default ListeCharacters

