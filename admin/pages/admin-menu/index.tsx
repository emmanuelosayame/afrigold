// // AdminMenu.js
// import { useState, useEffect } from 'react';
// import styles from './Adminmenu.module.css';
// import dynamic from 'next/dynamic';

// const AdminMenu = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [displayForm, setDisplayForm] = useState('menuList');
//   const [showNoMealPopup, setShowNoMealPopup] = useState(false);
//   const [showIncompletePopup, setShowIncompletePopup] = useState(false);

//   useEffect(() => {
//     const fetchMenuItems = async () => {
//       try {
//         const menuItems = [];
//         // Additional logic if needed
//       } catch (error) {}
//     };

//     fetchMenuItems();
//   }, []); // Empty dependency array ensures this effect runs only once when the component mounts

//   useEffect(() => {
//     const handleNewMealAdded = () => {
//       setDisplayForm('menuList');
//     };

//     // Listen for the 'newMealAdded' event
//     window.addEventListener('newMealAdded', handleNewMealAdded);

//     // Cleanup the event listener
//     return () => {
//       window.removeEventListener('newMealAdded', handleNewMealAdded);
//     };
//   }, []);

//   const handleCreate = async (newMeal) => {
//     try {
//       await createMenuItem(newMeal);
//       setDisplayForm('menuList');
//       // Additional logic if needed
//     } catch (error) {
//       console.error('Error creating menu item:', error.message);
//     }
//   };

//   const handleUpdate = async (updatedMeal) => {
//     try {
//       await updateMenuItem(updatedMeal);
//       setDisplayForm('menuList');
//       // Additional logic if needed
//     } catch (error) {
//       console.error('Error updating menu item:', error.message);
//     }
//   };

//   const handleDelete = async (mealId) => {
//     try {
//       await deleteMenuItem(mealId);
//       // Additional logic if needed
//     } catch (error) {
//       console.error('Error deleting menu item:', error.message);
//     }
//   };

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   const handleCloseForm = () => {
//     setDisplayForm('menuList');
//   };

//   const filteredMeals = storeMeals.filter((meal) => {
//     if (!meal || typeof meal !== 'object') return false;

//     const nameMatch = meal.name
//       ? meal.name.toLowerCase().includes(searchTerm.toLowerCase())
//       : false;
//     const descriptionMatch = meal.description
//       ? meal.description.toLowerCase().includes(searchTerm.toLowerCase())
//       : false;
//     const priceMatch = meal.price
//       ? meal.price.toString().toLowerCase().includes(searchTerm.toLowerCase())
//       : false;
//     const categoryMatch = meal.category
//       ? meal.category.toLowerCase().includes(searchTerm.toLowerCase())
//       : false;

//     return nameMatch || descriptionMatch || priceMatch || categoryMatch;
//   });

//   return (
//     <div className={styles['menu-container']}>
//       <div className='flex flex-col gap-8'>
//         <div>
//           <input
//             type='text'
//             placeholder='Search...'
//             value={searchTerm}
//             onChange={(e) => handleSearch(e.target.value)}
//             className={styles['input-menu']}
//           />
//           <div className={styles['menu-button']}>
//             <div className={styles['button']}>
//               <button
//                 onClick={() => setDisplayForm('menuList')}
//                 className={`text-2xl font-semibold rounded-md px-4 py-2 cursor-pointer ${
//                   displayForm === 'menuList'
//                     ? 'bg-blue-200'
//                     : 'hover:bg-blue-50'
//                 } `}>
//                 Menu List
//               </button>
//             </div>
//             <div className={styles['button']}>
//               <button
//                 onClick={() => setDisplayForm('upload')}
//                 className={`text-2xl font-semibold rounded-md px-4 py-2 cursor-pointer ${
//                   displayForm === 'upload' ? 'bg-blue-200' : 'hover:bg-blue-50'
//                 } `}>
//                 Upload/Add Product
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* {displayForm === 'menuList' && (
//           <MenuList
//             meals={filteredMeals}
//             onDelete={handleDelete}
//             onUpdate={handleUpdate}
//           />
//         )}

//         {displayForm === 'upload' && (
//           <MealForm
//             onCreate={handleCreate}
//             onUpdate={handleUpdate}
//             onDelete={handleDelete}
//             showNoMealPopup={showNoMealPopup}
//             setShowNoMealPopup={setShowNoMealPopup}
//             showIncompletePopup={showIncompletePopup}
//             setShowIncompletePopup={setShowIncompletePopup}
//             onMealAdded={() => setDisplayForm('menuList')}
//             onMealUpdated={() => setDisplayForm('menuList')}
//             onCloseForm={handleCloseForm}
//           />
//         )} */}
//       </div>
//     </div>
//   );
// };

const Page = () => {
  return <></>;
};

export default Page;
