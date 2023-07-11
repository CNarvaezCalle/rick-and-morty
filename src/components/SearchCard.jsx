import { useState, useEffect } from "react";
import axios from "axios";
import FilterPage from "./FilterPage";
import Prueba from "./Prueba";
import App from "../App"

const SearchCard = ({ characterName }) => {
    
  const [filteredCharacter, setFilteredCharacter] = useState();
  const [isCheckOn, setCheckOn] = useState(false)

  useEffect(() => {
    if (characterName !== '') {    
      const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`;
      axios.get(url)
        .then(res => {
          setFilteredCharacter(res.data.results);
          setCheckOn(true)
        })
        .catch(err => {
          console.error(err);
        })
        .finally(()=>{
            setCheckOn(false)
        })
    }
  }, [characterName]);
  console.log(filteredCharacter)

  return (
    <>
      {filteredCharacter?.map((character) => (
        <Prueba 
          key={filteredCharacter?.id}
          character={character}
        />
      ))}
    </>
  );
};

export default SearchCard;