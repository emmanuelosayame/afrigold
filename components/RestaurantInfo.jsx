// components/RestaurantInfo.js

import { useEffect, useState } from 'react';
import { mockRestaurants } from './MockData';
import Image from 'next/image';
import { GrLocation } from 'react-icons/gr';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { BsChatDots } from 'react-icons/bs';
import { BsHandThumbsUp } from 'react-icons/bs';
import PhoneNumberModal from './PhoneNumberModal';
import ReviewForm from './ReviewForm';

const RestaurantInfo = ({ slug }) => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalPhoneNumber, setModalPhoneNumber] = useState('');
  const [reviewFormVisible, setReviewFormVisible] = useState(false);
  const [reviews, setReviews] = useState([]); // Initialize with an empty array for reviews
  const [userRating, setUserRating] = useState(0);
  const [formattedDate, setFormattedDate] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCall = () => {
    window.location.href = `tel:${modalPhoneNumber}`;
  };

  useEffect(() => {
    if (slug) {
      const matchedRestaurant = mockRestaurants.find((restaurant) =>
        restaurant.slug.includes(slug)
      );

      if (matchedRestaurant) {
        setRestaurantData(matchedRestaurant);
      }
    }
  }, [slug]);

  useEffect(() => {
    // Load reviews from localStorage when the component mounts
    const storedReviews = localStorage.getItem('restaurantReviews');
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  useEffect(() => {
    // Serialize and store reviews in localStorage whenever reviews change
    localStorage.setItem('restaurantReviews', JSON.stringify(reviews));
  }, [reviews]);

  // Define a function to calculate the image height based on screen size
  const getImageHeight = () => {
    if (typeof window !== 'undefined') {
      // Get the window width and set a threshold for switching between small and large screens
      const windowWidth = window.innerWidth;
      const threshold = 768; // Adjust this threshold as needed

      // Conditionally set the height based on screen size
      return windowWidth < threshold ? 1150 : 540; // Adjust the heights as needed
    }
    return 1150; // Default height for server-side rendering
  };

  const imageHeight = getImageHeight();

  if (!restaurantData) {
    return <div>Loading...</div>;
  }

  const handleReviewSubmit = (newReview) => {
    const currentDate = new Date();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const formattedDate = `${
      monthNames[currentDate.getMonth()]
    } ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

    const updatedReview = {
      ...newReview,
      date: formattedDate,
      thumbsUpCount: 0,
    };
    setReviews([...reviews, updatedReview]);

    // Hide the review form after submission
    setReviewFormVisible(false);

    setUserRating(newReview.rating);

    setFormattedDate(formattedDate);
  };

  const toggleReviewForm = () => {
    setReviewFormVisible(!reviewFormVisible);
  };

  const handleThumbsUp = (index) => {
    const updatedReviews = [...reviews];
    const reviewToUpdate = updatedReviews[index];

    if (!reviewToUpdate.thumbsUpClicked) {
      reviewToUpdate.thumbsUpClicked = true;
      reviewToUpdate.thumbsDownClicked = false;
    } else {
      reviewToUpdate.thumbsUpClicked = false;
    }

    setReviews(updatedReviews);
  };

  const handleThumbsDown = (index) => {
    const updatedReviews = [...reviews];
    const reviewToUpdate = updatedReviews[index];

    if (!reviewToUpdate.thumbsDownClicked) {
      reviewToUpdate.thumbsDownClicked = true;
      reviewToUpdate.thumbsUpClicked = false;
    } else {
      reviewToUpdate.thumbsDownClicked = false;
    }

    setReviews(updatedReviews);
  };

  return (
    <div className=' mt-16'>
      <div className='restaurant-background-image'>
        {/* Restaurant Name on Background Image (Centered) */}
        <div className='restaurant-name-overlay'>
          <h1 className='restaurant-names'>{restaurantData.name}</h1>
        </div>

        {/* Delivery Time on Background Image (Bottom Left) */}
        <div className='delivery-time-overlay'>
          <p className='time-ranges '>{restaurantData.deliveryTime}</p>
        </div>

        <Image
          src={restaurantData.backgroundImage}
          alt={restaurantData.name}
          width={1920}
          height={imageHeight}
          objectFit='cover'
        />
      </div>
      <>
        <div className='restaurant-info min-[600px]:p-16'>
          <h1 className='restaurant-name text-2xl font-bold'>
            {restaurantData.name}
          </h1>

          {/* Location */}
          <div className='location flex gap-2 items-center mb-2'>
            <GrLocation size={12} />
            <p className='address'>
              {restaurantData.address}, {restaurantData.state},{' '}
              {restaurantData.country}
            </p>
          </div>

          {/* Restaurant Rating */}
          <div className='restaurant-rating'>
            <span className='star-icon'>⭐</span>
            <span className='rating-number'>{restaurantData.rating}</span>
            <span className='num-ratings'>({restaurantData.numRatings})</span>
          </div>

          {/* Opening Hours */}
          <div className='opening-hours flex gap-2 items-center mb-2'>
            <p className='clock-icon'>⏰</p>
            <p className=' text-black '>
              Opens untill {restaurantData.closingHour}
            </p>
          </div>

          {/* Delivery Status */}
          <div className='delivery-status flex gap-2 items-center mb-2'>
            <p className='delivery-icon'>🚚</p>
            <p className='status'>{restaurantData.deliveryStatus}</p>
          </div>
        </div>
      </>

      <hr className='w-[85%] min-[960px]:w-[85%] bg-gray-500 mx-auto' />

      <>
        <div className='restaurant-info min-[600px]:p-16 space-y-2'>
          <h3 className='text-xl font-semibold'>Opening Hours</h3>
          <div>
            <p>{restaurantData.openingDays}</p>
          </div>
          <div className='opening-hours flex gap-2 items-center mb-2'>
            <p className=' text-black '>
              {restaurantData.openingHour} - {restaurantData.closingHour}
            </p>
          </div>
          <div>
            <p>
              {restaurantData.closingDays}
              <span className='bg-[#D50606] p-1 rounded-lg text-white text-center duration-300 transition ml-2'>
                Closed
              </span>
            </p>
          </div>
        </div>
      </>

      <hr className='w-[85%] min-[960px]:w-[85%] bg-gray-500 mx-auto' />

      <>
        <div className='restaurant-info min-[600px]:p-16'>
          <h3 className='text-xl font-semibold mb-2'>Contact Us</h3>
          <div>
            <p className='mb-4 font-medium text-md'>
              Do you have issues placing order? Speak to our customer service
              representative.
            </p>
          </div>
          <div className='flex gap-4 max-[600px]:flex-col'>
            <div className='flex items-center gap-2'>
              <div
                className='bg-[#25D366] p-2 rounded-full cursor-pointer'
                onClick={() => {
                  setModalPhoneNumber(restaurantData.phoneNumber);
                  toggleModal();
                }}>
                <BsFillTelephoneInboundFill className='text-white h-3 w-3 text-center' />
              </div>
              <p
                className='font-medium text-md text-center cursor-pointer'
                onClick={() => {
                  setModalPhoneNumber(restaurantData.phoneNumber);
                  toggleModal();
                }}>
                Speak to our customer service representative
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <a
                href={`https://wa.me/${restaurantData.phoneNumber}`}
                className='flex gap-2 items-center'>
                <div className='bg-[#25D366] p-2 rounded-full'>
                  <BsChatDots className='text-white h-3 w-3 text-center' />
                </div>
                <p className='font-medium text-md text-center'>Chat</p>
              </a>
            </div>
          </div>
        </div>
      </>

      {showModal && (
        <PhoneNumberModal
          phoneNumber={modalPhoneNumber}
          onClose={toggleModal}
          onCall={handleCall}
        />
      )}
      <hr className='w-[85%] min-[960px]:w-[85%] bg-gray-500 mx-auto' />

      <>
        <div className='restaurant-info min-[600px]:p-16 space-y-4'>
          <div>
            <h2 className='text-2xl font-bold mb-4'>Our Reviews</h2>
            <div className='restaurant-rating text-sm mb-6'>
              <span className='star-icon'>⭐</span>
              <span className='rating-number'>{restaurantData.rating}</span>
              <span className='num-ratings'>({restaurantData.numRatings})</span>
            </div>
          </div>
          <button
            onClick={toggleReviewForm}
            className='cursor-pointer text-white font-medium text-sm hover:bg-gradient-to-l duration-300 transition bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg  text-center mt-12'>
            Add Your Review
          </button>
          {/* Render Review Form */}
          {reviewFormVisible && (
            <ReviewForm onReviewSubmit={handleReviewSubmit} />
          )}

          {/* Render Reviews */}
          {reviews.map((review, index) => (
            <div key={index} className='mt-4'>
              {/* Display the review information here */}
              <hr className='w-[85%] min-[960px]:w-[85%] bg-gray-500  mt-12' />
              <p className='text-md font-semibold mb-4 mt-6'> {review.name}</p>
              <div className='mr-4'>
                <span className='star-icon'></span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-2xl mr-4 ${
                      star <= userRating ? 'text-yellow-500' : 'text-gray-300'
                    }`}>
                    ★
                  </span>
                ))}
              </div>
              <p className='text-md mt-2 mb-2 font-semibold'>
                {' '}
                {review.comment}
              </p>
              {/* Display the star rating here */}

              {/* Display the date here */}
              {formattedDate && (
                <p className='text-gray-500'>{formattedDate}</p>
              )}
              {/* Display thumbs up icon and count here */}
              <div className='flex items-center gap-4 mt-2'>
                <div className='flex items-center gap-2'>
                  <button
                    onClick={() => handleThumbsUp(index)}
                    className={`text-2xl cursor-pointer ${
                      review.thumbsUpClicked
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}>
                    👍
                  </button>
                  <p>{review.thumbsUpClicked ? 1 : 0}</p>
                </div>

                <div className='flex items-center gap-2'>
                  <button
                    onClick={() => handleThumbsDown(index)}
                    className={`text-2xl cursor-pointer ${
                      review.thumbsDownClicked
                        ? 'text-red-500'
                        : 'text-gray-300'
                    }`}>
                    👎
                  </button>
                  <p>{review.thumbsDownClicked ? 1 : 0}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default RestaurantInfo;
