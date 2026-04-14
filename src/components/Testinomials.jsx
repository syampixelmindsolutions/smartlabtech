// import { useRef, useState, useEffect } from 'react';
// import { motion, useInView, AnimatePresence } from 'framer-motion';
// import { Quote, Star, ChevronLeft, ChevronRight, User, Briefcase, Calendar, TrendingUp, Award, Users, ThumbsUp } from 'lucide-react';

// const TESTIMONIALS = [
//   {
//     name: 'Nimmakayala Vijay',
//     role: 'Research Associate',
//     company: 'Genentech Solutions',
//     year: '2022',
//     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
//     quote: 'The faculty here are highly knowledgeable and supportive. They explain every concept clearly and are always available for doubt-solving. The teaching methods are practical, which makes learning much easier.',
//     rating: 5,
//   },
//   {
//     name: 'K. Manoj Kumar',
//     role: 'Quality Analyst',
//     company: 'PharmaCore Labs',
//     year: '2023',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
//     quote: 'Thanks to the placement team, I was able to secure a good job right after completing my course. The mock interviews and resume preparation sessions were very useful.',
//     rating: 5,
//   },
//   {
//     name: 'K. Ganapathi Vara Prasad',
//     role: 'Lab Manager',
//     company: 'BioResearch India',
//     year: '2024',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
//     quote: 'The curriculum is well-structured and updated with the latest industry trends. I really appreciate how they include real-world projects and case studies.',
//     rating: 5,
//   },
//   {
//     name: 'Sneha Reddy',
//     role: 'R&D Scientist',
//     company: 'AstraZeneca India',
//     year: '2023',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
//     quote: 'The hands-on training and exposure to cutting-edge equipment gave me the confidence to work in top-tier research facilities. Highly recommended!',
//     rating: 5,
//   },
//   {
//     name: 'Rajesh Kumar',
//     role: 'Technical Director',
//     company: 'LabTech Solutions',
//     year: '2021',
//     image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80',
//     quote: 'SmartLabTech transformed my career. Their industry-focused approach and expert mentorship helped me climb the corporate ladder quickly.',
//     rating: 5,
//   },
// ];

// const COMPANY_STATS = [
//   { icon: Users, value: '5000+', label: 'Alumni Network', color: '#1e3a8a' },
//   { icon: TrendingUp, value: '95%', label: 'Placement Rate', color: '#0284c7' },
//   { icon: Award, value: '150+', label: 'Industry Partners', color: '#0ea5e9' },
//   { icon: ThumbsUp, value: '98%', label: 'Satisfaction Rate', color: '#1d4ed8' },
// ];

// function Reveal({ children, delay = 0 }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-50px' });
//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 40 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export default function Testimonials() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const scrollContainerRef = useRef(null);
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

//   const nextSlide = () => {
//     setDirection(1);
//     setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
//   };

//   // Auto-play carousel
//   useEffect(() => {
//     if (!isAutoPlaying || !isInView) return;
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, isInView, activeIndex]);

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? -300 : 300,
//       opacity: 0,
//     }),
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="testimonials"
//       style={{
//         background: '#f8faff',
//         padding: 'clamp(0px, 8vw, 0px) 0',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Background decorative elements */}
//       <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
//         <div
//           style={{
//             position: 'absolute',
//             top: '20%',
//             right: '-10%',
//             width: 500,
//             height: 500,
//             background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)',
//             borderRadius: '50%',
//           }}
//         />
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '10%',
//             left: '-5%',
//             width: 400,
//             height: 400,
//             background: 'radial-gradient(circle, rgba(30,58,138,0.04) 0%, transparent 70%)',
//             borderRadius: '50%',
//           }}
//         />
//       </div>

//       <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px, 5vw, 80px)', position: 'relative', zIndex: 1 }}>
        
