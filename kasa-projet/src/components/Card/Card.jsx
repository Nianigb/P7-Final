// eslint-disable-next-line
import style from './Card.css';

const Card = (props) => {
    return (
      <div className="card">
        <img src={props.cover} alt={`Logement dont le titre est ${props.title}`} />
        <p>{props.title}</p>
      </div>
    );
  }
  
  export default Card;