export const mockRestaurants = [
  {
    slug: ['ticklers'],
    name: 'Ticklers Restaurant',
    rating: 4.5,
    numRatings: 6,
    deliveryTime: '15-35 mins',
    backgroundImage: '/amala.png',
    openingHour: '09:00 am',
    closingHour: '10:00 pm',
    openingDays: 'Monday - Saturday',
    closingDays: 'Sunday',
    phoneNumber: '+2347064534783',
    deliveryStatus: 'instant delivery',
    country: 'Nigeria',
    state: 'Lagos',
    address: '123, ikeja road, Ikeja, Lagos',
    moreInfo: 'Our menu is a symphony of flavors, a fusion of tradition and innovation that promises a dining experience beyond compare. Join us in a world of delectable delights and let your senses embark on a journey of taste, texture, and tantalizing moments',
    
    menu: {
      mainDishes: {
        name: 'MAIN DISHES',
       items: [
          { id: 1,  name: 'JOLLOF RICE', description: 'Spicy jollof rice', price: 10.99, image: '/jollof.jpeg' },
          { id: 2, name: 'STIR FRIED SPAGHETTI', description: 'Yummy speghetti', price: 9.99, image: '/spaghetti.jpeg' },
          { id: 3, name: 'OFADA RICE', description: 'Tasty Ofada rice', price: 12.99, image: '/ofada.jpeg' },
          { id: 4, name: 'FRIED RICE', description: 'Delicious fried rice', price: 11.99, image: '/fried-rice.jpeg' },
          { id: 5, name: 'YAM PORRIDGE', description: 'Well cooked yam porridge', price: 8.99, image: '/yam.jpeg' },
       
        ],
      },
      
      side: {
        name: 'SIDES',
         items: [
          { id: 1, name: 'BEANS AND BREAD (EWA AGOYIN)', description: 'Great ewa agoyin', price: 4.99, image: '/ewa.jpeg' },
          { id: 2, name: 'NOODLES', description: 'Amazing Noodles', price: 3.99, image: '/noodles.jpeg' },
          { id: 3, name: 'PAP AND AKARA', description: 'Delicious pap and akara', price: 5.99, image: '/pap.jpeg' },
         
         
        ],
      },

      protein: {
        name: 'PROTEIN',
         items: [
          { id: 1, name: 'GRILLED FULL-CHICKEN', description: 'Full chicken on another level', price: 8.99, image: '/grilled-full-chicken.jpeg' },
          { id: 2,  name: 'GRILLED TURKEY', description: 'Grilled turkey on another level', price: 7.99, image: '/grilled-turkey.jpeg' },
          { id: 3, name: 'GRILLED CHICKEN-LAP', description: 'Delicious chicken lap', price: 9.99, image: '/grilled-breast.jpeg' },
          
         
        ],
      },

      swallow: {
        name: 'SWALLOW',
        items: [
          { id: 1, name: 'EGUSI AND SEMO', description: 'Delicous egusi soup', price: 5.99, image: '/soup.jpg' },
          { id: 2, name: 'EWEDU, GBEGIRI AND AMALA', description: 'Yummy gbegiri andewedu soup with amala', price: 4.99, image: '/gbegiri.jpg' },
          { id: 3, name: 'VEGETABLE AND POUNDED YAM', description: 'Tasty vegetable and pounded yam', price: 6.99, image: '/afang.jpg' },
           ],
      },

      soupAndSauce: {
        name: 'SOUP/SAUCE',
        items: [
          {id: 1, name: 'VEGETABLE AND SEAFOOD', description: 'Vegetable and seafood', price: 3.99, image: '/veg.jpeg' },
          
        ],
      },
    },
    
  },

  
     {
      slug: ['food-fantasy'],
      name: 'Food Fantasy',
      rating: 3.8,
      numRatings: 12,
      deliveryTime: '20-40 mins',
      backgroundImage: '/Mama-Ashanti-Locations.jpg', 
      openingHour: '09:00 am',
      closingHour: '10:00 pm',
     openingDays: 'Tuesday - Sunday',
     closingDays: 'Monday',
     phoneNumber: '+2349075134783',
     deliveryStatus: 'instant delivery',
     country: 'Nigeria',
     state: 'Lagos',
     address: '123, ikeja road, Ikeja, Lagos',
     moreInfo: 'Our menu is a symphony of flavors, a fusion of tradition and innovation that promises a dining experience beyond compare. Join us in a world of delectable delights and let your senses embark on a journey of taste, texture, and tantalizing moments',
       
        menu: {
      mainDishes: {
        name: 'MAIN DISHES',
       items: [
          { id: 1,  name: 'JOLLOF RICE', description: 'Spicy jollof rice', price: 10.99, image: '/jollof.jpeg' },
          { id: 2, name: 'STIR FRIED SPAGHETTI', description: 'Yummy speghetti', price: 9.99, image: '/spaghetti.jpeg' },
          { id: 3, name: 'OFADA RICE', description: 'Tasty Ofada rice', price: 12.99, image: '/ofada.jpeg' },
          { id: 4, name: 'FRIED RICE', description: 'Delicious fried rice', price: 11.99, image: '/fried-rice.jpeg' },
          { id: 5, name: 'YAM PORRIDGE', description: 'Well cooked yam porridge', price: 8.99, image: '/yam.jpeg' },
       
        ],
      },
      
      side: {
        name: 'SIDES',
         items: [
          { id: 1, name: 'BEANS AND BREAD (EWA AGOYIN)', description: 'Great ewa agoyin', price: 4.99, image: '/ewa.jpeg' },
          { id: 2, name: 'NOODLES', description: 'Amazing Noodles', price: 3.99, image: '/noodles.jpeg' },
          { id: 3, name: 'PAP AND AKARA', description: 'Delicious pap and akara', price: 5.99, image: '/pap.jpeg' },
         
         
        ],
      },

      protein: {
        name: 'PROTEIN',
         items: [
          { id: 1, name: 'GRILLED FULL-CHICKEN', description: 'Full chicken on another level', price: 8.99, image: '/grilled-full-chicken.jpeg' },
          { id: 2,  name: 'GRILLED TURKEY', description: 'Grilled turkey on another level', price: 7.99, image: '/grilled-turkey.jpeg' },
          { id: 3, name: 'GRILLED CHICKEN-LAP', description: 'Delicious chicken lap', price: 9.99, image: '/grilled-breast.jpeg' },
          
         
        ],
      },

      swallow: {
        name: 'SWALLOW', 
        items: [
          { id: 1, name: 'EGUSI AND SEMO', description: 'Delicous egusi soup', price: 5.99, image: '/soup.jpg' },
          { id: 2, name: 'EWEDU, GBEGIRI AND AMALA', description: 'Yummy gbegiri andewedu soup with amala', price: 4.99, image: '/gbegiri.jpg' },
          { id: 3, name: 'VEGETABLE AND POUNDED YAM', description: 'Tasty vegetable and pounded yam', price: 6.99, image: '/afang.jpg' },
           ],
      },

      soupAndSauce: {
        name: 'SOUP/SAUCE',
        items: [
          {id: 1, name: 'VEGETABLE AND SEAFOOD', description: 'Vegetable and seafood', price: 3.99, image: '/veg.jpeg' },
          
        ],
      },
    },
       
    },

     {
      slug: ['just-delish'],
      name: 'Just Delish Restaurant',
      rating: 3.8,
      numRatings: 12,
      deliveryTime: '20-40 mins',
      backgroundImage: '/afang.jpg', 
      openingHour: '09:00 am',
      closingHour: '10:00 pm',
      openingDays: 'Monday - Saturday',
      closingDays: 'Sunday',
     phoneNumber: '+2349008534783',
      deliveryStatus: 'instant delivery',
      country: 'Nigeria',
      state: 'Lagos',
      address: '123, ikeja road, Ikeja, Lagos',
      moreInfo: 'Our menu is a symphony of flavors, a fusion of tradition and innovation that promises a dining experience beyond compare. Join us in a world of delectable delights and let your senses embark on a journey of taste, texture, and tantalizing moments',

       menu: {
      mainDishes: {
        name: 'MAIN DISHES',
       items: [
          { id: 1,  name: 'JOLLOF RICE', description: 'Spicy jollof rice', price: 10.99, image: '/jollof.jpeg' },
          { id: 2, name: 'STIR FRIED SPAGHETTI', description: 'Yummy speghetti', price: 9.99, image: '/spaghetti.jpeg' },
          { id: 3, name: 'OFADA RICE', description: 'Tasty Ofada rice', price: 12.99, image: '/ofada.jpeg' },
          { id: 4, name: 'FRIED RICE', description: 'Delicious fried rice', price: 11.99, image: '/fried-rice.jpeg' },
          { id: 5, name: 'YAM PORRIDGE', description: 'Well cooked yam porridge', price: 8.99, image: '/yam.jpeg' },
       
        ],
      },
      
      side: {
        name: 'SIDES',
         items: [
          { id: 1, name: 'BEANS AND BREAD (EWA AGOYIN)', description: 'Great ewa agoyin', price: 4.99, image: '/ewa.jpeg' },
          { id: 2, name: 'NOODLES', description: 'Amazing Noodles', price: 3.99, image: '/noodles.jpeg' },
          { id: 3, name: 'PAP AND AKARA', description: 'Delicious pap and akara', price: 5.99, image: '/pap.jpeg' },
         
         
        ],
      },

      protein: {
        name: 'PROTEIN',
         items: [
          { id: 1, name: 'GRILLED FULL-CHICKEN', description: 'Full chicken on another level', price: 8.99, image: '/grilled-full-chicken.jpeg' },
          { id: 2,  name: 'GRILLED TURKEY', description: 'Grilled turkey on another level', price: 7.99, image: '/grilled-turkey.jpeg' },
          { id: 3, name: 'GRILLED CHICKEN-LAP', description: 'Delicious chicken lap', price: 9.99, image: '/grilled-breast.jpeg' },
          
         
        ],
      },

      swallow: {
        name: 'SWALLOW', 
        items: [
          { id: 1, name: 'EGUSI AND SEMO', description: 'Delicous egusi soup', price: 5.99, image: '/soup.jpg' },
          { id: 2, name: 'EWEDU, GBEGIRI AND AMALA', description: 'Yummy gbegiri andewedu soup with amala', price: 4.99, image: '/gbegiri.jpg' },
          { id: 3, name: 'VEGETABLE AND POUNDED YAM', description: 'Tasty vegetable and pounded yam', price: 6.99, image: '/afang.jpg' },
           ],
      },

      soupAndSauce: {
        name: 'SOUP/SAUCE',
        items: [
          {id: 1, name: 'VEGETABLE AND SEAFOOD', description: 'Vegetable and seafood', price: 3.99, image: '/veg.jpeg' },
          
        ],
      },
    },
       
    },

     {
      slug: ['tribe-african'],
       name: 'Tribe African Restaurant',
      rating: 4.5,
      numRatings: 6,
      deliveryTime: '15-35 mins',
      backgroundImage: '/amala.png', 
     openingHour: '09:00 am',
     closingHour: '10:00 pm',
     openingDays: 'Sunday - Friday',
     closingDays: 'Saturday',
     phoneNumber: '+2348054534783',
     deliveryStatus: 'instant delivery',
     country: 'Nigeria',
     state: 'Lagos',
     address: '123, ikeja road, Ikeja, Lagos',
     moreInfo: 'Our menu is a symphony of flavors, a fusion of tradition and innovation that promises a dining experience beyond compare. Join us in a world of delectable delights and let your senses embark on a journey of taste, texture, and tantalizing moments',

       menu: {
      mainDishes: {
        name: 'MAIN DISHES',
       items: [
          { id: 1,  name: 'JOLLOF RICE', description: 'Spicy jollof rice', price: 10.99, image: '/jollof.jpeg' },
          { id: 2, name: 'STIR FRIED SPAGHETTI', description: 'Yummy speghetti', price: 9.99, image: '/spaghetti.jpeg' },
          { id: 3, name: 'OFADA RICE', description: 'Tasty Ofada rice', price: 12.99, image: '/ofada.jpeg' },
          { id: 4, name: 'FRIED RICE', description: 'Delicious fried rice', price: 11.99, image: '/fried-rice.jpeg' },
          { id: 5, name: 'YAM PORRIDGE', description: 'Well cooked yam porridge', price: 8.99, image: '/yam.jpeg' },
       
        ],
      },
      
      side: {
        name: 'SIDES',
         items: [
          { id: 1, name: 'BEANS AND BREAD (EWA AGOYIN)', description: 'Great ewa agoyin', price: 4.99, image: '/ewa.jpeg' },
          { id: 2, name: 'NOODLES', description: 'Amazing Noodles', price: 3.99, image: '/noodles.jpeg' },
          { id: 3, name: 'PAP AND AKARA', description: 'Delicious pap and akara', price: 5.99, image: '/pap.jpeg' },
         
         
        ],
      },

      protein: {
        name: 'PROTEIN',
         items: [
          { id: 1, name: 'GRILLED FULL-CHICKEN', description: 'Full chicken on another level', price: 8.99, image: '/grilled-full-chicken.jpeg' },
          { id: 2,  name: 'GRILLED TURKEY', description: 'Grilled turkey on another level', price: 7.99, image: '/grilled-turkey.jpeg' },
          { id: 3, name: 'GRILLED CHICKEN-LAP', description: 'Delicious chicken lap', price: 9.99, image: '/grilled-breast.jpeg' },
          
         
        ],
      },

      swallow: {
        name: 'SWALLOW', 
        items: [
          { id: 1, name: 'EGUSI AND SEMO', description: 'Delicous egusi soup', price: 5.99, image: '/soup.jpg' },
          { id: 2, name: 'EWEDU, GBEGIRI AND AMALA', description: 'Yummy gbegiri andewedu soup with amala', price: 4.99, image: '/gbegiri.jpg' },
          { id: 3, name: 'VEGETABLE AND POUNDED YAM', description: 'Tasty vegetable and pounded yam', price: 6.99, image: '/afang.jpg' },
           ],
      },

      soupAndSauce: {
        name: 'SOUP/SAUCE',
        items: [
          {id: 1, name: 'VEGETABLE AND SEAFOOD', description: 'Vegetable and seafood', price: 3.99, image: '/veg.jpeg' },
          
        ],
      },
    },
       
    },
  // Add more mock restaurant data
];