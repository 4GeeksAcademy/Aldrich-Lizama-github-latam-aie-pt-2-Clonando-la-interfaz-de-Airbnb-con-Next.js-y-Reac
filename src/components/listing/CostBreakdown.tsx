interface CostBreakdownProps {
  price: number;
  nights: number;
}

const CostBreakdown: React.FC<CostBreakdownProps> = ({ price, nights }) => {
  const subtotal = price * nights;
  const cleaningFee = Math.round(price * 0.15);
  const serviceFee = Math.round(price * 0.1);
  const total = subtotal + cleaningFee + serviceFee;

  return (
    <>
      <div className="mb-4 space-y-2 border-b border-gray-200 pb-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>${price} x {nights} noches</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Tarifa de limpieza</span>
          <span>${cleaningFee}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Tarifa de servicio</span>
          <span>${serviceFee}</span>
        </div>
      </div>
      <div className="mb-4 flex justify-between font-semibold">
        <span>Total</span>
        <span>${total}</span>
      </div>
    </>
  );
};

export default CostBreakdown;