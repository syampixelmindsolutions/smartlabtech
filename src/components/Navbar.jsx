
// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown, Menu, X, ChevronRight, ArrowRight, Phone, Mail } from 'lucide-react';

// /* ── PRODUCT DATA ── */
// export const CATEGORIES = {
//   'Featured Products': [
//     { name: 'Microscopes',     icon: '🔬', desc: 'Advanced optical & electron microscopes' },
//     { name: 'Spectrometers',   icon: '📡', desc: 'UV-Vis, IR & mass spectrometry systems' },
//     { name: 'Centrifuges',     icon: '⚗️', desc: 'Micro, refrigerated & ultracentrifuges' },
//     { name: 'Chromatography',  icon: '🧫', desc: 'HPLC, GC and TLC systems' },
//     { name: 'Electrophoresis', icon: '⚡', desc: 'Gel electrophoresis & blotting units' },
//   ],
//   'Marketed Products': [
//     { name: 'Precision Balances', icon: '⚖️', desc: 'Analytical & top-loading balances' },
//     { name: 'Incubators',         icon: '🌡️', desc: 'CO₂, BOD & shaking incubators' },
//     { name: 'pH Meters',          icon: '🧪', desc: 'Benchtop & portable pH solutions' },
//     { name: 'Autoclaves',         icon: '🔒', desc: 'Steam sterilization systems' },
//     { name: 'Water Purification', icon: '💧', desc: 'Type I, II & III water systems' },
//   ],
//   'Smart Products': [
//     { name: 'AI Lab Systems',    icon: '🤖', desc: 'AI-powered analytical platforms' },
//     { name: 'Smart Sensors',     icon: '📶', desc: 'IoT-enabled lab monitoring sensors' },
//     { name: 'Automation Tools',  icon: '🦾', desc: 'Liquid handling & robotic platforms' },
//     { name: 'Lab Management',    icon: '📊', desc: 'LIMS & digital workflow solutions' },
//     { name: 'Remote Monitoring', icon: '🖥️', desc: 'Cloud-connected lab dashboards' },
//   ],
// };

// const NAV_LINKS = ['Home', 'About', 'Services', 'Journey', 'Contact'];

// function smoothScrollTo(id) {
//   const el = document.getElementById(id);
//   if (el) el.scrollIntoView({ behavior: 'smooth' });
// }

// export default function Navbar() {
//   const [scrolled,        setScrolled]        = useState(false);
//   const [mobileOpen,      setMobileOpen]      = useState(false);
//   const [dropOpen,        setDropOpen]        = useState(false);
//   const [activeCategory,  setActiveCategory]  = useState('Featured Products');
//   const [mobileExpanded,  setMobileExpanded]  = useState({});
//   const dropRef  = useRef(null);
//   const timerRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

//     useEffect(() => {
//     const handleResize = () => {
//         setIsMobile(window.innerWidth < 1024);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//     }, []);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   /* Close dropdown on outside click */
//   useEffect(() => {
//     const handler = (e) => {
//       if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
//     };
//     document.addEventListener('mousedown', handler);
//     return () => document.removeEventListener('mousedown', handler);
//   }, []);

//   const openDrop  = () => { clearTimeout(timerRef.current); setDropOpen(true); };
//   const closeDrop = () => { timerRef.current = setTimeout(() => setDropOpen(false), 120); };

//   const handleNavClick = (link) => {
//     setMobileOpen(false);
//     setDropOpen(false);
//     smoothScrollTo(link === 'Services' ? 'services' : link.toLowerCase());
//   };

//   const toggleMobileCat = (cat) =>
//     setMobileExpanded(prev => ({ ...prev, [cat]: !prev[cat] }));

//   /* ── NAV HEIGHT ── */
//   const NAV_H = 72;

//   /* ── SHARED STYLES ── */
//   const fontSans = "'DM Sans','Inter',system-ui,sans-serif";
//   const fontSerif = "'Playfair Display',Georgia,serif";
//   const blue900  = '#0f2356';
//   const blue700  = '#1e3a8a';
//   const blue500  = '#2563eb';
//   const sky500   = '#0ea5e9';
//   const slate600 = '#475569';
//   const slate400 = '#94a3b8';
//   const slate100 = '#f1f5f9';
//   const white    = '#ffffff';

//   /* ── LOGO ── */
//   const Logo = () => (
//     <button
//       onClick={() => smoothScrollTo('home')}
//       style={{ background: 'none', border: 'none', cursor: 'pointer',
//         display: 'flex', alignItems: 'center', gap: 12, padding: 0,
//         flexShrink: 0, textDecoration: 'none' }}
//     >
//       {/* Real logo image */}
//       <img
//         src="/Screenshot 2026-04-13 151403.png"
//         alt="Smart Scientific"
//         style={{ height: 44, width: 'auto', objectFit: 'contain' }}
//         onError={e => {
//           /* Fallback if image not found */
//           e.target.style.display = 'none';
//           e.target.nextSibling.style.display = 'flex';
//         }}
//       />
//       {/* Fallback icon — hidden until image fails */}
//       <div style={{
//         display: 'none', width: 44, height: 44, flexShrink: 0,
//         background: `linear-gradient(135deg,${blue700},${sky500})`,
//         borderRadius: 10, alignItems: 'center', justifyContent: 'center',
//       }}>
//         <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
//         </svg>
//       </div>
//       <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
//         <span style={{ fontFamily: fontSerif, fontSize: 19, fontWeight: 700,
//           color: blue700, letterSpacing: '-0.02em' }}>
//           SmartLab<span style={{ color: sky500 }}>Tech</span>
//         </span>
//         <span style={{ fontFamily: fontSans, fontSize: 10, fontWeight: 500,
//           color: slate400, letterSpacing: '0.12em', textTransform: 'uppercase',
//           marginTop: 1 }}>
//           Scientifically Yours
//         </span>
//       </div>
//     </button>
//   );

//   /* ── NAV LINK BUTTON ── */
//   const NavBtn = ({ label, onClick, active }) => (
//     <button
//       onClick={onClick}
//       style={{
//         background: 'none', border: 'none', cursor: 'pointer',
//         padding: '8px 16px', fontSize: 14, fontWeight: 500,
//         color: active ? blue700 : slate600,
//         borderRadius: 8, fontFamily: fontSans,
//         transition: 'all 0.18s', display: 'flex', alignItems: 'center', gap: 4,
//         whiteSpace: 'nowrap',
//         borderBottom: active ? `2px solid ${sky500}` : '2px solid transparent',
//       }}
//       onMouseEnter={e => {
//         e.currentTarget.style.color = blue700;
//         e.currentTarget.style.background = '#eef2ff';
//       }}
//       onMouseLeave={e => {
//         e.currentTarget.style.color = active ? blue700 : slate600;
//         e.currentTarget.style.background = 'none';
//       }}
//     >
//       {label}
//     </button>
//   );

