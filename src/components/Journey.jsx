// import { useRef, useState } from 'react';
// import { motion, useInView, useScroll, useTransform } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Trophy, Target, Rocket, Star } from 'lucide-react';

// const MILESTONES = [
//   { year: '2004', title: 'Company Founded', desc: 'SmartLabTech established in Hyderabad with a vision to bridge the gap between world-class instruments and Indian research.', icon: Rocket, color: '#1e3a8a' },
//   { year: '2008', title: 'First Major Contract', desc: 'Secured supply contracts with 5 premier research universities, establishing credibility in the academic sector.', icon: Star, color: '#1d4ed8' },
//   { year: '2012', title: 'ISO 9001 Certified', desc: 'Achieved ISO 9001:2008 certification, reflecting our commitment to quality management in all operations.', icon: Trophy, color: '#0284c7' },
//   { year: '2015', title: 'Pharma Division Launch', desc: 'Launched dedicated pharmaceutical instrumentation division, expanding into GMP-regulated environments.', icon: Target, color: '#0369a1' },
//   { year: '2018', title: '200+ Clients Milestone', desc: 'Reached a landmark of 200+ institutional clients across Telangana, Andhra Pradesh, Karnataka, and Maharashtra.', icon: Trophy, color: '#1e3a8a' },
//   { year: '2020', title: 'Smart Lab Division', desc: 'Introduced AI-integrated lab systems and IoT-based monitoring solutions for next-generation laboratories.', icon: Rocket, color: '#0ea5e9' },
//   { year: '2022', title: 'NABL Calibration Lab', desc: 'Opened NABL-accredited in-house calibration laboratory, offering traceable calibration for 100+ instrument types.', icon: Star, color: '#1d4ed8' },
//   { year: '2024', title: '20 Years of Excellence', desc: 'Celebrated two decades of serving science — with 500+ clients, 50+ global brands, and a team of 200+ professionals.', icon: Trophy, color: '#1e3a8a' },
// ];

// const GALLERY = [
//   { url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80', label: 'Research Lab' },
//   { url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&q=80', label: 'Equipment Bay' },
//   { url: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&q=80', label: 'Analytical Suite' },
//   { url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80', label: 'Biotech Floor' },
//   { url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80', label: 'Calibration Lab' },
//   { url: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=600&q=80', label: 'Smart Lab' },
// ];

// function Reveal({ children, delay = 0 }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-50px' });
//   return (
//     <motion.div ref={ref}
//       initial={{ opacity: 0, y: 40 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.7, delay, ease: [0.25,0.46,0.45,0.94] }}>
//       {children}
//     </motion.div>
//   );
// }

// export default function Journey() {
//   const galleryRef = useRef(null);
//   const [activeIdx, setActiveIdx] = useState(0);

//   const scroll = (dir) => {
//     if (!galleryRef.current) return;
//     galleryRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
//   };

//   return (
//     <section id="journey"
//       style={{ background: '#ffffff', padding: 'clamp(64px,8vw,120px) 0', overflow: 'hidden' }}>
//       <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,5vw,80px)' }}>

//         {/* Header */}
//         <Reveal>
//           <div style={{ textAlign: 'center', marginBottom: 72 }}>
//             <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
//               background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)',
//               borderRadius: 20, padding: '5px 14px', marginBottom: 20 }}>
//               <span style={{ fontSize: 11, fontWeight: 700, color: '#0284c7',
//                 fontFamily: "'DM Sans',sans-serif", letterSpacing: '0.1em', textTransform: 'uppercase' }}>
//                 Our Journey
//               </span>
//             </div>
//             <h2 style={{ fontFamily: "'Playfair Display',serif",
//               fontSize: 'clamp(26px,3.5vw,48px)', fontWeight: 700,
//               color: '#0f172a', lineHeight: 1.2, marginBottom: 14 }}>
//               Our{' '}
//               <span className="text-gradient">25 Year Journey</span>
//             </h2>
//             <p style={{ fontSize: 16, color: '#64748b', fontFamily: "'DM Sans',sans-serif", lineHeight: 1.7 }}>
//               Celebrating 25+ years of trust, innovation, and scientific excellence across India.
//             </p>
//           </div>
//         </Reveal>

//         {/* Two-col layout */}
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
//           gap: 56, alignItems: 'start' }}>

