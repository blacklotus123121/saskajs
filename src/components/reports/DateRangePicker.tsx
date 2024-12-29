import React from 'react';
import { Button } from '../ui/Button';

interface DateRangePickerProps {
  startDate: Date;
  endDate: Date;
  onChange: (startDate: Date, endDate: Date) => void;
}

export const DateRangePicker = ({ startDate, endDate, onChange }: DateRangePickerProps) => {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="date"
        value={startDate.toISOString().split('T')[0]}
        onChange={(e) => onChange(new Date(e.target.value), endDate)}
        className="px-4 py-2 bg-muted border border-muted rounded-lg"
      />
      <span>to</span>
      <input
        type="date"
        value={endDate.toISOString().split('T')[0]}
        onChange={(e) => onChange(startDate, new Date(e.target.value))}
        className="px-4 py-2 bg-muted border border-muted rounded-lg"
      />
      <Button variant="outline">Last 7 days</Button>
      <Button variant="outline">Last 30 days</Button>
    </div>
  );
};