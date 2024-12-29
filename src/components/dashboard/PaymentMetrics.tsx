import React from 'react';

export const PaymentMetrics = () => {
  return (
    <div className="bg-card p-6 rounded-lg border border-muted">
      <h3 className="text-lg font-semibold mb-4">Taxa de Aprovação</h3>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h4 className="text-sm font-medium mb-1">Cartão</h4>
          <p className="text-2xl font-bold">N/A</p>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-1">Pix</h4>
          <p className="text-2xl font-bold">N/A</p>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-1">Boleto</h4>
          <p className="text-2xl font-bold">N/A</p>
        </div>
      </div>
    </div>
  );
};