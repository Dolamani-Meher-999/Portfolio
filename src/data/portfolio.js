export const profile = {
  name: 'Dolamani Meher',
  tagline: 'Full Stack Dev · ML Engineer ',
  location: 'Bhubaneswar, Odisha',
  bio: 'B.Tech CSE @ Silicon University with a 9.1 CGPA. Building full-stack platforms, ML systems, and blockchain dApps. Passionate about scalable architecture and intelligent systems.',
  email: 'dolamanimeher999@gmail.com',
  phone: '+91 9348072552',
  github: 'https://github.com/Dolamani-Meher-999',     // 🔁 Replace
  linkedin: 'https://www.linkedin.com/in/dolamani-meher-ab6068271/',
  instagram: 'https://www.instagram.com/bikash.meher.999/', // 🔁 Replace
  resume: '/resume.pdf',                            // 🔁 Add resume to /public
  available: true,
}

export const stats = [
  { number: '9.1', label: 'CGPA · Silicon University' },
  { number: '3+', label: 'Production Projects' },
  { number: '2', label: 'Internships Completed' },
  { number: '10+', label: 'Technologies Mastered' },
]

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['C', 'Python', 'Java', 'SQL', 'JavaScript'],
  },
  {
    title: 'Web & Frameworks',
    skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Django', 'Tailwind CSS', 'HTML/CSS', 'Git', 'GitHub'],
  },
  {
    title: 'AI / Machine Learning',
    skills: ['PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'CNN', 'RNN', 'Transformers', 'NLP', 'Deep Learning'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['AWS EC2', 'Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Load Balancing'],
  },
  {
    title: 'Blockchain',
    skills: ['Solidity', 'Ethereum', 'Web3.js', 'Hardhat', 'MetaMask', 'Smart Contracts'],
  },
]

export const experience = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'Code Beat',
    duration: 'June 2024 · 4 weeks',
    description:
      'Built responsive full-stack web applications using the MERN stack. Implemented RESTful APIs and CRUD operations, integrated Firebase authentication, and styled interfaces with Tailwind CSS. Key deliverables included an e-commerce platform with secure login and a property rental web application.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Firebase', 'Tailwind CSS'],
  },
  {
    role: 'AWS Cloud & DevOps Intern',
    company: 'CI/CD and Kubernetes Track',
    duration: 'June 2025',
    description:
      'Completed hands-on training in AWS Cloud and DevOps. Designed and deployed containerized applications using Docker and Kubernetes. Implemented CI/CD pipelines with GitHub Actions and Jenkins. Deployed Node.js apps on AWS EC2, configured load balancing, auto-scaling, and managed Kubernetes cluster orchestration.',
    tags: ['AWS EC2', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'CI/CD'],
  },
]

export const projects = [
  {
    number: '01',
    date: 'March 2026',
    name: 'Heaven Village',
    subtitle: 'Property Rental Mern Platform',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'Maps API', 'Firebase'],
    description:
      'Full-stack property rental platform with real-time chat, communities, and secure authentication.Three different role based authenticated dashboards and functionalities with a fully responsive UI for improved user engagement and scalability.',
    github: 'https://github.com/Dolamani-Meher-999/Heaven-village.git', // 🔁 Replace
    live: 'https://heaven-village.vercel.app/',                 // 🔁 Replace
    featured: true,
  },
  {
    number: '02',
    date: 'Feb 2026',
    name: 'Decentralized Auction App',
    subtitle: 'Blockchain DApp',
    tech: ['Solidity', 'Ethereum', 'React', 'Web3.js', 'Hardhat', 'MetaMask'],
    description:
      'Decentralized auction system using smart contracts for secure, transparent bidding. Integrated MetaMask wallet, React + Web3.js frontend, and deployed smart contracts to simulate real-world blockchain transactions.',
    github: 'https://github.com/Dolamani-Meher-999/Decentralized-Auction-App.git', // 🔁 Replace
    live: 'https://decentralized-auction-app-s5ya.vercel.app/',                  // 🔁 Replace
    featured: true,
  },
  {
    number: '03',
    date: 'Nov 2025',
    name: 'Movie Recommendation System',
    subtitle: 'Machine Learning',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Collaborative Filtering'],
    description:
      'ML-powered recommendation engine using collaborative and content-based filtering. Processed large datasets and optimized cosine similarity calculations to significantly improve recommendation accuracy.',
    github: 'https://github.com/Dolamani-Meher-999/Movie-recommendation.git', // 🔁 Replace
    live: 'https://movie-recommendation-rho-sepia.vercel.app/',               // 🔁 Replace
    featured: false,
  },
]

export const education = [
  {
    institution: 'Silicon University',
    degree: 'B.Tech in Computer Science & Engineering',
    duration: 'Aug 2023 – June 2027',
    score: 'CGPA: 9.1',
    scoreLabel: 'CGPA',
  },
  {
    institution: 'Institute of Higher Secondary Education, SOA University',
    degree: 'Class XII — Science',
    duration: '',
    score: '90%',
    scoreLabel: 'Percentage',
  },
  {
    institution: 'Jawahar Navodaya Vidyalaya, Kalahandi',
    degree: 'Classs- X',
    duration: '',
    score: '95%',
    scoreLabel: 'Percentage',
  },
]

export const certifications = [
  { name: 'Django Web Development', org: 'Certification' },
  { name: 'DevOps Certification', org: 'CI/CD · Kubernetes' },
  { name: 'Data Analytics Certification', org: 'Tutedude' },
  { name: 'Blockchain Development', org: 'FIIT Delhi' },
]
