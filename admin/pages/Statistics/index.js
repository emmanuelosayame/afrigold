 import BarChartExample from "../../dashboard-components/BarChartExample";
 import DoughnutChartExample from "../../dashboard-components/DoughnutChartExample";
 import Card from "/admin/ui-components/Card";
 import HeaderSection from "/admin/ui-components/HeaderSection";
 import Section from "/admin/ui-components/Section";

 const Statistics = () => {
   const cardContainer = {
     width: "400px",
     height: "300px",
     marginRight: "10px",
   };
   return (
     <>
       <HeaderSection
         heading={"Statistics Report"}
         subHeading={"Visualize your data"}
       />
       <Section>
         <Card
           heading="Bar Chart"
           subHeading="An Introduction to bar chart support on Nigold"
         >
           <BarChartExample />
         </Card>

         <Card
           heading="Doughnut Chart Example"
           subHeading="An Introduction to doughnut chart example"
         >
           <div
             style={{
               display: "flex",
               justifyContent: "center",
             }}
           >
             <DoughnutChartExample />
           </div>
         </Card>
       </Section>
     </>
   );
 };

 export default Statistics;