//           {/* LEFT: Premium Image */}
//           <Reveal>
//             <div style={{ position: 'relative', top: 0 }}>
//               <div style={{ position: 'absolute', top: 20, left: 20, right: -20, bottom: -20,
//                 background: 'linear-gradient(135deg,rgba(30,58,138,0.08),rgba(14,165,233,0.06))',
//                 borderRadius: 20, zIndex: 0 }} />
//               <img
//                 src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=700&q=80"
//                 alt="SmartLabTech 25 Years Journey"
//                 style={{ width: '100%', borderRadius: 16, position: 'relative', zIndex: 1,
//                   boxShadow: '0 24px 64px rgba(30,58,138,0.18)' }}
//               />

//               {/* Stats overlay */}
//               <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
//                 zIndex: 2, display: 'flex', gap: 12, background: 'rgba(255,255,255,0.95)',
//                 backdropFilter: 'blur(16px)', borderRadius: 14, padding: '16px 24px',
//                 border: '1px solid rgba(255,255,255,0.6)',
//                 boxShadow: '0 8px 32px rgba(30,58,138,0.12)', whiteSpace: 'nowrap' }}>
//                 {[['500+','Clients'],['50+','Brands'],['25+','Years']].map(([v,l]) => (
//                   <div key={l} style={{ textAlign: 'center', padding: '0 12px',
//                     borderRight: l !== 'Years' ? '1px solid #e2e8f0' : 'none' }}>
//                     <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22,
//                       fontWeight: 700, color: '#1e3a8a', lineHeight: 1 }}>{v}</div>
//                     <div style={{ fontSize: 11, color: '#94a3b8',
//                       fontFamily: "'DM Sans',sans-serif", marginTop: 3 }}>{l}</div>
//                   </div>
//                 ))}
//               </div>

//               {/* Horizontal Gallery */}
//               <div style={{ marginTop: 24, position: 'relative', zIndex: 1 }}>
//                 <div style={{ display: 'flex', alignItems: 'center',
//                   justifyContent: 'space-between', marginBottom: 12 }}>
//                   <span style={{ fontSize: 13, fontWeight: 600, color: '#475569',
//                     fontFamily: "'DM Sans',sans-serif" }}>Photo Gallery</span>
//                   <div style={{ display: 'flex', gap: 8 }}>
//                     {[['left',ChevronLeft],['right',ChevronRight]].map(([dir, Icon]) => (
//                       <button key={dir}
//                         onClick={() => scroll(dir === 'left' ? -1 : 1)}
//                         style={{ width: 34, height: 34, borderRadius: '50%',
//                           background: '#f1f5f9', border: '1px solid #e2e8f0',
//                           display: 'flex', alignItems: 'center', justifyContent: 'center',
//                           cursor: 'pointer', transition: 'all 0.2s' }}
//                         onMouseEnter={e => { e.currentTarget.style.background='#1e3a8a'; e.currentTarget.children[0].style.color='#fff'; }}
//                         onMouseLeave={e => { e.currentTarget.style.background='#f1f5f9'; e.currentTarget.children[0].style.color='#64748b'; }}>
//                         <Icon size={15} color="#64748b" style={{ transition: 'color 0.2s' }} />
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div ref={galleryRef}
//                   style={{ display: 'flex', gap: 12, overflowX: 'auto',
//                     scrollbarWidth: 'none', msOverflowStyle: 'none',
//                     paddingBottom: 8 }}>
//                   {GALLERY.map((item, i) => (
//                     <motion.div key={i}
//                       whileHover={{ scale: 1.04 }}
//                       onClick={() => setActiveIdx(i)}
//                       style={{ flexShrink: 0, width: 160, height: 110,
//                         borderRadius: 10, overflow: 'hidden', position: 'relative',
//                         cursor: 'pointer',
//                         border: activeIdx === i ? '2px solid #1e3a8a' : '2px solid transparent',
//                         marginLeft: i > 0 ? -20 : 0,
//                         boxShadow: '0 4px 16px rgba(30,58,138,0.12)',
//                         transition: 'border-color 0.2s' }}>
//                       <img src={item.url} alt={item.label}
//                         style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
//                       <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
//                         background: 'linear-gradient(to top,rgba(15,23,42,0.8),transparent)',
//                         padding: '16px 10px 8px' }}>
//                         <span style={{ fontSize: 11, color: '#fff',
//                           fontFamily: "'DM Sans',sans-serif", fontWeight: 600 }}>{item.label}</span>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </Reveal>

