 import { IoExtensionPuzzleOutline } from "react-icons/io5";
 import { FiUser, FiLogOut, FiHelpCircle } from "react-icons/fi";
 import { AiOutlineFileText, AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";

 export const menuList = [
   {
     text: "Profile",
     Icon: FiUser,
     href: "/admin/profile",
   },
   {
     text: "Settings",
     Icon: IoExtensionPuzzleOutline,
     href: "/admin/settings",
   },
   {
     text: "Support",
     Icon: AiOutlineFileText,
     href: "/admin/support",
   },
   {
     text: "Help Center",
     Icon: FiHelpCircle,
     href: "/admin/help-center",
   },
   {
     text: "Logout",
     Icon: FiLogOut,
     href: "/admin/logout",
   },
 ];

 export const headerLoginMenuList = [
     {
       text: 'Login',
       Icon: AiOutlineLogin,
       href:'/admin/login'
     },
     {
       text: 'Signup',
       Icon: AiOutlineLogout,
       href: '/admin/signup'
     }
   ]


