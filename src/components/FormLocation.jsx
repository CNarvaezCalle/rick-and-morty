import getRandomNumber from "../utils/getRandomNumber"
import './styles/FormLocation.css'

const FormLocation = ({ setIdLocation }) => {

       const handleSubmit = (e) => {
        e.preventDefault()
        const inputValue = e.target.inputId.value.trim()
        if(inputValue !== '' || inputValue === '0'){
          setIdLocation(inputValue)
        } else {
          setIdLocation(getRandomNumber(126))
        }
        e.target.inputId.value = ''
       } 


  return (
    <form className="search__container" onSubmit={handleSubmit}>
        <input className="search__input" id="inputId" style={{boxShadow: '1px 1px 10px'}} type="text" />
        <button className="search__button" style= {{color:'var(--bg-color)'}}>Search</button>
    </form>
  )
}

export default FormLocation