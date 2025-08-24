import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_GLOW_COLOR = "60, 130, 255";
const MOBILE_BREAKPOINT = 768;

const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position: absolute; width: 4px; height: 4px; border-radius: 50%;
    background: rgba(${color}, 1); box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none; z-index: 100; left: ${x}px; top: ${y}px;
  `;
  return el;
};

const ParticleCard = ({ children, className = "", particleCount = DEFAULT_PARTICLE_COUNT, glowColor = DEFAULT_GLOW_COLOR }) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef([]);
  const particlesInitialized = useRef(false);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0, opacity: 0, duration: 0.3, ease: "back.in(1.7)",
        onComplete: () => { particle.parentNode?.removeChild(particle); },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    if (!particlesInitialized.current) initializeParticles();
    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);
        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" });
      }, index * 100);
      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;
    const handleMouseEnter = () => { isHoveredRef.current = true; animateParticles(); };
    const handleMouseLeave = () => { isHoveredRef.current = false; clearAllParticles(); };
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles]);

  return <div ref={cardRef} className={`${className} relative overflow-hidden`}>{children}</div>;
};

const MagicBento = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <style>{`
          .magic-card-light {
            /* Efek kaca buram (glassmorphism) */
            background-color: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: #1e293b; /* Warna teks gelap (slate-800) */
            transition: all 0.3s ease-in-out;
          }
          .magic-card-light:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
            border-color: rgba(60, 130, 255, 0.5);
          }
      `}</style>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <ParticleCard
            key={index}
            className="magic-card-light p-6 rounded-xl flex flex-col justify-start shadow-lg"
            disableAnimations={isMobile}
          >
            <div className="flex items-center gap-4 w-full mb-4">
                <div className="text-blue-600 text-3xl">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
            </div>
            
            <div className="w-full space-y-2 text-left">
                {item.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-3">
                        {skill.icon ? skill.icon : <div className="w-6 h-6"></div>}
                        <span className="text-slate-600 text-sm">{skill.name}</span>
                    </div>
                ))}
            </div>
          </ParticleCard>
        ))}
      </div>
    </>
  );
};

export default MagicBento;
