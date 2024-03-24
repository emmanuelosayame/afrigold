// import { useState, useEffect } from 'react';
// import { useMealStore } from '../../../store/store';
// import Image from 'next/image';
// import dynamic from 'next/dynamic';
// import styles from './Mealform.module.css';
// import { motion } from 'framer-motion';

// const MealForm = ({
//   showNoMealPopup,
//   setShowNoMealPopup,
//   showIncompletePopup,
//   setShowIncompletePopup,
//   onMealAdded,
//   onMealUpdated,
//   onCloseForm,
// }) => {
//   const { addMeal, editingMeal, clearEditingMeal, updateMeal } = useMealStore();
//   const [name, setName] = useState(editingMeal ? editingMeal.name : '');
//   const [description, setDescription] = useState(editingMeal ? editingMeal.description : '');
//   const [price, setPrice] = useState(editingMeal ? editingMeal.price : '');
//   const [image, setImage] = useState(editingMeal ? editingMeal.image : null);
//   const [showOverlay, setShowOverlay] = useState(true); // Always show the overlay

//   useEffect(() => {
//     // If editingMeal changes, update the form fields
//     setName(editingMeal ? editingMeal.name : '');
//     setDescription(editingMeal ? editingMeal.description : '');
//     setPrice(editingMeal ? editingMeal.price : '');
//     setImage(editingMeal ? editingMeal.image : null);
//   }, [editingMeal]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSave = () => {
//     if (name && description && price && image) {
//       if (editingMeal) {
//         updateMeal({ ...editingMeal, name, description, price, image });
//         clearEditingMeal();
//         onMealUpdated(); // Notify AdminMenu that a meal is updated
//       } else {
//         addMeal({ name, description, price, image });
//         onMealAdded(); // Notify AdminMenu that a new meal is added
//         // Directly set displayForm to 'menuList' after adding a new meal
//         window.dispatchEvent(new Event('newMealAdded'));
//       }

//       setName('');
//       setDescription('');
//       setPrice('');
//       setImage(null);
//       setShowIncompletePopup && setShowIncompletePopup(false); // Close incomplete input popup if the function is provided
//     } else {
//       setShowIncompletePopup && setShowIncompletePopup(true); // Show incomplete input popup if the function is provided
//     }

//     // Close the overlay after saving
//     // setShowOverlay(false);
//   };

//   const handleCloseForm = () => {
//     // Clear form data when closing the form
//     clearEditingMeal();
//     setName('');
//     setDescription('');
//     setPrice('');
//     setImage(null);
//     onCloseForm(); // Notify the parent component that the form should be closed
//   };

//   const handlePriceChange = (e) => {
//     // Keep the previous value if the new value is an empty string
//     setPrice(e.target.value !== '' ? Number(e.target.value) : '');
//   };

//   return (
//     <div className={styles['meal-form-container']}>
//       {/* Always show the overlay */}
//       {showOverlay && <div className={styles.overlay}></div>}
//       <div className={styles['meal-form-container-two']}>
//         <h2 className={styles['form-h2']}>{editingMeal ? 'Update Meal' : 'Add Product'}</h2>
//         <motion.div
//           initial={{ y: -100, opacity: 0, scale: 0.5 }}
//           animate={{ y: 0, opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5 }}
//           className='flex flex-col justify-center items-center gap-8 rounded-lg'
//         >
//           <div className={styles['meal-form']}>
//              <div className={styles['cancel-icon']} onClick={handleCloseForm}>
//                &#x2716;
//               </div>
//             <label className={styles['meal-label']}>
//               Name:
//               <input
//                 type='text'
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className={styles['meal-input']}
//               />
//             </label>

//             <label className={styles['meal-label']}>
//               Description:
//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className={styles['meal-textarea']}
//               />
//             </label>

//             <label className={styles['meal-label']}>
//               Price:
//               <input
//                 type='number'
//                 value={price === '' ? '' : Number(price)}
//                 onChange={handlePriceChange}
//                 className={styles['price-input']}
//               />
//             </label>

//             <label className={styles['meal-label']}>
//               Image:
//               <input type='file' accept='image/*' onChange={handleImageChange} />
//             </label>
//             <div className={styles['meal-img']}>
//               {image && <Image src={image} alt='Preview' width={100} height={100} className='cursor-pointer' />}
//             </div>
//           </div>
//           <button onClick={handleSave} className={styles['meal-button']}>
//             {editingMeal ? 'Update' : 'Add'}
//           </button>
//         </motion.div>

//         {/* Popup for no meals */}
//         {showNoMealPopup && (
//           <div className={styles['popup']}>
//             <p>No meal details added yet.</p>
//           </div>
//         )}

