import React from 'react';
import { Button } from '../ui/Button';
import { validateUrl } from '../../utils/utm';

interface UtmFormProps {
  onSubmit: (data: UtmFormData) => void;
}

export interface UtmFormData {
  baseUrl: string;
  source: string;
  medium: string;
  campaign: string;
  content?: string;
  term?: string;
}

export const UtmForm = ({ onSubmit }: UtmFormProps) => {
  const [formData, setFormData] = React.useState<UtmFormData>({
    baseUrl: '',
    source: '',
    medium: '',
    campaign: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateUrl(formData.baseUrl)) {
      alert('Please enter a valid URL');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Base URL</label>
        <input
          type="url"
          value={formData.baseUrl}
          onChange={(e) => setFormData({ ...formData, baseUrl: e.target.value })}
          className="w-full px-4 py-2 bg-muted border border-muted rounded-lg"
          required
        />
      </div>
      {/* Add other UTM fields */}
      <Button type="submit">Generate UTM Link</Button>
    </form>
  );
};