//           {/* RIGHT: Timeline */}
//           <div style={{ position: 'relative' }}>
//             <div style={{ position: 'absolute', left: 19, top: 0, bottom: 0, width: 2,
//               background: 'linear-gradient(to bottom,#1e3a8a,#0ea5e9,transparent)' }} />

//             <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
//               {MILESTONES.map((m, i) => {
//                 const ref = useRef(null);
//                 const inView = useInView(ref, { once: true, margin: '-40px' });
//                 const { icon: Icon } = m;
//                 return (
//                   <motion.div key={m.year} ref={ref}
//                     initial={{ opacity: 0, x: 30 }}
//                     animate={inView ? { opacity: 1, x: 0 } : {}}
//                     transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25,0.46,0.45,0.94] }}
//                     style={{ display: 'flex', gap: 20, paddingBottom: 28, position: 'relative' }}>

//                     {/* Dot */}
//                     <div style={{ flexShrink: 0, width: 40, height: 40,
//                       background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)',
//                       borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
//                       boxShadow: '0 0 0 4px rgba(30,58,138,0.1)',
//                       position: 'relative', zIndex: 1 }}>
//                       <Icon size={16} color="#fff" />
//                     </div>

//                     <div style={{ flex: 1, background: '#f8faff', border: '1px solid #e2e8f0',
//                       borderRadius: 12, padding: '16px 18px', transition: 'all 0.25s' }}
//                       onMouseEnter={e => { e.currentTarget.style.borderColor='#2563eb'; e.currentTarget.style.boxShadow='0 6px 20px rgba(30,58,138,0.08)'; }}
//                       onMouseLeave={e => { e.currentTarget.style.borderColor='#e2e8f0'; e.currentTarget.style.boxShadow='none'; }}>
//                       <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
//                         <span style={{ background: 'linear-gradient(135deg,#1e3a8a,#1d4ed8)',
//                           color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px',
//                           borderRadius: 20, fontFamily: "'DM Sans',sans-serif" }}>
//                           {m.year}
//                         </span>
//                         <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 15,
//                           fontWeight: 600, color: '#0f172a' }}>{m.title}</span>
//                       </div>
//                       <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65,
//                         fontFamily: "'DM Sans',sans-serif" }}>{m.desc}</p>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// Journey_A.jsx — DARK CINEMATIC VERSION
// Design: Deep navy background, large typographic "25" rotates on scroll,
// glassmorphism image cards in horizontal scroll rail, sticky left panel
// Dependencies: framer-motion



// import { useRef, useState, useEffect } from 'react';
// import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';

// const IMAGES = [
//   { url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80' },
//   { url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&q=80', year: '2005', label: 'First Lab Wing' },
//   { url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80', year: '2009', label: 'ISO Certified' },
//   { url: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&q=80', year: '2013', label: 'Pharma Division' },
//   { url: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80', year: '2016', label: 'NABL Lab' },
//   { url: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=600&q=80', year: '2020', label: 'Smart Products' },
//   { url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&q=80', year: '2024', label: '500+ Clients' },
// ];

// const STATS = [
//   { val: '25+', lbl: 'Years' },
//   { val: '500+', lbl: 'Clients' },
//   { val: '50+', lbl: 'Brands' },
//   { val: '200+', lbl: 'Experts' },
// ];

// function GalleryCard({ item, index }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, amount: 0.3 });
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useSpring(useTransform(y, [-60, 60], [8, -8]), { stiffness: 300, damping: 30 });
//   const rotateY = useSpring(useTransform(x, [-80, 80], [-10, 10]), { stiffness: 300, damping: 30 });