//         {/* Popup for incomplete input */}
//         {showIncompletePopup && (
//           <div className={styles['popup']}>
//             <p>Please provide complete details for the meal.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default dynamic(() => Promise.resolve(MealForm), { ssr: false });




// import { useState, useEffect } from 'react';
// import { useMealStore } from '../../../store/store';
// import Image from 'next/image';
// import dynamic from 'next/dynamic';
// import styles from './Mealform.module.css';
// import { motion } from 'framer-motion';

// const MealForm = ({
//   showNoMealPopup,
//   setShowNoMealPopup,
//   showIncompletePopup,
//   setShowIncompletePopup,
//   onMealAdded,
//   onMealUpdated,
//   onCloseForm,
// }) => {
//   const { addMeal, editingMeal, clearEditingMeal, updateMeal } = useMealStore();
//   const [name, setName] = useState(editingMeal ? editingMeal.name : '');
//   const [description, setDescription] = useState(editingMeal ? editingMeal.description : '');
//   const [price, setPrice] = useState(editingMeal ? editingMeal.price : '');
//   const [image, setImage] = useState(editingMeal ? editingMeal.image : null);

//   useEffect(() => {
//     // If editingMeal changes, update the form fields
//     setName(editingMeal ? editingMeal.name : '');
//     setDescription(editingMeal ? editingMeal.description : '');
//     setPrice(editingMeal ? editingMeal.price : '');
//     setImage(editingMeal ? editingMeal.image : null);
//   }, [editingMeal]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSave = () => {
//     if (name && description && price && image) {
//       if (editingMeal) {
//         updateMeal({ ...editingMeal, name, description, price, image });
//         clearEditingMeal();
//         onMealUpdated(); // Notify AdminMenu that a meal is updated
//       } else {
//         addMeal({ name, description, price, image });
//         onMealAdded(); // Notify AdminMenu that a new meal is added
//         window.dispatchEvent(new Event('newMealAdded'));
//       }

//       setName('');
//       setDescription('');
//       setPrice('');
//       setImage(null);
//     } else {
//       setShowIncompletePopup && setShowIncompletePopup(false);
//     }
//   };

//   const handleCloseForm = () => {
//     // Clear form data when closing the form
//     clearEditingMeal();
//     setName('');
//     setDescription('');
//     setPrice('');
//     setImage(null);
//     onCloseForm(); // Notify the parent component that the form should be closed
//   };

//   const handlePriceChange = (e) => {
//     // Keep the previous value if the new value is an empty string
//     setPrice(e.target.value !== '' ? Number(e.target.value) : '');
//   };

//   return (
//     <div className={styles['meal-form-container']}>
//       <div className={styles.overlay}></div>
//       <div className={styles['meal-form-container-two']}>
//         <h2 className={styles['form-h2']}>{editingMeal ? 'Update Meal' : 'Add Product'}</h2>
//         <motion.div
//           initial={{ y: -100, opacity: 0, scale: 0.5 }}
//           animate={{ y: 0, opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5 }}
//           className='flex flex-col justify-center items-center gap-8 rounded-lg'
//         >
//           <div className={styles['meal-form']}>
//             <div className={styles['cancel-icon']} onClick={handleCloseForm}>
//               &#x2716;
//             </div>
//             <label className={styles['meal-label']}>
//               Name:
//               <input
//                 type='text'
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className={styles['meal-input']}
//               />
//             </label>

//             <label className={styles['meal-label']}>
//               Description:
//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className={styles['meal-textarea']}
//               />
//             </label>

//             <label className={styles['meal-label']}>
//               Price:
//               <input
//                 type='number'
//                 value={price === '' ? '' : Number(price)}
//                 onChange={handlePriceChange}
//                 className={styles['price-input']}
//               />
//             </label>

//             <label className={styles['meal-label']}>
//               Image:
//               <input type='file' accept='image/*' onChange={handleImageChange} />
//             </label>
//             <div className={styles['meal-img']}>
//               {image && <Image src={image} alt='Preview' width={100} height={100} className='cursor-pointer' />}
//             </div>
//           </div>
//           <button onClick={() => {
//           if (!name || !description || !price || !image) {
//             setShowIncompletePopup && setShowIncompletePopup(true);
//           } else {
//             setShowIncompletePopup && setShowIncompletePopup(false);
//             handleSave();
//           }
//         }} className={styles['meal-button']}>
//           {editingMeal ? 'Update' : 'Add'}
//         </button>
//         </motion.div>

