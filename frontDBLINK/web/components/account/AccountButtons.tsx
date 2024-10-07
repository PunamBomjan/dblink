// components/account/AccountButtons.tsx
"use client";
import { PublicKey } from '@solana/web3.js';
import { ModalReceive, ModalAirdrop } from './AccountModals'; // Import your modals
import React, { useState } from 'react';

export function AccountButtons({ address }: { address: PublicKey }) {
  const [showAirdropModal, setShowAirdropModal] = useState(false);
  const [showReceiveModal, setShowReceiveModal] = useState(false);

  return (
    <div>
      <ModalAirdrop
        hide={() => setShowAirdropModal(false)}
        address={address}
        show={showAirdropModal}
      />
      <ModalReceive
        address={address}
        show={showReceiveModal}
        hide={() => setShowReceiveModal(false)}
      />
      <div className="space-x-2">
        <button
          className="btn btn-xs lg:btn-md btn-outline"
          onClick={() => setShowAirdropModal(true)}
        >
          Airdrop
        </button>
        <button
          className="btn btn-xs lg:btn-md btn-outline"
          onClick={() => setShowReceiveModal(true)}
        >
          Receive
        </button>
      </div>
    </div>
  );
}
