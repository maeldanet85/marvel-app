import { render, screen } from '@testing-library/react';
import { CharactersList } from './CharactersList';
import { BrowserRouter } from 'react-router-dom'


describe('CharactersList', () => {

    it('renders a list of characters', () => {
        // when
        const characters = [
            { id: 1, name: 'Iron Man' },
            { id: 2, name: 'Captain America' },
            { id: 3, name: 'Thor' },
        ];

        // then
        render(<CharactersList characters={characters} />, { wrapper: BrowserRouter });

        // expect a list with the id "characters" to be in the document
        const characterList = screen.getByRole('list', { id: 'characters' });
        expect(characterList).toBeInTheDocument();

        // expect a listitem for each character
        const characterItems = screen.getAllByRole('listitem');
        expect(characterItems).toHaveLength(characters.length);

        // expect each listitem to have the character name and a link to the character detail page
        characterItems.forEach((item, index) => {
            // expect each listitem to have the character name
            expect(item).toHaveTextContent(characters[index].name);

            // expect each listitem to have a link to the character detail page
            const link = screen.getByRole('link', { name: characters[index].name });
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', `/characters/${characters[index].id}`);
        });

    });

    it('renders an empty list when no characters are provided', () => {
        // when

        // then
        render(<CharactersList />, { wrapper: BrowserRouter });

        // expect a list with the id "characters" to be in the document
        const characterList = screen.getByRole('list', { id: 'characters' });
        expect(characterList).toBeInTheDocument();

        // expect no listitems
        const characterItems = screen.queryAllByRole('listitem');
        expect(characterItems).toHaveLength(0);
    });

    it('renders a list of characters with links to the character detail page', () => {
        // when
        render(<CharactersList characters={characters} />, { wrapper: BrowserRouter });
    
        // then
        // expect a list with the id "characters" to be in the document
        const characterList = screen.getByRole('list', { id: 'characters' });
        expect(characterList).toBeInTheDocument();
    
        // expect each listitem to have the character name and a link to the character detail page
        characters.forEach((character, index) => {
            // expect each listitem to have a link to the character detail page
            const link = screen.getByRole('link', { name: characters[index].name });
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', `/characters/${characters[index].id}`);
        });
    });

    it('renders a list of characters with links and dates', () => {
        render(<CharactersList characters={characters} />, { wrapper: BrowserRouter });

        characters.forEach((character) => {
            const link = screen.getByTestId(`character-link-${character.id}`);
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', `/characters/${character.id}`);

            const date = screen.getByText(format(character.dateModified, 'MMMM d, yyyy'));
            expect(date).toBeInTheDocument();
        });
    });

});