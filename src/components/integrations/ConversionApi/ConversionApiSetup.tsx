import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

export const ConversionApiSetup = () => {
  const [apiKey, setApiKey] = useState('');

  const generateApiKey = () => {
    const newKey = `ltf_${Math.random().toString(36).substring(2)}`;
    setApiKey(newKey);
    toast.success('New API key generated');
  };

  const copyApiKey = async () => {
    try {
      await navigator.clipboard.writeText(apiKey);
      toast.success('API key copied to clipboard');
    } catch (err) {
      toast.error('Failed to copy API key');
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-lg border border-muted">
        <h2 className="text-lg font-semibold mb-4">API Key Management</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Your API Key</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={apiKey}
                readOnly
                className="flex-1 px-4 py-2 bg-muted border border-muted rounded-lg"
                placeholder="Generate an API key to get started"
              />
              <Button onClick={copyApiKey} variant="outline" disabled={!apiKey}>
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
            </div>
          </div>

          <Button onClick={generateApiKey}>
            {apiKey ? 'Regenerate API Key' : 'Generate API Key'}
          </Button>
        </div>
      </div>
    </div>
  );
};