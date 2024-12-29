import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IntegrationCard } from './IntegrationCard';

export const IntegrationSettings = () => {
  const navigate = useNavigate();
  const [integrations, setIntegrations] = useState([
    {
      id: 'conversion-api',
      name: 'Conversion API',
      description: 'Track conversions and events from your website or application',
      enabled: false,
    },
    {
      id: 'facebook',
      name: 'Facebook Ads',
      description: 'Connect your Facebook Ads account to track campaign performance',
      enabled: false,
    },
  ]);

  const handleToggle = (id: string) => {
    setIntegrations(integrations.map(integration =>
      integration.id === id
        ? { ...integration, enabled: !integration.enabled }
        : integration
    ));
  };

  const handleConfigure = (id: string) => {
    navigate(`/dashboard/integrations?tab=${id}`);
  };

  return (
    <div className="space-y-6">
      {integrations.map(integration => (
        <IntegrationCard
          key={integration.id}
          name={integration.name}
          description={integration.description}
          enabled={integration.enabled}
          onToggle={() => handleToggle(integration.id)}
          onConfigure={() => handleConfigure(integration.id)}
        />
      ))}
    </div>
  );
};