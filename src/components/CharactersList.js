import { Link } from "react-router-dom";
// import { format } from 'date-fns';

export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                        <strong>{character.name}</strong>
                    </Link>
                    {/* <small>{format(new Date(character.modified), 'MMMM d, yyyy')}</small>  */}
                </li>
            ))}
        </ul>
    );
}