//   const handleMouse = (e) => {
//     const rect = ref.current.getBoundingClientRect();
//     x.set(e.clientX - rect.left - rect.width / 2);
//     y.set(e.clientY - rect.top - rect.height / 2);
//   };
//   const resetMouse = () => { x.set(0); y.set(0); };

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 80, scale: 0.9 }}
//       animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
//       transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
//       style={{ perspective: 800, flexShrink: 0 }}
//     >
//       <motion.div
//         onMouseMove={handleMouse}
//         onMouseLeave={resetMouse}
//         style={{
//           rotateX, rotateY,
//           width: 260,
//           height: 340,
//           borderRadius: 20,
//           overflow: 'hidden',
//           position: 'relative',
//           cursor: 'pointer',
//           border: '1px solid rgba(255,255,255,0.10)',
//           boxShadow: '0 25px 80px rgba(2,6,23,0.8), inset 0 1px 0 rgba(255,255,255,0.08)',
//           background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
//           backdropFilter: 'blur(12px)',
//           transformStyle: 'preserve-3d',
//         }}
//         whileHover={{ scale: 1.08, rotate : 1, boxShadow: '0 40px 100px rgba(14,165,233,0.25)' }}
//         transition={{ type: 'spring', stiffness: 260, damping: 20 }}
//       >
//         <img
//           src={item.url}
//           alt={item.label}
//           style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.75)' }}
//         />
//         {/* Glass overlay */}
//         <div style={{
//           position: 'absolute', inset: 0,
//           background: 'linear-gradient(to top, rgba(10,16,40,0.92) 0%, rgba(10,16,40,0.0) 55%)',
//         }} />
//         {/* Bottom content */}
//         <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 20px 22px' }}>
//           <div style={{
//             display: 'inline-block',
//             background: 'rgba(14,165,233,0.2)',
//             border: '1px solid rgba(14,165,233,0.4)',
//             backdropFilter: 'blur(8px)',
//             borderRadius: 99, padding: '3px 12px', marginBottom: 10,
//             fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700,
//             color: '#38bdf8', letterSpacing: '0.1em',
//           }}>
//             {item.year}
//           </div>
//           <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>
//             {item.label}
//           </div>
//         </div>
//         {/* Top-right number tag */}
//         <div style={{
//           position: 'absolute', top: 16, right: 16,
//           width: 36, height: 36, borderRadius: '50%',
//           background: 'rgba(255,255,255,0.12)',
//           backdropFilter: 'blur(10px)',
//           border: '1px solid rgba(255,255,255,0.2)',
//           display: 'flex', alignItems: 'center', justifyContent: 'center',
//           fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 700, color: '#fff',
//         }}>
//           {String(index + 1).padStart(2, '0')}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function JourneyA() {
//   const sectionRef = useRef(null);
//   const railRef = useRef(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
//   const bigNumRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
//   const bigNumOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.4]);

//   const checkScroll = () => {
//     if (!railRef.current) return;
//     const { scrollLeft, scrollWidth, clientWidth } = railRef.current;
//     setCanScrollLeft(scrollLeft > 10);
//     setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
//   };

//   useEffect(() => {
//     const rail = railRef.current;
//     if (rail) { rail.addEventListener('scroll', checkScroll); checkScroll(); }
//     return () => { if (rail) rail.removeEventListener('scroll', checkScroll); };
//   }, []);

//   const scroll = (dir) => {
//     if (!railRef.current) return;
//     railRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
//   };

//   return (
//     <section ref={sectionRef} id="journey" style={{
//       background: `
//         radial-gradient(circle at 20% 30%, rgba(222, 226, 236, 0.4), transparent 40%),
//         radial-gradient(circle at 80% 70%, rgba(14,165,233,0.25), transparent 50%),
//         linear-gradient(160deg, #f1f2f5 0%, #f3f4f5fc 40%, #0f172a 100%)
//       `,
//       padding: '80px 0', minHeight: '100vh', overflow: 'hidden', position: 'relative',
//     }}>
//       {/* Ambient glow orb */}
//       <div style={{
//         position: 'absolute', top: '20%', left: '35%', width: 600, height: 600,
//         background: 'radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)',
//         borderRadius: '50%', pointerEvents: 'none', transform: 'translate(-50%,-50%)',
//       }} />

//       <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px,5vw,80px)' }}>
//         {/* Section pill */}
//         <motion.div
//           initial={{ opacity: 0, y: -12 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           style={{ marginBottom: 64 }}
//         >
//           {/* <span style={{
//             display: 'inline-flex', alignItems: 'center', gap: 8,
//             background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.25)',
//             borderRadius: 99, padding: '5px 14px',
//             fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 700,
//             color: '#38bdf8', letterSpacing: '0.12em', textTransform: 'uppercase',
//           }}>
//             <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0ea5e9', display: 'inline-block', animation: 'pkPulse 2s infinite' }} />
//             Our Journey
//           </span> */}
//         </motion.div>

