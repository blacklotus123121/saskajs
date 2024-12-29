import React from 'react';
import { Code } from 'lucide-react';

export const ConversionApiDocs = () => {
  return (
    <div className="space-y-6">
      <div className="bg-card p-6 rounded-lg border border-muted">
        <h2 className="text-lg font-semibold mb-4">API Documentation</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-md font-medium mb-2">Endpoint</h3>
            <div className="bg-muted p-3 rounded-md flex items-center gap-2">
              <Code className="w-4 h-4" />
              <code>POST https://api.lotusfy.com/v1/conversion</code>
            </div>
          </div>
          
          <div>
            <h3 className="text-md font-medium mb-2">Request Body</h3>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`{
  "event_name": "purchase",
  "value": 99.90,
  "currency": "BRL",
  "utm_source": "facebook",
  "utm_medium": "cpc",
  "utm_campaign": "spring_sale"
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};