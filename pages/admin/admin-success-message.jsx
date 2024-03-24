import AdminSuccessMessage from "../../admin/dashboard-components/AdminSuccessMessage";
import Layout from "../../admin/ui-components/layout";


const  AdminSuccessPage = () => {
    return (
        <div>
          <Layout>
            <div className="">
               <AdminSuccessMessage />
            </div>
           
         </Layout>
         </div>
    );
}

export default AdminSuccessPage