import React from 'react';
import rioBg from '../assets/rio-hero-bg.jpg';

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${rioBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Secretaria Municipal do Rio de Janeiro:
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 leading-tight">
          Dados que Encantam, Insights que Movem Bilhões
        </h2>
      </div>
    </section>
  );
};