import React from 'react';
import { UtmForm, UtmFormData } from '../components/utm/UtmForm';
import { buildUtmUrl } from '../utils/utm';

const UtmBuilder = () => {
  const handleSubmit = (data: UtmFormData) => {
    const utmUrl = buildUtmUrl(data.baseUrl, {
      source: data.source,
      medium: data.medium,
      campaign: data.campaign,
      content: data.content,
      term: data.term,
    });
    console.log('Generated UTM URL:', utmUrl);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">UTM Builder</h1>
      </div>
      <div className="bg-card p-6 rounded-lg border border-muted">
        <UtmForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default UtmBuilder;