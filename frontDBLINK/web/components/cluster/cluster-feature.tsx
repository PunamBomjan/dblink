'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ClusterUiModal } from './cluster-ui';
import { ClusterUiTable } from './cluster-ui';

export default function ClusterFeature() {
  const [showModal, setShowModal] = useState(false);
  const [showComponents, setShowComponents] = useState(true); // State to manage visibility
  const pathname = usePathname();

  const handleRemoveCluster = () => {
    setShowModal(true);
    setShowComponents(false); // Hide button and table when the button is clicked
  };

  useEffect(() => {
    // Reset visibility state when navigating to the cluster path
    if (pathname?.includes('/cluster')) {
      setShowComponents(true); // Show components again when navigating to cluster
    }
  }, [pathname]);

  return (
    <div>
      <ClusterUiModal
        show={showModal}
        hideModal={() => setShowModal(false)}
      />
      
      {showComponents && (
        <button
          className="btn btn-xs lg:btn-md btn-primary py-2 px-4 mb-4 ml-5"
          onClick={handleRemoveCluster}
        >
          Remove Cluster
        </button>
      )}

      {showComponents && <ClusterUiTable />}
    </div>
  );
}
