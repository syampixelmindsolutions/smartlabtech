
// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown, Menu, X, ChevronRight, ArrowRight, Phone, Mail } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// export const CATEGORIES = {
//   'Weighing & Measurement': [
//     { name: 'Analytical Balances Sartorius',            icon: '🔬', desc: 'High-precision analytical balances',   link: '/analytics' },
//     { name: 'Laboratory Balances Sartorius',             icon: '📡', desc: 'Precision lab weighing solutions',     link: '/laboratory-balances' },
//     { name: 'Industrial Platform Scales Smart Labtech',  icon: '⚗️', desc: 'Heavy-duty industrial scales',         link: '/industrial-scales' },
//     { name: 'Weighing Indicators Smart Labtech',         icon: '🧫', desc: 'Digital weighing indicators',          link: '/weighing-indicators' },
//   ],
//   'Thermal Cooling': [
//     { name: 'Climate chambers and Humidity Chambers Memmert',           icon: '⚖️', desc: 'Environmental simulation chambers', link: '/climate-chambers' },
//     { name: 'Drying and Heating Ovens Memmert',                         icon: '🌡️', desc: 'Precision drying ovens',            link: '/drying-ovens' },
//     { name: 'Incubators Memmert',                                        icon: '🧪', desc: 'Laboratory incubators',             link: '/incubators' },
//     { name: 'Water Baths Memmert',                                       icon: '🔒', desc: 'Temperature-controlled water baths',link: '/water-baths' },
//     { name: 'Ultra low Temperature freezers and Refrigerators Arctiko', icon: '💧', desc: 'ULT freezers for storage',          link: '/ult-freezers' },
//     { name: 'Bio Medical Storage Solutions Arctiko',                     icon: '❄️', desc: 'Medical-grade storage',             link: '/biomedical-storage' },
//   ],
//   'Chromatography': [
//     { name: 'Gas Chromatography Scion',      icon: '🤖', desc: 'GC systems for analysis',   link: '/gas-chromatography' },
//     { name: 'Liquid Chromatography Waters',  icon: '📶', desc: 'HPLC and UPLC systems',     link: '/liquid-chromatography' },
//   ],
//   'Rheology & Texture Analysis': [
//     { name: 'Viscometers-Brookfield',    icon: '⚖️', desc: 'Viscosity measurement',         link: '/viscometers' },
//     { name: 'Rheometers Brookfield',     icon: '🌡️', desc: 'Rheological analysis',          link: '/rheometers' },
//     { name: 'Texture Analyzers Brookfield', icon: '🧪', desc: 'Texture and consistency testing', link: '/texture-analyzers' },
//   ],
//   'Isolation & Safety': [
//     { name: 'Biological Safety Cabinets-ESCO', icon: '⚖️', desc: 'Biosafety cabinets',              link: '/biosafety-cabinets' },
//     { name: 'Laminar Flow Chambers-ESCO',       icon: '🌡️', desc: 'Clean air workstations',          link: '/laminar-flow' },
//     { name: 'Fume Hoods-ESCO',                  icon: '🧪', desc: 'Chemical fume hoods',             link: '/fume-hoods' },
//     { name: 'Glove Boxes Plas Labs',            icon: '🔒', desc: 'Inert atmosphere enclosures',     link: '/glove-boxes' },
//     { name: 'Dessicators Plas Labs',            icon: '💧', desc: 'Moisture-free storage',            link: '/dessicators' },
//     { name: 'PCR Chambers Plas Labs',           icon: '❄️', desc: 'PCR workstations',               link: '/pcr-chambers' },
//   ],
//   'Micro Biology': [
//     { name: 'Microscopes',      icon: '🔬', desc: 'Research and clinical microscopes', link: '/microscopes' },
//     { name: 'Autoclaves',       icon: '🦠', desc: 'Sterilization equipment',           link: '/autoclaves' },
//     { name: 'Colony Counters',  icon: '🧫', desc: 'Microbial colony counting',         link: '/colony-counters' },
//   ],
//   'Laboratory Equipment': [
//     { name: 'Centrifuges',               icon: '⚙️', desc: 'Benchtop and floor centrifuges', link: '/centrifuges' },
//     { name: 'pH Meters',                 icon: '📊', desc: 'Digital pH measurement',          link: '/ph-meters' },
//     { name: 'Water Purification Systems',icon: '💧', desc: 'Type I/II/III water systems',     link: '/water-purification' },
//     { name: 'Mixers and Shakers',        icon: '🔄', desc: 'Laboratory mixing equipment',     link: '/mixers' },
//   ],
// };

// const NAV_LINKS = ['Home', 'About', 'Products', 'Services', 'Contact'];

// function smoothScrollTo(id) {
//   document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
// }

