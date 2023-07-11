import { useState, useEffect } from 'react'
import SearchCard from './SearchCard';


const FilterPage = () => {
    const [characterName, setCharacterName] = useState('');
     const [isCheckOn, setIsCheckOn] = useState(false);
    
    
    const handleSubmit = e => {
      e.preventDefault()
      const inputValue = e.target.inputName.value.trim()
      setCharacterName(inputValue)
      setIsCheckOn(true)

      
    }


    console.log(characterName)
  
    return (
        <>
          <form onSubmit={handleSubmit}>
              <input id="inputName" type="text" style={{boxShadow: '1px 1px 10px'}}/>
              <button style={{color:'green'}}></button>
          </form>
            {characterName !== undefined && characterName !== '' &&
              <SearchCard 
                characterName={characterName}
              />    
          }
        </>
    )
}

export default FilterPage
