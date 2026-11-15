"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, BrainCircuit, Cpu, Code2, Sparkles } from "lucide-react";
import { site } from "@/data/content";

const nodes = [[50,13],[24,25],[75,23],[13,52],[36,44],[63,46],[87,54],[28,76],[53,83],[76,77],[50,60],[50,31]];
const edges = [[0,1],[0,2],[0,11],[1,3],[1,4],[2,5],[2,6],[3,7],[4,10],[4,11],[5,10],[5,11],[6,9],[7,8],[8,9],[8,10],[9,10],[10,11]];

function NeuralOrb({ reduced }) {
  return (
    <div className="ai-visual" aria-hidden="true">
      <div className="ai-visual-glow" />
      <motion.div className="ai-orb-shell" animate={reduced ? {} : { y: [0,-12,0] }} transition={{ duration:7, repeat:Infinity, ease:"easeInOut" }}>
        <div className="ai-orb-ring ai-orb-ring-one" />
        <div className="ai-orb-ring ai-orb-ring-two" />
        <div className="ai-orb-ring ai-orb-ring-three" />
        <div className="ai-orb-core">
          <svg viewBox="0 0 100 100" className="ai-network" focusable="false">
            <defs><linearGradient id="network-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#a78bfa"/><stop offset="100%" stopColor="#22d3ee"/></linearGradient></defs>
            {edges.map(([a,b],i) => <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="url(#network-gradient)" strokeWidth=".35" opacity=".65" />)}
            {nodes.map(([x,y],i) => <circle key={i} cx={x} cy={y} r={i===10 ? 2.2 : 1.25} fill={i%2 ? "#22d3ee" : "#a78bfa"} />)}
          </svg>
          <div className="ai-core-center"><BrainCircuit size={42} strokeWidth={1.3}/></div>
        </div>
      </motion.div>
      <motion.div className="ai-float-card ai-float-card-top" animate={reduced ? {} : {y:[0,-7,0]}} transition={{duration:5,repeat:Infinity}}><Cpu size={17}/><span>Artificial Intelligence</span></motion.div>
      <motion.div className="ai-float-card ai-float-card-bottom" animate={reduced ? {} : {y:[0,7,0]}} transition={{duration:6,repeat:Infinity}}><Code2 size={17}/><span>Python · AI · Automation</span></motion.div>
    </div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const reveal = (delay=0) => ({
    initial: reduced ? false : {opacity:0,y:22},
    animate: {opacity:1,y:0},
    transition: {duration:reduced ? 0 : .65,delay:reduced ? 0 : delay,ease:"easeOut"}
  });
  return (
    <section id="home" className="hero-section grid-glow">
      <div className="section hero-container">
        <div className="hero-content">
          <motion.div {...reveal(.1)} className="hero-status"><span className="hero-status-dot"/><span>HELLO, I'M {site.name.toUpperCase()}</span></motion.div>
          <motion.p {...reveal(.15)} className="hero-role"><Sparkles size={16}/>{site.role}</motion.p>
          <motion.h1 {...reveal(.2)} className="hero-heading">Building the<br/>future with<br/><span className="gradient-text">AI &amp; Code.</span></motion.h1>
          <motion.p {...reveal(.3)} className="hero-description">{site.tagline}</motion.p>
          <motion.div {...reveal(.4)} className="hero-actions">
            <a href="#projects" className="button-primary">Explore my work <ArrowUpRight size={18}/></a>
            <a href="#contact" className="button-secondary">Let's connect <Mail size={18}/></a>
          </motion.div>
          <motion.div {...reveal(.5)} className="hero-tech">{["Python","C++","Artificial Intelligence","Automation"].map(item=><span className="hero-tech-tag" key={item}>{item}</span>)}</motion.div>
          <motion.div {...reveal(.6)} className="hero-bottom">
            <a href="#about" className="hero-scroll"><ArrowDown size={17}/>Scroll to explore</a>
            <div className="hero-socials">
              {site.social.github && <a href={site.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={19}/></a>}
              {site.social.linkedin && <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={19}/></a>}
            </div>
          </motion.div>
        </div>
        <motion.div className="hero-art" initial={reduced ? false : {opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:reduced ? 0 : .9,delay:reduced ? 0 : .3}}><NeuralOrb reduced={reduced}/></motion.div>
      </div>
    </section>
  );
}
