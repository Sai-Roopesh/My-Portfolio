import { Project, ExperienceItem, EducationItem, SkillCategory, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Gantasala Sai Roopesh",
  email: "sairoopesh21@gmail.com",
  phone: "8217270831",
  location: "Bengaluru, India",
  role: "AI/ML Engineer & Full Stack Developer",
  summary: "Aspiring Artificial Intelligence and Machine Learning Engineer with a strong foundation in full-stack development. Experienced in building scalable AI-powered applications, optimizing data models, and deploying robust MLOps pipelines. Passionate about solving complex problems using state-of-the-art technologies like Vertex AI, Gemini, and AWS."
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", url: "https://linkedin.com/in/sai-roopesh", icon: "Linkedin" },
  { name: "GitHub", url: "https://github.com/Sai-Roopesh", icon: "Github" },
  { name: "Website", url: "https://sairoopesh.pages.dev", icon: "Globe" },
  { name: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: "Mail" },
];

export const EDUCATION: EducationItem = {
  institution: "Dayananda Sagar Academy of Technology and Management",
  location: "Bengaluru, India",
  degree: "B.E in Artificial Intelligence and Machine Learning",
  duration: "May 2025",
  gpa: "8.79/10"
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Hewlett Packard Enterprise (HPE)",
    location: "Bengaluru, India",
    role: "Technology Consultant (SAP HANA)",
    duration: "Aug 2025 – Present",
    description: [
      "Designing and developing data models in SAP HANA, optimizing schemas for performance and analytical reporting.",
      "Creating and maintaining SAP HANA calculation views, stored procedures, and UDFs to meet complex business logic.",
      "Performing data provisioning from various source systems into SAP HANA using tools like SDI and SLT.",
      "Collaborating with BI developers to ensure data accuracy and support the creation of dashboards and reports."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "EduPersona: Personalised Learning System",
    technologies: ["Python", "GCP", "Vertex AI", "LangChain", "Streamlit"],
    description: [
      "Architected an AI-powered personal learning assistant using Streamlit and Google Cloud Platform for scalable performance.",
      "Integrated Google Vertex AI and Gemini models to dynamically generate quizzes and summaries from user-provided documents.",
      "Utilized LangChain for sophisticated document processing, embedding, and retrieval for a conversational chat interface."
    ]
  },
  {
    title: "Speech Emotion Recognition",
    technologies: ["Python", "Librosa", "Scikit-learn", "Pyaudio", "Streamlit"],
    description: [
      "Developed an end-to-end system to classify emotions from real-time speech using an MLP Classifier.",
      "Engineered audio feature extraction pipeline using Librosa to process raw audio data into meaningful features like MFCC and chroma.",
      "Built an interactive web interface with Streamlit and Pyaudio to capture and predict emotions from live microphone input."
    ]
  },
  {
    title: "Kidney Disease Classification",
    technologies: ["Python", "TensorFlow", "MLflow", "DVC", "AWS", "CI/CD"],
    description: [
      "Developed a deep learning model using TensorFlow/Keras for early-stage kidney disease classification from medical imaging.",
      "Implemented a complete MLOps pipeline, using DVC for data versioning and MLflow for experiment tracking and model logging.",
      "Established a CI/CD workflow with GitHub Actions to automate model training and deployed the model on AWS using EC2."
    ]
  },
  {
    title: "GPT Model Comparator",
    technologies: ["Streamlit", "OpenAI API", "LangChain", "ReportLab"],
    description: [
      "Developed a web tool for comparative analysis of different GPT model outputs, providing insights into performance and cost.",
      "Implemented backend logic using the OpenAI API and LangChain to process user prompts across multiple models simultaneously.",
      "Integrated ReportLab to auto-generate comprehensive PDF reports detailing model comparisons for offline analysis."
    ]
  },
  {
    title: "Better Prompt Generator",
    technologies: ["JavaScript", "Chrome Extension", "Node.js", "Azure AI"],
    description: [
      "Developed a Chrome extension using Manifest V3 to refine and improve user prompts via LLMs.",
      "Built a backend API with Node.js/Express, hosted on Render, to interface with the Azure AI Inference SDK.",
      "Designed a clean frontend with HTML and vanilla JavaScript for a seamless user experience within the browser."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "SQL", "Java"]
  },
  {
    category: "AI/ML",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "LangChain", "Transformers", "Librosa", "Vertex AI", "Gemini", "OpenAI API", "Azure AI"]
  },
  {
    category: "Web & Backend",
    skills: ["Node.js", "Express", "Flask", "Streamlit", "Chrome Extension APIs", "HTML/CSS"]
  },
  {
    category: "MLOps & DevOps",
    skills: ["MLflow", "DVC", "Docker", "GitHub Actions", "AWS (EC2)", "GCP"]
  },
  {
    category: "Databases & Tools",
    skills: ["SAP HANA", "MongoDB", "SQLite", "Git", "Selenium", "ReportLab", "Pyaudio"]
  }
];