 import { IoGridOutline, IoHomeOutline } from "react-icons/io5";
 import { BsSpeedometer2 } from "react-icons/bs";
 import { MdPayment } from "react-icons/md";
 import { AiOutlineBarChart, AiOutlineSetting } from "react-icons/ai";
 import { FaQuestionCircle } from "react-icons/fa";
 import { MdSupportAgent} from "react-icons/md"
 import { FiUsers } from "react-icons/fi"


 export default [
     {
         to: '/admin/dashboard/dashboard',
         name: 'Dashboard',
         Icon: IoHomeOutline
     },
     {
         to: '/admin/orders/orders',
         name: 'Orders',
         Icon: FiUsers
     },
     {
         to: '/admin/menu/menu',
         name: 'Menu',
         Icon: BsSpeedometer2
     },
     {
         to: '/admin/admin-settings/settings',
         name: 'Settings',
         Icon: AiOutlineSetting
     },

     {
        to: '/admin/payment/payment',
        name: 'Payment',
        Icon: MdPayment
    },
     {
         to: '/admin/faq/faq',
         name: 'FAQ',
         Icon: FaQuestionCircle
     },
     {
         to: '/admin/contact/contact',
         name: 'Contact',
         Icon: MdSupportAgent
     },

   
 ];