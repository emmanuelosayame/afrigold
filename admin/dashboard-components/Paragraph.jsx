 import React from "react";
 import Image from "next/image";

 const Paragraph = () => {
   const foodItems = [
     {
       name: "Salad",
       imageSrc: "/admin-salad.jpg",
     },
     {
       name: "Pizza",
       imageSrc: "/admin-pizza.jpg",
     },

     {
         name: "Cake",
         imageSrc: "/admin-cake.jpg",
       },

     // Add more food items as needed
   ];

   return (
     <div>
       <div className="flex flex-col gap-4 para">
         {foodItems.map((foodItem, index) => (
           <div key={index} className="para-item">
             <div className="rounded-xl">
               <Image
                 src={foodItem.imageSrc}
                 width={100}
                 height={100}
                 alt={foodItem.name}
                 className="para-img"
               />
             </div>
             <p className="para-text">{foodItem.name}</p>
           </div>
         ))}
       </div>
     </div>
   );
 };

 export default Paragraph;