import React from 'react';
import { Button } from '../ui/Button';
import { Copy } from 'lucide-react';

interface ReferralLinkProps {
  code: string;
}

export const ReferralLink = ({ code }: ReferralLinkProps) => {
  const referralUrl = `${window.location.origin}/?ref=${code}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralUrl);
      alert('Referral link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        value={referralUrl}
        readOnly
        className="flex-1 px-4 py-2 bg-muted border border-muted rounded-lg"
      />
      <Button onClick={copyToClipboard} variant="outline">
        <Copy className="w-4 h-4 mr-2" />
        Copy
      </Button>
    </div>
  );
};