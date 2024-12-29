import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export const StatsCard = ({ title, value, change, icon: Icon }: StatsCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg border border-muted hover:border-primary/50 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <Icon className="w-8 h-8 text-primary opacity-75" />
      </div>
      <div className="mt-4">
        <span className="text-sm text-emerald-500">{change}</span>
        <span className="text-sm text-muted-foreground ml-1">vs last month</span>
      </div>
    </div>
  );
};