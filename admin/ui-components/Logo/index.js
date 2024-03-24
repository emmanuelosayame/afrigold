import styles from "./Logo.module.css";
 import Link from "next/link";
 import { GrRestaurant } from "react-icons/gr"

 const Logo = () => {
   return (
     <div>
         <Link href={`/admin/dashboard`}>
          <GrRestaurant
         
           className={styles.icon} // Apply the CSS class to the icon
          />
     </Link> 
     </div>
   );
 };

 export default Logo;