// export default function Navbar() {
//   const [scrolled,       setScrolled]       = useState(false);
//   const [mobileOpen,     setMobileOpen]     = useState(false);
//   const [dropOpen,       setDropOpen]       = useState(false);
//   const [activeCat,      setActiveCat]      = useState('Weighing & Measurement');
//   const [mobileExpanded, setMobileExpanded] = useState({});
//   const [isMobile,       setIsMobile]       = useState(window.innerWidth < 1024);
//   const dropRef  = useRef(null);
//   const menuRef  = useRef(null);
//   const timerRef = useRef(null);
//   const navigate = useNavigate();


//   useEffect(() => {
//     if (dropOpen && menuRef.current) {
//       const rect = menuRef.current.getBoundingClientRect();
//       const overflowRight = rect.right > window.innerWidth;
//       const overflowLeft = rect.left < 0;

//       if (overflowRight) {
//         menuRef.current.style.left = 'auto';
//         menuRef.current.style.right = '0';
//         menuRef.current.style.transform = 'none';
//       }

//       if (overflowLeft) {
//         menuRef.current.style.left = '0';
//         menuRef.current.style.right = 'auto';
//         menuRef.current.style.transform = 'none';
//       }
//     }
//   }, [dropOpen]);

//   useEffect(() => {
//     const onResize = () => setIsMobile(window.innerWidth < 1024);
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, []);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

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
//     if (link === 'Home') navigate('/');
//     else if (link === 'Products') document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
//     else smoothScrollTo(link.toLowerCase());
//   };

//   const toggleMobileCat = (cat) => setMobileExpanded(prev => ({ ...prev, [cat]: !prev[cat] }));

//   const NAV_H = 88;

//   return (
//     <>
//       {/* ── TOP BAR ── */}
//       <div className="fixed top-0 left-0 right-0 z-[1001] flex items-center justify-end gap-7 px-4 sm:px-20"
//         style={{ height: 42, background: '#0f2356' }}>
//         {[{ Icon: Phone, text: '+91 98765 43210' }, { Icon: Mail, text: 'info@smartlabtech.in' }].map(({ Icon, text }) => (
//           <div key={text} className="flex items-center gap-2">
//             <Icon size={13} color="rgba(255,255,255,0.55)" />
//             <span className="font-body text-xs text-white/70 font-medium">{text}</span>
//           </div>
//         ))}
//         <div className="w-px h-4 bg-white/15" />
//         <span className="font-body text-xs text-white/60 font-medium hidden sm:block">Est. 2001 · ISO 9001:2015 Certified</span>
//       </div>

//       {/* ── MAIN NAVBAR ── */}
//       <motion.nav
//         initial={{ y: -NAV_H, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.55, ease: 'easeOut' }}
//         className="fixed left-0 right-0 z-[1000] flex items-center px-4 sm:px-20 transition-all duration-300"
//         style={{
//           top: 42, height: NAV_H,
//           background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
//           backdropFilter: 'blur(20px)',
//           borderBottom: `1px solid ${scrolled ? '#e2e8f0' : 'rgba(226,232,240,0.5)'}`,
//           boxShadow: scrolled ? '0 4px 24px rgba(15,35,86,0.10)' : 'none',
//         }}
//       >
//         {/* Logo */}
//         <button
//           onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
//           className="flex items-center gap-3.5 flex-shrink-0 bg-transparent border-none cursor-pointer p-0"
//         >
//           <img src="/Screenshot 2026-04-13 151403.png" alt="SmartLabTech" className="h-[52px] w-auto object-contain"
//             onError={e => { e.target.style.display = 'none'; }} />
//           <div className="flex flex-col leading-tight">
//             <span className="font-display text-xl font-bold text-blue-900 tracking-tight">
//               SmartLab<span className="text-sky-500">Tech</span>
//             </span>
//             <span className="font-body text-[11px] font-medium text-slate-400 tracking-widest uppercase mt-0.5">
//               Scientifically Yours
//             </span>
//           </div>
//         </button>

//         <div className="w-px h-10 bg-slate-200 mx-8 flex-shrink-0" />

//         {/* Desktop links */}
//         {!isMobile && (
//           <div className="flex items-center gap-5">
//             {NAV_LINKS.map(link =>
//               link === 'Products' ? (
//                 <div key={link} ref={dropRef} className="relative flex items-center" onMouseEnter={openDrop} onMouseLeave={closeDrop}>
//                   <button
//                     className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold font-body transition-all duration-180 border-b-[3px] cursor-pointer border-none"
//                     style={{
//                       color: dropOpen ? '#1e3a8a' : '#475569',
//                       background: dropOpen ? '#eef2ff' : 'none',
//                       borderColor: dropOpen ? '#0ea5e9' : 'transparent',
//                     }}
//                     onMouseEnter={e => { e.currentTarget.style.color = '#1e3a8a'; e.currentTarget.style.background = '#eef2ff'; }}
//                     onMouseLeave={e => { if (!dropOpen) { e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = 'none'; } }}
//                   >
//                     Products
//                     <motion.span animate={{ rotate: dropOpen ? 180 : 0 }} transition={{ duration: 0.22 }} className="flex items-center">
//                       <ChevronDown size={16} />
//                     </motion.span>
//                   </button>

