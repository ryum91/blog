import React, { useEffect } from 'react';

const Adsense = ({ clientId, slotId, format }) => {
  useEffect(() => {
    if (clientId) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
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
    ''
  );
};

export default Adsense;
