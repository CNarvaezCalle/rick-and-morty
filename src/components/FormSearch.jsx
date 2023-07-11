import './styles/FormLocation.css'

const FormSearch = ({ setIdChar }) => {

       const handleSubmit = (e) => {
        e.preventDefault()
        const inputValueTwo = e.target.inputChar.value.trim()
        setIdChar(inputValueTwo)
        // setIsCheckOn(true)
        e.target.inputChar.value = ''
       }


  return (
    <form className="search__container--char" onSubmit={handleSubmit}>
        <input className="search__input--char" id="inputChar" style={{boxShadow: '1px 1px 10px'}} type="text" />
        <button className="search__button--char">Search</button>
    </form>
  )
}

export default FormSearch