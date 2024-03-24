// import Profile from "../src/Pages/Profile";
// import Layout from "../../admin/ui-components/layout";

// const ProfilePage = () => {

//     return (

//         <div>
//             <Layout>
//               <Profile />
//            </Layout>

//         </div>
//     )

// }

// export default ProfilePage

import Layout from '../../../admin/ui-components/layout';
import Profile from '../../../admin/pages/Profile';

const ProfilePage = () => {
  return (
    <div>
      <Layout>
        <div>
          <Profile />
        </div>
      </Layout>
    </div>
  );
};

export default ProfilePage;