//   return (
//     <>
//       {/* ═══════════ TOP BAR ═══════════ */}
//       <div style={{
//         background: blue900, height: 36,
//         display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
//         padding: '0 clamp(16px,5vw,80px)', gap: 24,
//         position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1001,
//       }}>
//         {[
//           { Icon: Phone, text: '+91 98765 43210' },
//           { Icon: Mail,  text: 'info@smartlabtech.in' },
//         ].map(({ Icon, text }) => (
//           <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//             <Icon size={12} color="rgba(255,255,255,0.55)" />
//             <span style={{ fontFamily: fontSans, fontSize: 12,
//               color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>{text}</span>
//           </div>
//         ))}
//         <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.15)' }} />
//         <span style={{ fontFamily: fontSans, fontSize: 12,
//           color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}>
//           Est. 2001 · ISO 9001:2015 Certified
//         </span>
//       </div>

//       {/* ═══════════ MAIN NAVBAR ═══════════ */}
//       <motion.nav
//         initial={{ y: -NAV_H, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.55, ease: 'easeOut' }}
//         style={{
//           position: 'fixed', top: 36, left: 0, right: 0, zIndex: 1000,
//           height: NAV_H,
//           background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
//           backdropFilter: 'blur(20px)',
//           borderBottom: `1px solid ${scrolled ? '#e2e8f0' : 'rgba(226,232,240,0.5)'}`,
//           boxShadow: scrolled ? '0 4px 24px rgba(15,35,86,0.10)' : 'none',
//           transition: 'all 0.3s ease',
//           display: 'flex', alignItems: 'center',
//           padding: '0 clamp(16px,5vw,80px)',
//           gap: 0,
//         }}
//       >
//         {/* ── Logo ── */}
//         <Logo />


//         {/* ── Divider ── */}
//         <div style={{ width: 1, height: 32, background: '#e2e8f0', margin: '0 28px', flexShrink: 0 }} />

//         {/* ── Desktop nav links (immediately after logo) ── */}
//         <div  style={{ display: window.innerWidth > 1024 ? 'flex' : 'none', alignItems: 'center',  gap: 16 }}>
//           {NAV_LINKS.map(link =>
//             link === 'Services' ? (
//               /* Services dropdown trigger */
//               <div key={link} ref={dropRef}
//                 style={{ position: 'relative' }}
//                 onMouseEnter={openDrop}
//                 onMouseLeave={closeDrop}
//               >
//                 <button
//                   onClick={() => setDropOpen(o => !o)}
//                   style={{
//                     background: dropOpen ? '#eef2ff' : 'none',
//                     border: 'none', cursor: 'pointer',
//                     padding: '8px 16px', fontSize: 14, fontWeight: 500,
//                     color: dropOpen ? blue700 : slate600,
//                     borderRadius: 8, fontFamily: fontSans,
//                     transition: 'all 0.18s',
//                     display: 'flex', alignItems: 'center', gap: 5,
//                     borderBottom: dropOpen ? `2px solid ${sky500}` : '2px solid transparent',
//                     whiteSpace: 'nowrap',
//                   }}
//                   onMouseEnter={e => {
//                     e.currentTarget.style.color = blue700;
//                     e.currentTarget.style.background = '#eef2ff';
//                   }}
//                   onMouseLeave={e => {
//                     if (!dropOpen) {
//                       e.currentTarget.style.color = slate600;
//                       e.currentTarget.style.background = 'none';
//                     }
//                   }}
//                 >
//                   Services
//                   <motion.span animate={{ rotate: dropOpen ? 180 : 0 }} transition={{ duration: 0.22 }}
//                     style={{ display: 'flex', alignItems: 'center' }}>
//                     <ChevronDown size={14} />
//                   </motion.span>
//                 </button>

//                 {/* ── MEGA DROPDOWN ── */}
//                 <AnimatePresence>
//                   {dropOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10, scaleY: 0.97 }}
//                       animate={{ opacity: 1, y: 0, scaleY: 1 }}
//                       exit={{ opacity: 0, y: 6, scaleY: 0.97 }}
//                       transition={{ duration: 0.18, ease: 'easeOut' }}
//                       onMouseEnter={openDrop}
//                       onMouseLeave={closeDrop}
//                       style={{
//                         position: 'absolute',
//                         top: 'calc(100% + 10px)',
//                         left: 0,
//                         width: 640,
//                         background: white,
//                         borderRadius: 16,
//                         boxShadow: '0 20px 60px rgba(15,35,86,0.18), 0 4px 16px rgba(0,0,0,0.06)',
//                         border: '1px solid #e2e8f0',
//                         overflow: 'hidden',
//                         transformOrigin: 'top left',
//                       }}
//                     >
//                       {/* Dropdown header */}
//                       <div style={{
//                         background: `linear-gradient(135deg,${blue900},${blue500})`,
//                         padding: '14px 20px',
//                         display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//                       }}>
//                         <div>
//                           <div style={{ fontSize: 13, fontWeight: 700, color: white,
//                             fontFamily: fontSans, letterSpacing: '0.02em' }}>
//                             Product Catalogue
//                           </div>
//                           <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)',
//                             marginTop: 2, fontFamily: fontSans }}>
//                             Scientific &amp; laboratory instruments
//                           </div>
//                         </div>
//                         <button
//                           onClick={() => { setDropOpen(false); smoothScrollTo('services'); }}
//                           style={{
//                             background: 'rgba(255,255,255,0.15)',
//                             border: '1px solid rgba(255,255,255,0.25)',
//                             color: white, padding: '6px 14px', borderRadius: 6,
//                             fontSize: 12, fontWeight: 600, cursor: 'pointer',
//                             fontFamily: fontSans, display: 'flex', alignItems: 'center', gap: 5,
//                             transition: 'background 0.2s',
//                           }}
//                           onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.28)'}
//                           onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
//                         >
//                           View All <ArrowRight size={12} />
//                         </button>
//                       </div>

