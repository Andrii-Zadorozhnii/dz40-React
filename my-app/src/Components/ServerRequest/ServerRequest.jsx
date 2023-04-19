import {
    useState,
    useEffect
} from "react";

import '../ServerRequest/ServerRequest.css';


function ServerRequest() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
        .catch(error => console.error(error));
    }, []);
  
    const characterData = JSON.stringify(characters, null, 2);
    console.log(characterData);


    return (
        
      <>
        <h1 className="Characters">Character List</h1>
        <div className="box-total">
        {characters.map((character) => (
          <div className="box-container">
          <h2 key={character.id}>{character.name}</h2>
          
          <img key={character.image} src={character.image} alt="pProfilImage" />
          <p key={character.gender}><span>Gender:</span> {character.gender}</p>
          <p key={character.species}><span>Specied:</span> {character.species}</p>
            <p key={character.status}><span>Status:</span> {character.status}</p>
          </div>

        ))}
        </div>
      </>
    );
  }
export default ServerRequest;