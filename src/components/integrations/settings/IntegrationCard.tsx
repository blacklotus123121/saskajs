import React from 'react';
import { Switch } from '../../ui/Switch';
import { Settings } from 'lucide-react';

interface IntegrationCardProps {
  name: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
  onConfigure: () => void;
}

export const IntegrationCard = ({
  name,
  description,
  enabled,
  onToggle,
  onConfigure,
}: IntegrationCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg border border-muted">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Switch checked={enabled} onCheckedChange={onToggle} />
      </div>
      
      <button
        onClick={onConfigure}
        className="mt-4 flex items-center text-sm text-primary hover:text-primary/90"
      >
        <Settings className="w-4 h-4 mr-1" />
        Configure
      </button>
    </div>
  );
};