//                       {/* Two-column body */}
//                       <div style={{ display: 'flex', minHeight: 240 }}>
//                         {/* LEFT: Category tabs */}
//                         <div style={{
//                           width: 196, flexShrink: 0,
//                           background: '#f8faff',
//                           borderRight: '1px solid #eef2f7',
//                           padding: '10px 8px',
//                         }}>
//                           {Object.keys(CATEGORIES).map(cat => {
//                             const isActive = activeCategory === cat;
//                             return (
//                               <button key={cat}
//                                 onClick={() => setActiveCategory(cat)}
//                                 onMouseEnter={() => setActiveCategory(cat)}
//                                 style={{
//                                   display: 'flex', alignItems: 'center',
//                                   justifyContent: 'space-between',
//                                   width: '100%', padding: '10px 14px',
//                                   borderRadius: 10, marginBottom: 4,
//                                   background: isActive
//                                     ? `linear-gradient(135deg,${blue700},${blue500})`
//                                     : 'transparent',
//                                   color: isActive ? white : slate600,
//                                   border: 'none', cursor: 'pointer',
//                                   fontSize: 13, fontWeight: isActive ? 600 : 500,
//                                   fontFamily: fontSans,
//                                   transition: 'all 0.18s',
//                                   textAlign: 'left',
//                                   boxShadow: isActive ? '0 2px 8px rgba(30,58,138,0.22)' : 'none',
//                                 }}
//                                 onMouseLeave={e => {
//                                   if (!isActive) {
//                                     e.currentTarget.style.background = 'transparent';
//                                     e.currentTarget.style.color = slate600;
//                                   }
//                                 }}
//                               >
//                                 <span>{cat}</span>
//                                 <ChevronRight size={13}
//                                   style={{ opacity: isActive ? 1 : 0.35, flexShrink: 0 }} />
//                               </button>
//                             );
//                           })}

//                           {/* Bottom label */}
//                           <div style={{
//                             marginTop: 16, padding: '8px 14px',
//                             background: '#eef2ff', borderRadius: 8,
//                             border: '1px solid #c7d2fe',
//                           }}>
//                             <div style={{ fontSize: 10, fontWeight: 700, color: '#4338ca',
//                               fontFamily: fontSans, letterSpacing: '0.1em',
//                               textTransform: 'uppercase', marginBottom: 3 }}>
//                               Since 2001
//                             </div>
//                             <div style={{ fontSize: 11, color: '#4f46e5',
//                               fontFamily: fontSans, lineHeight: 1.4 }}>
//                               ISO 9001 certified lab instruments
//                             </div>
//                           </div>
//                         </div>

//                         {/* RIGHT: Sub-category items */}
//                         <div style={{ flex: 1, padding: '12px 10px', overflowY: 'auto' }}>
//                           <AnimatePresence mode="wait">
//                             <motion.div
//                               key={activeCategory}
//                               initial={{ opacity: 0, x: 10 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               exit={{ opacity: 0, x: -8 }}
//                               transition={{ duration: 0.15 }}
//                             >
//                               {CATEGORIES[activeCategory].map((item, i) => (
//                                 <button key={item.name}
//                                   style={{
//                                     display: 'flex', alignItems: 'flex-start', gap: 11,
//                                     width: '100%', padding: '9px 12px', borderRadius: 10,
//                                     background: 'none', border: 'none', cursor: 'pointer',
//                                     transition: 'background 0.15s', textAlign: 'left',
//                                     marginBottom: 2,
//                                   }}
//                                   onMouseEnter={e => e.currentTarget.style.background = '#f0f7ff'}
//                                   onMouseLeave={e => e.currentTarget.style.background = 'none'}
//                                 >
//                                   {/* Icon pill */}
//                                   <div style={{
//                                     width: 36, height: 36, flexShrink: 0,
//                                     background: '#eef2ff', borderRadius: 8,
//                                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                                     fontSize: 18,
//                                   }}>
//                                     {item.icon}
//                                   </div>
//                                   <div style={{ paddingTop: 2 }}>
//                                     <div style={{
//                                       fontSize: 13, fontWeight: 600, color: blue700,
//                                       fontFamily: fontSans, lineHeight: 1.3,
//                                     }}>
//                                       {item.name}
//                                     </div>
//                                     <div style={{
//                                       fontSize: 11.5, color: slate600, marginTop: 2,
//                                       fontFamily: fontSans, lineHeight: 1.45,
//                                     }}>
//                                       {item.desc}
//                                     </div>
//                                   </div>
//                                   <ChevronRight size={13}
//                                     style={{ marginLeft: 'auto', marginTop: 4,
//                                       color: slate400, flexShrink: 0 }} />
//                                 </button>
//                               ))}
//                             </motion.div>
//                           </AnimatePresence>
//                         </div>
//                       </div>

//                       {/* Footer strip */}
//                       <div style={{
//                         background: '#f8faff', borderTop: '1px solid #eef2f7',
//                         padding: '10px 20px', display: 'flex', alignItems: 'center',
//                         justifyContent: 'space-between',
//                       }}>
//                         <span style={{ fontSize: 12, color: slate400, fontFamily: fontSans }}>
//                           Need help choosing the right instrument?
//                         </span>
//                         <button
//                           onClick={() => { setDropOpen(false); smoothScrollTo('contact'); }}
//                           style={{
//                             background: 'none', border: `1px solid ${blue500}`,
//                             color: blue500, padding: '5px 14px', borderRadius: 6,
//                             fontSize: 12, fontWeight: 600, cursor: 'pointer',
//                             fontFamily: fontSans, transition: 'all 0.18s',
//                           }}
//                           onMouseEnter={e => {
//                             e.currentTarget.style.background = blue500;
//                             e.currentTarget.style.color = white;
//                           }}
//                           onMouseLeave={e => {
//                             e.currentTarget.style.background = 'none';
//                             e.currentTarget.style.color = blue500;
//                           }}
//                         >
//                           Contact Expert
//                         </button>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ) : (
//               <NavBtn key={link} label={link} onClick={() => handleNavClick(link)} />
//             )
//           )}
//         </div>

//         {/* Spacer between nav and CTA */}
//         <div style={{ flex: 1 }} className="hidden lg:block" />