//                   {/* Mega dropdown */}
//                   <AnimatePresence>
//                     {dropOpen && (
//                       <motion.div
//                         ref={menuRef}
//                         initial={{ opacity: 0, y: 10, scaleY: 0.97 }}
//                         animate={{ opacity: 1, y: 0, scaleY: 1 }}
//                         exit={{ opacity: 0, y: 6, scaleY: 0.97 }}
//                         transition={{ duration: 0.18, ease: 'easeOut' }}
//                         onMouseEnter={openDrop}
//                         onMouseLeave={closeDrop}
//                         className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[90vw] max-w-[900px] bg-white rounded-2xl border border-slate-200 overflow-hidden"
//                         style={{
//                           boxShadow: '0 20px 60px rgba(15,35,86,0.18)',
//                           transformOrigin: 'top center',
//                         }}
//                       >
//                         {/* Header */}
//                         <div className="flex items-center justify-between px-6 py-4"
//                           style={{ background: 'linear-gradient(135deg,#0f2356,#2563eb)' }}>
//                           <div>
//                             <p className="text-sm font-bold text-white font-body tracking-wide">Product Catalogue</p>
//                             <p className="text-xs text-white/65 mt-0.5 font-body">Scientific & laboratory instruments</p>
//                           </div>
//                           <button
//                             onClick={() => { setDropOpen(false); handleNavClick('Products'); }}
//                             className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white font-body border border-white/25 cursor-pointer transition-all"
//                             style={{ background: 'rgba(255,255,255,0.15)' }}
//                             onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.28)'}
//                             onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
//                           >
//                             View All <ArrowRight size={13} />
//                           </button>
//                         </div>

//                         <div className="flex min-h-[280px]">
//                           {/* Category tabs */}
//                           <div className="w-[220px] flex-shrink-0 bg-slate-50 border-r border-slate-100 p-3">
//                             {Object.keys(CATEGORIES).map(cat => {
//                               const isActive = activeCat === cat;
//                               return (
//                                 <button key={cat}
//                                   onClick={() => setActiveCat(cat)}
//                                   onMouseEnter={() => setActiveCat(cat)}
//                                   className="flex items-center justify-between w-full px-4 py-3 rounded-xl mb-1.5 text-sm font-body cursor-pointer border-none transition-all text-left"
//                                   style={{
//                                     background: isActive ? 'linear-gradient(135deg,#1e3a8a,#2563eb)' : 'transparent',
//                                     color: isActive ? '#fff' : '#475569',
//                                     fontWeight: isActive ? 600 : 500,
//                                     boxShadow: isActive ? '0 2px 8px rgba(30,58,138,0.22)' : 'none',
//                                   }}
//                                 >
//                                   <span>{cat}</span>
//                                   <ChevronRight size={14} style={{ opacity: isActive ? 1 : 0.35 }} />
//                                 </button>
//                               );
//                             })}
//                             <div className="mt-5 p-3 rounded-xl border border-indigo-200 bg-indigo-50">
//                               <p className="text-[10px] font-bold text-indigo-700 font-body tracking-widest uppercase mb-1">Since 2001</p>
//                               <p className="text-xs text-indigo-600 font-body leading-snug">ISO 9001 certified lab instruments</p>
//                             </div>
//                           </div>

//                           {/* Items */}
//                           <div className="flex-1 p-3 overflow-y-auto">
//                             <AnimatePresence mode="wait">
//                               <motion.div key={activeCat}
//                                 initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
//                                 exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.15 }}>
//                                 {(CATEGORIES[activeCat] || []).map((item) => (
//                                   <button key={item.name}
//                                     onClick={() => { setDropOpen(false); navigate(item.link); }}
//                                     className="flex items-start gap-3.5 w-full px-3.5 py-3 rounded-xl bg-transparent border-none cursor-pointer text-left mb-1 transition-all"
//                                     onMouseEnter={e => e.currentTarget.style.background = '#f0f7ff'}
//                                     onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
//                                   >
//                                     <div className="w-11 h-11 flex-shrink-0 bg-indigo-50 rounded-xl flex items-center justify-center text-xl">{item.icon}</div>
//                                     <div className="pt-0.5 flex-1 min-w-0">
//                                       <p className="text-sm font-semibold text-blue-900 font-body leading-snug">{item.name}</p>
//                                     </div>
//                                     <ChevronRight size={14} className="text-slate-300 flex-shrink-0 mt-1.5" />
//                                   </button>
//                                 ))}
//                               </motion.div>
//                             </AnimatePresence>
//                           </div>
//                         </div>