//         {/* Header Section */}
//         <Reveal>
//           <div style={{ textAlign: 'center', marginBottom: 64 }}>
//             <div
//               style={{
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: 8,
//                 background: 'rgba(14,165,233,0.08)',
//                 border: '1px solid rgba(14,165,233,0.2)',
//                 borderRadius: 20,
//                 padding: '5px 14px',
//                 marginBottom: 20,
//               }}
//             >
//               <Quote size={14} color="#0284c7" />
//               <span
//                 style={{
//                   fontSize: 11,
//                   fontWeight: 700,
//                   color: '#0284c7',
//                   fontFamily: "'DM Sans', sans-serif",
//                   letterSpacing: '0.1em',
//                   textTransform: 'uppercase',
//                 }}
//               >
//                 Success Stories
//               </span>
//             </div>
//             <h2
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 fontSize: 'clamp(26px, 3.5vw, 48px)',
//                 fontWeight: 700,
//                 color: '#0f172a',
//                 lineHeight: 1.2,
//                 marginBottom: 14,
//               }}
//             >
//               What Our{' '}
//               <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #1e3a8a, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//                 Alumni
//               </span>{' '}
//               Say
//             </h2>
//           </div>
//         </Reveal>

    
//         {/* Testimonials Carousel */}
//         <div
//           style={{
//             position: 'relative',
//             background: '#fff',
//             borderRadius: 24,
//             padding: 'clamp(32px, 5vw, 48px)',
//             boxShadow: '0 8px 32px rgba(30,58,138,0.08)',
//             border: '1px solid #e2e8f0',
//           }}
//           onMouseEnter={() => setIsAutoPlaying(false)}
//           onMouseLeave={() => setIsAutoPlaying(true)}
//         >
//           {/* Quote icon background */}
//           <Quote
//             size={80}
//             style={{
//               position: 'absolute',
//               top: 20,
//               right: 30,
//               opacity: 0.05,
//               color: '#1e3a8a',
//             }}
//           />

//           {/* Carousel Container */}
//           <div style={{ position: 'relative', minHeight: 320 }}>
//             <AnimatePresence mode="wait" custom={direction}>
//               <motion.div
//                 key={activeIndex}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{
//                   x: { type: 'spring', stiffness: 300, damping: 30 },
//                   opacity: { duration: 0.3 },
//                 }}
//                 style={{ position: 'absolute', width: '100%' }}
//               >
//                 <div style={{ textAlign: 'center' }}>
//                   {/* Avatar */}
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
//                     style={{
//                       width: 80,
//                       height: 80,
//                       borderRadius: '50%',
//                       overflow: 'hidden',
//                       margin: '0 auto 20px',
//                       border: '3px solid #0ea5e9',
//                       boxShadow: '0 4px 12px rgba(14,165,233,0.2)',
//                     }}
//                   >
//                     <img
//                       src={TESTIMONIALS[activeIndex].image}
//                       alt={TESTIMONIALS[activeIndex].name}
//                       style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                     />
//                   </motion.div>

//                   {/* Rating Stars */}
//                   <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 16 }}>
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
//                     ))}
//                   </div>

//                   {/* Quote Text */}
//                   <p
//                     style={{
//                       fontSize: 'clamp(16px, 1.8vw, 18px)',
//                       color: '#334155',
//                       fontFamily: "'DM Sans', sans-serif",
//                       lineHeight: 1.7,
//                       maxWidth: 800,
//                       margin: '0 auto 24px',
//                       fontStyle: 'italic',
//                     }}
//                   >
//                     "{TESTIMONIALS[activeIndex].quote}"
//                   </p>

//                   {/* Author Info */}
//                   <div>
//                     <h4
//                       style={{
//                         fontSize: 18,
//                         fontWeight: 700,
//                         color: '#1e3a8a',
//                         fontFamily: "'Playfair Display', serif",
//                         marginBottom: 4,
//                       }}
//                     >
//                       {TESTIMONIALS[activeIndex].name}
//                     </h4>
//                     <div
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         gap: 12,
//                         fontSize: 13,
//                         color: '#64748b',
//                         fontFamily: "'DM Sans', sans-serif",
//                       }}
//                     >
//                       <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
//                         <Briefcase size={12} />
//                         {TESTIMONIALS[activeIndex].role}
//                       </span>
//                       <span>•</span>
//                       <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
//                         <Calendar size={12} />
//                         Class of {TESTIMONIALS[activeIndex].year}
//                       </span>
//                     </div>
//                     <div
//                       style={{
//                         fontSize: 12,
//                         color: '#0ea5e9',
//                         fontWeight: 600,
//                         marginTop: 8,
//                       }}
//                     >
//                       {TESTIMONIALS[activeIndex].company}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Navigation Buttons */}
//           <div
//             style={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: 12,
//               marginTop: 40,
//             }}
//           >
//             <button
//               onClick={prevSlide}
//               style={{
//                 width: 40,
//                 height: 40,
//                 borderRadius: '50%',
//                 border: '1px solid #e2e8f0',
//                 background: '#fff',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 transition: 'all 0.3s',
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = '#1e3a8a';
//                 e.currentTarget.style.color = '#fff';
//                 e.currentTarget.style.borderColor = '#1e3a8a';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = '#fff';
//                 e.currentTarget.style.color = '#1e3a8a';
//                 e.currentTarget.style.borderColor = '#e2e8f0';
//               }}
//             >
//               <ChevronLeft size={20} color="currentColor" />
//             </button>

