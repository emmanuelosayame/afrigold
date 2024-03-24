import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addItemToCart } from '../slices/cartSlice';
import { useWishlistStore } from '../store/store';
import { selectIsAuthenticated } from '../slices/authSlice';

const Search = ({ data, searchQuery, setSearchQuery, onSearch, searchResults, showNotFoundPopup, setShowNotFoundPopup }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const router = useRouter();

  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    const input = searchQuery.toLowerCase();
    const suggestedResults = data
      .filter((result) => result.name.toLowerCase().includes(input))
      .map((result) => result.name);

    setSuggestions(suggestedResults);
  }, [searchQuery, data]);

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setIsDropdownVisible(query.length > 0);
  };

  const handleSearchIconClick = () => {
    onSearch();
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (!query) {
      setShowNotFoundPopup(false);
      setIsDropdownVisible(false);
    }
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

 



  const handleFavoriteClick = (id, name, imageUrl, price) => {
    const isMealInWishlist = wishlist.some((item) => item.id === id);

    if (!isAuthenticated) {
      toast.warning('Please log in to add the meal to your wishlist.');
      router.push('/login');
    } else {
      if (isMealInWishlist) {
        removeFromWishlist(id);
        toast.info('Meal removed from the wishlist!');
      } else {
        addToWishlist({ id, name, image: imageUrl, price });
        toast.success('Meal added to the wishlist!');
      }
    }
  };

    const handleOrderClick = (id, name, imageUrl, price) => {
   //   // const isMealInWishlist = wishlist.some((item) => item.id === id);
  
      if (!isAuthenticated) {
        toast.warning('Please log in to add the meal to your wishlist.');
        router.push('/login');
      } else {
        const isMealInCart = cart.some((item) => item.id === id);
  
        if (isMealInCart) {
          toast.info('Meal is already in the cart!');
        } else {
         dispatch(addItemToCart({ id, name, image: imageUrl, price, quantity: 1 }))
          toast.success('Meal added to the cart!');
        }
  
       
      }
    };
  
 


  


  return (
    <div className="search-container">
      <div className="search-input-container">
        <div className="search-icon" onClick={handleSearchIconClick}>
          <FiSearch size={16} />
        </div>
        <input
          type="text"
          placeholder="Search for food, restaurant, or eateries"
          value={searchQuery}
          onChange={handleSearchInputChange}
          onKeyDown={handleKeyDown}
          onInput={handleInputChange}
          className="search-input rounded-xl"
        />
        {isDropdownVisible && (
          <div className="suggestions-dropdown mb-32">
            <ul className="suggestion-list space-y-2 ml-4 mt-4 mb-4">
              {suggestions.map((suggestion, index) => (
                <li className="cursor-pointer" key={index} onClick={() => setSearchQuery(suggestion)}>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {showNotFoundPopup && <p className="not-found-popup">Keyword not found</p>}
      <div className="search-results">
        {searchResults &&
          searchResults.map((result) => (
            <div key={result.id} className="search-result">
              {result.type === 'food' && (
                <div className="container mx-auto">
                  <div className="relative bg-white mt-32 mb-32 shadow-lg rounded-lg overflow-hidden card-large">
                    <div className="h-32 relative">
                      <Image src={result.imageUrl} alt={result.name} layout="fill" objectFit="cover" />
                    </div>
                    <div className="p-4 flex justify-between items-center gap-2">
                      <div className="flex flex-col items-center ">
                        <div className="flex items-center">
                          <p className="text-lg font-semibold text-center">{result.name}</p>
                        </div>
                        <div>
                          <p className="text-md font-semibold">{` ${result.price}`}</p>
                        </div>
                        <div className="flex items-center justify-between order-flex space-x-10 max-[1020px]:space-x-24 ">
                          <button
                            className="flex items-center  mt-4 text-white p-3 text-[12px] rounded-lg bg-blue-500 text-sm"
                            onClick={() => handleOrderClick(result.id, result.name, result.imageUrl, result.price)}
                          >
                            Order
                          </button>
                          <FaHeart
                            className={
                              wishlist.some((item) => item.id === result.id)
                                ? 'text-red-500 cursor-pointer text-lg mr-4'
                                : 'text-gray-400 cursor-pointer text-lg mr-4'
                            }
                            onClick={() =>
                              handleFavoriteClick(result.id, result.name, result.imageUrl, result.price)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {result.type === 'restaurant' && (
                <div className="restaurant-card mt-32">
                  <Link
                    href={{
                      pathname: '/restaurants/[slug]',
                      query: { slug: result.slug },
                    }}
                    passHref
                  >
                    <a>
                      <div className="restaurant-image">
                        <div className="image-overlay"></div>
                        <Image src={result.backgroundImage} alt={result.name} layout="fill" objectFit="cover" />
                      </div>
                      <div className="restaurant-details">
                        <h2 className="restaurant-name">{result.name}</h2>
                        <div className="restaurant-rating">
                          <span className="star-icon">⭐</span>
                          <span className="rating-number">{result.rating}</span>
                          <span className="rating-text">
                            {result.rating >= 4 ? 'Good' : 'Average'}
                          </span>
                          <span className="num-ratings">({result.numRatings})</span>
                        </div>
                        <div className="delivery-time">
                          <div>
                            <p className="clock-icon">⏰</p>
                          </div>
                          <div>
                            <p className="time-range">{result.deliveryTime}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
