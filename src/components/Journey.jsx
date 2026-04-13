import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Trophy, Target, Rocket, Star } from 'lucide-react';

const MILESTONES = [
  { year: '2004', title: 'Company Founded', desc: 'SmartLabTech established in Hyderabad with a vision to bridge the gap between world-class instruments and Indian research.', icon: Rocket, color: '#1e3a8a' },
  { year: '2008', title: 'First Major Contract', desc: 'Secured supply contracts with 5 premier research universities, establishing credibility in the academic sector.', icon: Star, color: '#1d4ed8' },
  { year: '2012', title: 'ISO 9001 Certified', desc: 'Achieved ISO 9001:2008 certification, reflecting our commitment to quality management in all operations.', icon: Trophy, color: '#0284c7' },
  { year: '2015', title: 'Pharma Division Launch', desc: 'Launched dedicated pharmaceutical instrumentation division, expanding into GMP-regulated environments.', icon: Target, color: '#0369a1' },
  { year: '2018', title: '200+ Clients Milestone', desc: 'Reached a landmark of 200+ institutional clients across Telangana, Andhra Pradesh, Karnataka, and Maharashtra.', icon: Trophy, color: '#1e3a8a' },
  { year: '2020', title: 'Smart Lab Division', desc: 'Introduced AI-integrated lab systems and IoT-based monitoring solutions for next-generation laboratories.', icon: Rocket, color: '#0ea5e9' },
  { year: '2022', title: 'NABL Calibration Lab', desc: 'Opened NABL-accredited in-house calibration laboratory, offering traceable calibration for 100+ instrument types.', icon: Star, color: '#1d4ed8' },
  { year: '2024', title: '20 Years of Excellence', desc: 'Celebrated two decades of serving science — with 500+ clients, 50+ global brands, and a team of 200+ professionals.', icon: Trophy, color: '#1e3a8a' },
];

