import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { supabase } from '../../lib/supabase';
import { toast } from 'sonner';

const GoogleAnalytics = () => {
  const [measurementId, setMeasurementId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('integrations')
        .upsert({ 
          type: 'google_analytics',
          config: { measurement_id: measurementId },
          user_id: (await supabase.auth.getUser()).data.user?.id
        });

      if (error) throw error;
      toast.success('Google Analytics integration saved');
    } catch (error) {
      toast.error('Failed to save integration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-card p-6 rounded-lg border border-muted">
      <h2 className="text-lg font-semibold mb-4">Google Analytics Setup</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="measurementId" className="block text-sm font-medium mb-2">
            Measurement ID (G-XXXXXXXXXX)
          </label>
          <input
            id="measurementId"
            type="text"
            value={measurementId}
            onChange={(e) => setMeasurementId(e.target.value)}
            placeholder="G-XXXXXXXXXX"
            className="w-full px-4 py-2 bg-muted border border-muted rounded-lg"
            required
          />
        </div>

        <Button type="submit" loading={loading}>
          Save Integration
        </Button>
      </form>

      <div className="mt-8">
        <h3 className="text-md font-semibold mb-2">How to get your Measurement ID:</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
          <li>Go to Google Analytics</li>
          <li>Click Admin (gear icon)</li>
          <li>Under Property, click Data Streams</li>
          <li>Select your web stream</li>
          <li>Copy the Measurement ID (starts with G-)</li>
        </ol>
      </div>
    </div>
  );
};

export default GoogleAnalytics;