import logo from './logo.svg';
import './App.css';
import React from "react";
import ListeCharacters from './compenents/ListeCaract';
import Title from './compenents/title';
import NumberCharacters from './compenents/NbCharacters';
const characters = require('./characters.json');


function App() {
return (
  <>
    {/* 
        La propriété id et data-demo sont passées au composant Title grâce au spread operator.
        La propriété color est définie dans le composant Title
     */}
    <Title color="blue" id="my-id" data-demo="demo">Bienvenue sur mon app marvel</Title>
    <ListeCharacters></ListeCharacters> 
    <NumberCharacters></NumberCharacters>


  </>
);
}

export default App;


