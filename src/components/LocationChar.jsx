import './styles/LocationInfo.css'

const LocationChar = ({ idChar }) => {

  return (
    <article className="location__container">
      <h2 className="location__title">{idChar?.name}</h2>
      {/* <ul className="location__list">
        <li className="location__type">
          <span className="location__type--title">Type: </span>
          <span className="location__type--name">{location?.type}</span>
        </li>
        <li className="location__dimension">
          <span className="location__dimension--title">Dimension: </span>
          <span className="location__dimension--name">
            {location?.dimension}
          </span>
        </li>
        <li className="location__population">
          <span className="location__population--title">Population: </span>
          <span className="location__population--name">
            {location?.residents.length}
          </span>
        </li>
      </ul> */}
    </article>
  );
};

export default LocationChar;