const DISCLAIMER_TEXT = "Retirement Citizenship provides strategic jurisdictional analysis and program intelligence for informational purposes only. We are not a registered investment advisor, broker-dealer, or law firm. Nothing on this platform constitutes legal, tax, investment, or financial advice. All analysis should be reviewed with qualified legal and tax counsel before any cross-border capital commitment or immigration decision is made. Retirement Citizenship does not accept compensation from program operators, government agencies, or investment funds.";

export const DisclaimerFooter = () => (
  <div className="border-t border-border pt-6 mt-8">
    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', lineHeight: 1.6, color: '#9CA3AF' }}>
      {DISCLAIMER_TEXT}
    </p>
  </div>
);

export const DisclaimerArticle = () => (
  <div className="rounded-md px-5 py-4 mb-8" style={{ backgroundColor: '#F0F4FA', border: '1px solid #D6E0ED' }}>
    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', lineHeight: 1.6, color: '#4B5563' }}>
      {DISCLAIMER_TEXT}
    </p>
  </div>
);
