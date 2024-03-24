import { useState } from 'react';
import { BsHandThumbsUp } from "react-icons/bs"
import { BsHandThumbsDown } from "react-icons/bs"

const ReviewForm = ({ onReviewSubmit }) => {
 const [newReview, setNewReview] = useState({
    name: '',
    comment: '',
    rating: 5,
    thumbsUpClicked: false,
    thumbsDownClicked: false,
  });

  const handleRatingChange = (rating) => {
    setNewReview({
      ...newReview,
      rating,
    });
  };

    const handleThumbsUpClick = () => {
    setNewReview({
      ...newReview,
      thumbsUpClicked: !newReview.thumbsUpClicked,
      // Ensure only one of thumbs up or thumbs down is clicked
      thumbsDownClicked: false,
    });
  };

  const handleThumbsDownClick = () => {
    setNewReview({
      ...newReview,
      thumbsDownClicked: !newReview.thumbsDownClicked,
      // Ensure only one of thumbs up or thumbs down is clicked
      thumbsUpClicked: false,
    });
  };

  const handleSubmit = () => {
    if (newReview.name && newReview.comment) {
      onReviewSubmit(newReview);
      // Reset the form fields
      setNewReview({
        name: '',
        comment: '',
        rating: 5,
      });
    }
  };

  return (
    <div className="mt-4">
      
      <div className="mb-4 mt-4">
        <label htmlFor="name" className="font-semibold text-md">
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          className="block w-[270px] min-[600px]:w-[350px] mt-1 border rounded-md p-2 focus:outline-none"
          value={newReview.name}
          onChange={(e) =>
            setNewReview({ ...newReview, name: e.target.value })
          }
        />
      </div>
      <div className="mb-4">
        <label htmlFor="comment" className="font-semibold text-md">
          Your Comment:
        </label>
        <textarea
          id="comment"
          className="block w-[270px] min-[600px]:w-[350px] mt-1 border rounded-md p-2 focus:outline-none"
          rows="4"
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
        />
      </div>
      <div className="mb-4">
        <label className="font-medium text-md">Rating:</label>
        <div className="flex items-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleRatingChange(star)}
              className={`text-2xl cursor-pointer ${
                star <= newReview.rating ? 'text-yellow-500' : 'text-gray-300'
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

     <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 mb-4">
         <button
        onClick={handleThumbsUpClick}
        className={`text-2xl cursor-pointer ${
          newReview.thumbsUpClicked ? 'text-yellow-500': 'text-gray-300'
        }`}
      >
       <BsHandThumbsUp />
      </button>
      <p className="text-md font-medium">{newReview.thumbsUpClicked ? 1 : 0}</p>
      </div>

      <div className="flex items-center gap-2 mb-4">
         <button
        onClick={handleThumbsDownClick}
        className={`text-2xl cursor-pointer ${
          newReview.thumbsDownClicked ? 'text-red-500' : 'text-gray-300'
        }`}
      >
        <BsHandThumbsDown />
      </button>

         <p> {newReview.thumbsDownClicked ? 1 : 0}</p>
      </div>
     </div>
      
      <button
        onClick={handleSubmit}
        className="cursor-pointer text-white font-medium text-sm hover:bg-gradient-to-l duration-300 transition bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-10 rounded-lg  text-center"
      >
        Submit
      </button>
    </div>
  );
};

export default ReviewForm;
