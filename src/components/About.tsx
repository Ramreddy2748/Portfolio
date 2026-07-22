import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Brain, Code2, Trophy, Zap, Users } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const bioVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const highlights = [
  {
    icon: Brain,
    title: 'AI & LLM Applications',
    description: 'Designing RAG pipelines, multi-agent workflows, and AI-driven automation using modern LLM architectures.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Systems',
    description: 'Developing scalable backend APIs (FastAPI, Node.js) and modern React frontends for production-grade applications.',
  },
  {
    icon: TrendingUp,
    title: 'Data Engineering',
    description: 'Designing scalable ETL pipelines, distributed data workflows, and cloud-native analytics systems on AWS.',
  },
  {
    icon: Zap,
    title: 'Machine Learning',
    description: 'Building end-to-end ML pipelines, training models, and deploying intelligent systems into production.',
  },
  {
    icon: Trophy,
    title: 'Systems Thinking',
    description: 'Architecting resilient, high-performance systems that balance scalability, reliability, and business impact.',
  },
  {
    icon: Users,
    title: 'Execution & Ownership',
    description: 'Leading projects end-to-end with a startup mindset—prioritizing impact, speed, and clean execution.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Crafting data-driven solutions & intelligent systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={bioVariants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">Background</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a software engineer with <span className="text-foreground font-medium">2+ years of experience</span> building backend systems, data pipelines, and AI-powered features in production. At upGrad, I shipped LLM-powered features that improved user engagement by 30%, engineered ETL pipelines and REST APIs handling 10K+ daily requests at 99.9% uptime, and cut deployment time by 40% through CI/CD and infrastructure improvements on AWS. That production experience naturally pulled me toward <span className="text-primary font-medium">applied AI engineering</span>—designing RAG pipelines, multi-agent systems, and evaluation frameworks that make AI features reliable enough to trust in real products.
              </p>
              <p>
                What I enjoy most is the space between raw model capability and something people can actually rely on. I built a HIPAA-compliant RAG pipeline over a 4,000-page corpus that cut hallucination by 40% using a corrective validation agent, and a multi-agent system where models debate adversarially before committing to a financial risk verdict, reducing hallucination by 25% across 50+ companies. I'm currently a Graduate Research Assistant at San José State University, contributing to a published book on AI/ML applications in healthcare. I care about building systems that are well-tested, well-instrumented, and genuinely useful—not just technically impressive.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={sectionVariants}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
