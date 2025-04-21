import React, { useState } from 'react';
import { Button } from './Button';

interface ConfirmCancelModalProps {
  open: boolean;
  onConfirm: (reason: string) => void;
  onClose: () => void;
}

export const ConfirmCancelModal: React.FC<ConfirmCancelModalProps> = ({ open, onConfirm, onClose }) => {
  const [reason, setReason] = useState('');
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6 relative animate-fade-in">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={onClose} aria-label="Close">&times;</button>
        <h3 className="text-lg font-semibold mb-2">Are you sure you want to cancel this order?</h3>
        <p className="text-sm text-gray-600 mb-4">Please provide a reason for cancellation:</p>
        <textarea
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:ring-green-500 focus:border-green-500 resize-none"
          rows={3}
          placeholder="Your reason..."
          value={reason}
          onChange={e => setReason(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>Back</Button>
          <Button
            variant="solid"
            onClick={() => { onConfirm(reason); setReason(''); }}
            disabled={!reason.trim()}
          >
            Cancel Order
          </Button>
        </div>
      </div>
    </div>
  );
};
