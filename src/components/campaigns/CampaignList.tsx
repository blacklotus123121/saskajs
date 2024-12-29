import React from 'react';
import { Campaign } from '../../types';

interface CampaignListProps {
  campaigns: Campaign[];
  onSelect: (campaign: Campaign) => void;
}

export const CampaignList = ({ campaigns, onSelect }: CampaignListProps) => {
  return (
    <div className="bg-card border border-muted rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-muted">
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Source</th>
            <th className="px-6 py-3 text-left">Medium</th>
            <th className="px-6 py-3 text-left">Clicks</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr
              key={campaign.id}
              onClick={() => onSelect(campaign)}
              className="hover:bg-muted/50 cursor-pointer"
            >
              <td className="px-6 py-4">{campaign.name}</td>
              <td className="px-6 py-4">{campaign.source}</td>
              <td className="px-6 py-4">{campaign.medium}</td>
              <td className="px-6 py-4">0</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};