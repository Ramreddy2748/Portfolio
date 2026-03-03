import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const categories = [
  '🎯 All Projects',
  '🌐 Full-Stack Engineering',
  '⚙️ Distributed Systems',
  '☁️ Cloud & Data Engineering',
  '🤖 AI Systems',
  '🧠 Machine Learning',
  '🧠 Deep Learning',
  '📊 Data Science',
];

const projects = [
  // ===== Full-Stack & Systems =====
  {
    title: 'Kayak Clone – AI-Powered Travel Booking Platform',
    description:
      'Scalable full-stack travel booking platform built with React, Node.js, and FastAPI, supporting 10K+ users with Redis caching and event-driven architecture.',
    tags: ['React', 'Node.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'AWS'],
    categories: ['🌐 Full-Stack Engineering', '⚙️ Distributed Systems'],
    github: 'https://github.com/Ramreddy2748/YouTube-Transcribe-AI-Assistant-for-YouTube-Lectures',
    image: 'project_kayak.jpg',
  },

  {
    title: 'Airbnb Prototype – Microservices Application',
    description:
      'Production-style booking system using React, Express, and MySQL with Dockerized microservices and optimized REST APIs (40% latency reduction).',
    tags: ['React', 'Express', 'MySQL', 'Docker', 'REST APIs', 'AWS S3'],
    categories: ['🌐 Full-Stack Engineering', '⚙️ Microservices'],
    github: 'https://github.com/Ramreddy2748/Airbnb',
    image: '/project_airbnb.jpg',
  },

  {
    title: 'YouTube Transcribe – AI Assistant for Lectures',
    description:
      'AI-powered assistant that transcribes and summarizes YouTube lectures using speech-to-text and LLM pipelines, enabling semantic search and structured retrieval.',
    tags: ['Python', 'LLM Integration', 'NLP', 'Speech-to-Text', 'FastAPI'],
    categories: ['🤖 AI Systems', '🌐 Full-Stack'],
    github: 'https://github.com/Ramreddy2748/YouTube-Transcribe-AI-Assistant-for-YouTube-Lectures',
    image: '/project_utube_transcriber.jpg',
  },

  {
    title: 'Bitcoin Validation Prototype',
    description:
      'Blockchain validation simulator implementing transaction verification logic and proof-of-work fundamentals to demonstrate distributed trust mechanisms.',
    tags: ['Python', 'Blockchain', 'Cryptography', 'Systems Design'],
    categories: ['⚙️ Systems Engineering'],
    github: 'https://github.com/Ramreddy2748/Bitcoin_validation',
    image: '/project-bitcoin.png',
  },

  // ===== Cloud & Data Engineering =====
  {
    title: 'Healthcare Cost Analytics Platform',
    description:
      'Cloud-based analytics pipeline integrating ICU and cost datasets (50K+ records) using AWS Glue and Redshift, reducing query latency by 50%.',
    tags: ['AWS Glue', 'PySpark', 'Redshift', 'SQL', 'Data Engineering'],
    categories: ['☁️ Cloud & Data Engineering'],
    github: 'https://github.com/shra012/mimic-iv-datawarehouse',
    image: '/project_Health_Care.jpg',
  },

  // ===== Machine Learning & AI =====
  {
    title: 'Hand Gesture Recognition using CNN',
    description:
      'Deep learning model using Convolutional Neural Networks for real-time hand gesture classification with image preprocessing and optimization.',
    tags: ['PyTorch', 'CNN', 'Computer Vision', 'Deep Learning'],
    categories: ['🧠 Deep Learning'],
    github: 'https://github.com/Ramreddy2748/Hand_Gesture_Recognition_using_CNN',
    image: '/project_hand_gesture.jpg',
  },

  {
    title: 'Sales Prediction using CatBoost',
    description:
      'Time-series forecasting model leveraging CatBoost gradient boosting with structured feature engineering and cross-validation.',
    tags: ['Python', 'CatBoost', 'Time-Series', 'Regression'],
    categories: ['🧠 Machine Learning'],
    github: 'https://github.com/Ramreddy2748/Sales-Prediction-Using-Catboost',
    image: '/project-catboost.png',
  },

  {
    title: 'Diabetes Prediction using Logistic Regression',
    description:
      'Supervised learning pipeline predicting diabetes risk using logistic regression with feature selection and evaluation metrics.',
    tags: ['Python', 'Scikit-learn', 'Logistic Regression', 'Model Evaluation'],
    categories: ['🧠 Machine Learning'],
    github: 'https://github.com/Ramreddy2748/Diabetes_prediction-using-Logistic_regression',
    image: '/project-diabetes.png',
  },

  {
    title: 'Supermarket Sales Prediction',
    description:
      'Retail sales forecasting project applying regression models and exploratory data analysis to uncover purchasing trends.',
    tags: ['Python', 'Regression', 'EDA', 'Data Analysis'],
    categories: ['📊 Data Science'],
    github: 'https://github.com/Ramreddy2748/Supermarket_Sales_Prediction',
    image: '/project-supermarket.png',
  },

  {
    title: 'Healthcare Chatbot (Tkinter)',
    description:
      'Rule-based healthcare assistant built with Python and Tkinter to process symptom-based queries through structured conversational logic.',
    tags: ['Python', 'Tkinter', 'Chatbot', 'NLP Basics'],
    categories: ['🤖 AI Systems'],
    github: 'https://github.com/Ramreddy2748/Healthcare_chatbot_using_Tkinter',
    image: '/project-chatbot.png',
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('🎯 All Projects');

  const filteredProjects = projects.filter(project =>
    activeCategory === '🎯 All Projects' || project.categories.includes(activeCategory)
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work in data analytics, machine learning, and AI automation
          </p>
        </motion.div>

        {/* Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false); // Reset show all when changing category
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border group min-h-[500px]"
              style={{ boxShadow: '0 8px 32px 0 hsl(var(--card) / 0.16)' }}
            >
              <div className="relative w-full aspect-[4/2.2] bg-secondary overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-1 px-6 pt-6 pb-7">
                <h3 className="font-display font-bold text-xl lg:text-2xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-normal line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
      
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              <ChevronRight size={18} className={`transition-transform ${showAll ? 'rotate-90' : ''}`} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
