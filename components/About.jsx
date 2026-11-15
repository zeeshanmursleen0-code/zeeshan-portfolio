"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GraduationCap, MapPin, Sparkles, Code2 } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/data/content";

export default function About() {
  const reduce = useReducedMotion();
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <Reveal>
        <p className="eyebrow">01 / Get to know me</p>
        <h2 id="about-heading" className="section-title">The person behind <span className="gradient-text">the code.</span></h2>
        <p className="muted mt-5 max-w-2xl leading-relaxed">Curiosity, engineering fundamentals, and a commitment to building useful technology.</p>
      </Reveal>
      <div className="about-layout">
        <Reveal>
          <motion.div className="about-photo-card" whileHover={reduce ? undefined : { y: -6 }} transition={{ duration: 0.3 }}>
            <div className="about-photo-glow" aria-hidden="true" />
            <div className="about-photo-frame">
              <Image src={site.portrait} alt="Professional portrait of Zeeshan Mursleen wearing a navy suit and glasses" fill sizes="(max-width: 768px) 90vw, (max-width: 1200px) 42vw, 440px" className="object-cover" priority={false} />
            </div>
            <div className="about-photo-caption"><span className="about-availability-dot" aria-hidden="true" /> {site.availability}</div>
          </motion.div>
        </Reveal>
        <div className="about-copy">
          <Reveal delay={0.08}>
            <p className="about-kicker"><Sparkles size={17} /> AI · Software · Automation</p>
            <h3 className="about-intro">Hi, I’m <span className="gradient-text">{site.name}.</span></h3>
            <div className="about-bio">{site.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="about-info-grid">
              <div className="about-info-item"><GraduationCap size={21} aria-hidden="true" /><div><strong>BS Artificial Intelligence</strong><span>UET Lahore · Expected graduation 2029</span></div></div>
              <div className="about-info-item"><MapPin size={21} aria-hidden="true" /><div><strong>Based in Pakistan</strong><span>{site.location}</span></div></div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="about-stat-grid">
              {site.stats.map((stat) => <div className="about-stat" key={stat.label}><strong>{stat.value}{stat.suffix}</strong><span>{stat.label}</span></div>)}
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="about-links"><a href="#projects" className="button-primary">Explore my projects <ArrowUpRight size={18}/></a><a href="#skills" className="about-text-link"><Code2 size={17}/> View my skills</a></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