//                         {/* Footer strip */}
//                         <div className="flex items-center justify-between px-6 py-3.5 bg-slate-50 border-t border-slate-100">
//                           <span className="text-xs text-slate-400 font-body">Need help choosing the right instrument?</span>
//                           <button
//                             onClick={() => { setDropOpen(false); handleNavClick('Contact'); }}
//                             className="px-4 py-1.5 rounded-lg text-xs font-semibold font-body border cursor-pointer transition-all"
//                             style={{ color: '#2563eb', borderColor: '#2563eb', background: 'none' }}
//                             onMouseEnter={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.color = '#fff'; }}
//                             onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#2563eb'; }}
//                           >
//                             Contact Expert
//                           </button>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ) : (
//                 <button key={link} onClick={() => handleNavClick(link)}
//                   className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-500 font-body border-none border-b-[3px] border-transparent bg-transparent cursor-pointer transition-all duration-180 whitespace-nowrap hover:text-blue-900 hover:bg-indigo-50">
//                   {link}
//                 </button>
//               )
//             )}
//           </div>
//         )}

//         <div className="flex-1" />

//         {/* CTA */}
//         {!isMobile && (
//           <button
//             onClick={() => handleNavClick('Contact')}
//             className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white font-body flex-shrink-0 whitespace-nowrap border-none cursor-pointer transition-all duration-220"
//             style={{ background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)', boxShadow: '0 4px 16px rgba(30,58,138,0.28)' }}
//             onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(30,58,138,0.38)'; }}
//             onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(30,58,138,0.28)'; }}
//           >
//             Get a Quote <ArrowRight size={16} />
//           </button>
//         )}

//         {/* Hamburger */}
//         {isMobile && (
//           <button onClick={() => setMobileOpen(o => !o)}
//             className="p-2.5 rounded-xl border-none cursor-pointer transition-all text-blue-900"
//             style={{ background: mobileOpen ? '#eef2ff' : 'none' }}>
//             {mobileOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         )}
//       </motion.nav>

//       {/* ── MOBILE DRAWER ── */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <>
//             <motion.div key="overlay"
//               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//               onClick={() => setMobileOpen(false)}
//               className="fixed inset-0 z-[900]"
//               style={{ top: 42 + NAV_H, background: 'rgba(15,23,42,0.45)', backdropFilter: 'blur(4px)' }}
//             />
//             <motion.div key="drawer"
//               initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
//               transition={{ type: 'tween', duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
//               className="fixed right-0 bottom-0 w-[340px] bg-white z-[950] overflow-y-auto"
//               style={{ top: 42 + NAV_H, boxShadow: '-8px 0 32px rgba(15,35,86,0.15)' }}
//             >
//               <div className="p-3 pb-0">
//                 {NAV_LINKS.map(link =>
//                   link === 'Products' ? (
//                     <div key={link}>
//                       <button onClick={() => toggleMobileCat('products-top')}
//                         className="flex items-center justify-between w-full px-6 py-4 bg-transparent border-none border-b border-slate-100 cursor-pointer text-base text-blue-900 font-body font-semibold text-left">
//                         Products
//                         <motion.span animate={{ rotate: mobileExpanded['products-top'] ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex items-center">
//                           <ChevronDown size={18} className="text-slate-400" />
//                         </motion.span>
//                       </button>
//                       <AnimatePresence>
//                         {mobileExpanded['products-top'] && (
//                           <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
//                             {Object.entries(CATEGORIES).map(([cat, items]) => (
//                               <div key={cat}>
//                                 <button onClick={() => toggleMobileCat(cat)}
//                                   className="flex items-center justify-between w-full px-7 py-3 bg-slate-50 border-none border-b border-slate-100 cursor-pointer text-[13px] text-blue-500 font-body font-bold tracking-widest uppercase text-left">
//                                   {cat}
//                                   <ChevronDown size={13} className="text-sky-400"
//                                     style={{ transform: mobileExpanded[cat] ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
//                                 </button>
//                                 <AnimatePresence>
//                                   {mobileExpanded[cat] && (
//                                     <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
//                                       exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }} className="overflow-hidden">
//                                       {items.map(item => (
//                                         <button key={item.name}
//                                           onClick={() => { setMobileOpen(false); navigate(item.link); }}
//                                           className="flex items-center gap-3 w-full px-9 py-3 bg-transparent border-none border-b border-slate-50 cursor-pointer text-left"
//                                           onMouseEnter={e => e.currentTarget.style.background = '#f0f7ff'}
//                                           onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
//                                         >
//                                           <span className="text-xl">{item.icon}</span>
//                                           <div>
//                                             <p className="text-sm font-semibold text-blue-900 font-body">{item.name}</p>
//                                             <p className="text-xs text-slate-400 font-body mt-0.5">{item.desc}</p>
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
//                     <button key={link} onClick={() => handleNavClick(link)}
//                       className="flex items-center justify-between w-full px-6 py-4 bg-transparent border-none border-b border-slate-100 cursor-pointer text-base text-slate-800 font-body font-medium text-left transition-all"
//                       onMouseEnter={e => { e.currentTarget.style.background = '#f0f7ff'; e.currentTarget.style.color = '#1e3a8a'; }}
//                       onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1e293b'; }}
//                     >
//                       {link} <ChevronRight size={17} className="text-slate-400" />
//                     </button>
//                   )
//                 )}
//               </div>

