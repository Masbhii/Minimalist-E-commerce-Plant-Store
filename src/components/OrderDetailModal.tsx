import React from 'react';
import { Order } from '../context/OrderHistoryContext';
import { Button } from './Button';
import { ConfirmCancelModal } from './ConfirmCancelModal';

interface OrderDetailModalProps {
  order: Order | null;
  open: boolean;
  onClose: () => void;
  onCancel?: (orderId: string, reason?: string) => void;
  onNextStatus?: (orderId: string, nextStatus: Order['status']) => void;
}

const statusSteps = [
  { key: 'ordered', label: 'Ordered' },
  { key: 'accepting', label: 'Accepting Order' },
  { key: 'packaging', label: 'Packaging' },
  { key: 'on_the_way', label: 'On The Way' },
  { key: 'delivered', label: 'Delivered' },
];

export const OrderDetailModal: React.FC<OrderDetailModalProps> = ({ order, open, onClose, onCancel, onNextStatus }) => {
  if (!order || !open) return null;
  const currentStepIdx = statusSteps.findIndex(s => s.key === order.status);
  const isCanceled = order.status === 'canceled';
  const [showCancelConfirm, setShowCancelConfirm] = React.useState(false);
  const [cancelReason, setCancelReason] = React.useState('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700" onClick={onClose} aria-label="Close">&times;</button>
        <h2 className="text-xl font-semibold mb-2">Order #{order.id}</h2>
        <p className="text-sm text-gray-500 mb-4">Placed on {new Date(order.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <div className="mb-4">
          {isCanceled ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">Canceled</span>
          ) : (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status === 'delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{statusSteps[currentStepIdx]?.label || order.status}</span>
          )}
        </div>
        {isCanceled && order.cancelReason && (
          <div className="mb-4 text-sm text-red-700 bg-red-50 rounded p-2">
            <span className="font-medium">Cancel Reason:</span> {order.cancelReason}
          </div>
        )}
        {!isCanceled && (
          <div className="mb-6 flex items-center justify-between">
            <div className="flex-1 flex items-center">
              {statusSteps.map((step, idx) => (
                <React.Fragment key={step.key}>
                  <div className={`flex flex-col items-center ${idx < currentStepIdx ? 'text-green-600' : idx === currentStepIdx ? 'text-green-700' : 'text-gray-300'}`}>
                    <div className={`w-4 h-4 rounded-full border-2 ${idx < currentStepIdx ? 'bg-green-600 border-green-600' : idx === currentStepIdx ? 'bg-green-200 border-green-700' : 'bg-gray-200 border-gray-300'}`}></div>
                    <span className="text-xs mt-1">{step.label}</span>
                  </div>
                  {idx < statusSteps.length - 1 && <div className={`flex-1 h-0.5 ${idx < currentStepIdx ? 'bg-green-600' : 'bg-gray-200'}`}></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Shipping Address</h3>
          <div className="text-sm text-gray-700">
            <div>{order.shippingAddress.firstName} {order.shippingAddress.lastName}</div>
            <div>{order.shippingAddress.address}</div>
            <div>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-medium mb-2">Items</h3>
          <div className="divide-y divide-gray-100">
            {order.items.map(item => (
              <div key={item.product.id} className="flex items-center py-2">
                <div className="h-12 w-12 rounded-md overflow-hidden border border-gray-200 mr-3">
                  <img src={item.product.image} alt={item.product.name} className="h-full w-full object-cover object-center" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{item.product.name}</div>
                  <div className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center border-t pt-4">
          <span className="font-medium text-gray-900">Total</span>
          <span className="font-semibold text-lg text-green-700">${order.total.toFixed(2)}</span>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          {!isCanceled && order.status !== 'delivered' && (
            <Button
              variant="outline"
              className="!border-red-500 !text-red-700 hover:!bg-red-50 hover:!border-red-600 hover:!text-red-800 transition-colors"
              onClick={() => setShowCancelConfirm(true)}
            >
              Cancel Order
            </Button>
          )}
          {!isCanceled && order.status !== 'delivered' && currentStepIdx < statusSteps.length - 1 && (
            <Button variant="solid" onClick={() => onNextStatus && onNextStatus(order.id, statusSteps[currentStepIdx + 1].key as Order['status'])}>
              Next Status
            </Button>
          )}
          <Button variant="outline" onClick={onClose}>Close</Button>
        </div>
      </div>
      <ConfirmCancelModal
        open={showCancelConfirm}
        onClose={() => setShowCancelConfirm(false)}
        onConfirm={(reason) => {
          setShowCancelConfirm(false);
          setCancelReason(reason);
          onCancel && onCancel(order.id, reason);
        }}
      />
    </div>
  );
};
