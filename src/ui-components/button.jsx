import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  icon: Icon,
  className = '',
  ...props
}) => {
  const baseClasses = 'relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer overflow-hidden group';

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02]',
    secondary: 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-[1.02]',
    ghost: 'text-purple-400 hover:text-white hover:bg-white/5',
    glow: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-[1.05]',
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Component
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        {...props}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        {Icon && <Icon className="text-lg" />}
        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  );
};

export default Button;