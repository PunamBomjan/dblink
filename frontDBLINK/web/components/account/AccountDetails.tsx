// src/components/AccountDetails.tsx

import React from 'react';
import UiLayout from '../ui/ui-layout'; // Adjust the path as necessary
import { LinkProps } from '../../LinkProps'; // Adjust the import path based on your structure

const AccountDetails: React.FC = () => {
  const links: LinkProps[] = [
    {
        label: 'Home', url: '/',
        path: ''
    },
    {
        label: 'Settings', url: '/settings',
        path: ''
    },
  ];

  // Ensure that you return valid JSX
  return (
    <UiLayout links={links} title="Account Details" subtitle="Manage your account settings">
      <div>
        <h3>Your Account Information</h3>
        {/* Additional account details content goes here */}
      </div>
    </UiLayout>
  );
};

export default AccountDetails;
