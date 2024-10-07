// components/ui/ui-layout.tsx
import React from 'react';

interface AppModalProps {
  title: string;
  hide: () => void;
  show: boolean;
  submit: () => void;
  submitLabel: string;
  children?: React.ReactNode; // Accept children to render any additional content
  onClose?: () => void; // Keep this prop for external use
}

const AppModal: React.FC<AppModalProps> = ({ 
  title, 
  hide, 
  show, 
  submit, 
  submitLabel, 
  children,
  onClose 
}) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={hide}>&times;</span>
        <h2>{title}</h2>
        {children}
        <button onClick={submit} className="btn btn-primary">{submitLabel}</button>
      </div>
    </div>
  );
};

export default AppModal; // Make sure this is a default export
