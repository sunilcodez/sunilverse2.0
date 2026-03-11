import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const SectionHeading = ({ title1, title2, description, align = 'center' }) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`mb-16 md:mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl font-bold mb-4"
      >
        {title1}
        <span className="gradient-text"> {title2}</span>
      </motion.h2>

      {/* <p className="text-gray-400 max-w-2xl mx-auto">
        2 years of hands-on experience building production-ready web applications with modern technologies
      </p> */}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full ${align === 'center' ? 'mx-auto' : ''
          }`}
      />
    </div>
  )
}

export default SectionHeading
