import React from 'react';

interface FunnelStep {
  label: string;
  value: number;
  percentage: number;
}

export const ConversionFunnel = () => {
  const steps: FunnelStep[] = [
    { label: 'Cliques', value: 0, percentage: 0 },
    { label: 'Vis. Página', value: 0, percentage: 0 },
    { label: 'ICs', value: 0, percentage: 0 },
    { label: 'Vendas Pend.', value: 0, percentage: 0 },
    { label: 'Vendas Apr.', value: 0, percentage: 0 },
  ];

  return (
    <div className="bg-card p-6 rounded-lg border border-muted">
      <h3 className="text-lg font-semibold mb-4">Funil de Conversão (Meta Ads)</h3>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.label} className="relative">
            <div className="flex justify-between mb-1">
              <span className="text-sm">{step.label}</span>
              <span className="text-sm">{step.value} ({step.percentage}%)</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary"
                style={{ width: `${step.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};