//         {/* ── CTA button ── */}
//         <button
//           className="hidden lg:flex"
//           onClick={() => smoothScrollTo('contact')}
//           style={{
//             background: `linear-gradient(135deg,${blue700},${sky500})`,
//             border: 'none', color: white,
//             padding: '10px 22px', borderRadius: 8,
//             fontSize: 14, fontWeight: 600, cursor: 'pointer',
//             fontFamily: fontSans, letterSpacing: '0.01em',
//             boxShadow: '0 4px 16px rgba(30,58,138,0.28)',
//             transition: 'all 0.22s',
//             display: 'flex', alignItems: 'center', gap: 7,
//             whiteSpace: 'nowrap', flexShrink: 0,
//           }}
//           onMouseEnter={e => {
//             e.currentTarget.style.transform = 'translateY(-2px)';
//             e.currentTarget.style.boxShadow = '0 8px 24px rgba(30,58,138,0.38)';
//           }}
//           onMouseLeave={e => {
//             e.currentTarget.style.transform = 'none';
//             e.currentTarget.style.boxShadow = '0 4px 16px rgba(30,58,138,0.28)';
//           }}
//         >
//           Get a Quote <ArrowRight size={14} />
//         </button>
// {/* 
//         <button
//             className="lg:hidden"
//             onClick={() => setMobileOpen(true)}
//             >
//             <Menu size={24} />
//         </button> */}

//         {/* ── Hamburger (mobile) ── */}
//         <button
//           className="lg:hidden"
//           onClick={() => setMobileOpen(o => !o)}
//           style={{
//             background: mobileOpen ? '#eef2ff' : 'none', border: 'none',
//             cursor: 'pointer', padding: 8, borderRadius: 8,
//             color: blue700, transition: 'background 0.2s',
//           }}
//         >
//           {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </motion.nav>

//       {/* ═══════════ MOBILE DRAWER ═══════════ */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <>
//             <motion.div 
//               className="fixed top-[108px] right-0 w-[300px] h-screen bg-white z-[999]"
//               key="mob-overlay"
//               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//               onClick={() => setMobileOpen(false)}
//               style={{
//                 position: 'fixed', inset: 0, top: 36 + NAV_H,
//                 background: 'rgba(15,23,42,0.45)', backdropFilter: 'blur(4px)',
//                 zIndex: 900,
//               }}
//             />
//             <motion.div
//               key="mob-drawer"
//               initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
//               transition={{ type: 'tween', duration: 0.28, ease: [0.25,0.46,0.45,0.94] }}
//               style={{
//                 position: 'fixed', top: 36 + NAV_H, right: 0, bottom: 0,
//                 width: 310, background: white, zIndex: 950,
//                 overflowY: 'auto', boxShadow: '-8px 0 32px rgba(15,35,86,0.15)',
//               }}
//             >
//               {/* Links */}
//               <div className="hidden lg:flex items-center gap-4 flex-1" style={{ padding: '8px 8px 0' }}>
//                 {NAV_LINKS.map(link => (
//                   link === 'Services' ? (
//                     <div key={link}>
//                       <button
//                         onClick={() => toggleMobileCat('services-top')}
//                         style={{
//                           display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//                           width: '100%', padding: '14px 20px',
//                           background: 'none', border: 'none',
//                           borderBottom: '1px solid #f1f5f9',
//                           cursor: 'pointer', fontSize: 15,
//                           color: blue700, fontFamily: fontSans,
//                           fontWeight: 600, textAlign: 'left',
//                         }}
//                       >
//                         Services
//                         <motion.span
//                           animate={{ rotate: mobileExpanded['services-top'] ? 180 : 0 }}
//                           transition={{ duration: 0.2 }}
//                           style={{ display: 'flex', alignItems: 'center' }}
//                         >
//                           <ChevronDown size={16} color={slate400} />
//                         </motion.span>
//                       </button>
//                       <AnimatePresence>
//                         {mobileExpanded['services-top'] && (
//                           <motion.div
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: 'auto', opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{ duration: 0.22 }}
//                             style={{ overflow: 'hidden' }}
//                           >
//                             {Object.entries(CATEGORIES).map(([cat, items]) => (
//                               <div key={cat}>
//                                 <button
//                                   onClick={() => toggleMobileCat(cat)}
//                                   style={{
//                                     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//                                     width: '100%', padding: '10px 24px',
//                                     background: '#f8faff', border: 'none', borderBottom: '1px solid #eef2f7',
//                                     cursor: 'pointer', fontSize: 12,
//                                     color: blue500, fontFamily: fontSans,
//                                     fontWeight: 700, letterSpacing: '0.08em',
//                                     textTransform: 'uppercase', textAlign: 'left',
//                                   }}
//                                 >
//                                   {cat}
//                                   <ChevronDown size={13} color={sky500}
//                                     style={{ transform: mobileExpanded[cat] ? 'rotate(180deg)' : 'none',
//                                       transition: 'transform 0.2s' }} />
//                                 </button>
//                                 <AnimatePresence>
//                                   {mobileExpanded[cat] && (
//                                     <motion.div
//                                       initial={{ height: 0, opacity: 0 }}
//                                       animate={{ height: 'auto', opacity: 1 }}
//                                       exit={{ height: 0, opacity: 0 }}
//                                       transition={{ duration: 0.18 }}
//                                       style={{ overflow: 'hidden' }}
//                                     >
//                                       {items.map(item => (
//                                         <button key={item.name}
//                                           style={{
//                                             display: 'flex', alignItems: 'center', gap: 10,
//                                             width: '100%', padding: '10px 32px',
//                                             background: 'none', border: 'none',
//                                             borderBottom: '1px solid #f8faff',
//                                             cursor: 'pointer', textAlign: 'left',
//                                           }}
//                                           onMouseEnter={e => e.currentTarget.style.background = '#f0f7ff'}
//                                           onMouseLeave={e => e.currentTarget.style.background = 'none'}
//                                         >
//                                           <span style={{ fontSize: 18 }}>{item.icon}</span>
//                                           <div>
//                                             <div style={{ fontSize: 13, fontWeight: 600,
//                                               color: blue700, fontFamily: fontSans }}>{item.name}</div>
//                                             <div style={{ fontSize: 11, color: slate400,
//                                               fontFamily: fontSans, marginTop: 1 }}>{item.desc}</div>
//                                           </div>
//                                         </button>
//                                       ))}
//                                     </motion.div>
//                                   )}
//                                 </AnimatePresence>
//                               </div>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : (
//                     <button key={link}
//                       onClick={() => handleNavClick(link)}
//                       style={{
//                         display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//                         width: '100%', padding: '14px 20px',
//                         background: 'none', border: 'none',
//                         borderBottom: '1px solid #f1f5f9',
//                         cursor: 'pointer', fontSize: 15,
//                         color: '#1e293b', fontFamily: fontSans,
//                         fontWeight: 500, transition: 'all 0.2s', textAlign: 'left',
//                       }}
//                       onMouseEnter={e => { e.currentTarget.style.background = '#f0f7ff'; e.currentTarget.style.color = blue700; }}
//                       onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#1e293b'; }}
//                     >
//                       {link}
//                       <ChevronRight size={15} color={slate400} />
//                     </button>
//                   )
//                 ))}
//               </div>

