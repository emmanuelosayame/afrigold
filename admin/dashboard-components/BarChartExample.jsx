
 import React, { useRef, useEffect, useState } from "react";
 import Chart from "chart.js/auto";
 


 const BarChartExample = (props) => {
   const chartRef = useRef();
   const chartObj = useRef();

   const [selectedData, setSelectedData] = useState("Days"); // Default selection

   const dynamicData = {
     labels: [],
     values: [],
   };

   const generateData = (selection) => {
     // Generate data based on user selection (days, weeks, months, years)
     if (selection === "Days") {
       // Generate data for days (sunday to saturday)
       dynamicData.labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
       dynamicData.values = [10, 15, 20, 18, 25, 22, 30]; // Sample data
     } else if (selection === "Weeks") {
       // Generate data for weeks in a month
       dynamicData.labels = Array.from({ length: 4 }, (_, i) => `Week ${i + 1}`);
       dynamicData.values = [50, 45, 60, 55]; // Sample data
     } else if (selection === "Months") {
       // Generate data for months in a year
       dynamicData.labels = [
         "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
       ];
       dynamicData.values = [250, 280, 300, 270, 320, 290, 310, 300, 280, 290, 270, 310]; // Sample data
     } else if (selection === "Years") {
       // Generate data for years
       dynamicData.labels = Array.from({ length: 5 }, (_, i) => `${2023 - i}`);
       dynamicData.values = [1200000, 1300000, 1400000, 1500000, 1600000]; // Sample data
    }
  
   

   };
  
   const createBarChart = (el) => {
     generateData(selectedData); // Generate data based on user selection
  
     chartObj.current = new Chart(el, {
       type: "bar",
       data: {
         labels: dynamicData.labels,
         datasets: [
           {
             label: "Acquisitions",
             data: dynamicData.values,
             backgroundColor: "#D42C07", // Specify the background color
             borderColor: "white", // Specify the border color
             borderWidth: 1, // Specify the border width
           },
         ],
       },

       options: {
         plugins: {
           tooltip: {
             callbacks: {
               label: (context) => `${context.dataset.label}: N${context.parsed.y}`, // Format tooltip labels
             },
           },
         },
       },
     });
   };
  

   useEffect(() => {
     const el = chartRef.current;

     if (chartObj.current) {
       chartObj.current.destroy();
     }

     createBarChart(el);
   }, [selectedData]);

   return (
     <div>
      <div className="bar-button">
        <button
          onClick={() => setSelectedData("Days")}
          className={selectedData === "Days" ? "selected-button" : "button-style"}
        >
          Days
        </button>
        <button
          onClick={() => setSelectedData("Weeks")}
           className={selectedData === "Weeks" ? "selected-button" : "button-style"}
        >
         Weeks
        </button>
        <button
          onClick={() => setSelectedData("Months")}
           className={selectedData === "Months" ? "selected-button" : "button-style"}
         >
           Months
        </button>
   <button
     onClick={() => setSelectedData("Years")}
     className={selectedData === "Years" ? "selected-button" : "button-style"}
   >
     Years
   </button>
 </div>

       <canvas ref={chartRef}></canvas>
     
     </div>
   );
 };

 export default BarChartExample;