//               <div className="p-6">
//                 <button onClick={() => { setMobileOpen(false); handleNavClick('Contact'); }}
//                   className="w-full py-4 rounded-xl text-base font-semibold text-white font-body border-none cursor-pointer"
//                   style={{ background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)' }}>
//                   Get a Quote
//                 </button>
//               </div>

//               <div className="mx-6 mb-7 p-5 bg-slate-50 rounded-xl border border-slate-200">
//                 {[{ Icon: Phone, text: '+91 98765 43210' }, { Icon: Mail, text: 'info@smartlabtech.in' }].map(({ Icon, text }) => (
//                   <div key={text} className="flex items-center gap-2.5 mb-2.5 last:mb-0">
//                     <Icon size={16} className="text-sky-400" />
//                     <span className="text-sm text-slate-500 font-body">{text}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       <div style={{ height: 42 + NAV_H }} />
//     </>
//   );
// }





import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ChevronRight, ArrowRight, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CATEGORIES = {
  'Weighing & Measurement': [
    { name: 'Analytical Balances Sartorius',            icon: '🔬', desc: 'High-precision analytical balances',   link: '/analytics' },
    { name: 'Laboratory Balances Sartorius',             icon: '📡', desc: 'Precision lab weighing solutions',     link: '/laboratory-balances' },
    { name: 'Industrial Platform Scales Smart Labtech',  icon: '⚗️', desc: 'Heavy-duty industrial scales',         link: '/industrial-scales' },
    { name: 'Weighing Indicators Smart Labtech',         icon: '🧫', desc: 'Digital weighing indicators',          link: '/weighing-indicators' },
  ],
  'Thermal Cooling': [
    { name: 'Climate chambers and Humidity Chambers Memmert',           icon: '⚖️', desc: 'Environmental simulation chambers', link: '/climate-chambers' },
    { name: 'Drying and Heating Ovens Memmert',                         icon: '🌡️', desc: 'Precision drying ovens',            link: '/drying-ovens' },
    { name: 'Incubators Memmert',                                        icon: '🧪', desc: 'Laboratory incubators',             link: '/incubators' },
    { name: 'Water Baths Memmert',                                       icon: '🔒', desc: 'Temperature-controlled water baths',link: '/water-baths' },
    { name: 'Ultra low Temperature freezers and Refrigerators Arctiko', icon: '💧', desc: 'ULT freezers for storage',          link: '/ult-freezers' },
    { name: 'Bio Medical Storage Solutions Arctiko',                     icon: '❄️', desc: 'Medical-grade storage',             link: '/biomedical-storage' },
  ],
  'Chromatography': [
    { name: 'Gas Chromatography Scion',      icon: '🤖', desc: 'GC systems for analysis',   link: '/gas-chromatography' },
    { name: 'Liquid Chromatography Waters',  icon: '📶', desc: 'HPLC and UPLC systems',     link: '/liquid-chromatography' },
  ],
  'Rheology & Texture Analysis': [
    { name: 'Viscometers-Brookfield',    icon: '⚖️', desc: 'Viscosity measurement',         link: '/viscometers' },
    { name: 'Rheometers Brookfield',     icon: '🌡️', desc: 'Rheological analysis',          link: '/rheometers' },
    { name: 'Texture Analyzers Brookfield', icon: '🧪', desc: 'Texture and consistency testing', link: '/texture-analyzers' },
  ],
  'Isolation & Safety': [
    { name: 'Biological Safety Cabinets-ESCO', icon: '⚖️', desc: 'Biosafety cabinets',              link: '/biosafety-cabinets' },
    { name: 'Laminar Flow Chambers-ESCO',       icon: '🌡️', desc: 'Clean air workstations',          link: '/laminar-flow' },
    { name: 'Fume Hoods-ESCO',                  icon: '🧪', desc: 'Chemical fume hoods',             link: '/fume-hoods' },
    { name: 'Glove Boxes Plas Labs',            icon: '🔒', desc: 'Inert atmosphere enclosures',     link: '/glove-boxes' },
    { name: 'Dessicators Plas Labs',            icon: '💧', desc: 'Moisture-free storage',            link: '/dessicators' },
    { name: 'PCR Chambers Plas Labs',           icon: '❄️', desc: 'PCR workstations',               link: '/pcr-chambers' },
  ],
  'Micro Biology': [
    { name: 'Microscopes',      icon: '🔬', desc: 'Research and clinical microscopes', link: '/microscopes' },
    { name: 'Autoclaves',       icon: '🦠', desc: 'Sterilization equipment',           link: '/autoclaves' },
    { name: 'Colony Counters',  icon: '🧫', desc: 'Microbial colony counting',         link: '/colony-counters' },
  ],
  'Laboratory Equipment': [
    { name: 'Centrifuges',               icon: '⚙️', desc: 'Benchtop and floor centrifuges', link: '/centrifuges' },
    { name: 'pH Meters',                 icon: '📊', desc: 'Digital pH measurement',          link: '/ph-meters' },
    { name: 'Water Purification Systems',icon: '💧', desc: 'Type I/II/III water systems',     link: '/water-purification' },
    { name: 'Mixers and Shakers',        icon: '🔄', desc: 'Laboratory mixing equipment',     link: '/mixers' },
  ],
};