//             {/* Dot Indicators */}
//             <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
//               {TESTIMONIALS.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => {
//                     setDirection(idx > activeIndex ? 1 : -1);
//                     setActiveIndex(idx);
//                   }}
//                   style={{
//                     width: activeIndex === idx ? 32 : 8,
//                     height: 8,
//                     borderRadius: 4,
//                     border: 'none',
//                     background:
//                       activeIndex === idx
//                         ? 'linear-gradient(90deg, #1e3a8a, #0ea5e9)'
//                         : 'rgba(30,58,138,0.2)',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s ease',
//                   }}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={nextSlide}
//               style={{
//                 width: 40,
//                 height: 40,
//                 borderRadius: '50%',
//                 border: '1px solid #e2e8f0',
//                 background: '#fff',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 transition: 'all 0.3s',
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = '#1e3a8a';
//                 e.currentTarget.style.color = '#fff';
//                 e.currentTarget.style.borderColor = '#1e3a8a';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = '#fff';
//                 e.currentTarget.style.color = '#1e3a8a';
//                 e.currentTarget.style.borderColor = '#e2e8f0';
//               }}
//             >
//               <ChevronRight size={20} color="currentColor" />
//             </button>
//           </div>

//           {/* Auto-play indicator */}
//           {isAutoPlaying && isInView && (
//             <div
//               style={{
//                 position: 'absolute',
//                 bottom: 20,
//                 left: '50%',
//                 transform: 'translateX(-50%)',
//                 width: 60,
//                 height: 2,
//                 background: '#e2e8f0',
//                 borderRadius: 2,
//                 overflow: 'hidden',
//               }}
//             >
//               <motion.div
//                 initial={{ x: '-100%' }}
//                 animate={{ x: '0%' }}
//                 transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   background: 'linear-gradient(90deg, #1e3a8a, #0ea5e9)',
//                 }}
//               />
//             </div>
//           )}
//         </div>

//         {/* Bottom CTA */}
//         <Reveal delay={0.2}>
//           <div style={{ textAlign: 'center', marginTop: 48 }}>
//             <button
//               style={{
//                 background: 'linear-gradient(135deg, #1e3a8a, #0ea5e9)',
//                 border: 'none',
//                 color: '#fff',
//                 padding: '12px 28px',
//                 borderRadius: 10,
//                 fontSize: 14,
//                 fontWeight: 600,
//                 cursor: 'pointer',
//                 fontFamily: "'DM Sans', sans-serif",
//                 boxShadow: '0 6px 20px rgba(30,58,138,0.25)',
//                 transition: 'all 0.25s',
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-2px)';
//                 e.currentTarget.style.boxShadow = '0 10px 28px rgba(30,58,138,0.35)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'none';
//                 e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,58,138,0.25)';
//               }}
//             >
//               Join Our Alumni Network
//             </button>
//           </div>
//         </Reveal>
//       </div>

//       <style>{`
//         .text-gradient {
//           background: linear-gradient(135deg, #1e3a8a, #0ea5e9);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }
//       `}</style>
//     </section>
//   );
// }


// import { useRef, useEffect, useState } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { Quote, Star, ChevronLeft, ChevronRight, Briefcase, Calendar, Users, TrendingUp, Award, ThumbsUp } from 'lucide-react';

