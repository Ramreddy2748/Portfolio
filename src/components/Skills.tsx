import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Programming & Data Engineering',
    skills: [
      'Python', 'Java', 'C++', 'Go',
      'JavaScript', 'TypeScript',
      'SQL', 'PySpark',
      'Pandas', 'NumPy', 'SciPy',
      'Scikit-learn'
    ],
  },

  {
    title: 'Machine Learning & Deep Learning',
    skills: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Regression & Classification',
      'Clustering',
      'Feature Engineering',
      'Model Evaluation',
      'Deep Learning',
      'Neural Networks',
      'CNN',
      'RNN',
      'LSTM',
      'Transformers',
      'PyTorch',
      'TensorFlow',
      'Keras',
      'Transfer Learning',
      'Hyperparameter Tuning'
    ],
  },

  {
    title: 'AI Agents & Intelligent Systems',
    skills: [
      'LLM Integrations',
      'RAG Pipelines',
      'Embedding-based Retrieval',
      'Semantic Search',
      'LangChain',
      'AI Automation',
      'Multi-Agent Systems',
      'Knowledge Base Engineering',
      'n8n Agent Development'
    ],
  },

  {
    title: 'Databases & Cloud Platforms',
    skills: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'DynamoDB',
      'Amazon Redshift',
      'Amazon Athena',
      'AWS S3',
      'AWS EC2',
      'AWS Lambda',
      'AWS ECS Fargate',
      'AWS Glue',
      'Microsoft Azure',
      'Google Cloud',
      'Query Optimization'
    ],
  },

  {
    title: 'Data Visualization & Analytics',
    skills: [
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'Tableau',
      'Power BI',
      'Looker Studio',
      'Excel Pivot Tables'
    ],
  },

  {
    title: 'DevOps, Tools & Engineering Practices',
    skills: [
      'Git/GitHub',
      'CI/CD',
      'Docker',
      'Kubernetes (GKE)',
      'Jupyter',
      'VS Code',
      'JIRA',
      'Confluence',
      'Logging & Monitoring',
      'Configuration Management',
      'REST APIs',
      'System Design',
      'Microservices Architecture'
    ],
  },

  {
    title: 'Algorithms & Computer Science Fundamentals',
    skills: [
      'Data Structures',
      'Dynamic Programming',
      'Greedy Algorithms',
      'Graph Algorithms',
      'Time & Space Complexity',
      'Optimization',
      'Object-Oriented Programming',
      'Design Patterns'
    ],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative bg-secondary/20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I've worked with in real-world projects and professional environments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="font-display font-semibold text-lg mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
