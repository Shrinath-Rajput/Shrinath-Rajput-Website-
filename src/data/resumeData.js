import { getAssetPath } from '../utils/assets.js';

export const resumeData = {
  profile: {
    name: 'Shrinath Rajput',
    role: 'Machine Learning & AI Developer',
    email: 'rajputshrinath349@gmail.com',
    location: 'India',
    github: 'https://github.com/shrinath-rajput',
    pdfUrl: getAssetPath('Resume_shrinath_rajput.pdf'),
    fallbackPdfUrl: getAssetPath('resume/Shrinath-Rajput-Resume.pdf'),
  },
  education: [
    {
      degree: 'B.Tech in Artificial Intelligence and Machine Learning',
      institution: 'D. Y. Patil Agriculture and Technical University — Kolhapur',
      status: 'Undergraduate Program',
    },
  ],
  achievements: [
    'MumbaiHacks 2025 – Built ClinSense AI Healthcare System',
    'Appreciated by HCLTech interview panel',
    'Full marks in MSBTE PHP final exam',
    'Internship opportunity at Cognifyz Technology',
    'Active GitHub open-source contributor',
  ],
  internships: [
    {
      company: 'PJSOFTTECH Pvt. Ltd.',
      role: 'Machine Learning Intern',
      period: 'Jan 2025 – Jan 2026',
      highlights: [
        'Developed Machine Learning and Deep Learning models using Python.',
        'Built NLP pipelines for text preprocessing and feature engineering.',
        'Performed model training, evaluation, and performance optimization.',
        'Worked on real-world AI and Machine Learning projects.',
      ],
      skills: ['Python', 'Deep Learning', 'NLP', 'Model Evaluation', 'Feature Engineering'],
    },
    {
      company: 'Walfox Technology, Kolhapur',
      role: 'Web Development Intern',
      period: 'Mar 2023 – Jun 2023',
      highlights: [
        'Developed responsive websites using HTML, CSS and JavaScript.',
        'Worked on backend development and REST API integration.',
        'Improved UI/UX and collaborated with the development team.',
        'Strengthened Full Stack Web Development skills.',
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'UI/UX', 'Full Stack'],
    },
  ],
};
