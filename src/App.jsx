import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import FormLocation from "./components/FormLocation";
import Page from "./components/Page";
import Loader from "./components/Loader";
import FormSearch from "./components/FormSearch";
import LocationChar from "./components/LocationChar";
import ResidentChar from "./components/ResidentChar";


function App() {
  const [location, setLocation] = useState();
  const [idLocation, setIdLocation] = useState(getRandomNumber(126));
  const [hasError, setHasError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const lastPage = startIndex / itemsPerPage + 1;
  const [isLoading, setIsLoading] = useState(true);
  const imagen = "https://gifdb.com/images/high/rick-sanchez-dancing-transparent-sticker-r51qoyn3sgxqo1tu.gif"
  const [idChar, setIdChar] = useState('')
  const [isOn, setIsOn] = useState(false)

  if (idChar === '') {
    
    useEffect(() => {
      const url = `https://rickandmortyapi.com/api/location/${idLocation}`
      setIsLoading(true)
      axios
      .get(url)
      .then((res) => 
      { 
        setLocation(res.data)
        setHasError(false)
      })
      .catch((err) => 
      {
        console.log(err)
        setHasError(true)
      })
      .finally(()=>{
        setIsLoading(false)
        
      })
    }, [idLocation]);
  } else { 

  useEffect(() => {
    const urlChar = `https://rickandmortyapi.com/api/character/?name=${idChar}`;
    setIsLoading(true)
    axios
      .get(urlChar)
      .then((res) => {
        setIdChar(res?.data.results);
        setIsOn(true)
        setHasError(false);
        
      })
      .catch((err) => {
        console.error(err);
        // setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
        setIsOn(false)
        setIdChar('')
      });
  }, [idChar]);
}
  
  return (
    
      <div className="container">
      <div className="header"></div>
      <FormLocation 
        setIdLocation={setIdLocation}
      />
      {/* <FormSearch 
        setIdChar={setIdChar}
      /> */}
      {/* {
        isOn
        ?(
          <article>
            <LocationChar
             idChar={idChar}
           />
            <div className="resident-container">
          { 
            idChar?.map((char) => (
              <ResidentChar
                key={idChar?.id}
                char={char}
              />
            ))
          }
            </div>
          </article>
        )
        :(

          <> */}
          {
            isLoading
            ?(
              <>
              <Loader />
              </>
            )
            :(
              hasError
              ? (
                <>
                <article className="error__container">
                <h1 className="error__title">❌🥒 Hey Morty! you must provide a number from 1 to 126 🥒😭</h1>
                <img className="error__logo" src="./WS2c.gif" alt="" />
                </article>
                </>)
              : (
                  <>
                  <LocationInfo 
                    location={location}
                  />
                  <div className="resident-container">
                    { 
                      location?.residents.slice(startIndex, endIndex).map(residentUrl => (
                        <ResidentCard 
                          key={residentUrl}
                          residentUrl={residentUrl}
                        />
                      ))
                    }
                  </div>
                  <Page 
                    location={location}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    endIndex={endIndex}
                  />
                  </>
                )
            )
          }
          {/* </>
      )
    } */}
    </div>
  )
}

export default App;

