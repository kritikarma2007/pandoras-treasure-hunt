/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { QRCodeSVG } from "qrcode.react";
import { Sparkles, Gem, Crown, DoorOpen, ArrowLeft, Zap, Eye, Star } from "lucide-react";
import { CLUES, Clue } from "./types";

const GlitterBackground = ({ count = 50, opacity = 1 }: { count?: number; opacity?: number }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity }}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="glitter-particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden"
  >
    <GlitterBackground />
    
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="relative z-10 -translate-y-16"
    >
      <motion.h1 
        className="font-horror text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] text-horror-gold animate-flicker tracking-[0.2em] mb-6 leading-none"
        style={{ textShadow: '0 0 40px rgba(184, 134, 11, 0.7)' }}
      >
        TREASURE<br/>HUNT
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="font-serif italic text-lg md:text-xl tracking-[0.3em] uppercase text-horror-paper/80"
      >
        Pandora's House Awaits Your Soul
      </motion.p>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ delay: 3, duration: 2 }}
      className="absolute bottom-10 flex flex-col items-center gap-4"
    >
      <span className="text-xs font-serif uppercase tracking-widest text-horror-gold">Scroll to Begin</span>
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-px h-12 bg-horror-gold/50"
      />
    </motion.div>
  </motion.div>
);

interface ClueCardProps {
  clue: Clue;
}

const ClueCard: React.FC<ClueCardProps> = ({ clue }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group relative"
  >
    <Link to={`/clue/${clue.id}`}>
      <div className="gothic-border bg-black/40 backdrop-blur-sm p-8 h-64 flex flex-col items-center justify-center gap-4 overflow-hidden">
        <GlitterBackground count={15} opacity={0.3} />
        
        <span className="font-horror text-5xl text-horror-gold opacity-40 group-hover:opacity-100 transition-all duration-500 relative z-10">
          {clue.id.toString().padStart(2, '0')}
        </span>
        
        <div className="space-y-2 text-center relative z-10">
          <h3 className="font-serif text-xl tracking-widest group-hover:text-horror-gold transition-colors duration-500">
            {clue.title}
          </h3>
          <div className="w-8 h-px bg-horror-gold/20 mx-auto group-hover:w-16 group-hover:bg-horror-gold transition-all duration-500" />
        </div>

        <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-horror-gold/60">
          <Sparkles size={10} /> Enter
        </div>
      </div>
    </Link>
  </motion.div>
);

const Home = () => (
  <div className="w-full">
    <Hero />
    <div className="max-w-7xl mx-auto px-6 pb-40">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center gap-12"
      >
        {CLUES.map((clue) => (
          <div key={clue.id} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-sm">
            <ClueCard clue={clue} />
          </div>
        ))}
      </motion.div>
      
      <footer className="mt-40 pt-10 border-t border-horror-gold/10 text-center opacity-40 font-serif italic">
        <p className="tracking-widest uppercase text-xs">Enter the Chaos. Exit a Champion.</p>
        <p className="mt-2">&copy; 2026 Pandora's House of ANTERIX...</p>
      </footer>
    </div>
  </div>
);

const CluePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const clue = CLUES.find(c => c.id === Number(id));

  if (!clue) return <div className="flex items-center justify-center h-screen">Lost in the void...</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen.png")',
        backgroundColor: '#0a0502'
      }}
    >
      <GlitterBackground count={50} opacity={0.6} />
      
      <motion.button
        onClick={() => navigate('/')}
        whileHover={{ x: -5 }}
        className="absolute top-10 left-10 flex items-center gap-2 text-horror-gold font-serif italic hover:text-horror-paper transition-colors z-20"
      >
        <ArrowLeft size={20} /> Return to the Shadows
      </motion.button>

      <div className="max-w-md w-full gothic-border bg-black/60 p-10 flex flex-col items-center gap-8 text-center shadow-2xl relative z-10">
        <motion.div
          initial={{ scale: 0.8, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 10 }}
        >
          <div className="p-4 bg-white rounded-sm shadow-[0_0_30px_rgba(184,134,11,0.3)]">
            <QRCodeSVG 
              value={clue.secret} 
              size={200}
              fgColor="#0f0702"
              level="H"
              includeMargin={true}
            />
          </div>
        </motion.div>

        <div className="space-y-4">
          <h2 className="font-horror text-5xl text-horror-gold tracking-widest">
            CLUE {clue.id}
          </h2>
          <p className="font-serif italic text-xl text-horror-paper/80 leading-relaxed">
            "{clue.description}"
          </p>
        </div>

        <div className="flex gap-4 opacity-40">
          <Zap size={16} />
          <DoorOpen size={16} />
          <Zap size={16} />
        </div>
        
        <p className="text-xs font-mono uppercase tracking-tighter opacity-30">
          Scan the mark to reveal the path
        </p>
      </div>
    </motion.div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen relative selection:bg-horror-gold selection:text-horror-bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clue/:id" element={<CluePage />} />
        </Routes>
      </div>
    </Router>
  );
}
