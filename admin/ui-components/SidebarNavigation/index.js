 import Logo from "../Logo";
 import styles from "./SidebarNavigation.module.css";
 import Link from "next/link";
 import routes from "../../routes";
 import React, { useState } from "react";
 import { useRouter } from "next/router";
 import { TbLogout } from "react-icons/tb";
 import { BiChevronLeft } from "react-icons/bi";


 const SidebarNavigation = ({
   sidebarMenuActive,
   toggleSidebarMenu
 }) => {

   const [isLogoutModalOpen, setLogoutModalOpen] = useState(false); // State to control the modal
   const router = useRouter();

   console.log({ router });
  

   const handleLogoutClick = () => {
     setLogoutModalOpen(true); // Open the modal when Logout is clicked
   };

   const handleLogoutConfirm = () => {
     // Handle logout logic here (e.g., clear user session, redirect, etc.)
     // After handling logout, close the modal
     setLogoutModalOpen(false);
   };

   const handleModalClose = () => {
     setLogoutModalOpen(false); // Close the modal when Cancel is clicked
   };


  
   return (
     <section
       className={`${styles.container} ${
         sidebarMenuActive ? styles['active'] : ''
       }`}
       style={{
         zIndex: sidebarMenuActive ? 2 : 'auto' // Set a higher z-index when sidebar is active
       }}
     >
       <button className={styles["sidebar-close-btn"]} onClick={toggleSidebarMenu}>
         x
       </button>
       <div className={styles['logo-container']}>
         <Logo />
         <div className={styles['logo-explain']}>Admin Dashboard</div>
       </div>
       <div className={styles["sidebar-container"]}>
         {routes.map((page, index) => (
           <div key={index} className={`${styles["sidebar-menu-item"]} ${router.route === page.to ? styles['active'] : ''}`}>

             <div>
               <Link href={page.to}>
                 <page.Icon />
                
               </Link>
             </div>

             <div className="font-semibold">
               <Link href={page.to}>
                <span>{page.name}</span>
               </Link>
               </div>
             </div>
           ))} 
       </div>

       <ul className={styles["sidebar-footer"]}>
         <li className={styles["footer-item"]} onClick={handleLogoutClick}>
           <TbLogout className={styles.logoutButton} />
           <span>Logout</span>
         </li>
       </ul>

       {/* Logout Confirmation Modal */}
       <div
         className={`${styles["logout-overlay"]} ${
           isLogoutModalOpen ? styles["show-overlay"] : ""
         }`}
         onClick={handleModalClose}
       >
         <div
           className={`${styles["modal"]} ${
             isLogoutModalOpen ? styles["show-modal"] : ""
           }`}
         >
             <h2>Logout Confirmation</h2>
             <p>Are you sure you want to logout?</p>
             <div className={styles["modal-buttons"]}>

               <button 
                className={styles["modal-buttons-logout"]}
                onClick={handleLogoutConfirm}
                >
                 Logout
                 </button>

               <button 
                 className={styles["modal-buttons-cancel"]}
                 onClick={handleModalClose}
                 >
                   Cancel
                 </button>

             </div>
           </div>
         </div>
      
     </section>
   );
 };

 export default SidebarNavigation;