// const TESTIMONIALS = [
//   {
//     name: 'Nimmakayala Vijay',
//     role: 'Research Associate',
//     company: 'Genentech Solutions',
//     year: '2022',
//     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
//     quote: 'The faculty here are highly knowledgeable and supportive. They explain every concept clearly and are always available for doubt-solving. The teaching methods are practical, which makes learning much easier.',
//     rating: 5,
//   },
//   {
//     name: 'K. Manoj Kumar',
//     role: 'Quality Analyst',
//     company: 'PharmaCore Labs',
//     year: '2023',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
//     quote: 'Thanks to the placement team, I was able to secure a good job right after completing my course. The mock interviews and resume preparation sessions were very useful.',
//     rating: 5,
//   },
//   {
//     name: 'K. Ganapathi Vara Prasad',
//     role: 'Lab Manager',
//     company: 'BioResearch India',
//     year: '2024',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
//     quote: 'The curriculum is well-structured and updated with the latest industry trends. I really appreciate how they include real-world projects and case studies.',
//     rating: 5,
//   },
//   {
//     name: 'Sneha Reddy',
//     role: 'R&D Scientist',
//     company: 'AstraZeneca India',
//     year: '2023',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
//     quote: 'The hands-on training and exposure to cutting-edge equipment gave me the confidence to work in top-tier research facilities. Highly recommended!',
//     rating: 5,
//   },
//   {
//     name: 'Rajesh Kumar',
//     role: 'Technical Director',
//     company: 'LabTech Solutions',
//     year: '2021',
//     image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80',
//     quote: 'SmartLabTech transformed my career. Their industry-focused approach and expert mentorship helped me climb the corporate ladder quickly.',
//     rating: 5,
//   },
//   {
//     name: 'Priya Sharma',
//     role: 'Biotech Researcher',
//     company: 'NovoLife Sciences',
//     year: '2024',
//     image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80',
//     quote: 'The practical exposure and modern lab facilities gave me an edge in my career. The mentorship program is outstanding!',
//     rating: 5,
//   },
// ];

// const COMPANY_STATS = [
//   { icon: Users, value: '5000+', label: 'Alumni Network', color: '#1e3a8a' },
//   { icon: TrendingUp, value: '95%', label: 'Placement Rate', color: '#0284c7' },
//   { icon: Award, value: '150+', label: 'Industry Partners', color: '#0ea5e9' },
//   { icon: ThumbsUp, value: '98%', label: 'Satisfaction Rate', color: '#1d4ed8' },
// ];

// function Reveal({ children, delay = 0 }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-50px' });
//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 40 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export default function Testimonials() {
//   const scrollContainerRef = useRef(null);
//   const sectionRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

//   const cardWidth = 340; // Width of each card including gap
//   const visibleCards = 2;
//   const maxScroll = (TESTIMONIALS.length - visibleCards) * cardWidth;

//   const scrollToIndex = (index) => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = Math.min(index * cardWidth, maxScroll);
//       scrollContainerRef.current.scrollTo({
//         left: scrollAmount,
//         behavior: 'smooth',
//       });
//       setActiveIndex(index);
//     }
//   };

//   const nextSlide = () => {
//     const nextIndex = Math.min(activeIndex + 1, TESTIMONIALS.length - visibleCards);
//     scrollToIndex(nextIndex);
//   };

//   const prevSlide = () => {
//     const prevIndex = Math.max(activeIndex - 1, 0);
//     scrollToIndex(prevIndex);
//   };

//   // Auto-scroll logic
//   useEffect(() => {
//     if (!scrollContainerRef.current || isHovered || !isInView) return;

//     const interval = setInterval(() => {
//       let nextIndex = activeIndex + 1;
//       if (nextIndex > TESTIMONIALS.length - visibleCards) {
//         nextIndex = 0;
//       }
//       scrollToIndex(nextIndex);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [activeIndex, isHovered, isInView]);

//   // Handle scroll events to update active index
//   const handleScroll = () => {
//     if (!scrollContainerRef.current) return;
//     const container = scrollContainerRef.current;
//     const scrollLeft = container.scrollLeft;
//     const newIndex = Math.round(scrollLeft / cardWidth);
//     if (newIndex !== activeIndex && newIndex >= 0 && newIndex <= TESTIMONIALS.length - visibleCards) {
//       setActiveIndex(newIndex);
//     }
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="testimonials"
//       style={{
//         background: '#f8faff',
//         padding: 'clamp(64px, 8vw, 120px) 0',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Background decorative elements */}
//       <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
//         <div
//           style={{
//             position: 'absolute',
//             top: '20%',
//             right: '-10%',
//             width: 500,
//             height: 500,
//             background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)',
//             borderRadius: '50%',
//           }}
//         />
//         <div
//           style={{
//             position: 'absolute',
//             bottom: '10%',
//             left: '-5%',
//             width: 400,
//             height: 400,
//             background: 'radial-gradient(circle, rgba(30,58,138,0.04) 0%, transparent 70%)',
//             borderRadius: '50%',
//           }}
//         />
//       </div>

//       <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px, 5vw, 80px)', position: 'relative', zIndex: 1 }}>
        