//               {/* Mobile CTA */}
//               <div style={{ padding: '16px 20px' }}>
//                 <button
//                   onClick={() => { setMobileOpen(false); smoothScrollTo('contact'); }}
//                   style={{
//                     width: '100%',
//                     background: `linear-gradient(135deg,${blue700},${sky500})`,
//                     border: 'none', color: white,
//                     padding: '14px 20px', borderRadius: 10,
//                     fontSize: 15, fontWeight: 600, cursor: 'pointer',
//                     fontFamily: fontSans, letterSpacing: '0.01em',
//                   }}
//                 >
//                   Get a Quote
//                 </button>
//               </div>

//               {/* Contact info */}
//               <div style={{
//                 margin: '0 20px 24px', padding: '14px 16px',
//                 background: '#f8faff', borderRadius: 10, border: '1px solid #e2e8f0',
//               }}>
//                 {[
//                   { Icon: Phone, text: '+91 98765 43210' },
//                   { Icon: Mail,  text: 'info@smartlabtech.in' },
//                 ].map(({ Icon, text }) => (
//                   <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8,
//                     marginBottom: 8, lastChild: { marginBottom: 0 } }}>
//                     <Icon size={14} color={sky500} />
//                     <span style={{ fontSize: 13, color: slate600, fontFamily: fontSans }}>{text}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* ── Spacer so page content starts below top-bar + nav ── */}
//       <div style={{ height: 36 + NAV_H }} />
//     </>
//   );
// }


import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ChevronRight, ArrowRight, Phone, Mail } from 'lucide-react';

/* ── PRODUCT DATA ── */
export const CATEGORIES = {
  'Featured Products': [
    { name: 'Microscopes',     icon: '🔬', desc: 'Advanced optical & electron microscopes' },
    { name: 'Spectrometers',   icon: '📡', desc: 'UV-Vis, IR & mass spectrometry systems' },
    { name: 'Centrifuges',     icon: '⚗️', desc: 'Micro, refrigerated & ultracentrifuges' },
    { name: 'Chromatography',  icon: '🧫', desc: 'HPLC, GC and TLC systems' },
    { name: 'Electrophoresis', icon: '⚡', desc: 'Gel electrophoresis & blotting units' },
  ],
  'Marketed Products': [
    { name: 'Precision Balances', icon: '⚖️', desc: 'Analytical & top-loading balances' },
    { name: 'Incubators',         icon: '🌡️', desc: 'CO₂, BOD & shaking incubators' },
    { name: 'pH Meters',          icon: '🧪', desc: 'Benchtop & portable pH solutions' },
    { name: 'Autoclaves',         icon: '🔒', desc: 'Steam sterilization systems' },
    { name: 'Water Purification', icon: '💧', desc: 'Type I, II & III water systems' },
  ],
  'Smart Products': [
    { name: 'AI Lab Systems',    icon: '🤖', desc: 'AI-powered analytical platforms' },
    { name: 'Smart Sensors',     icon: '📶', desc: 'IoT-enabled lab monitoring sensors' },
    { name: 'Automation Tools',  icon: '🦾', desc: 'Liquid handling & robotic platforms' },
    { name: 'Lab Management',    icon: '📊', desc: 'LIMS & digital workflow solutions' },
    { name: 'Remote Monitoring', icon: '🖥️', desc: 'Cloud-connected lab dashboards' },
  ],
};

const NAV_LINKS = ['Home', 'About', 'Services', 'Journey', 'Contact'];

