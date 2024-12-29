import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/Tabs';
import { ConversionApiSetup } from './ConversionApiSetup';
import { ConversionApiDocs } from './ConversionApiDocs';

export const ConversionApi = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Conversion API</h1>
      </div>

      <Tabs defaultValue="setup" className="w-full">
        <TabsList>
          <TabsTrigger value="setup">Setup</TabsTrigger>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
        </TabsList>

        <TabsContent value="setup">
          <ConversionApiSetup />
        </TabsContent>

        <TabsContent value="documentation">
          <ConversionApiDocs />
        </TabsContent>
      </Tabs>
    </div>
  );
};