const NAV_LINKS = ['Home', 'About', 'Products', 'Services', 'Contact'];

function smoothScrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [dropOpen,       setDropOpen]       = useState(false);
  const [activeCat,      setActiveCat]      = useState('Weighing & Measurement');
  const [mobileExpanded, setMobileExpanded] = useState({});
  const [isMobile,       setIsMobile]       = useState(window.innerWidth < 1024);
  const dropRef  = useRef(null);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    if (link === 'Home') navigate('/');
    else if (link === 'Products') document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    else smoothScrollTo(link.toLowerCase());
  };

  const toggleMobileCat = (cat) => setMobileExpanded(prev => ({ ...prev, [cat]: !prev[cat] }));

  const NAV_H = 88;

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="fixed top-0 left-0 right-0 z-[1001] flex items-center justify-end gap-7 px-4 sm:px-20"
        style={{ height: 42, background: '#0f2356' }}>
        {[{ Icon: Phone, text: '+91 98765 43210' }, { Icon: Mail, text: 'info@smartlabtech.in' }].map(({ Icon, text }) => (
          <div key={text} className="flex items-center gap-2">
            <Icon size={13} color="rgba(255,255,255,0.55)" />
            <span className="font-body text-xs text-white/70 font-medium">{text}</span>
          </div>
        ))}
        <div className="w-px h-4 bg-white/15" />
        <span className="font-body text-xs text-white/60 font-medium hidden sm:block">Est. 2001 · ISO 9001:2015 Certified</span>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <motion.nav
        initial={{ y: -NAV_H, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="fixed left-0 right-0 z-[1000] flex items-center px-4 sm:px-20 transition-all duration-300"
        style={{
          top: 42, height: NAV_H,
          background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${scrolled ? '#e2e8f0' : 'rgba(226,232,240,0.5)'}`,
          boxShadow: scrolled ? '0 4px 24px rgba(15,35,86,0.10)' : 'none',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3.5 flex-shrink-0 bg-transparent border-none cursor-pointer p-0"
        >
          <img src="/Screenshot 2026-04-13 151403.png" alt="SmartLabTech" className="h-[52px] w-auto object-contain"
            onError={e => { e.target.style.display = 'none'; }} />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl font-bold text-blue-900 tracking-tight">
              SmartLab<span className="text-sky-500">Tech</span>
            </span>
            <span className="font-body text-[11px] font-medium text-slate-400 tracking-widest uppercase mt-0.5">
              Scientifically Yours
            </span>
          </div>
        </button>

        <div className="w-px h-10 bg-slate-200 mx-8 flex-shrink-0" />

        {/* Desktop links */}
        {!isMobile && (
          <div className="flex items-center gap-5">
            {NAV_LINKS.map(link =>
              link === 'Products' ? (
                <div key={link} ref={dropRef} className="relative flex items-center" onMouseEnter={openDrop} onMouseLeave={closeDrop}>
                  <button
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold font-body transition-all duration-180 border-b-[3px] cursor-pointer border-none"
                    style={{
                      color: dropOpen ? '#1e3a8a' : '#475569',
                      background: dropOpen ? '#eef2ff' : 'none',
                      borderColor: dropOpen ? '#0ea5e9' : 'transparent',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#1e3a8a'; e.currentTarget.style.background = '#eef2ff'; }}
                    onMouseLeave={e => { if (!dropOpen) { e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = 'none'; } }}
                  >
                    Products
                    <motion.span animate={{ rotate: dropOpen ? 180 : 0 }} transition={{ duration: 0.22 }} className="flex items-center">
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>

                  {/* Mega dropdown */}
                  <AnimatePresence>
                    {dropOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scaleY: 0.97 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: 6, scaleY: 0.97 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        onMouseEnter={openDrop} onMouseLeave={closeDrop}
                        className="absolute top-[calc(100%+12px)] left-0 right-0 mx-auto w-[720px] max-w-[95vw] bg-white rounded-2xl border border-slate-200 overflow-hidden"
                        style={{
                          boxShadow: '0 20px 60px rgba(15,35,86,0.18), 0 4px 16px rgba(0,0,0,0.06)',
                          transformOrigin: 'top center',
                        }}
                      >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4"
                          style={{ background: 'linear-gradient(135deg,#0f2356,#2563eb)' }}>
                          <div>
                            <p className="text-sm font-bold text-white font-body tracking-wide">Product Catalogue</p>
                            <p className="text-xs text-white/65 mt-0.5 font-body">Scientific & laboratory instruments</p>
                          </div>
                          <button
                            onClick={() => { setDropOpen(false); handleNavClick('Products'); }}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white font-body border border-white/25 cursor-pointer transition-all"
                            style={{ background: 'rgba(255,255,255,0.15)' }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.28)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                          >
                            View All <ArrowRight size={13} />
                          </button>
                        </div>

                        <div className="flex min-h-[280px]">
                          {/* Category tabs */}
                          <div className="w-[220px] flex-shrink-0 bg-slate-50 border-r border-slate-100 p-3">
                            {Object.keys(CATEGORIES).map(cat => {
                              const isActive = activeCat === cat;
                              return (
                                <button key={cat}
                                  onClick={() => setActiveCat(cat)}
                                  onMouseEnter={() => setActiveCat(cat)}
                                  className="flex items-center justify-between w-full px-4 py-3 rounded-xl mb-1.5 text-sm font-body cursor-pointer border-none transition-all text-left"
                                  style={{
                                    background: isActive ? 'linear-gradient(135deg,#1e3a8a,#2563eb)' : 'transparent',
                                    color: isActive ? '#fff' : '#475569',
                                    fontWeight: isActive ? 600 : 500,
                                    boxShadow: isActive ? '0 2px 8px rgba(30,58,138,0.22)' : 'none',
                                  }}
                                >
                                  <span>{cat}</span>
                                  <ChevronRight size={14} style={{ opacity: isActive ? 1 : 0.35 }} />
                                </button>
                              );
                            })}
                            <div className="mt-5 p-3 rounded-xl border border-indigo-200 bg-indigo-50">
                              <p className="text-[10px] font-bold text-indigo-700 font-body tracking-widest uppercase mb-1">Since 2001</p>
                              <p className="text-xs text-indigo-600 font-body leading-snug">ISO 9001 certified lab instruments</p>
                            </div>
                          </div>

                          {/* Items */}
                          <div className="flex-1 p-3 overflow-y-auto">
                            <AnimatePresence mode="wait">
                              <motion.div key={activeCat}
                                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.15 }}>
                                {(CATEGORIES[activeCat] || []).map((item) => (
                                  <button key={item.name}
                                    onClick={() => { setDropOpen(false); navigate(item.link); }}
                                    className="flex items-start gap-3.5 w-full px-3.5 py-3 rounded-xl bg-transparent border-none cursor-pointer text-left mb-1 transition-all"
                                    onMouseEnter={e => e.currentTarget.style.background = '#f0f7ff'}
                                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                  >
                                    <div className="w-11 h-11 flex-shrink-0 bg-indigo-50 rounded-xl flex items-center justify-center text-xl">{item.icon}</div>
                                    <div className="pt-0.5 flex-1 min-w-0">
                                      <p className="text-sm font-semibold text-blue-900 font-body leading-snug">{item.name}</p>
                                    </div>
                                    <ChevronRight size={14} className="text-slate-300 flex-shrink-0 mt-1.5" />
                                  </button>
                                ))}
                              </motion.div>
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* Footer strip */}
                        <div className="flex items-center justify-between px-6 py-3.5 bg-slate-50 border-t border-slate-100">
                          <span className="text-xs text-slate-400 font-body">Need help choosing the right instrument?</span>
                          <button
                            onClick={() => { setDropOpen(false); handleNavClick('Contact'); }}
                            className="px-4 py-1.5 rounded-lg text-xs font-semibold font-body border cursor-pointer transition-all"
                            style={{ color: '#2563eb', borderColor: '#2563eb', background: 'none' }}
                            onMouseEnter={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#2563eb'; }}
                          >
                            Contact Expert
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button key={link} onClick={() => handleNavClick(link)}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-500 font-body border-none border-b-[3px] border-transparent bg-transparent cursor-pointer transition-all duration-180 whitespace-nowrap hover:text-blue-900 hover:bg-indigo-50">
                  {link}
                </button>
              )
            )}
          </div>
        )}

        <div className="flex-1" />

        {/* CTA */}
        {!isMobile && (
          <button
            onClick={() => handleNavClick('Contact')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white font-body flex-shrink-0 whitespace-nowrap border-none cursor-pointer transition-all duration-220"
            style={{ background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)', boxShadow: '0 4px 16px rgba(30,58,138,0.28)' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(30,58,138,0.38)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(30,58,138,0.28)'; }}
          >
            Get a Quote <ArrowRight size={16} />
          </button>
        )}

        {/* Hamburger */}
        {isMobile && (
          <button onClick={() => setMobileOpen(o => !o)}
            className="p-2.5 rounded-xl border-none cursor-pointer transition-all text-blue-900"
            style={{ background: mobileOpen ? '#eef2ff' : 'none' }}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
      </motion.nav>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div key="overlay"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[900]"
              style={{ top: 42 + NAV_H, background: 'rgba(15,23,42,0.45)', backdropFilter: 'blur(4px)' }}
            />
            <motion.div key="drawer"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed right-0 bottom-0 w-[340px] bg-white z-[950] overflow-y-auto"
              style={{ top: 42 + NAV_H, boxShadow: '-8px 0 32px rgba(15,35,86,0.15)' }}
            >
              <div className="p-3 pb-0">
                {NAV_LINKS.map(link =>
                  link === 'Products' ? (
                    <div key={link}>
                      <button onClick={() => toggleMobileCat('products-top')}
                        className="flex items-center justify-between w-full px-6 py-4 bg-transparent border-none border-b border-slate-100 cursor-pointer text-base text-blue-900 font-body font-semibold text-left">
                        Products
                        <motion.span animate={{ rotate: mobileExpanded['products-top'] ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex items-center">
                          <ChevronDown size={18} className="text-slate-400" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileExpanded['products-top'] && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
                            {Object.entries(CATEGORIES).map(([cat, items]) => (
                              <div key={cat}>
                                <button onClick={() => toggleMobileCat(cat)}
                                  className="flex items-center justify-between w-full px-7 py-3 bg-slate-50 border-none border-b border-slate-100 cursor-pointer text-[13px] text-blue-500 font-body font-bold tracking-widest uppercase text-left">
                                  {cat}
                                  <ChevronDown size={13} className="text-sky-400"
                                    style={{ transform: mobileExpanded[cat] ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                                </button>
                                <AnimatePresence>
                                  {mobileExpanded[cat] && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.18 }} className="overflow-hidden">
                                      {items.map(item => (
                                        <button key={item.name}
                                          onClick={() => { setMobileOpen(false); navigate(item.link); }}
                                          className="flex items-center gap-3 w-full px-9 py-3 bg-transparent border-none border-b border-slate-50 cursor-pointer text-left"
                                          onMouseEnter={e => e.currentTarget.style.background = '#f0f7ff'}
                                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                        >
                                          <span className="text-xl">{item.icon}</span>
                                          <div>
                                            <p className="text-sm font-semibold text-blue-900 font-body">{item.name}</p>
                                            <p className="text-xs text-slate-400 font-body mt-0.5">{item.desc}</p>
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
                    <button key={link} onClick={() => handleNavClick(link)}
                      className="flex items-center justify-between w-full px-6 py-4 bg-transparent border-none border-b border-slate-100 cursor-pointer text-base text-slate-800 font-body font-medium text-left transition-all"
                      onMouseEnter={e => { e.currentTarget.style.background = '#f0f7ff'; e.currentTarget.style.color = '#1e3a8a'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1e293b'; }}
                    >
                      {link} <ChevronRight size={17} className="text-slate-400" />
                    </button>
                  )
                )}
              </div>

              <div className="p-6">
                <button onClick={() => { setMobileOpen(false); handleNavClick('Contact'); }}
                  className="w-full py-4 rounded-xl text-base font-semibold text-white font-body border-none cursor-pointer"
                  style={{ background: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)' }}>
                  Get a Quote
                </button>
              </div>

              <div className="mx-6 mb-7 p-5 bg-slate-50 rounded-xl border border-slate-200">
                {[{ Icon: Phone, text: '+91 98765 43210' }, { Icon: Mail, text: 'info@smartlabtech.in' }].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5 mb-2.5 last:mb-0">
                    <Icon size={16} className="text-sky-400" />
                    <span className="text-sm text-slate-500 font-body">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div style={{ height: 42 + NAV_H }} />
    </>
  );
}

