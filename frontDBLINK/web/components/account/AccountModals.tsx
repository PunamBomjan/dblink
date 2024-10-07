// AccountModal.tsx
import React from 'react';
import AppModal from '../ui/AppModal'; // Import your AppModal component
export { default as ModalReceive } from './ModalReceive';
export { default as ModalAirdrop } from './ModalAirdrop';
interface AccountModalProps {
  title: string;
  hide: () => void; // Function to close the modal
  show: boolean; // Control modal visibility
  submit: () => Promise<void>; // Function to handle form submission
  submitLabel: string; // Label for the submit button
}

const AccountModal: React.FC<AccountModalProps> = ({
  title,
  hide,
  show,
  submit,
  submitLabel,
}) => {
  return (
    <AppModal
      title={title}
      onClose={hide}
      show={show}
      submit={submit}
      submitLabel={submitLabel} hide={function (): void {
        throw new Error('Function not implemented.');
      } }    >
      {/* Modal content goes here */}
      <div className="p-4">
        <p>Please fill out the information below:</p>
        <form onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          submit(); // Call the submit function passed as a prop
        }}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            {submitLabel}
          </button>
        </form>
      </div>
    </AppModal>
  );
};

export default AccountModal;
