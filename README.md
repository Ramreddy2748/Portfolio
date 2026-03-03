<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=230&color=0:4F46E5,100:9333EA&text=Venkata+Ramireddy+Seelam+%7C+Portfolio&fontColor=ffffff&fontSize=45&fontAlignY=35&desc=Full-Stack+%7C+AI+Systems+%7C+Data+Engineering&descAlignY=60&animation=fadeIn" />

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1200&color=8A2BE2&center=true&vCenter=true&width=700&lines=Full-Stack+Engineer+%7C+AI+Systems+Builder;MS+Software+Engineering+%40+SJSU;Scalable+APIs+%7C+ML+Pipelines+%7C+RAG+Systems;Building+Production-Grade+Data+Platforms" />
</p>

<p align="center">
  <!-- Frontend / Backend -->
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

<p align="center">
  <!-- Machine Learning / AI -->
  <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" />
  <img src="https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white" />
  <img src="https://img.shields.io/badge/LangChain-000000?style=for-the-badge" />
  <img src="https://img.shields.io/badge/RAG-4B0082?style=for-the-badge" />
  <img src="https://img.shields.io/badge/LLMs-9333EA?style=for-the-badge" />
</p>

<p align="center">
  <!-- Data Engineering -->
  <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=FF9900" />
  <img src="https://img.shields.io/badge/AWS%20Glue-FF9900?style=for-the-badge" />
  <img src="https://img.shields.io/badge/AWS%20EMR-FF9900?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Redshift-8C4FFF?style=for-the-badge" />
  <img src="https://img.shields.io/badge/PySpark-E25A1C?style=for-the-badge&logo=apachespark&logoColor=white" />
  <img src="https://img.shields.io/badge/Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white" />
</p>

<p align="center">
  <!-- DevOps -->
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

</div>

---

## 🚀 Overview

This is my personal portfolio website showcasing my journey as a Software Engineer specializing in **Full-Stack Systems, Data Engineering, and AI-driven applications**.

The portfolio highlights real-world systems I’ve built — from scalable AWS data pipelines to ML-powered platforms and RAG-based AI applications.

---

## ✨ Key Features

### 🎨 Modern UI
- Dark-mode-first premium design
- Smooth animations powered by Framer Motion
- Fully responsive across devices
- Clean and professional layout

### 🧠 Technical Focus
- Full-stack applications (React + FastAPI + Node.js)
- AWS-based data engineering pipelines (EMR, Glue, Redshift, Lambda)
- ML pipelines & model deployment
- AI agents & Retrieval-Augmented Generation (RAG)
- Distributed system design principles

### ⚡ Performance
- Built using **Vite + TypeScript**
- Optimized production build
- Modular component architecture
- Clean folder structure

---

import { Code2, Server, Cloud, Brain } from "lucide-react";

export const TechStack = () => {
  const stack = [
    {
      title: "Frontend Engineering",
      icon: Code2,
      items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend & APIs",
      icon: Server,
      items: ["FastAPI", "Node.js", "RESTful APIs", "Authentication"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      items: ["AWS (EC2, S3, Lambda)", "EMR", "Glue", "Redshift", "Docker"],
    },
    {
      title: "Machine Learning & Data",
      icon: Brain,
      items: [
        "TensorFlow",
        "Scikit-learn",
        "RAG Pipelines",
        "LLM Integrations",
        "PySpark",
      ],
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            🏗️ <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map((section, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl border border-white/10 
                         hover:border-primary/40 transition-all duration-300
                         hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center 
                              rounded-lg bg-primary/10">
                <section.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-semibold text-lg mb-4">
                {section.title}
              </h3>

              <ul className="space-y-2 text-muted-foreground text-sm">
                {section.items.map((item, idx) => (
                  <li key={idx} className="hover:text-foreground transition-colors">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

---

## 🚀 Run Locally

```bash
git clone https://github.com/Ramreddy2748/Portfolio.git
cd Portfolio
npm install
npm run dev

it will run at:  http://localhost:5173

if u want to deploy as an app use https://YOUR-VERCEL-LINK.vercel.app
