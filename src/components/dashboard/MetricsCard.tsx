import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend: { value: string; direction: 'up' | 'down' } | null;
}

export const MetricsCard = ({ title, value, icon: Icon, trend }: MetricsCardProps) => {
  return (
    <div className="bg-card p-4 rounded-lg border border-muted hover:border-primary/50 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground">{title}</span>
        <Icon className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="text-2xl font-bold">{value}</div>
      {trend && (
        <div className={`text-sm ${trend.direction === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {trend.value}
        </div>
      )}
    </div>
  );
};