const GALLERY = [
  { url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80', label: 'Research Lab' },
  { url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&q=80', label: 'Equipment Bay' },
  { url: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&q=80', label: 'Analytical Suite' },
  { url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80', label: 'Biotech Floor' },
  { url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80', label: 'Calibration Lab' },
  { url: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=600&q=80', label: 'Smart Lab' },
];

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25,0.46,0.45,0.94] }}>
      {children}
    </motion.div>
  );
}

export default function Journey() {
  const galleryRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scroll = (dir) => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };

  return (
    <section id="journey"
      style={{ background: '#ffffff', padding: 'clamp(64px,8vw,120px) 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,5vw,80px)' }}>

        {/* Header */}
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)',
              borderRadius: 20, padding: '5px 14px', marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#0284c7',
                fontFamily: "'DM Sans',sans-serif", letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Our Journey
              </span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display',serif",
              fontSize: 'clamp(26px,3.5vw,48px)', fontWeight: 700,
              color: '#0f172a', lineHeight: 1.2, marginBottom: 14 }}>
              Our{' '}
              <span className="text-gradient">25 Year Journey</span>
            </h2>
            <p style={{ fontSize: 16, color: '#64748b', fontFamily: "'DM Sans',sans-serif", lineHeight: 1.7 }}>
              Celebrating 25+ years of trust, innovation, and scientific excellence across India.
            </p>
          </div>
        </Reveal>

        {/* Two-col layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 56, alignItems: 'start' }}>

          {/* LEFT: Premium Image */}
          <Reveal>
            <div style={{ position: 'relative', top: 0 }}>
              <div style={{ position: 'absolute', top: 20, left: 20, right: -20, bottom: -20,
                background: 'linear-gradient(135deg,rgba(30,58,138,0.08),rgba(14,165,233,0.06))',
                borderRadius: 20, zIndex: 0 }} />
              <img
                src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=700&q=80"
                alt="SmartLabTech 25 Years Journey"
                style={{ width: '100%', borderRadius: 16, position: 'relative', zIndex: 1,
                  boxShadow: '0 24px 64px rgba(30,58,138,0.18)' }}
              />

              {/* Stats overlay */}
              <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
                zIndex: 2, display: 'flex', gap: 12, background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(16px)', borderRadius: 14, padding: '16px 24px',
                border: '1px solid rgba(255,255,255,0.6)',
                boxShadow: '0 8px 32px rgba(30,58,138,0.12)', whiteSpace: 'nowrap' }}>
                {[['500+','Clients'],['50+','Brands'],['25+','Years']].map(([v,l]) => (
                  <div key={l} style={{ textAlign: 'center', padding: '0 12px',
                    borderRight: l !== 'Years' ? '1px solid #e2e8f0' : 'none' }}>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22,
                      fontWeight: 700, color: '#1e3a8a', lineHeight: 1 }}>{v}</div>
                    <div style={{ fontSize: 11, color: '#94a3b8',
                      fontFamily: "'DM Sans',sans-serif", marginTop: 3 }}>{l}</div>
                  </div>
                ))}
              </div>

              {/* Horizontal Gallery */}
              <div style={{ marginTop: 24, position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#475569',
                    fontFamily: "'DM Sans',sans-serif" }}>Photo Gallery</span>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {[['left',ChevronLeft],['right',ChevronRight]].map(([dir, Icon]) => (
                      <button key={dir}
                        onClick={() => scroll(dir === 'left' ? -1 : 1)}
                        style={{ width: 34, height: 34, borderRadius: '50%',
                          background: '#f1f5f9', border: '1px solid #e2e8f0',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          cursor: 'pointer', transition: 'all 0.2s' }}
                        onMouseEnter={e => { e.currentTarget.style.background='#1e3a8a'; e.currentTarget.children[0].style.color='#fff'; }}
                        onMouseLeave={e => { e.currentTarget.style.background='#f1f5f9'; e.currentTarget.children[0].style.color='#64748b'; }}>
                        <Icon size={15} color="#64748b" style={{ transition: 'color 0.2s' }} />
                      </button>
                    ))}
                  </div>
                </div>

                <div ref={galleryRef}
                  style={{ display: 'flex', gap: 12, overflowX: 'auto',
                    scrollbarWidth: 'none', msOverflowStyle: 'none',
                    paddingBottom: 8 }}>
                  {GALLERY.map((item, i) => (
                    <motion.div key={i}
                      whileHover={{ scale: 1.04 }}
                      onClick={() => setActiveIdx(i)}
                      style={{ flexShrink: 0, width: 160, height: 110,
                        borderRadius: 10, overflow: 'hidden', position: 'relative',
                        cursor: 'pointer',
                        border: activeIdx === i ? '2px solid #1e3a8a' : '2px solid transparent',
                        marginLeft: i > 0 ? -20 : 0,
                        boxShadow: '0 4px 16px rgba(30,58,138,0.12)',
                        transition: 'border-color 0.2s' }}>
                      <img src={item.url} alt={item.label}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
                        background: 'linear-gradient(to top,rgba(15,23,42,0.8),transparent)',
                        padding: '16px 10px 8px' }}>
                        <span style={{ fontSize: 11, color: '#fff',
                          fontFamily: "'DM Sans',sans-serif", fontWeight: 600 }}>{item.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: Timeline */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 19, top: 0, bottom: 0, width: 2,
              background: 'linear-gradient(to bottom,#1e3a8a,#0ea5e9,transparent)' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {MILESTONES.map((m, i) => {
                const ref = useRef(null);
                const inView = useInView(ref, { once: true, margin: '-40px' });
                const { icon: Icon } = m;
                return (
                  <motion.div key={m.year} ref={ref}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25,0.46,0.45,0.94] }}
                    style={{ display: 'flex', gap: 20, paddingBottom: 28, position: 'relative' }}>

                    {/* Dot */}
                    <div style={{ flexShrink: 0, width: 40, height: 40,
                      background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)',
                      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 0 0 4px rgba(30,58,138,0.1)',
                      position: 'relative', zIndex: 1 }}>
                      <Icon size={16} color="#fff" />
                    </div>

                    <div style={{ flex: 1, background: '#f8faff', border: '1px solid #e2e8f0',
                      borderRadius: 12, padding: '16px 18px', transition: 'all 0.25s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor='#2563eb'; e.currentTarget.style.boxShadow='0 6px 20px rgba(30,58,138,0.08)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor='#e2e8f0'; e.currentTarget.style.boxShadow='none'; }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                        <span style={{ background: 'linear-gradient(135deg,#1e3a8a,#1d4ed8)',
                          color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px',
                          borderRadius: 20, fontFamily: "'DM Sans',sans-serif" }}>
                          {m.year}
                        </span>
                        <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 15,
                          fontWeight: 600, color: '#0f172a' }}>{m.title}</span>
                      </div>
                      <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65,
                        fontFamily: "'DM Sans',sans-serif" }}>{m.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}