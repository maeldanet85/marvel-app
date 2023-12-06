import React, { useState } from 'react';
import charactersData from '../data/characters.json';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend,
} from 'recharts';

const CompareCharactersPage = () => {
    // change the title of the page
    document.title = "Compare | Marvel App";

    // Use the imported characters data
    const [characters, setCharacters] = useState(charactersData);

    // transform the characters to array of label/value objects
const options = characters.map((character, index) => {
    const capacities = Object.keys(character.capacities).map(key => ({
        name: key,
        value: character.capacities[key],
    }));

    return {
        value: index,
        label: character.name,
        capacities,
    };
});


    // set the default options to the first two characters
    const [option1, setOption1] = useState(options[0]);
    const [option2, setOption2] = useState(options[1]);

    const centerStyle = {
        textAlign: 'center',
        width: 500,
    };
    
    // Merge the capacities of the two characters
    const capacities = option1.capacities.map((capacity, index) => ({
        name: capacity.name,
        [option1.label]: capacity.value,
        [option2.label]: option2.capacities[index] ? option2.capacities[index].value : 0,
    }));

    return (
        <>
            <h2>Compare characters</h2>
    
            <p style={centerStyle}>
                <select
                    value={option1.value}
                    onChange={(event) => setOption1(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>&nbsp; {/* Fix the ambiguous spacing */}
                with&nbsp;
                <select
                    value={option2.value}
                    onChange={(event) => setOption2(options[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </p>
    
            <div style={centerStyle}>
                {characters[option1.value].thumbnail && 
                    <img style={{ marginRight: '20px' }} src={`${characters[option1.value].thumbnail.path}/standard_large.${characters[option1.value].thumbnail.extension}`} alt={characters[option1.value].name} />
                }
                {characters[option2.value].thumbnail && 
                    <img src={`${characters[option2.value].thumbnail.path}/standard_large.${characters[option2.value].thumbnail.extension}`} alt={characters[option2.value].name} />
                }
            </div>

            <p style={centerStyle}>
                {characters[option1.value].name} vs {characters[option2.value].name}
            </p>

            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={capacities}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Radar name={option1.label} dataKey={option1.label} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name={option2.label} dataKey={option2.label} stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </>
    );
}

export default CompareCharactersPage;