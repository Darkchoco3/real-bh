import PropTypes from 'prop-types';
import "../Styles/PropertyCard.css";
import bedIcon from "../assets/bedroom.svg";
import toiletIcon from "../assets/batroom.svg";
import linkIcon from "../assets/change.svg";
import shareIcon from "../assets/share.svg";
import heartIcon from "../assets/love (2).svg";

const PropertyCard = ({ properties }) => {
  return (
    
    <div className="property-card col-md-4 mb-4">
      <div className="card">
        <img src={properties.image} className="card-img-top" alt={properties.title} />
        <div className="card-body">
          <h5 className="card-title">{properties.title}</h5>
          <p className="card-location">{properties.location}</p>
          <p className="card-description">{properties.description}</p>
          <div className='card-info d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
              <img src={bedIcon} alt="Bed Icon" className="icon" />
              <p className="mb-0 ml-2">{properties.bedrooms} bedrooms</p>
            </div>
            <div className='d-flex align-items-center'>
              <img src={toiletIcon} alt="Toilet Icon" className="icon" />
              <p className="mb-0 ml-2">{properties.toilets} toilets</p>
            </div>
          </div>
          <div className='card-footer d-flex justify-content-between'>
            <p className="card-price">{properties.price}</p>
            <div className='card-actions d-flex'>
              <img src={linkIcon} alt="Link Icon" className="icon-action"  width={20}/>
              <img src={shareIcon} alt="Share Icon" className="icon-action" width={20}/>
              <img src={heartIcon} alt="Heart Icon" className="icon-action" width={20}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  properties: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    toilets: PropTypes.number.isRequired,
  }).isRequired,
};

export default PropertyCard;