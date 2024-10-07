// components/account/ModalAirdrop.tsx
import React from 'react';
import AccountModal from '../account/AccountModals'; // Adjust the import path if necessary
import { PublicKey } from '@solana/web3.js';

interface ModalAirdropProps {
    show: boolean;
    hide: () => void;
    address: PublicKey;
}

const ModalAirdrop: React.FC<ModalAirdropProps> = ({ show, hide, address }) => {
    const handleSubmit = async () => {
        // Handle airdrop logic here
        console.log("Airdropped to address:", address.toString());
        hide(); // Close modal after submission
    };

    return (
        <AccountModal
            title="Airdrop Funds"
            hide={hide}
            show={show}
            submit={handleSubmit}
            submitLabel="Airdrop"
        />
    );
};

export default ModalAirdrop;