//           {/* Popup for no meals */}
//          {showNoMealPopup && (
//            <div className={styles['popup']}>
//              <p>No meal details added yet.</p>
//            </div>
//          )}

//          {/* Popup for incomplete input */}
//          {showIncompletePopup && (
//            <div className={styles['popup']}>
//              <p>Please provide complete details for the meal.</p>
//            </div>
//          )}
//       </div>
//     </div>
//   );
// };

// export default dynamic(() => Promise.resolve(MealForm), { ssr: false });


import { useState, useEffect } from 'react';
import { useMealStore } from '../../../store/store';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './Mealform.module.css';
import { motion } from 'framer-motion';

const MealForm = ({
  showNoMealPopup,
  setShowNoMealPopup,
  showIncompletePopup,
  setShowIncompletePopup,
  onMealAdded,
  onMealUpdated,
  onCloseForm,
}) => {
  const { addMeal, editingMeal, clearEditingMeal, updateMeal } = useMealStore();
  const [name, setName] = useState(editingMeal ? editingMeal.name : '');
  const [description, setDescription] = useState(editingMeal ? editingMeal.description : '');
  const [price, setPrice] = useState(editingMeal ? editingMeal.price : '');
  const [image, setImage] = useState(editingMeal ? editingMeal.image : null);
  const [category, setCategory] = useState(editingMeal ? editingMeal.category : '');

  useEffect(() => {
    // If editingMeal changes, update the form fields
    setName(editingMeal ? editingMeal.name : '');
    setDescription(editingMeal ? editingMeal.description : '');
    setPrice(editingMeal ? editingMeal.price : '');
    setImage(editingMeal ? editingMeal.image : null);
    setCategory(editingMeal ? editingMeal.category : '');
  }, [editingMeal]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      if (name && description && price && image && category) {
        const menuItemData = { name, description, price, image, category };

        if (editingMeal) {
          await updateMeal({ ...editingMeal, ...menuItemData });
          clearEditingMeal();
          onMealUpdated();
        } else {
          await addMeal(menuItemData);
          onMealAdded();
          window.dispatchEvent(new Event('newMealAdded'));
        }

        setName('');
        setDescription('');
        setPrice('');
        setImage(null);
        setCategory('');
      } else {
        setShowIncompletePopup && setShowIncompletePopup(true);
      }
    } catch (error) {
      console.error('Error saving meal:', error.message);
    }
  };

  const handleCloseForm = () => {
    clearEditingMeal();
    setName('');
    setDescription('');
    setPrice('');
    setImage(null);
    setCategory('');
    onCloseForm();
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value !== '' ? Number(e.target.value) : '');
  };

  return (
    <div className={styles['meal-form-container']}>
      <div className={styles.overlay}></div>
      <div className={styles['meal-form-container-two']}>
        <h2 className={styles['form-h2']}>{editingMeal ? 'Update Meal' : 'Add Product'}</h2>
        <motion.div
          initial={{ y: -100, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className='flex flex-col justify-center items-center gap-8 rounded-lg'
        >
          <div className={styles['meal-form']}>
            <div className={styles['cancel-icon']} onClick={handleCloseForm}>
              &#x2716;
            </div>
            <label className={styles['meal-label']}>
              Name:
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles['meal-input']}
              />
            </label>

            <label className={styles['meal-label']}>
              Description:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={styles['meal-textarea']}
              />
            </label>

            <label className={styles['meal-label']}>
              Price:
              <input
                type='number'
                value={price === '' ? '' : Number(price)}
                onChange={handlePriceChange}
                className={styles['price-input']}
              />
            </label>

            <label className={styles['meal-label']}>
              Image:
              <input type='file' accept='image/*' onChange={handleImageChange} />
            </label>

            <label className={styles['meal-label']}>
              Category:
              <input
                type='text'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={styles['meal-input']}
              />
            </label>

            <div className={styles['meal-img']}>
              {image && <Image src={image} alt='Preview' width={100} height={100} className='cursor-pointer' />}
            </div>
          </div>
          <button
            onClick={() => {
              if (!name || !description || !price || !image || !category) {
                setShowIncompletePopup && setShowIncompletePopup(true);
              } else {
                setShowIncompletePopup && setShowIncompletePopup(false);
                handleSave();
              }
            }}
            className={styles['meal-button']}
          >
            {editingMeal ? 'Update' : 'Add'}
          </button>
        </motion.div>

        {showNoMealPopup && (
          <div className={styles['popup']}>
            <p>No meal details added yet.</p>
          </div>
        )}

        {showIncompletePopup && (
          <div className={styles['popup']}>
            <p>Please provide complete details for the meal.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(MealForm), { ssr: false });
