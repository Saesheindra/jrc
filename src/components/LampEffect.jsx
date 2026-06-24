import { motion } from 'framer-motion'

const LampEffect = ({ children, className = '' }) => {
  return (
    <div className={`lamp-container ${className}`}>
      <div className="lamp-effect-wrapper">
        {/* Left conic gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="lamp-gradient lamp-gradient-left"
        >
          <div className="lamp-mask-bottom" />
          <div className="lamp-mask-left" />
        </motion.div>

        {/* Right conic gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="lamp-gradient lamp-gradient-right"
        >
          <div className="lamp-mask-bottom" />
          <div className="lamp-mask-right" />
        </motion.div>

        {/* Background blur */}
        <div className="lamp-bg-blur" />

        {/* Backdrop blur */}
        <div className="lamp-backdrop" />

        {/* Main glow */}
        <div className="lamp-glow-main" />

        {/* Secondary glow */}
        <motion.div
          initial={{ width: '8rem' }}
          whileInView={{ width: '16rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="lamp-glow-secondary"
        />

        {/* Light beam line */}
        <motion.div
          initial={{ width: '15rem' }}
          whileInView={{ width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="lamp-beam-line"
        />

        {/* Top cover */}
        <div className="lamp-top-cover" />
      </div>

      {/* Content */}
      <div className="lamp-content">
        {children}
      </div>
    </div>
  )
}

export default LampEffect
