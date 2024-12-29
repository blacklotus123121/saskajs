import React, { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';
import { ConversionApi } from '../../components/integrations/ConversionApi';
import FacebookAds from '../FacebookAds';
import { IntegrationSettings } from '../../components/integrations/settings/IntegrationSettings';
import { useLocation, useNavigate } from 'react-router-dom';

const Integrations = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const defaultTab = searchParams.get('tab') || 'settings';

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (!tab) {
      searchParams.set('tab', 'settings');
      navigate({ search: searchParams.toString() });
    }
  }, []);

  const handleTabChange = (value: string) => {
    searchParams.set('tab', value);
    navigate({ search: searchParams.toString() });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Integrations</h1>
      </div>

      <Tabs value={defaultTab} onValueChange={handleTabChange} className="w-full">
        <TabsList>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="conversion-api">Conversion API</TabsTrigger>
          <TabsTrigger value="facebook">Facebook Ads</TabsTrigger>
        </TabsList>

        <TabsContent value="settings">
          <IntegrationSettings />
        </TabsContent>

        <TabsContent value="conversion-api">
          <ConversionApi />
        </TabsContent>

        <TabsContent value="facebook">
          <FacebookAds />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Integrations;