
import { Experience, Project, SkillCategory, Achievement, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Suraj Borkute",
  role: "AI/ML Engineer & Cybersecurity Researcher",
  email: "surajborkute.tech@gmail.com",
  phone: "+91 9518772281",
  location: "Nagpur, Maharashtra, India",
  // Using GitHub profile image as it matches the user's provided photo
  profileImage: "https://github.com/SurajKeCodes.png", 
  // Direct Google Drive link converted for embedding
  certificateImage: "https://drive.google.com/uc?export=view&id=1YP1xEQ7-dAcRsE8AdZ-pvSQb4TciV2Ls",
  summary: "Final-year B.Tech (IT) candidate with strong foundations in OOP, DBMS, OS, DSA, and Computer Networks, complemented by hands-on experience in AI/ML engineering, NLP systems, and cybersecurity. Delivered production-grade resume matching systems, multi-bot RAG architectures, and secure applications. Top 20 CyberHack 2025 finalist and NPTEL Ethical Hacking certified.",
  resumeContext: `
  SUMMARY 
  Final-year B.Tech (IT) candidate with strong foundations in OOP, DBMS, OS, DSA, and Computer Networks, complemented by hands-on experience in AI/ML engineering, NLP systems, and cybersecurity. Delivered production-grade resume matching systems, multi-bot RAG architectures, and secure applications. Top 20 CyberHack 2025 finalist and NPTEL Ethical Hacking certified. 
  
  TECHNICAL SKILLS 
  Programming Languages: Python, C++, Bash, SQL; Object-Oriented Programming, STL 
  AI/ML & NLP: scikit-learn, TF-IDF, cosine similarity, vectorization, model evaluation, RAG, FAISS, quantization, fine-tuning 
  Computer Science Core: Data Structures & Algorithms, DBMS (joins, normalization, transactions), Operating Systems (processes, threads), Computer Networks (TCP/IP, DNS, HTTP/HTTPS), SDLC, Software Testing 
  Security & Tools: Kali Linux, Nmap, Wireshark, Metasploit, Web Security (SQLi, XSS), Vulnerability Assessment 
  Backend & Frameworks: Flask, REST APIs, BeautifulSoup, asyncio, aiohttp, Git, Docker, VirtualBox 
  
  PROFESSIONAL EXPERIENCE 
  AIML Engineer Intern — SS Infotech Pvt. Ltd. | Jun 2025 – Dec 2025 
  • Built Smart AI Resume Analyzer matching resumes with job descriptions using TF-IDF and cosine similarity; improved match precision by 28% vs. baseline keyword matching and generated comprehensive ATS/keyword/section scores. 
  • Engineered modular ML pipeline: parsing → cleaning → vectorization → similarity scoring → feedback generation; integrated keyword gap analysis, resume builder workflows, and job/course recommendations. 
  • Developed Multi-Bot RAG Suite with domain-specific bots (Study, Medical/Ayurvedic, General) using retrieval-augmented generation with FAISS indexing; deployed quantized Hugging Face LLMs with lightweight fine-tuning adapters. 
  • Implemented reproducible workflows with versioned configurations and metric logging; collaborated with technical mentors for production deployment readiness. 
  
  Cyber Security Intern — CODTECH IT Solutions, Hyderabad | Dec 2024 – Jan 2025 
  • Built Python-based web vulnerability scanner improving detection precision by 20% and standardizing reproducible security assessments across common web application flaws. 
  • Developed penetration testing toolkit increasing assessment throughput by 30%; executed comprehensive security evaluations using Kali Linux, Nmap, and Wireshark to reduce verified vulnerabilities by 25%. 
  • Prototyped ML-driven fake job detection system with Flask UI achieving 85% test accuracy; documented comprehensive API endpoints and test case specifications. 
  
  KEY PROJECTS 
  Smart AI Resume Analyzer | Python, scikit-learn, TF-IDF, Cosine Similarity, Flask 
  • Role: ML Developer (Matching & Scoring) - Designed and implemented core matching algorithm 
  • Computes ATS compatibility, keyword match scores, and resume section completeness; generates tailored feedback and keyword gap recommendations 
  • Technical Implementation: 7-step workflow - upload → extract/clean → JD selection → vectorization → similarity calculation → scoring/feedback → storage/display 
  • Supports automated job recommendations and relevant course suggestions based on skill gap analysis 
  
  Multi-Bot RAG Suite with Local LLMs | Python, Hugging Face, RAG, FAISS, Quantization 
  • Built domain-specific chatbots (Study, Medical/Ayurvedic, General) with retrieval-augmented generation over curated knowledge corpora 
  • Deployed quantized local LLMs from Hugging Face with modular fine-tuning adapters for enhanced response quality and domain specialization 
  • Implemented efficient vector search with FAISS for real-time document retrieval and context-aware response generation 
  
  AI-Based Fake Job & Scam Detection System | Python, Flask, NLP, SVM 
  • End-to-end application detecting fake jobs, emails, websites, and UPI IDs; achieved 91% accuracy on curated test datasets 
  • Implemented admin-verified internship blacklist and educational quiz module increasing user security awareness by 40% 
  
  Advanced Web Application Vulnerability Scanner | Python, asyncio, Security Testing 
  • Asynchronous scanner detecting 95% of common vulnerabilities (SQLi, XSS, open redirect) with 3× faster execution vs. sequential scanning 
  • Validated against public security benchmarks with 90%+ accuracy; produces structured vulnerability reports with actionable remediation steps 
  
  EDUCATION 
  B.Tech in Information Technology — TGPCET, Nagpur | SGPA: 9.55 (Last Semester) | Expected: May 2026 
  
  LEADERSHIP & ACTIVITIES 
  Project Team Lead — TGPCET, Nagpur | Aug 2023 – Present 
  • Led cybersecurity project teams including CyberHack 2025 competition; conducted technical workshops increasing student engagement by 40% 
  `
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/SurajKeCodes", icon: "Github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/suraj-borkute", icon: "Linkedin" },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: "Mail" }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "SS Infotech Pvt. Ltd.",
    role: "AIML Engineer Intern",
    duration: "Jun 2025 – Dec 2025",
    description: [
      "Built Smart AI Resume Analyzer matching resumes with job descriptions using TF-IDF and cosine similarity; improved match precision by 28%.",
      "Engineered modular ML pipeline: parsing → cleaning → vectorization → similarity scoring → feedback generation.",
      "Developed Multi-Bot RAG Suite with domain-specific bots (Study, Medical/Ayurvedic, General) using FAISS and quantized LLMs.",
      "Implemented reproducible workflows with versioned configurations and metric logging."
    ]
  },
  {
    company: "CODTECH IT Solutions",
    role: "Cyber Security Intern",
    duration: "Dec 2024 – Jan 2025",
    location: "Hyderabad",
    description: [
      "Built Python-based web vulnerability scanner improving detection precision by 20%.",
      "Developed penetration testing toolkit increasing assessment throughput by 30%.",
      "Executed security evaluations using Kali Linux, Nmap, and Wireshark.",
      "Prototyped ML-driven fake job detection system with Flask UI achieving 85% test accuracy."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "FaceSnap AI Attendance",
    tech: ["CNN", "YOLO", "Python", "Deep Learning", "OpenCV"],
    description: [
      "Vision-based attendance system achieving 99% accuracy via CNN & YOLO.",
      "Features real-time multi-face detection (30+ faces) and anti-spoofing checks.",
      "Published in Springer Conference; reduces attendance time by 85%."
    ],
    // High-tech Face Mesh / Biometrics
    image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=2069&auto=format&fit=crop",
    link: "https://github.com/SurajKeCodes/-FACESNAP_AI_FaceRecognition_Attendance"
  },
  {
    title: "Adv. Penetration Toolkit",
    tech: ["Python", "Scapy", "Socket", "Network Security", "Cryptography"],
    description: [
      "Robust security suite with Port Scanner, Network Sniffer, and Brute Force tools.",
      "Performs SSL/TLS validation, directory discovery, and HTTP header analysis.",
      "Generates detailed vulnerability reports for infrastructure assessment."
    ],
    // Matrix / Hacker Terminal
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2070",
    link: "https://github.com/SurajKeCodes/Advanced--Penetration-Testing-Toolkit"
  },
  {
    title: "Smart AI Resume Analyzer",
    tech: ["Python", "scikit-learn", "TF-IDF", "Flask"],
    description: [
      "Designed core matching algorithm to compute ATS compatibility and keyword scores.",
      "7-step workflow: upload → extract → vectorization → scoring → feedback.",
      "Integrated automated job and course recommendations based on skill gaps."
    ],
    // Data Analysis / Future Interface
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    link: "https://github.com/SurajKeCodes"
  },
  {
    title: "Multi-Bot RAG Suite",
    tech: ["Python", "Hugging Face", "RAG", "FAISS", "Quantization"],
    description: [
      "Built domain-specific chatbots (Study, Medical, General) with RAG.",
      "Deployed quantized local LLMs with modular fine-tuning adapters.",
      "Implemented efficient vector search for real-time context-aware responses."
    ],
    // Artificial Intelligence / Neural Network
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1965",
    link: "https://github.com/SurajKeCodes/MultiBrain-RAG-Engine"
  },
  {
    title: "Fake Job & Scam Detection",
    tech: ["Python", "Flask", "NLP", "SVM"],
    description: [
      "Detects fake jobs, emails, websites, and UPI IDs with 91% accuracy.",
      "Includes admin-verified blacklist and educational quiz module.",
      "Increased user security awareness by 40% through gamified education."
    ],
    // Cyber Security / Lock
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2070",
    link: "https://github.com/SurajKeCodes/Job-Internship-Authenticity-Engine-JIAE-"
  },
  {
    title: "Web Vulnerability Scanner",
    tech: ["Python", "asyncio", "Security Testing"],
    description: [
      "Asynchronous scanner detecting 95% of common vulnerabilities (SQLi, XSS).",
      "3x faster execution vs sequential scanning.",
      "Produces structured vulnerability reports with remediation steps."
    ],
    // Cyber Screen / Code
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
    link: "https://github.com/SurajKeCodes/Advanced-Web-Application-Vulnerability-Scanner"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages & Core",
    skills: ["Python", "C++", "Bash", "SQL", "OOP", "Data Structures", "Algorithms"]
  },
  {
    name: "AI / ML / NLP",
    skills: ["scikit-learn", "TensorFlow", "RAG", "FAISS", "TF-IDF", "Hugging Face", "Fine-tuning"]
  },
  {
    name: "Cybersecurity",
    skills: ["Kali Linux", "Nmap", "Wireshark", "Metasploit", "Burp Suite", "Vulnerability Assessment"]
  },
  {
    name: "Web & Tools",
    skills: ["Flask", "REST APIs", "Docker", "Git", "Linux", "React"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "CyberHack 2025 Top 20 Finalist", issuer: "Nagpur City Police" },
  { title: "Certified Ethical Hacker", issuer: "NPTEL, IIT Kharagpur" },
  { title: "Privacy and Security on Social Media", issuer: "IIT Hyderabad" },
  { title: "Published Paper: FaceSnap", issuer: "Springer Conference", link: "https://link.springer.com/chapter/10.1007/978-981-95-0493-0_22" },
  { title: "Linux Administrator", issuer: "IIT Bombay Spoken Tutorial" }
];
