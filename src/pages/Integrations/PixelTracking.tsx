import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { supabase } from '../../lib/supabase';
import { toast } from 'sonner';

const PixelTracking = () => {
  const [pixelId, setPixelId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('integrations')
        .upsert({ 
          type: 'pixel',
          config: { pixel_id: pixelId },
          user_id: (await supabase.auth.getUser()).data.user?.id
        });

      if (error) throw error;
      toast.success('Pixel tracking configuration saved');
    } catch (error) {
      toast.error('Failed to save configuration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-card p-6 rounded-lg border border-muted">
        <h2 className="text-lg font-semibold mb-4">Pixel Tracking Setup</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="pixelId" className="block text-sm font-medium mb-2">
              Pixel ID
            </label>
            <input
              id="pixelId"
              type="text"
              value={pixelId}
              onChange={(e) => setPixelId(e.target.value)}
              className="w-full px-4 py-2 bg-muted border border-muted rounded-lg"
              required
            />
          </div>

          <Button type="submit" loading={loading}>
            Save Configuration
          </Button>
        </form>
      </div>

      <div className="bg-card p-6 rounded-lg border border-muted">
        <h2 className="text-lg font-semibold mb-4">Tracking Code</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Add this code to your website to enable pixel tracking.
        </p>
        
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
          <code>{`<!-- LotusFy Pixel Tracking Code -->
<script>
  (function(l,t,f){
    var s=document.createElement('script');
    s.async=true;
    s.src='https://cdn.lotusfy.com/pixel.js';
    s.onload=function(){
      ltf('init','{PIXEL_ID}');
      ltf('track','PageView');
    };
    var p=document.getElementsByTagName('script')[0];
    p.parentNode.insertBefore(s,p);
  })(window,document,'ltf');
</script>`}</code>
        </pre>
      </div>
    </div>
  );
};

export default PixelTracking;