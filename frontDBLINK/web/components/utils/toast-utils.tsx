// components/utils/toast-utils.tsx

'use client';

import toast from 'react-hot-toast';

export function useTransactionToast() {
  return (message: string) => {
    toast.success(`Transaction successful! Signature: ${message}`);
  };
}