//         {/* Header Section */}
//         <Reveal>
//           <div style={{ textAlign: 'center', marginBottom: 64 }}>
//             <div
//               style={{
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: 8,
//                 background: 'rgba(14,165,233,0.08)',
//                 border: '1px solid rgba(14,165,233,0.2)',
//                 borderRadius: 20,
//                 padding: '5px 14px',
//                 marginBottom: 20,
//               }}
//             >
//               <Quote size={14} color="#0284c7" />
//               <span
//                 style={{
//                   fontSize: 11,
//                   fontWeight: 700,
//                   color: '#0284c7',
//                   fontFamily: "'DM Sans', sans-serif",
//                   letterSpacing: '0.1em',
//                   textTransform: 'uppercase',
//                 }}
//               >
//                 Success Stories
//               </span>
//             </div>
//             <h2
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//                 fontSize: 'clamp(26px, 3.5vw, 48px)',
//                 fontWeight: 700,
//                 color: '#0f172a',
//                 lineHeight: 1.2,
//                 marginBottom: 14,
//               }}
//             >
//               What Our{' '}
//               <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #1e3a8a, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//                 Alumni
//               </span>{' '}
//               Say
//             </h2>
//             <p
//               style={{
//                 fontSize: 16,
//                 color: '#64748b',
//                 fontFamily: "'DM Sans', sans-serif",
//                 lineHeight: 1.7,
//                 maxWidth: 600,
//                 margin: '0 auto',
//               }}
//             >
//               Over 5,000 successful graduates building the future of science and technology
//             </p>
//           </div>
//         </Reveal>

//         {/* Company Introduction & Stats */}
//         <Reveal delay={0.1}>
//           <div
//             style={{
//               background: '#fff',
//               borderRadius: 20,
//               padding: 'clamp(24px, 4vw, 40px)',
//               marginBottom: 64,
//               boxShadow: '0 4px 24px rgba(30,58,138,0.06)',
//               border: '1px solid #e2e8f0',
//             }}
//           >
//             <div style={{ textAlign: 'center', marginBottom: 32 }}>
//               <h3
//                 style={{
//                   fontFamily: "'Playfair Display', serif",
//                   fontSize: 'clamp(20px, 2.5vw, 28px)',
//                   fontWeight: 700,
//                   color: '#1e3a8a',
//                   marginBottom: 12,
//                 }}
//               >
//                 SmartLabTech Academy of Excellence
//               </h3>
//               <p
//                 style={{
//                   fontSize: 15,
//                   color: '#475569',
//                   fontFamily: "'DM Sans', sans-serif",
//                   lineHeight: 1.7,
//                   maxWidth: 800,
//                   margin: '0 auto',
//                 }}
//               >
//                 Since 2010, SmartLabTech Academy has been nurturing scientific talent through industry-aligned training programs, 
//                 cutting-edge laboratory infrastructure, and placement assistance with 500+ partner companies across India and abroad.
//               </p>
//             </div>

//             {/* Stats Grid */}
//             <div
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
//                 gap: 20,
//               }}
//             >
//               {COMPANY_STATS.map((stat, idx) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: idx * 0.1 }}
//                   style={{
//                     textAlign: 'center',
//                     padding: '20px',
//                     background: 'linear-gradient(135deg, rgba(30,58,138,0.03), rgba(14,165,233,0.03))',
//                     borderRadius: 12,
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: 48,
//                       height: 48,
//                       background: `${stat.color}12`,
//                       borderRadius: 12,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       margin: '0 auto 12px',
//                     }}
//                   >
//                     <stat.icon size={22} color={stat.color} />
//                   </div>
//                   <div
//                     style={{
//                       fontSize: 28,
//                       fontWeight: 800,
//                       color: stat.color,
//                       fontFamily: "'Playfair Display', serif",
//                       lineHeight: 1,
//                       marginBottom: 6,
//                     }}
//                   >
//                     {stat.value}
//                   </div>
//                   <div
//                     style={{
//                       fontSize: 12,
//                       color: '#64748b',
//                       fontFamily: "'DM Sans', sans-serif",
//                       letterSpacing: '0.05em',
//                     }}
//                   >
//                     {stat.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </Reveal>

//         {/* Testimonials Horizontal Scroll Section */}
//         <div
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           style={{ position: 'relative' }}
//         >
//           {/* Gradient fade overlays */}
//           <div
//             style={{
//               position: 'absolute',
//               left: 0,
//               top: 0,
//               bottom: 0,
//               width: 40,
//               background: 'linear-gradient(to right, #f8faff, transparent)',
//               pointerEvents: 'none',
//               zIndex: 2,
//             }}
//           />
//           <div
//             style={{
//               position: 'absolute',
//               right: 0,
//               top: 0,
//               bottom: 0,
//               width: 40,
//               background: 'linear-gradient(to left, #f8faff, transparent)',
//               pointerEvents: 'none',
//               zIndex: 2,
//             }}
//           />

