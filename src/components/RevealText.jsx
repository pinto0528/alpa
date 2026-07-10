import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const word = {
  hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function RevealText({ text, className, as: Tag = 'h2' }) {
  const words = text.split(' ')

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={className}
      aria-label={text}
    >
      <Tag className="sr-only">{text}</Tag>
      <Tag aria-hidden="true">
        {words.map((w, i) => (
          <motion.span
            key={i}
            variants={word}
            className="inline-block mr-[0.3em]"
          >
            {w}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  )
}
