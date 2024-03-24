import Layout from '../../../admin/ui-components/layout';
import { useState } from 'react';
import Security from '../../../components/admin-settings/Security';
import ProfileInfo from '../../../components/admin-settings/ProfileInfo';

const SettingsPage = () => {
  const [variant, setVariant] = useState('profileInfo');

  return (
    <div>
      <Layout>
        <div className="w-full">
          <h3 className="mb-12">Settings</h3>
          <div className="flex gap-4 p-4">
            <div className="w-80 flex flex-col gap-4">
              <span
                onClick={() => setVariant('profileInfo')}
                className={`text-2xl font-semibold rounded-md px-4 py-2 cursor-pointer ${
                  variant === 'profileInfo' ? 'bg-blue-200' : 'hover:bg-blue-50'
                } `}
              >
                Basic
              </span>
              <span
                onClick={() => setVariant('security')}
                className={`text-2xl font-semibold rounded-md px-4 py-2 cursor-pointer ${
                  variant !== 'profileInfo' ? 'bg-blue-200' : 'hover:bg-blue-50'
                } `}
              >
                Security
              </span>
            </div>
            {variant === 'profileInfo' && <ProfileInfo />}

            {variant === 'security' && <Security />}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SettingsPage;
