

const MenuBackgroundText = () => {
  return (
     <div className="menu-image mb-24" style={{ backgroundImage: 'url("/menu-one.jpeg")' }}>
        <div className="overlay"></div>
        
        <div className="content max-[560px]:flex-col max-[560px]:items-center gap-4">
         <div className="menu-details">
           <h2 className="text-4xl text-white font-bold">
            ORDER FOOD
              <span className="text-4xl ml-2 text-[#D50606] font-bold">
                 ONLINE
             </span>
           </h2>

           <div>
             <p className="text-3xl text-white font-semibold mt-4">Takeaway Food to your Door</p>
           </div>

           <div className="flex items-center justify-center space-x-6 mt-4">
            <p className="text-white italic text-3xl ">Click Here To Order Now</p>
            <button className="text-white bg-[#D50606] p-3 rounded-xl hover:bg-[#b72424] duration-300 transition">
              ORDER NOW
            </button>
          </div>
         </div>

          
       </div> 
      </div>
  )
}

export default MenuBackgroundText