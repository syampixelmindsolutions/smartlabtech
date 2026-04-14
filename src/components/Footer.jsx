import { FlaskConical, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube, ArrowRight } from 'lucide-react';

const FOOTER_LINKS = {
  Products: ['Microscopes','Spectrometers','Centrifuges','Balances','Incubators','Smart Lab Systems'],
  Services: ['Equipment Supply','Installation & Calibration','Maintenance (AMC)','Scientific Consulting','Quality Validation','Training Programs'],
  Company:  ['About Us','Our Journey','Careers','News & Events','Partners','CSR Initiatives'],
  Support:  ['Technical Support','Documentation','FAQs','Request a Demo','Get a Quote','Contact Us'],
};

function smoothScrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: '#e2e8f0', padding: '72px 0 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,5vw,80px)' }}>

        {/* Newsletter bar */}
        <div style={{ background: 'linear-gradient(135deg,#1e3a8a,#1d4ed8,#0369a1)',
          borderRadius: 16, padding: 'clamp(24px,3vw,36px) clamp(20px,3vw,48px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 20, marginBottom: 60,
          boxShadow: '0 8px 32px rgba(30,58,138,0.35)' }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(18px,2vw,24px)',
              fontWeight: 700, color: '#fff', marginBottom: 6 }}>
              Stay Updated with SmartLabTech
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)',
              fontFamily: "'DM Sans',sans-serif" }}>
              Subscribe for product launches, technical insights, and industry news.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 0, minWidth: 300 }}>
            <input placeholder="Enter your email..."
              style={{ flex: 1, background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)', borderRight: 'none',
                borderRadius: '8px 0 0 8px', color: '#fff', padding: '12px 16px',
                fontSize: 14, fontFamily: "'DM Sans',sans-serif", outline: 'none' }} />
            <button style={{ background: '#fff', border: 'none', color: '#1e3a8a',
              padding: '12px 20px', borderRadius: '0 8px 8px 0', fontSize: 14,
              fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
              display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap',
              transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background='#e0f2fe'}
              onMouseLeave={e => e.currentTarget.style.background='#fff'}>
              Subscribe <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Main footer grid */}
        <div style={{ display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              {/* Logo Image */}
              <img 
                src="/Screenshot 2026-04-13 151403.png" 
                alt="SmartLabTech Logo"
                style={{ 
                  width: 36, 
                  height: 36, 
                  objectFit: 'contain',
                  borderRadius: 8,
                }}
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  e.target.style.display = 'none';
                  const fallbackIcon = e.target.parentElement.querySelector('.fallback-icon');
                  if (fallbackIcon) fallbackIcon.style.display = 'flex';
                }}
              />
              {/* Fallback icon */}
              <div 
                className="fallback-icon" 
                style={{ 
                  width: 36, 
                  height: 36,
                  background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)',
                  borderRadius: 8, 
                  display: 'none', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}
              >
                <FlaskConical size={18} color="#fff" />
              </div>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700,
                color: '#fff' }}>
                SmartLab<span style={{ color: '#38bdf8' }}>Tech</span>
              </span>
            </div>

            <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.75,
              fontFamily: "'DM Sans',sans-serif", marginBottom: 20 }}>
              Precision instruments and scientific solutions for research, pharma, and education since 2004.
            </p>
            <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
              {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <button key={i}
                  style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background='rgba(14,165,233,0.2)'; e.currentTarget.style.borderColor='#0ea5e9'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; }}>
                  <Icon size={16} color="#94a3b8" />
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[[Phone, '+91 40 6789 1234'],[Mail, 'info@smartlabtech.in'],[MapPin, 'Hyderabad, Telangana']].map(([Icon, text]) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon size={14} color="#38bdf8" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: '#94a3b8', fontFamily: "'DM Sans',sans-serif" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#fff',
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16,
                fontFamily: "'DM Sans',sans-serif" }}>{title}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(link => (
                  <li key={link}>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer',
                      padding: 0, fontSize: 13, color: '#94a3b8',
                      fontFamily: "'DM Sans',sans-serif", transition: 'color 0.2s',
                      textAlign: 'left' }}
                      onMouseEnter={e => e.target.style.color='#38bdf8'}
                      onMouseLeave={e => e.target.style.color='#94a3b8'}>
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '24px 0', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 13, color: '#475569', fontFamily: "'DM Sans',sans-serif" }}>
            © 2026 SmartLabTech Pvt. Ltd. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy','Terms of Service','Cookie Policy'].map(link => (
              <button key={link} style={{ background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 12, color: '#475569', fontFamily: "'DM Sans',sans-serif",
                transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color='#38bdf8'}
                onMouseLeave={e => e.target.style.color='#475569'}>
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}