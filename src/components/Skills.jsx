import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../data/constants";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-800/50 to-transparent" />
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            2 years of hands-on experience building production-ready web applications with modern technologies
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-violet-500" />
                  {category.category}
                </h3>
                <p className="text-gray-500 text-sm ml-11">{category.description}</p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: catIndex * 0.1 + index * 0.1,
                    }}
                    className="group glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 hover:shadow-glass hover:-translate-y-1"
                  >
                    {/* Skill Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{ backgroundColor: `${skill.color}15` }}
                      >
                        <skill.icon
                          className="text-2xl"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <h4 className="text-white font-semibold text-base">
                        {skill.name}
                      </h4>
                    </div>

                    {/* Skill Points */}
                    <ul className="space-y-2.5 ml-1">
                      {skill.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: catIndex * 0.1 + index * 0.1 + pointIndex * 0.05,
                          }}
                          className="flex items-start gap-3 text-gray-400 text-sm"
                        >
                          <span 
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: skill.color }}
                          />
                          <span className="leading-relaxed">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
