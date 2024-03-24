// components/RestaurantCard.js
import Image from 'next/image';

const RestaurantCard = ({ name, rating, numRatings, deliveryTime, backgroundImage }) => {
  return (

    <div className="">
       <div className="restaurant-card mx-auto">
      <div className="restaurant-image">
        <div className="image-overlay"></div>
        <Image src={backgroundImage} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="restaurant-details">
        <h2 className="restaurant-name text-white">{name}</h2>
        <div className="restaurant-rating text-white">
          <span className="star-icon">⭐</span>
          <span className="rating-number">{rating}</span>
          <span className="rating-text">{rating >= 4 ? 'Good' : 'Average'}</span>
          <span className="num-ratings">({numRatings})</span>
        </div>
        <div className="delivery-time">
          <div>
            <p className="clock-icon">⏰</p>
          </div>
          
          <div>
            <p className="time-range">{deliveryTime}</p>
          </div>
        </div>
      </div>
   </div>
     
    </div>
   
  );
};

export default RestaurantCard;