//           {/* Navigation Arrows */}
//           <button
//             onClick={prevSlide}
//             disabled={activeIndex === 0}
//             style={{
//               position: 'absolute',
//               left: -20,
//               top: '50%',
//               transform: 'translateY(-50%)',
//               width: 44,
//               height: 44,
//               borderRadius: '50%',
//               border: '1px solid #e2e8f0',
//               background: '#fff',
//               cursor: activeIndex === 0 ? 'not-allowed' : 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               zIndex: 3,
//               opacity: activeIndex === 0 ? 0.5 : 1,
//               transition: 'all 0.3s',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             }}
//             onMouseEnter={(e) => {
//               if (activeIndex !== 0) {
//                 e.currentTarget.style.background = '#1e3a8a';
//                 e.currentTarget.style.color = '#fff';
//               }
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = '#fff';
//               e.currentTarget.style.color = '#1e3a8a';
//             }}
//           >
//             <ChevronLeft size={20} color="currentColor" />
//           </button>

//           <button
//             onClick={nextSlide}
//             disabled={activeIndex >= TESTIMONIALS.length - 2}
//             style={{
//               position: 'absolute',
//               right: -20,
//               top: '50%',
//               transform: 'translateY(-50%)',
//               width: 44,
//               height: 44,
//               borderRadius: '50%',
//               border: '1px solid #e2e8f0',
//               background: '#fff',
//               cursor: activeIndex >= TESTIMONIALS.length - 2 ? 'not-allowed' : 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               zIndex: 3,
//               opacity: activeIndex >= TESTIMONIALS.length - 2 ? 0.5 : 1,
//               transition: 'all 0.3s',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//             }}
//             onMouseEnter={(e) => {
//               if (activeIndex < TESTIMONIALS.length - 2) {
//                 e.currentTarget.style.background = '#1e3a8a';
//                 e.currentTarget.style.color = '#fff';
//               }
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = '#fff';
//               e.currentTarget.style.color = '#1e3a8a';
//             }}
//           >
//             <ChevronRight size={20} color="currentColor" />
//           </button>

//           {/* Scroll Container */}
//           <div
//             ref={scrollContainerRef}
//             onScroll={handleScroll}
//             style={{
//               display: 'flex',
//               gap: 24,
//               overflowX: 'auto',
//               scrollBehavior: 'smooth',
//               scrollbarWidth: 'none',
//               msOverflowStyle: 'none',
//               padding: '20px 10px',
//               cursor: isHovered ? 'grab' : 'default',
//             }}
//             className="hide-scrollbar"
//           >
//             {TESTIMONIALS.map((testimonial, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 style={{
//                   minWidth: 320,
//                   flex: '1 1 auto',
//                   background: '#fff',
//                   borderRadius: 20,
//                   padding: '28px',
//                   boxShadow: '0 8px 24px rgba(30,58,138,0.08)',
//                   border: '1px solid #e2e8f0',
//                   transition: 'all 0.3s ease',
//                 }}
//                 whileHover={{
//                   y: -8,
//                   boxShadow: '0 16px 32px rgba(30,58,138,0.12)',
//                   borderColor: '#0ea5e9',
//                 }}
//               >
//                 {/* Quote Icon */}
//                 <Quote
//                   size={32}
//                   style={{
//                     color: '#0ea5e9',
//                     opacity: 0.2,
//                     marginBottom: 16,
//                   }}
//                 />

//                 {/* Rating Stars */}
//                 <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
//                   ))}
//                 </div>

//                 {/* Quote Text */}
//                 <p
//                   style={{
//                     fontSize: 14,
//                     color: '#475569',
//                     fontFamily: "'DM Sans', sans-serif",
//                     lineHeight: 1.7,
//                     marginBottom: 20,
//                     minHeight: 100,
//                   }}
//                 >
//                   "{testimonial.quote.substring(0, 120)}..."
//                 </p>

