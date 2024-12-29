import React from 'react';
import { MetricsCard } from './MetricsCard';
import { DollarSign, TrendingUp, ShoppingCart, AlertCircle, CreditCard, Percent } from 'lucide-react';

export const MetricsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <MetricsCard
        title="Faturamento Bruto"
        value="R$ 0,00"
        icon={DollarSign}
        trend={null}
      />
      <MetricsCard
        title="Gastos com anúncios"
        value="R$ 0,00"
        icon={TrendingUp}
        trend={null}
      />
      <MetricsCard
        title="ROAS"
        value="N/A"
        icon={TrendingUp}
        trend={null}
      />
      <MetricsCard
        title="Lucro"
        value="R$ 0,00"
        icon={DollarSign}
        trend={null}
      />
      <MetricsCard
        title="Faturamento Líquido"
        value="R$ 0,00"
        icon={DollarSign}
        trend={null}
      />
      <MetricsCard
        title="Vendas Pendentes"
        value="R$ 0,00"
        icon={ShoppingCart}
        trend={null}
      />
      <MetricsCard
        title="ROI"
        value="N/A"
        icon={TrendingUp}
        trend={null}
      />
      <MetricsCard
        title="Margem"
        value="N/A"
        icon={Percent}
        trend={null}
      />
      <MetricsCard
        title="Vendas Reembolsadas"
        value="R$ 0,00"
        icon={AlertCircle}
        trend={null}
      />
      <MetricsCard
        title="Vendas chargeback"
        value="R$ 0,00"
        icon={CreditCard}
        trend={null}
      />
      <MetricsCard
        title="Taxa de Reembolso"
        value="0.0%"
        icon={Percent}
        trend={null}
      />
      <MetricsCard
        title="Taxa de Chargeback"
        value="0.0%"
        icon={Percent}
        trend={null}
      />
    </div>
  );
};