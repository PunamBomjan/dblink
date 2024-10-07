// components/account/ModalReceive.tsx
import React from 'react';
import AccountModal from './AccountModals'; // Adjust the import path if necessary
import { PublicKey } from '@solana/web3.js';

interface ModalReceiveProps {
    show: boolean;
    hide: () => void;
    address: PublicKey;
}

const ModalReceive: React.FC<ModalReceiveProps> = ({ show, hide, address }) => {
    const handleSubmit = async () => {
        // Handle receive logic here
        console.log("Received for address:", address.toString());
        hide(); // Close modal after submission
    };

    return (
        <AccountModal
            title="Receive Funds"
            hide={hide}
            show={show}
            submit={handleSubmit}
            submitLabel="Receive"
        />
    );
};

export default ModalReceive;
