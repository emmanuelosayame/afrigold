 import ActionButton from "/admin/ui-components/ActionButton";
 import Table from "/admin/ui-components/Table";
 import {
   FaCloudDownloadAlt,
   FaRegFilePdf,
   FaLongArrowAltDown,
 } from "react-icons/fa";

 import { useState } from "react";
 import Modal from "/admin/ui-components/Modal";

 const table_column_heading = [
   {
     key: "invoice",
     heading: "ID",
   },
   {
     key: "customer",
     heading: "Customer",
     icon: FaLongArrowAltDown,
   },
   {
     key: "time",
     heading: "Time",
   },
   {
     key: "driver",
     heading: "Driver",
   },
   {
     key: "status",
     heading: "Status",
   },
   {
     key: "action-btn",
     heading: "",
   },
 ];

 const table_data = [
   {
     id: 1,
     invoice: {
       value: "Invoice #0074 - Jun 2023",
       icon: FaRegFilePdf,
     },
     customer: {
       value: "Mary",
     },
     time: {
       value: "9:40 AM",
     },
     driver: {
       value: "Ola",
     },
     status: {
       value: "Completed",
     },
     "action-btn": {
       component: () => (
         <ActionButton
           label="Download"
           Icon={FaCloudDownloadAlt}
           inverse={true}
           onClick={() => {
             alert('This Feature is Yet to be Completed');
           }}
         />
       ),
     },
   },
   {
     id: 2,
     invoice: {
       value: "Invoice #9560 - May 2023",
       icon: FaRegFilePdf,
     },
     customer: {
       value: "Chinonso",
     },
     time: {
       value: "9:40 AM",
     },
     driver: {
       value: "Kalu",
     },
     status: {
       value: "Ongoing",
     },
     "action-btn": {
       component: () => (
         <ActionButton
           label="Download"
           Icon={FaCloudDownloadAlt}
           inverse={true}
           onClick={() => {
             alert('This Feature is Yet to be Completed');
           }}
         />
       ),
     },
   },
   {
     id: 3,
     invoice: {
       value: "Invoice #0067 - Aug 2023",
       icon: FaRegFilePdf,
     },
    customer: {
      value: "John",
     },
     time: {
       value: "9:40 AM",
     },
     driver: {
       value: "Felix",
     },
     status: {
       value: "Completed",
     },
     "action-btn": {
       component: () => (
         <ActionButton
           label="Download"
           Icon={FaCloudDownloadAlt}
           inverse={true}
           onClick={() => {
             alert('This Feature is Yet to be Completed');
           }}
         />
       ),
     },
   },
   {
     id: 4,
     invoice: {
       value: "Invoice #1154 - Mar 2023",
       icon: FaRegFilePdf,
     },
     customer: {
       value: "Peter",
     },
     time: {
       value: "10:40 AM",
     },
     driver: {
       value: "Ibrahim",
     },
     status: {
       value: "Cancelled",
     },
     "action-btn": {
       component: () => (
         <ActionButton
           label="Download"
           Icon={FaCloudDownloadAlt}
           inverse={true}
           onClick={() => {
             alert('This Feature is Yet to be Completed');
           }}
         />
       ),
     },
   },
 ];

 const BillingHistory = () => {
   const [modal, setModal] = useState(false);
   const handleClose = () => {
     //alert('closing');
     setModal(false);
   };

   const openModal = () => {
     setModal(true);
   };
   return (
     <>
       <Table
         mainHeading={"Recent order request"}
         subHeading={""}
         headingRightItem={() => (
           <ActionButton
             onClick={openModal}
             label="Download All"
             Icon={FaCloudDownloadAlt}
           />
         )}
         heading={table_column_heading}
         data={table_data}
       />
       <Modal
         isOpen={modal}
         heading={"Download all Invoice"}
         onClose={handleClose}
         positiveText={'Download'}
         negativeText={'Cancel'}
       />
     </>
   );
 };

 export default BillingHistory;
