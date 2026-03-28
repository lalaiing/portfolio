export const siteConfig = {
  name: "Stella Ling Raharjo",
  title: "Computer Science and AI Undergraduate Student",
  description: "Portfolio website of Stella Ling Raharjo",
  accentColor: "#6923a6",
  social: {
    email: "stella.ling.raharjo@gmail.com",
    linkedin: "https://linkedin.com/in/stella-ling-raharjo",
    github: "https://github.com/lalaiing",
  },
  aboutMe:
    "I am a Year 2 undergraduate studying Computer Science, Artificial Intelligence, and Big Data in HKUST. I am passionate about bringing AI solutions to increase decision making efficiency in corporate settings. As a full-time student and part-time competition geek, I enjoy participating in hackathons to solve practical problems in real-world scenarios. Recently, I have developed a machine learning model on traffic predictions, winning second place in the DTS Yandex hackathon. I am excited to bring impact through my AI and software engineering skills.",
  skills: ["C", "C++", "Python", "JavaScript", "SQL", "Swift", "HTML", "CSS"],
  projects: [
    {
      name: "Jakarta Urban Travel Times Predictor",
      description:
        "Submission for the DTS Yandex Competition Indonesia that won second place. Developed a regression model to predict urban travel times in Jakarta.",
      link: "https://github.com/lalaiing/dts-yandex-hackathon-2025",
      skills: ["Python", "Scikit-learn"],
    },
    {
      name: "Course Monitor Discord Bot",
      description:
        "A Discord bot to monitor course quota changes in real time by scraping the official WCQ system. It detects events such as quota increases, section cancellations, and new openings, and sends structured alerts to Discord servers. Built with asynchronous Python, includes resilient retry/backoff handling and a lightweight FastAPI service for uptime monitoring.",
      link: "https://github.com/lalaiing/course-watchdog",
      skills: ["Python", "discord.py", "aiohttp", "FastAPI", "Web Scraping"],
    },
  ],
  experience: [
    {
      company: "Apple Developer Academy @ UC - Foundation Program",
      title: "Foundation Program Participant",
      dateRange: "June - July 2024",
      bullets: [
        "Developed a memory game prototype using Swift and SwiftUI in a team of five.",
        "Consolidated and integrated multiple Swift source files into a unified codebase",
        "Implemented UI/UX concepts to enhance user experience and app aesthetics.",
      ],
    },
    {
      company: "Morning Glory Enterprise",
      title: "Student Intern",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Crafted web and mobile application interfaces using Figma.",
        "Participated in internal design meetings to observe the software development life cycle, cross-functional collaboration and decision-making processes.",
        "Shadowed client meetings to observe communication and negotiation.",
      ],
    },
  ],
  education: [
    {
      school: "The Hong Kong University of Science and Technology",
      degree: "Bachelor of Engineering in Computer Science with an Extended Major in Artificial Intelligence, and Minor in Big Data Technology",
      dateRange: "2024 - 2028",
      achievements: [
        "School of Engineering Dean’s List: Fall 24/25, Spring 24/25, Fall 25/26.",
        "Relevant coursework: Object-Oriented Programming and Data Structures, Exploring Artificial Intelligence",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
  achievements: [
    {
      title: "2nd Winner of DTS Yandex Competition Indonesia",
      organization: "Yandex, Digital Talent Scholarship – Ministry of Communication and Digital Affairs, Republic of Indonesia, and Techready.id",
      dateRange: "2025",
      details: [
        "Developed a machine learning model to predict urban travel times in Jakarta with second best R2 score."
      ],
    },
    {
      title: "Finalist in the Indonesian National Olympiad of Informatics (Olimpiade Sains Nasional bidang Informatika)",
      organization: "The Ministry of Education and Culture, Republic of Indonesia",
      dateRange: "2021, 2022, 2023",
      details: [
        "Competitive Programming with C++."
      ],
    },
  ],
};