//                 {/* Author Info */}
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
//                   <div
//                     style={{
//                       width: 48,
//                       height: 48,
//                       borderRadius: '50%',
//                       overflow: 'hidden',
//                       border: '2px solid #0ea5e9',
//                     }}
//                   >
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                     />
//                   </div>
//                   <div>
//                     <h4
//                       style={{
//                         fontSize: 15,
//                         fontWeight: 700,
//                         color: '#1e3a8a',
//                         fontFamily: "'DM Sans', sans-serif",
//                         marginBottom: 3,
//                       }}
//                     >
//                       {testimonial.name}
//                     </h4>
//                     <div
//                       style={{
//                         fontSize: 11,
//                         color: '#64748b',
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: 6,
//                       }}
//                     >
//                       <Briefcase size={10} />
//                       <span>{testimonial.role}</span>
//                       <span>•</span>
//                       <Calendar size={10} />
//                       <span>{testimonial.year}</span>
//                     </div>
//                     <div
//                       style={{
//                         fontSize: 11,
//                         color: '#0ea5e9',
//                         fontWeight: 600,
//                         marginTop: 2,
//                       }}
//                     >
//                       {testimonial.company}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Progress Indicators */}
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             gap: 10,
//             marginTop: 32,
//           }}
//         >
//           {[...Array(TESTIMONIALS.length - 1)].map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => scrollToIndex(idx)}
//               style={{
//                 width: activeIndex === idx ? 32 : 8,
//                 height: 8,
//                 borderRadius: 4,
//                 border: 'none',
//                 background:
//                   activeIndex === idx
//                     ? 'linear-gradient(90deg, #1e3a8a, #0ea5e9)'
//                     : 'rgba(30,58,138,0.2)',
//                 cursor: 'pointer',
//                 transition: 'all 0.3s ease',
//               }}
//             />
//           ))}
//         </div>

//         {/* Auto-play indicator */}
//         {!isHovered && isInView && (
//           <div
//             style={{
//               position: 'relative',
//               width: 120,
//               height: 2,
//               background: '#e2e8f0',
//               borderRadius: 2,
//               margin: '24px auto 0',
//               overflow: 'hidden',
//             }}
//           >
//             <motion.div
//               animate={{ x: ['-100%', '0%'] }}
//               transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 background: 'linear-gradient(90deg, #1e3a8a, #0ea5e9)',
//               }}
//             />
//           </div>
//         )}
//       </div>

//       <style>{`
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .text-gradient {
//           background: linear-gradient(135deg, #1e3a8a, #0ea5e9);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }
//         @media (max-width: 768px) {
//           button[style*="position: absolute"] {
//             display: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Briefcase, Calendar, Users, TrendingUp, Award, ThumbsUp } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Nimmakayala Vijay',
    role: 'Research Associate',
    company: 'Genentech Solutions',
    year: '2022',
    quote: 'The faculty here are highly knowledgeable and supportive. They explain every concept clearly and are always available for doubt-solving. The teaching methods are practical, which makes learning much easier.',
    rating: 5,
  },
  {
    name: 'K. Manoj Kumar',
    role: 'Quality Analyst',
    company: 'PharmaCore Labs',
    year: '2023',
    quote: 'Thanks to the placement team, I was able to secure a good job right after completing my course. The mock interviews and resume preparation sessions were very useful.',
    rating: 4,
  },
  {
    name: 'K. Ganapathi Vara Prasad',
    role: 'Lab Manager',
    company: 'BioResearch India',
    year: '2024',
    quote: 'The curriculum is well-structured and updated with the latest industry trends. I really appreciate how they include real-world projects and case studies.',
    rating: 4,
  },
  {
    name: 'Sneha Reddy',
    role: 'R&D Scientist',
    company: 'AstraZeneca India',
    year: '2023',
    quote: 'The hands-on training and exposure to cutting-edge equipment gave me the confidence to work in top-tier research facilities. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Technical Director',
    company: 'LabTech Solutions',
    year: '2021',
    quote: 'SmartLabTech transformed my career. Their industry-focused approach and expert mentorship helped me climb the corporate ladder quickly.',
    rating: 5,
  },
];