//         {/* Two-column layout */}
//         <div style={{ display: 'flex', gap: 0, alignItems: 'flex-start' }}>

//           {/* ── LEFT sticky panel ── */}
//           <div style={{
//               width: '50%',
//               height: 'auto',
//               display: 'block',
//               borderRadius: 20,
//               boxShadow: '0 30px 80px rgba(236, 226, 226, 0.6)',
//               position: 'relative',
//               zIndex: 2  
//             }}>
//             <motion.div
//               initial={{ opacity: 0, x: -32 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             >
//              <img
//                 src="/image.png"   // 👈 put your image path here
//                 alt="25 years"
//                 style={{
//                   width: '100%',
//                   height: 'auto',
//                   display: 'block'
//                 }}  
//               />
//               <div style={{
//                 position: 'absolute',
//                 inset: 0,
//                 background: 'radial-gradient(circle, rgba(14,165,233,0.25), transparent 70%)',
//                 filter: 'blur(40px)',
//                 zIndex: -1
//               }} />                    
                           
//             </motion.div>
//           </div>

//           {/* ── RIGHT scroll gallery ── */}
//           <div style={{ flex: 1, minWidth: 0, zIndex: 1 , paddingLeft: 120}}>
//             {/* Arrow buttons */}
//             <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginBottom: 24 }}>
//               {[{ dir: -1, disabled: !canScrollLeft }, { dir: 1, disabled: !canScrollRight }].map(({ dir, disabled }, i) => (
//                 <motion.button
//                   key={i}
//                   onClick={() => scroll(dir)}
//                   disabled={disabled}
//                   whileHover={!disabled ? { scale: 1.1 } : {}}
//                   whileTap={!disabled ? { scale: 0.93 } : {}}
//                   style={{
//                     width: 42, height: 42, borderRadius: '50%',
//                     background: disabled ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.08)',
//                     border: `1px solid ${disabled ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.16)'}`,
//                     color: disabled ? 'rgba(255,255,255,0.2)' : '#fff',
//                     cursor: disabled ? 'not-allowed' : 'pointer',
//                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                     transition: 'all 0.2s',
//                   }}
//                 >
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     {dir === -1
//                       ? <path d="M19 12H5M12 19l-7-7 7-7"/>
//                       : <path d="M5 12h14M12 5l7 7-7 7"/>}
//                   </svg>
//                 </motion.button>
//               ))}
//             </div>

//             {/* Scrollable rail */}
//             <div
//               ref={railRef}
//               style={{
//                 display: 'flex', gap: 20,
//                 overflowX: 'auto', overflowY: 'hidden',
//                 scrollbarWidth: 'none', msOverflowStyle: 'none',
//                 paddingBottom: 12,
//                 scrollSnapType: 'x mandatory',
//                 WebkitOverflowScrolling: 'touch',
//                 transform: 'translateZ(0)',
//                 maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)',
//                 WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 100%)',
//               }}
//             >
//               {IMAGES.map((item, i) => (
//                 <div key={i} style={{ scrollSnapAlign: 'start' }}>
//                   <GalleryCard item={item} index={i} />
//                 </div>
//               ))}
//             </div>

//             {/* Progress dots */}
//             <div style={{ display: 'flex', gap: 6, marginTop: 24, justifyContent: 'center' }}>
//               {IMAGES.map((_, i) => (
//                 <div key={i} style={{
//                   width: i === 0 ? 24 : 7, height: 7,
//                   borderRadius: 99,
//                   background: i === 0 ? '#0ea5e9' : 'rgba(255,255,255,0.15)',
//                   transition: 'all 0.3s',
//                 }} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes pkPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.75)} }
//         div[style*="overflowX"]::-webkit-scrollbar { display: none; }
//         @media (max-width: 768px) {
//           section#journey > div > div { flex-direction: column !important; }
//           section#journey > div > div > div:first-child { position: static !important; width: 100% !important; margin-right: 0 !important; margin-bottom: 48px; }
//         }
//       `}</style>
//     </section>
//   );
// }

import { useRef, useState, useEffect } from 'react';
import { motion  } from 'framer-motion';

const SLIDES = [
  {
    url: '/DSC04595.JPG',
    year: '1999',
    label: 'The Beginning',
    desc: 'Founded with a vision to redefine scientific excellence in India.',
  },
  {
    url: '/DSC04569.JPG',
    year: '2005',
    label: 'First Lab Wing',
    desc: 'Expanded our infrastructure with a state-of-the-art laboratory wing.',
  },
  {
    url: '/DSC09662.JPG',
    year: '2009',
    label: 'ISO Certified',
    desc: 'Achieved ISO certification, marking our commitment to global quality standards.',
  }, 
];


export default function JourneySection() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef(null);


  useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, 3000); // ⏱️ change every 3 sec

  return () => clearInterval(interval);
}, []);
  

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#ffffff',
        padding: '10px 0',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Background glow orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', bottom: '-15%', right: '-8%',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 65%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', top: '40%', left: '45%',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)',
          borderRadius: '50%',
        }} />
        {/* Grid pattern */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.03 }}>
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#38bdf8" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px, 5vw, 80px)', position: 'relative', zIndex: 1 }}>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
        }}>

          {/* ── LEFT: Image / Logo panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main image panel */}
            <div style={{
              position: 'relative',
            }}>
              <img
                src="/ChatGPT Image Apr 14, 2026, 02_46_22 PM.png"
                alt="25 years of excellence"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.querySelector('.fallback-logo').style.display = 'flex';
                }}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
              />
              {/* Fallback */}
              <div className="fallback-logo" style={{
                display: 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                height: 380, gap: 20,
              }}>
                <div style={{
                  fontSize: 72, fontWeight: 800, lineHeight: 1,
                  background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  fontFamily: "'Playfair Display', serif",
                }}>25</div>
                <div style={{ color: 'rgba(148,163,184,1)', fontSize: 14, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Years of Excellence
                </div>
              </div>

              {/* Corner glow */}
              {/* <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 200,
                background: 'linear-gradient(to bottom, rgba(14,165,233,0.08), transparent)',
                pointerEvents: 'none',
              }} /> */}
            </div>

            {/* Stats row below image */}
            {/* <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 12, marginTop: 20,
            }}>
              {STATS.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(99,102,241,0.06))',
                    border: '1px solid rgba(56,189,248,0.15)',
                    borderRadius: 16,
                    padding: '16px 12px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontSize: 22, fontWeight: 800, color: '#38bdf8',
                    fontFamily: "'Playfair Display', serif",
                    lineHeight: 1,
                  }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: 'rgba(148,163,184,0.8)', marginTop: 6, letterSpacing: '0.06em' }}>
                    {s.lbl}
                  </div>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* ── RIGHT: Single card display ── */}
          <div style={{
            position: 'relative',
            height: 420,
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0,0,0,0.4)'
          }}>
            {SLIDES.map((slide, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: i === current ? 1 : 0,
                  x: i === current ? 0 : 100
                }}
                transition={{ duration: 0.8 }}
                style={{
                  position: 'absolute',
                  inset: 0
                }}
              >
                {/* Image */}
                <img
                  src={slide.url}
                  alt={slide.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(2,6,23,0.9), transparent 60%)'
                }} />

                {/* Content */}
                <div style={{
                  position: 'absolute',
                  bottom: 30,
                  left: 30,
                  right: 30,
                  color: '#fff'
                }}>
                  <div style={{
                    fontSize: 14,
                    color: '#38bdf8',
                    marginBottom: 6
                  }}>
                    {slide.year}
                  </div>

                  <h3 style={{
                    fontSize: 28,
                    fontWeight: 700,
                    marginBottom: 8
                  }}>
                    {slide.label}
                  </h3>

                  <p style={{
                    fontSize: 14,
                    opacity: 0.8,
                    maxWidth: 400
                  }}>
                    {slide.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Progress bar */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: 3,
              width: `${((current + 1) / SLIDES.length) * 100}%`,
              background: 'linear-gradient(90deg, #38bdf8, #6366f1)',
              transition: 'width 0.5s'
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap');
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @media (max-width: 768px) {
          section > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

