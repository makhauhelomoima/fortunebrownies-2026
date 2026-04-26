<div style={{
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '1rem',
  marginBottom: '2rem',
  maxWidth: '400px',
  margin: '0 auto 2rem auto'
}}>
  {[
    {num: '1', label: 'Founder', sub: 'You tested it 🤍'},
    {num: '3', label: 'Automations', sub: 'Payments + Auth + Referrals'},
    {num: '150+', label: 'Reach', sub: 'Global franchise ready'}
  ].map((stat, i) => (
    <div key={i} style={{
      backgroundColor: '#1a1a1a',
      border: '1px solid #FF6A00',
      padding: '1rem 0.5rem',
      borderRadius: '12px',
      textAlign: 'center'
    }}>
      <div style={{ fontSize: '2.2rem', fontWeight: 'bold' }}>
        {stat.num}
      </div>
      <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{stat.label}</div>
      <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>{stat.sub}</div>
    </div>
  ))}
</div>