const COMPANY_STATS = [
  { icon: Users, value: '5000+', label: 'Alumni Network', color: '#1e3a8a' },
  { icon: TrendingUp, value: '95%', label: 'Placement Rate', color: '#0284c7' },
  { icon: Award, value: '150+', label: 'Industry Partners', color: '#0ea5e9' },
  { icon: ThumbsUp, value: '98%', label: 'Satisfaction Rate', color: '#1d4ed8' },
];

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function Testimonials() {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const cardWidth = 380;
  const visibleCards = 2;
  const maxScroll = (TESTIMONIALS.length - visibleCards) * cardWidth;

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const scrollAmount = Math.min(index * cardWidth, maxScroll);
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  const nextSlide = () => {
    const nextIndex = Math.min(activeIndex + 1, TESTIMONIALS.length - visibleCards);
    scrollToIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = Math.max(activeIndex - 1, 0);
    scrollToIndex(prevIndex);
  };

  // Auto-scroll logic
  useEffect(() => {
    if (!scrollContainerRef.current || isHovered || !isInView) return;

    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex > TESTIMONIALS.length - visibleCards) {
        nextIndex = 0;
      }
      scrollToIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex, isHovered, isInView]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex <= TESTIMONIALS.length - visibleCards) {
      setActiveIndex(newIndex);
    }
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    return (
      <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < rating ? '#fbbf24' : '#e2e8f0'}
            color={i < rating ? '#fbbf24' : '#e2e8f0'}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      style={{
        background: '#f8faff',
        padding: 'clamp(64px, 8vw, 100px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(16px, 5vw, 80px)', position: 'relative', zIndex: 1 }}>
        
        {/* Header Section */}
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(14,165,233,0.08)',
                border: '1px solid rgba(14,165,233,0.2)',
                borderRadius: 20,
                padding: '5px 14px',
                marginBottom: 20,
              }}
            >
              <Quote size={14} color="#0284c7" />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#0284c7',
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                What Our Alumni Says?
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 700,
                color: '#0f172a',
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              What Our{' '}
              <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #1e3a8a, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Alumni
              </span>{' '}
              Speaks?
            </h2>
            <p
              style={{
                fontSize: 15,
                color: '#64748b',
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.6,
                maxWidth: 550,
                margin: '0 auto',
              }}
            >
              Real stories from our successful graduates
            </p>
          </div>
        </Reveal>

        {/* Testimonials Horizontal Scroll Section */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ position: 'relative' }}
        >
          {/* Gradient fade overlays */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 50,
              background: 'linear-gradient(to right, #f8faff, transparent)',
              pointerEvents: 'none',
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: 50,
              background: 'linear-gradient(to left, #f8faff, transparent)',
              pointerEvents: 'none',
              zIndex: 2,
            }}
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: -15,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '1px solid #e2e8f0',
              background: '#fff',
              cursor: 'pointer',
              display: activeIndex === 0 ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3,
              transition: 'all 0.3s',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1e3a8a';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#1e3a8a';
            }}
          >
            <ChevronLeft size={18} color="currentColor" />
          </button>

          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: -15,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '1px solid #e2e8f0',
              background: '#fff',
              cursor: 'pointer',
              display: activeIndex >= TESTIMONIALS.length - 2 ? 'none' : 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3,
              transition: 'all 0.3s',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1e3a8a';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.color = '#1e3a8a';
            }}
          >
            <ChevronRight size={18} color="currentColor" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            style={{
              display: 'flex',
              gap: 24,
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              padding: '10px 0 20px 0',
              cursor: isHovered ? 'grab' : 'default',
            }}
            className="hide-scrollbar"
          >
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                style={{
                  minWidth: 340,
                  flex: '1 1 auto',
                  background: '#fff',
                  borderRadius: 16,
                  padding: '28px 24px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                  border: '1px solid #eef2f6',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 12px 28px rgba(30,58,138,0.12)',
                  borderColor: '#0ea5e9',
                }}
              >
                {/* Name */}
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#1e3a8a',
                    fontFamily: "'DM Sans', sans-serif",
                    marginBottom: 8,
                  }}
                >
                  {testimonial.name}
                </h3>

                {/* Stars */}
                {renderStars(testimonial.rating)}

                {/* Quote Text */}
                <p
                  style={{
                    fontSize: 14,
                    color: '#475569',
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: 1.7,
                    marginBottom: 0,
                  }}
                >
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 10,
            marginTop: 32,
          }}
        >
          {[...Array(TESTIMONIALS.length - 1)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              style={{
                width: activeIndex === idx ? 32 : 8,
                height: 8,
                borderRadius: 4,
                border: 'none',
                background:
                  activeIndex === idx
                    ? 'linear-gradient(90deg, #1e3a8a, #0ea5e9)'
                    : 'rgba(30,58,138,0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

        {/* Auto-play indicator bar */}
        {!isHovered && isInView && (
          <div
            style={{
              position: 'relative',
              width: 100,
              height: 2,
              background: '#e2e8f0',
              borderRadius: 2,
              margin: '24px auto 0',
              overflow: 'hidden',
            }}
          >
            <motion.div
              animate={{ x: ['-100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, #1e3a8a, #0ea5e9)',
              }}
            />
          </div>
        )}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .text-gradient {
          background: linear-gradient(135deg, #1e3a8a, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @media (max-width: 768px) {
          button[style*="position: absolute"] {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}