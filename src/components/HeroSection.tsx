'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: '600px', overflow: 'hidden' }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/berlin-hero.jpg"
          alt="Berlin Panorama"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          quality={90}
        />
        {/* Overlay Gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.3))'
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 20px',
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ maxWidth: '48rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          {/* Berlin Partner Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              borderRadius: '9999px',
              border: '1px solid rgba(96, 165, 250, 0.3)',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              padding: '0.5rem 1rem',
              width: 'fit-content',
              backdropFilter: 'blur(4px)'
            }}
          >
            <div
              style={{
                width: '0.5rem',
                height: '0.5rem',
                borderRadius: '50%',
                backgroundColor: '#60a5fa',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            />
            <span
              style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#bfdbfe'
              }}
            >
              Berlin Partner für Wirtschaft & Technologie
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <h1
              style={{
                fontSize: 'clamp(2rem, 10vw, 3.5rem)',
                fontWeight: '700',
                color: '#ffffff',
                lineHeight: '1.2'
              }}
            >
              Von der Idee zur
              <span
                style={{
                  display: 'block',
                  backgroundImage: 'linear-gradient(to right, #60a5fa, #06b6d4, #67e8f9)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                gemeinsamen Umsetzung
              </span>
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '40rem',
                lineHeight: '1.6'
              }}
            >
              Innovation Connect orchestriert Berlins wichtigste Tech-Player. Eine Plattform, die Bedarfe, Kompetenzen und Technologien live zusammenbringt – und sofort einsatzbereit macht.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              paddingTop: '1rem'
            }}
          >
            <a
              href="#board"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                borderRadius: '9999px',
                backgroundImage: 'linear-gradient(to right, #3b82f6, #06b6d4)',
                padding: '1rem 2rem',
                color: '#ffffff',
                fontWeight: '600',
                fontSize: '1.125rem',
                textDecoration: 'none',
                boxShadow: '0 20px 50px rgba(59, 130, 246, 0.4)',
                cursor: 'pointer',
                transition: 'transform 200ms'
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Zum Innovation Board
              <ArrowUpRight style={{ width: '1.25rem', height: '1.25rem' }} />
            </a>
            <a
              href="#events"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '1rem 2rem',
                color: '#ffffff',
                fontWeight: '600',
                fontSize: '1.125rem',
                textDecoration: 'none',
                backdropFilter: 'blur(4px)',
                cursor: 'pointer',
                transition: 'background-color 200ms'
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)')}
            >
              Events & Trends
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1.5rem',
              paddingTop: '2rem'
            }}
          >
            {[
              { label: 'Tech-Akteure', value: '460+', icon: '🌐' },
              { label: 'Aktive Projekte', value: '127', icon: '🚀' },
              { label: 'Time-to-Match', value: '72h', icon: '⚡' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                style={{
                  borderRadius: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  padding: '1rem',
                  backdropFilter: 'blur(4px)',
                  transition: 'border-color 200ms'
                }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)')}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff' }}>{stat.value}</p>
                <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255, 255, 255, 0.6)', marginTop: '0.25rem' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'rgba(255, 255, 255, 0.6)' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Scroll</span>
          <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  )
}
