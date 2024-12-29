import React from 'react';
import { MetricsGrid } from '../components/dashboard/MetricsGrid';
import { ConversionFunnel } from '../components/dashboard/ConversionFunnel';
import { PaymentMetrics } from '../components/dashboard/PaymentMetrics';
import { PerformanceChart } from '../components/dashboard/PerformanceChart';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="text-sm text-muted-foreground">
          Atualizado há 30 segundos
        </div>
      </div>

      <MetricsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConversionFunnel />
        <PaymentMetrics />
      </div>

      <div className="bg-card p-6 rounded-lg border border-muted">
        <h2 className="text-lg font-semibold mb-6">Performance de Vendas</h2>
        <PerformanceChart data={[
          { name: 'Jan', clicks: 400 },
          { name: 'Feb', clicks: 300 },
          { name: 'Mar', clicks: 600 },
          { name: 'Apr', clicks: 800 },
          { name: 'May', clicks: 700 },
        ]} />
      </div>
    </div>
  );
};

export default Dashboard;