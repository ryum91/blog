import React, { useEffect } from 'react';

import './style.scss';

interface Props {
  clientId?: string | null;
  slotId: string;
  format: string;
}

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

export const Adsense = ({ clientId, slotId, format }: Props) => {
  useEffect(() => {
    if (clientId) {
      window.adsbygoogle = (window.adsbygoogle || []).push({});
    }
  }, [clientId]);

  return clientId ? (
    <div className="ad">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format={format}
      />
    </div>
  ) : (
    <></>
  );
};
