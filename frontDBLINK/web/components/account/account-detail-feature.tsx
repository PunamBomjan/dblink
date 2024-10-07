"use client";
import { PublicKey } from '@solana/web3.js';
import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import { ExplorerLink } from '../cluster/cluster-ui';
import AppHero from '../ui/ui-layout'; // Ensure this is imported correctly
import { ellipsify } from '../ui/ui-layout';
import {
  AccountBalance,
  AccountButtons,
  AccountTokens,
  AccountTransactions,
} from './account-ui';

export default function AccountDetailFeature() {
  const params = useParams();
  
  // Check if params is null or does not contain an address
  if (!params || !params.address) {
    return <div>Error loading account</div>;
  }

  // Use useMemo to create the address
  const address = useMemo(() => {
    try {
      return new PublicKey(params.address);
    } catch (e) {
      console.log(`Invalid public key`, e);
      return null; // Return null in case of an invalid key
    }
  }, [params.address]);

  // Check if address is null
  if (!address) {
    return <div>Error loading account</div>;
  }

  return (
    <div>
 <AppHero
  title={<AccountBalance address={address} />}
  subtitle={<div className="my-4">
    <ExplorerLink
      path={`account/${address}`}
      label={ellipsify({ text: address.toString(), maxLength: 10 })} // Provide the correct second argument if necessary
      labe={undefined}    />
  </div>}
  links={[]} // Keep the links prop if you have links to pass
>
  <div className="my-4">
    <AccountButtons address={address} />
  </div>
</AppHero>

      <div className="space-y-8">
        <AccountTokens address={address} />
        <AccountTransactions address={address} />
      </div>
    </div>
  );
}
