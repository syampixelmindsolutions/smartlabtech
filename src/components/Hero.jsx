import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, FlaskConical, Microscope, Atom, Beaker } from 'lucide-react';

const SLIDES = [
  {
    headline: 'Advanced Laboratory Equipment',
    sub: 'From research benches to industrial floors — precision instruments that define scientific excellence.',
    img: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=900&q=80',
    badge: 'ISO 9001:2015 Certified',
    color: '#1e3a8a',
  },
  {
    headline: 'Precision Scientific Instruments',
    sub: 'Analytical tools engineered for accuracy. Trusted by leading research institutes and pharma companies.',
    img: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=900&q=80',
    badge: 'Serving 500+ Institutions',
    color: '#1d4ed8',
  },
  {
    headline: 'Reliable Research Solutions',
    sub: 'Two decades of expertise in sourcing, installing, and supporting scientific equipment across India.',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80',
    badge: '20+ Years of Trust',
    color: '#0369a1',
  },
];

const STATS = [
  { value: '20+', label: 'Years Experience' },
  { value: '500+', label: 'Institutions Served' },
  { value: '50+', label: 'Global Brands' },
  { value: '98%', label: 'Client Satisfaction' },
];

function smoothScrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  const [current, setCurrent]     = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const go = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const next = () => go((current + 1) % SLIDES.length);
  const prev = () => go((current - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  const slide = SLIDES[current];

  const variants = {
    enter:  d => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.55, ease: [0.25,0.46,0.45,0.94] } },
    exit:   d => ({ x: d > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.35 } }),
  };

  return (
    <section id="home"
      style={{ minHeight: '100vh', background: 'linear-gradient(160deg,#f0f7ff 0%,#ffffff 60%,#f8faff 100%)',
        display: 'flex', flexDirection: 'column', paddingTop: 72, position: 'relative', overflow: 'hidden' }}>

      {/* Grid BG */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

      {/* Blue blob */}
      <div style={{ position: 'absolute', top: -160, right: -160, width: 560, height: 560,
        background: 'radial-gradient(circle,rgba(14,165,233,0.12) 0%,transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400,
        background: 'radial-gradient(circle,rgba(30,58,138,0.08) 0%,transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none' }} />

      <div style={{ flex: 1, maxWidth: 1280, margin: '0 auto', width: '100%',
        padding: 'clamp(40px,6vh,80px) clamp(16px,5vw,80px)',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
        gap: 48, alignItems: 'center' }}>

        {/* LEFT TEXT */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.25)',
              borderRadius: 20, padding: '6px 14px', marginBottom: 24 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#0ea5e9',
              animation: 'pulse-dot 2s infinite' }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: '#0369a1',
              fontFamily: "'DM Sans',sans-serif", letterSpacing: '0.06em' }}>
              {slide.badge}
            </span>
          </motion.div>

          <div style={{ fontFamily: "'Playfair Display',serif", color: '#475569',
            fontSize: 'clamp(16px,2.5vw,24px)', fontWeight: 400, marginBottom: 8 }}>
            Looking for
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.h1 key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ fontFamily: "'Playfair Display',serif",
                fontSize: 'clamp(28px,4.5vw,58px)', fontWeight: 700, lineHeight: 1.15,
                color: '#0f172a', marginBottom: 20 }}>
              <span style={{ display: 'block' }}>
                {slide.headline.split(' ').slice(0, 1).join(' ')}{' '}
              </span>
              <span className="text-gradient">
                {slide.headline.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p key={`sub-${current}`}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ fontSize: 16, color: '#64748b', lineHeight: 1.75, maxWidth: 480,
                marginBottom: 36, fontFamily: "'DM Sans',sans-serif" }}>
              {slide.sub}
            </motion.p>
          </AnimatePresence>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
            <button onClick={() => smoothScrollTo('contact')}
              style={{ background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)',
                border: 'none', color: '#fff', padding: '14px 30px',
                borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 9,
                fontFamily: "'DM Sans',sans-serif",
                boxShadow: '0 6px 24px rgba(30,58,138,0.28)',
                transition: 'all 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 32px rgba(30,58,138,0.36)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 6px 24px rgba(30,58,138,0.28)'; }}>
              Get Quote <ArrowRight size={16} />
            </button>
            <button onClick={() => smoothScrollTo('services')}
              style={{ background: 'transparent', border: '1.5px solid #cbd5e1',
                color: '#1e3a8a', padding: '14px 30px', borderRadius: 10,
                fontSize: 15, fontWeight: 600, cursor: 'pointer',
                fontFamily: "'DM Sans',sans-serif", transition: 'all 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='#1e3a8a'; e.currentTarget.style.background='#f0f7ff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='#cbd5e1'; e.currentTarget.style.background='transparent'; }}>
              Browse Products
            </button>
          </div>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
            {STATS.map(({ value, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(20px,2.5vw,28px)',
                  fontWeight: 700, color: '#1e3a8a' }}>{value}</div>
                <div style={{ fontSize: 11, color: '#94a3b8', fontFamily: "'DM Sans',sans-serif",
                  marginTop: 2, letterSpacing: '0.04em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div style={{ position: 'relative' }}>
          {/* Decorative frame */}
          <div style={{ position: 'absolute', top: -16, right: -16, left: 16, bottom: 16,
            background: 'linear-gradient(135deg,rgba(30,58,138,0.1),rgba(14,165,233,0.08))',
            borderRadius: 24, zIndex: 0 }} />

          <div style={{ position: 'relative', zIndex: 1, borderRadius: 20,
            overflow: 'hidden', aspectRatio: '4/3',
            boxShadow: '0 24px 64px rgba(30,58,138,0.22)' }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img key={current}
                custom={direction}
                variants={{ enter: d => ({ scale:1.05, opacity:0 }), center:{ scale:1, opacity:1, transition:{duration:0.6} }, exit:{ opacity:0, transition:{duration:0.3} } }}
                initial="enter" animate="center" exit="exit"
                src={slide.img} alt={slide.headline}
                style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />
            </AnimatePresence>

            {/* Bottom overlay */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top,rgba(15,23,42,0.7),transparent)',
              padding: '32px 24px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: 8 }}>
                  {SLIDES.map((_, i) => (
                    <button key={i} onClick={() => go(i)}
                      style={{ width: i === current ? 24 : 8, height: 8,
                        borderRadius: 4, border: 'none', cursor: 'pointer',
                        background: i === current ? '#0ea5e9' : 'rgba(255,255,255,0.4)',
                        transition: 'all 0.3s' }} />
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  {[prev, next].map((fn, i) => (
                    <button key={i} onClick={fn}
                      style={{ width: 36, height: 36, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.25)',
                        color: '#fff', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'background 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.28)'}
                      onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.15)'}>
                      {i === 0 ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Slide number badge */}
            <div style={{ position: 'absolute', top: 16, right: 16,
              background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.25)',
              padding: '6px 12px', borderRadius: 20,
              fontSize: 12, color: '#fff', fontFamily: "'DM Sans',sans-serif", fontWeight: 600 }}>
              {String(current + 1).padStart(2,'0')} / {String(SLIDES.length).padStart(2,'0')}
            </div>
          </div>

          {/* Floating cards */}
          <motion.div className="animate-float"
            style={{ position: 'absolute', top: -20, left: -20, zIndex: 10,
              background: '#fff', borderRadius: 12,
              boxShadow: '0 8px 32px rgba(30,58,138,0.14)',
              padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10,
              border: '1px solid #e2e8f0' }}>
            <div style={{ width: 36, height: 36, background: 'rgba(14,165,233,0.12)',
              borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FlaskConical size={18} color="#0ea5e9" />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1e3a8a',
                fontFamily: "'DM Sans',sans-serif" }}>ISO Certified</div>
              <div style={{ fontSize: 11, color: '#94a3b8', fontFamily: "'DM Sans',sans-serif" }}>Quality Assured</div>
            </div>
          </motion.div>

          <motion.div
            style={{ position: 'absolute', bottom: 0, left: -32, zIndex: 10,
              background: '#fff', borderRadius: 12,
              boxShadow: '0 8px 32px rgba(30,58,138,0.14)',
              padding: '12px 16px', border: '1px solid #e2e8f0' }}
            animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}>
            <div style={{ fontSize: 12, color: '#64748b', fontFamily: "'DM Sans',sans-serif", marginBottom: 4 }}>Client Satisfaction</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: '#1e3a8a' }}>98%</div>
              <div style={{ flex: 1, height: 6, background: '#f1f5f9', borderRadius: 3 }}>
                <div style={{ width: '98%', height: '100%',
                  background: 'linear-gradient(90deg,#1e3a8a,#0ea5e9)', borderRadius: 3 }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}