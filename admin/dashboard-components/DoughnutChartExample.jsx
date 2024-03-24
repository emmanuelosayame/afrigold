
 import { useEffect, useRef } from "react";
 import Chart from "chart.js/auto";

 const DoughnutChartExample = ({ labels, data }) => {
   const chartRef = useRef();
   const chartObjRef = useRef();

   const calculatePercentages = (data) => {
     const total = data.reduce((acc, val) => acc + val, 0);
     return data.map((value) => ((value / total) * 100).toFixed(1) + "%");
   };

   useEffect(() => {
     const el = chartRef.current;

     const chartData = {
       labels,
       datasets: [
         {
           data,
           backgroundColor: [
             "rgb(37, 211, 102)",
             "rgb(255, 205, 86)",
             "rgb(212, 44, 7)",
           ],
           hoverOffset: 4,
         },
       ],
     };

     const percentages = calculatePercentages(data);

     const config = {
       type: "doughnut",
       data: chartData,
       responsive: true,
     };

     if (chartObjRef.current) chartObjRef.current.destroy();

     chartObjRef.current = new Chart(el, config);

     // Add percentages to labels
     const legendItems = chartObjRef.current.legend.legendItems;
     legendItems.forEach((item, index) => {
       item.text += ` (${percentages[index]})`;
     });

     chartObjRef.current.update();

     return () => chartObjRef.current.destroy();
   }, [labels, data]);

   return (
     <div
       className="chart-container"
       style={{
         position: "relative",
         height: "200px",
         width: "200px",
       }}
     >
       <canvas ref={chartRef}></canvas>
     </div>
   );
 };

 export default DoughnutChartExample;


