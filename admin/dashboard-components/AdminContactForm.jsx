// ContactUs.js

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { TiLocation } from "react-icons/ti"
import { BsFillTelephoneInboundFill } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import styles from './Admincontact.module.css';
import { motion } from "framer-motion";
import Link from 'next/link'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'




const AdminContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();
  
  
  async function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);

		const data = {
			name: String(event.target.name.value),
			email: String(event.target.email.value),
			message: String(event.target.message.value),
		};

   
    try {
      const response = await fetch('/api/admin-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Message sent successfully');
        setLoading(false);
        setIsSuccess(true); // Set isSuccess to true to show the success message
        // reset the form
        event.target.name.value = '';
        event.target.email.value = '';
        event.target.message.value = '';

        router.push('/admin/admin-success-message');
      } else {
        console.log('Error sending message');
        setLoading(false);
        // Show toast notification or error message here
      }
    } catch (error) {
      console.error('Error sending message', error);
      setLoading(false);
      // Show toast notification or error message here
    }
  }

  return (
    <div className={styles["contact-container"]}>
     
       <motion.div 
          initial={{ x: -100, opacity: 0, scale: 0.5 }}
           animate={{ x: 0, opacity: 1, scale: 1 }}
           transition={{ duration: 1.5 }} 
           className="text-center  py-4  gap-16 lg:flex-col">

        <h2 className="text-3xl font-bold mb-16">Contact Us</h2>
        <div className={styles["info-container"]}>
           <div className="flex gap-2 items-center ">
             <div className="bg-[#D50606] p-2 rounded-full ">
                <BsFillTelephoneInboundFill className="text-white h-4 w-4 text-center " />
             </div>
             <div className={styles["text-container"]}>
               <h3 className="">PHONE</h3>
               <p className=" "> +234 123 456 769 </p>
             </div>
            
           </div>

           <div className="flex gap-2 items-center ">
             <div className="bg-[#D50606] p-2 rounded-full ">
                <AiOutlineMail className="text-white h-4 w-4 text-center" />
            </div>
            <div className={styles["text-container"]}>
              <h3 className="">EMAIL</h3>
              <p className=""> example@yourmail.com</p>
            </div>
            
           </div>

           <div className="flex gap-2 items-center ">
                <div className="bg-[#D50606] p-2 rounded-full ">
                   <TiLocation className="text-white h-4 w-4 text-center" />
                </div> 
                <div className={styles["text-container"]}>
                   <h3 className="">LOCATION</h3>
                   <p className="">123,akin street, Lagos</p>
               </div>      
     
         </div>

        </div>
      </motion.div>

      {isSuccess ? (
        <div className="mt-16 flex flex-col items-center justify-center">
         
        </div>
      ) : (
    <div className="flex flex-col gap-4">
      <form 
         onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center justify-center mt-16">
        <div className="input_group ">
          
          <label 
           htmlFor="name"
           >
        
           
            </label>
          
          

            <input 
           type="text" 
           placeholder='Restaurant/Eatery Name'
           id="name"
           autoComplete="off"
            required
            minLength={5}
            maxLength={150}
            className="input_text"
          />
      
          </div>

      
       

          <div className="input_group">
           <label 
           htmlFor="email"
           >
            
            
            </label>
          <input 
           type="email" 
           placeholder='Email'
           id="email"
           autoComplete="off"
           required
           minLength={5}
           maxLength={150}
           className="input_text"
         />
          </div>
        
        <div className="flex flex-col gap-2">
        <label 
           htmlFor="message"
           className="text-[14px] font-medium ml-6 mb-2 mt-6"
           >
           Message 
      
            </label>
        <textarea
             rows={4}
             placeholder="Write Your Message"
             name="message"
             required
             minLength={10}
             maxLength={500}
             className="pl-2 ml-6 pt-4 w-[450px] max-[480px]:w-[300px] focus:outline-none rounded-md border border-[#D50606;]"
         />
        </div>

        <button
          type="submit"
          className={`button disabled:bg-gray-400 disabled:text-gray-100 hover:text-white mb-20 ${loading ? 'pointer-events-none' : ''}`}
          disabled={loading}
        >
           Submit
          </button>
      </form>
    
    </div>  )}

    <motion.div 
      initial={{ x: -500, opacity: 0, scale: 0.5 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="flex justify-center items-center gap-4">
     <h1 className="text-justify text-2xl font-semibold text-red-500 py-1 mr-10 font-lob animate-pulse mt-4">NiGold</h1>
    
    <div className="text-5xl flex  gap-8 py-3 text-gray-400 dark:text-gray-50">
       <Link href="https://www.instagram.com/emmanuelnmaju">     
         <AiFillInstagram size={20}  
          className={styles["social-icon"]}
         />   
        </Link>

  
          <Link href="https://twitter.com/in/ENDY_EPIQ">  
             <FaTwitter size={20} 
              className={styles["social-icon"]}
             />  
           </Link> 

  
           <Link href="https://www.facebook/emmanuelnmaju">
             <FaFacebook size={20} 
              className={styles["social-icon"]}
             />
          </Link> 
           <Link href="https://linkedin.com/in/emmanuel-nmaju-07a672252">
               <BsLinkedin size={20} 
                className={styles["social-icon"]}
               />
            </Link>
         </div>

      </motion.div>
    
    
    </div>
  );
};

export default AdminContactForm;
