import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';

interface PlanCardProps {
  title: string;
  price: number;
  features: string[];
  recommended?: boolean;
  onSelect: () => void;
}

export const PlanCard = ({ title, price, features, recommended, onSelect }: PlanCardProps) => {
  return (
    <div className={`bg-card p-8 rounded-xl border ${recommended ? 'border-primary' : 'border-muted'} relative`}>
      {recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm">
          Recommended
        </span>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">R${price.toFixed(2)}</span>
        <span className="text-muted-foreground">/month</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={recommended ? 'primary' : 'outline'}
        className="w-full"
        onClick={onSelect}
      >
        Select Plan
      </Button>
    </div>
  );
};