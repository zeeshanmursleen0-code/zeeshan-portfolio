"use client";
import { useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
export default function Providers({ children }) {
  const [theme,setTheme] = useState('dark'); const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll(); const scaleX = useSpring(scrollYProgress,{ stiffness:120,damping:30,restDelta:.001 });
  useEffect(()=>{ const saved=localStorage.getItem('portfolio-theme'); const next=saved==='light'?'light':'dark'; setTheme(next); document.documentElement.classList.toggle('light',next==='light'); },[]);
  useEffect(()=>{ if(reduce) return; const lenis=new Lenis({duration:1.1,autoRaf:true}); return ()=>lenis.destroy(); },[reduce]);
  const toggle=()=>{const next=theme==='dark'?'light':'dark'; setTheme(next); localStorage.setItem('portfolio-theme',next); document.documentElement.classList.toggle('light',next==='light');};
  return <><motion.div aria-hidden="true" className="fixed top-0 left-0 right-0 z-[100] h-1 origin-left bg-violet-400" style={{scaleX}}/>{typeof children === "function" ? children({theme,toggle}) : children}</>;
}