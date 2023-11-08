import React from 'react';
import { CharactersList } from '../compenents/CharactersList';
import { NumberOfCharacters } from '../compenents/NumberOfCharacters';

const characters = require('../data/characters.json');

const CharactersPage = () => {
    // change the title of the page
    document.title = "Marvel App";

    return (
        <>
            <h2>Marvel Characters</h2>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;