function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled,        setScrolled]        = useState(false);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [dropOpen,        setDropOpen]        = useState(false);
  const [activeCategory,  setActiveCategory]  = useState('Featured Products');
  const [mobileExpanded,  setMobileExpanded]  = useState({});
  const dropRef  = useRef(null);
  const timerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const openDrop  = () => { clearTimeout(timerRef.current); setDropOpen(true); };
  const closeDrop = () => { timerRef.current = setTimeout(() => setDropOpen(false), 120); };

  const handleNavClick = (link) => {
    setMobileOpen(false);
    setDropOpen(false);
    smoothScrollTo(link === 'Services' ? 'services' : link.toLowerCase());
  };

  const toggleMobileCat = (cat) =>
    setMobileExpanded(prev => ({ ...prev, [cat]: !prev[cat] }));

  /* ── NAV HEIGHT (INCREASED) ── */
  const NAV_H = 88; // Increased from 72

  /* ── SHARED STYLES ── */
  const fontSans = "'DM Sans','Inter',system-ui,sans-serif";
  const fontSerif = "'Playfair Display',Georgia,serif";
  const blue900  = '#0f2356';
  const blue700  = '#1e3a8a';
  const blue500  = '#2563eb';
  const sky500   = '#0ea5e9';
  const slate600 = '#475569';
  const slate400 = '#94a3b8';
  const slate100 = '#f1f5f9';
  const white    = '#ffffff';

  /* ── LOGO (INCREASED SIZE) ── */
  const Logo = () => (
    <button
      onClick={() => smoothScrollTo('home')}
      style={{ background: 'none', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: 14, padding: 0,
        flexShrink: 0, textDecoration: 'none' }}
    >
      {/* Real logo image */}
      <img
        src="/Screenshot 2026-04-13 151403.png"
        alt="Smart Scientific"
        style={{ height: 52, width: 'auto', objectFit: 'contain' }} // Increased from 44
        onError={e => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      {/* Fallback icon */}
      <div style={{
        display: 'none', width: 52, height: 52, flexShrink: 0, // Increased from 44
        background: `linear-gradient(135deg,${blue700},${sky500})`,
        borderRadius: 12, alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>
        </svg>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
        <span style={{ fontFamily: fontSerif, fontSize: 22, fontWeight: 700, // Increased from 19
          color: blue700, letterSpacing: '-0.02em' }}>
          SmartLab<span style={{ color: sky500 }}>Tech</span>
        </span>
        <span style={{ fontFamily: fontSans, fontSize: 11, fontWeight: 500, // Increased from 10
          color: slate400, letterSpacing: '0.12em', textTransform: 'uppercase',
          marginTop: 2 }}>
          Scientifically Yours
        </span>
      </div>
    </button>
  );

  /* ── NAV LINK BUTTON (INCREASED SIZE) ── */
  const NavBtn = ({ label, onClick, active }) => (
    <button
      onClick={onClick}
      style={{
        background: 'none', border: 'none', cursor: 'pointer',
        padding: '10px 20px', fontSize: 15, fontWeight: 600, // Increased padding and font
        color: active ? blue700 : slate600,
        borderRadius: 10, fontFamily: fontSans,
        transition: 'all 0.18s', display: 'flex', alignItems: 'center', gap: 6,
        whiteSpace: 'nowrap',
        borderBottom: active ? `3px solid ${sky500}` : '3px solid transparent', // Thicker border
      }}
      onMouseEnter={e => {
        e.currentTarget.style.color = blue700;
        e.currentTarget.style.background = '#eef2ff';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = active ? blue700 : slate600;
        e.currentTarget.style.background = 'none';
      }}
    >
      {label}
    </button>
  );

  return (
    <>
      {/* ═══════════ TOP BAR (INCREASED SIZE) ═══════════ */}
      <div style={{
        background: blue900, height: 42, // Increased from 36
        display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
        padding: '0 clamp(16px,5vw,80px)', gap: 28, // Increased gap
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1001,
      }}>
        {[
          { Icon: Phone, text: '+91 98765 43210' },
          { Icon: Mail,  text: 'info@smartlabtech.in' },
        ].map(({ Icon, text }) => (
          <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon size={14} color="rgba(255,255,255,0.55)" /> {/* Increased icon size */}
            <span style={{ fontFamily: fontSans, fontSize: 13, // Increased from 12
              color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{text}</span>
          </div>
        ))}
        <div style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.15)' }} /> {/* Increased height */}
        <span style={{ fontFamily: fontSans, fontSize: 13, // Increased from 12
          color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
          Est. 2001 · ISO 9001:2015 Certified
        </span>
      </div>

      {/* ═══════════ MAIN NAVBAR ═══════════ */}
      <motion.nav
        initial={{ y: -NAV_H, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 42, left: 0, right: 0, zIndex: 1000, // Adjusted top position
          height: NAV_H,
          background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${scrolled ? '#e2e8f0' : 'rgba(226,232,240,0.5)'}`,
          boxShadow: scrolled ? '0 4px 24px rgba(15,35,86,0.10)' : 'none',
          transition: 'all 0.3s ease',
          display: 'flex', alignItems: 'center',
          padding: '0 clamp(16px,5vw,80px)',
          gap: 0,
        }}
      >
        {/* ── Logo ── */}
        <Logo />

        {/* ── Divider ── */}
        <div style={{ width: 1, height: 40, background: '#e2e8f0', margin: '0 32px', flexShrink: 0 }} /> {/* Increased height and margin */}

        {/* ── Desktop nav links ── */}
        <div style={{ display: window.innerWidth > 1024 ? 'flex' : 'none', alignItems: 'center', gap: 20 }}> {/* Increased gap */}
          {NAV_LINKS.map(link =>
            link === 'Services' ? (
              /* Services dropdown trigger */
              <div key={link} ref={dropRef}
                style={{ position: 'relative' }}
                onMouseEnter={openDrop}
                onMouseLeave={closeDrop}
              >
                <button
                  onClick={() => setDropOpen(o => !o)}
                  style={{
                    background: dropOpen ? '#eef2ff' : 'none',
                    border: 'none', cursor: 'pointer',
                    padding: '10px 20px', fontSize: 15, fontWeight: 600, // Increased
                    color: dropOpen ? blue700 : slate600,
                    borderRadius: 10, fontFamily: fontSans,
                    transition: 'all 0.18s',
                    display: 'flex', alignItems: 'center', gap: 6,
                    borderBottom: dropOpen ? `3px solid ${sky500}` : '3px solid transparent', // Thicker
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = blue700;
                    e.currentTarget.style.background = '#eef2ff';
                  }}
                  onMouseLeave={e => {
                    if (!dropOpen) {
                      e.currentTarget.style.color = slate600;
                      e.currentTarget.style.background = 'none';
                    }
                  }}
                >
                  Services
                  <motion.span animate={{ rotate: dropOpen ? 180 : 0 }} transition={{ duration: 0.22 }}
                    style={{ display: 'flex', alignItems: 'center' }}>
                    <ChevronDown size={16} /> {/* Increased icon size */}
                  </motion.span>
                </button>

                {/* ── MEGA DROPDOWN (INCREASED SIZE) ── */}
                <AnimatePresence>
                  {dropOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scaleY: 0.97 }}
                      animate={{ opacity: 1, y: 0, scaleY: 1 }}
                      exit={{ opacity: 0, y: 6, scaleY: 0.97 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      onMouseEnter={openDrop}
                      onMouseLeave={closeDrop}
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 12px)',
                        left: 0,
                        width: 720, // Increased from 640
                        background: white,
                        borderRadius: 20, // Increased
                        boxShadow: '0 20px 60px rgba(15,35,86,0.18), 0 4px 16px rgba(0,0,0,0.06)',
                        border: '1px solid #e2e8f0',
                        overflow: 'hidden',
                        transformOrigin: 'top left',
                      }}
                    >
                      {/* Dropdown header */}
                      <div style={{
                        background: `linear-gradient(135deg,${blue900},${blue500})`,
                        padding: '18px 24px', // Increased padding
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      }}>
                        <div>
                          <div style={{ fontSize: 15, fontWeight: 700, color: white, // Increased
                            fontFamily: fontSans, letterSpacing: '0.02em' }}>
                            Product Catalogue
                          </div>
                          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', // Increased
                            marginTop: 3, fontFamily: fontSans }}>
                            Scientific &amp; laboratory instruments
                          </div>
                        </div>
                        <button
                          onClick={() => { setDropOpen(false); smoothScrollTo('services'); }}
                          style={{
                            background: 'rgba(255,255,255,0.15)',
                            border: '1px solid rgba(255,255,255,0.25)',
                            color: white, padding: '8px 18px', borderRadius: 8, // Increased
                            fontSize: 13, fontWeight: 600, cursor: 'pointer', // Increased
                            fontFamily: fontSans, display: 'flex', alignItems: 'center', gap: 6,
                            transition: 'background 0.2s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.28)'}
                          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                        >
                          View All <ArrowRight size={14} />
                        </button>
                      </div>

                      {/* Two-column body */}
                      <div style={{ display: 'flex', minHeight: 280 }}> {/* Increased minHeight */}
                        {/* LEFT: Category tabs */}
                        <div style={{
                          width: 220, flexShrink: 0, // Increased from 196
                          background: '#f8faff',
                          borderRight: '1px solid #eef2f7',
                          padding: '14px 12px', // Increased padding
                        }}>
                          {Object.keys(CATEGORIES).map(cat => {
                            const isActive = activeCategory === cat;
                            return (
                              <button key={cat}
                                onClick={() => setActiveCategory(cat)}
                                onMouseEnter={() => setActiveCategory(cat)}
                                style={{
                                  display: 'flex', alignItems: 'center',
                                  justifyContent: 'space-between',
                                  width: '100%', padding: '12px 16px', // Increased padding
                                  borderRadius: 12, marginBottom: 6, // Increased
                                  background: isActive
                                    ? `linear-gradient(135deg,${blue700},${blue500})`
                                    : 'transparent',
                                  color: isActive ? white : slate600,
                                  border: 'none', cursor: 'pointer',
                                  fontSize: 14, fontWeight: isActive ? 600 : 500, // Increased
                                  fontFamily: fontSans,
                                  transition: 'all 0.18s',
                                  textAlign: 'left',
                                  boxShadow: isActive ? '0 2px 8px rgba(30,58,138,0.22)' : 'none',
                                }}
                                onMouseLeave={e => {
                                  if (!isActive) {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = slate600;
                                  }
                                }}
                              >
                                <span>{cat}</span>
                                <ChevronRight size={15} // Increased
                                  style={{ opacity: isActive ? 1 : 0.35, flexShrink: 0 }} />
                              </button>
                            );
                          })}

                          {/* Bottom label */}
                          <div style={{
                            marginTop: 20, padding: '10px 16px', // Increased
                            background: '#eef2ff', borderRadius: 10,
                            border: '1px solid #c7d2fe',
                          }}>
                            <div style={{ fontSize: 11, fontWeight: 700, color: '#4338ca', // Increased
                              fontFamily: fontSans, letterSpacing: '0.1em',
                              textTransform: 'uppercase', marginBottom: 4 }}>
                              Since 2001
                            </div>
                            <div style={{ fontSize: 12, color: '#4f46e5', // Increased
                              fontFamily: fontSans, lineHeight: 1.4 }}>
                              ISO 9001 certified lab instruments
                            </div>
                          </div>
                        </div>

                        {/* RIGHT: Sub-category items */}
                        <div style={{ flex: 1, padding: '14px 12px', overflowY: 'auto' }}> {/* Increased padding */}
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={activeCategory}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -8 }}
                              transition={{ duration: 0.15 }}
                            >
                              {CATEGORIES[activeCategory].map((item, i) => (
                                <button key={item.name}
                                  style={{
                                    display: 'flex', alignItems: 'flex-start', gap: 14,
                                    width: '100%', padding: '12px 14px', borderRadius: 12, // Increased padding
                                    background: 'none', border: 'none', cursor: 'pointer',
                                    transition: 'background 0.15s', textAlign: 'left',
                                    marginBottom: 4,
                                  }}
                                  onMouseEnter={e => e.currentTarget.style.background = '#f0f7ff'}
                                  onMouseLeave={e => e.currentTarget.style.background = 'none'}
                                >
                                  {/* Icon pill */}
                                  <div style={{
                                    width: 44, height: 44, flexShrink: 0, // Increased from 36
                                    background: '#eef2ff', borderRadius: 10,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: 22, // Increased
                                  }}>
                                    {item.icon}
                                  </div>
                                  <div style={{ paddingTop: 3 }}>
                                    <div style={{
                                      fontSize: 14, fontWeight: 600, color: blue700, // Increased
                                      fontFamily: fontSans, lineHeight: 1.3,
                                    }}>
                                      {item.name}
                                    </div>
                                    <div style={{
                                      fontSize: 12, color: slate600, marginTop: 3, // Increased
                                      fontFamily: fontSans, lineHeight: 1.45,
                                    }}>
                                      {item.desc}
                                    </div>
                                  </div>
                                  <ChevronRight size={15} // Increased
                                    style={{ marginLeft: 'auto', marginTop: 6,
                                      color: slate400, flexShrink: 0 }} />
                                </button>
                              ))}
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Footer strip */}
                      <div style={{
                        background: '#f8faff', borderTop: '1px solid #eef2f7',
                        padding: '14px 24px', display: 'flex', alignItems: 'center', // Increased padding
                        justifyContent: 'space-between',
                      }}>
                        <span style={{ fontSize: 13, color: slate400, fontFamily: fontSans }}> {/* Increased */}
                          Need help choosing the right instrument?
                        </span>
                        <button
                          onClick={() => { setDropOpen(false); smoothScrollTo('contact'); }}
                          style={{
                            background: 'none', border: `1.5px solid ${blue500}`, // Thicker border
                            color: blue500, padding: '7px 18px', borderRadius: 8, // Increased
                            fontSize: 13, fontWeight: 600, cursor: 'pointer', // Increased
                            fontFamily: fontSans, transition: 'all 0.18s',
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = blue500;
                            e.currentTarget.style.color = white;
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = 'none';
                            e.currentTarget.style.color = blue500;
                          }}
                        >
                          Contact Expert
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavBtn key={link} label={link} onClick={() => handleNavClick(link)} />
            )
          )}
        </div>

        {/* Spacer between nav and CTA */}
        <div style={{ flex: 1 }} className="hidden lg:block" />

        {/* ── CTA button (INCREASED SIZE) ── */}
        <button
          className="hidden lg:flex"
          onClick={() => smoothScrollTo('contact')}
          style={{
            background: `linear-gradient(135deg,${blue700},${sky500})`,
            border: 'none', color: white,
            padding: '12px 26px', borderRadius: 10, // Increased padding
            fontSize: 15, fontWeight: 600, cursor: 'pointer', // Increased
            fontFamily: fontSans, letterSpacing: '0.01em',
            boxShadow: '0 4px 16px rgba(30,58,138,0.28)',
            transition: 'all 0.22s',
            display: 'flex', alignItems: 'center', gap: 8,
            whiteSpace: 'nowrap', flexShrink: 0,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(30,58,138,0.38)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(30,58,138,0.28)';
          }}
        >
          Get a Quote <ArrowRight size={16} /> {/* Increased icon */}
        </button>

        {/* ── Hamburger (mobile) ── */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(o => !o)}
          style={{
            background: mobileOpen ? '#eef2ff' : 'none', border: 'none',
            cursor: 'pointer', padding: 10, borderRadius: 10, // Increased
            color: blue700, transition: 'background 0.2s',
          }}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />} {/* Increased icon size */}
        </button>
      </motion.nav>

      {/* ═══════════ MOBILE DRAWER ═══════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div 
              key="mob-overlay"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed', inset: 0, top: 42 + NAV_H, // Adjusted top
                background: 'rgba(15,23,42,0.45)', backdropFilter: 'blur(4px)',
                zIndex: 900,
              }}
            />
            <motion.div
              key="mob-drawer"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: [0.25,0.46,0.45,0.94] }}
              style={{
                position: 'fixed', top: 42 + NAV_H, right: 0, bottom: 0, // Adjusted top
                width: 340, background: white, zIndex: 950, // Increased width
                overflowY: 'auto', boxShadow: '-8px 0 32px rgba(15,35,86,0.15)',
              }}
            >
              {/* Links - Increased sizes for mobile */}
              <div style={{ padding: '12px 12px 0' }}>
                {NAV_LINKS.map(link => (
                  link === 'Services' ? (
                    <div key={link}>
                      <button
                        onClick={() => toggleMobileCat('services-top')}
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          width: '100%', padding: '16px 24px', // Increased padding
                          background: 'none', border: 'none',
                          borderBottom: '1px solid #f1f5f9',
                          cursor: 'pointer', fontSize: 16, // Increased
                          color: blue700, fontFamily: fontSans,
                          fontWeight: 600, textAlign: 'left',
                        }}
                      >
                        Services
                        <motion.span
                          animate={{ rotate: mobileExpanded['services-top'] ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ display: 'flex', alignItems: 'center' }}
                        >
                          <ChevronDown size={18} color={slate400} /> {/* Increased */}
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileExpanded['services-top'] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            style={{ overflow: 'hidden' }}
                          >
                            {Object.entries(CATEGORIES).map(([cat, items]) => (
                              <div key={cat}>
                                <button
                                  onClick={() => toggleMobileCat(cat)}
                                  style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    width: '100%', padding: '12px 28px', // Increased
                                    background: '#f8faff', border: 'none', borderBottom: '1px solid #eef2f7',
                                    cursor: 'pointer', fontSize: 13, // Increased
                                    color: blue500, fontFamily: fontSans,
                                    fontWeight: 700, letterSpacing: '0.08em',
                                    textTransform: 'uppercase', textAlign: 'left',
                                  }}
                                >
                                  {cat}
                                  <ChevronDown size={14} color={sky500} // Increased
                                    style={{ transform: mobileExpanded[cat] ? 'rotate(180deg)' : 'none',
                                      transition: 'transform 0.2s' }} />
                                </button>
                                <AnimatePresence>
                                  {mobileExpanded[cat] && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.18 }}
                                      style={{ overflow: 'hidden' }}
                                    >
                                      {items.map(item => (
                                        <button key={item.name}
                                          style={{
                                            display: 'flex', alignItems: 'center', gap: 12,
                                            width: '100%', padding: '12px 36px', // Increased
                                            background: 'none', border: 'none',
                                            borderBottom: '1px solid #f8faff',
                                            cursor: 'pointer', textAlign: 'left',
                                          }}
                                          onMouseEnter={e => e.currentTarget.style.background = '#f0f7ff'}
                                          onMouseLeave={e => e.currentTarget.style.background = 'none'}
                                        >
                                          <span style={{ fontSize: 20 }}>{item.icon}</span> {/* Increased */}
                                          <div>
                                            <div style={{ fontSize: 14, fontWeight: 600, // Increased
                                              color: blue700, fontFamily: fontSans }}>{item.name}</div>
                                            <div style={{ fontSize: 12, color: slate400, // Increased
                                              fontFamily: fontSans, marginTop: 2 }}>{item.desc}</div>
                                          </div>
                                        </button>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button key={link}
                      onClick={() => handleNavClick(link)}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        width: '100%', padding: '16px 24px', // Increased
                        background: 'none', border: 'none',
                        borderBottom: '1px solid #f1f5f9',
                        cursor: 'pointer', fontSize: 16, // Increased
                        color: '#1e293b', fontFamily: fontSans,
                        fontWeight: 500, transition: 'all 0.2s', textAlign: 'left',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#f0f7ff'; e.currentTarget.style.color = blue700; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#1e293b'; }}
                    >
                      {link}
                      <ChevronRight size={17} color={slate400} /> {/* Increased */}
                    </button>
                  )
                ))}
              </div>

              {/* Mobile CTA */}
              <div style={{ padding: '20px 24px' }}> {/* Increased padding */}
                <button
                  onClick={() => { setMobileOpen(false); smoothScrollTo('contact'); }}
                  style={{
                    width: '100%',
                    background: `linear-gradient(135deg,${blue700},${sky500})`,
                    border: 'none', color: white,
                    padding: '16px 24px', borderRadius: 12, // Increased
                    fontSize: 16, fontWeight: 600, cursor: 'pointer', // Increased
                    fontFamily: fontSans, letterSpacing: '0.01em',
                  }}
                >
                  Get a Quote
                </button>
              </div>

              {/* Contact info */}
              <div style={{
                margin: '0 24px 28px', padding: '16px 20px', // Increased padding
                background: '#f8faff', borderRadius: 12, border: '1px solid #e2e8f0',
              }}>
                {[
                  { Icon: Phone, text: '+91 98765 43210' },
                  { Icon: Mail,  text: 'info@smartlabtech.in' },
                ].map(({ Icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10,
                    marginBottom: 10, lastChild: { marginBottom: 0 } }}>
                    <Icon size={16} color={sky500} /> {/* Increased */}
                    <span style={{ fontSize: 14, color: slate600, fontFamily: fontSans }}>{text}</span> {/* Increased */}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Spacer so page content starts below top-bar + nav ── */}
      <div style={{ height: 42 + NAV_H }} /> {/* Adjusted height */}
    </>
  );
}