import './App.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import React, { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">HS</div>
      <ul className="navbar-links">
        {NAV_LINKS.map(link => (
          <li key={link.label}><a href={link.href}>{link.label}</a></li>
        ))}
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero-section-minimal">
      <div className="hero-left">
        <div className="hero-stats">
          <div><span>+2</span><br />Years Exp</div>
          <div><span>+5</span><br />Projects</div>
        </div>
        <h1 className="hero-hello">Hello, I'm</h1>
        <p className="hero-name">Harshit Sathone</p>
        <p className="hero-desc">GCP-certified Backend Engineer (Professional Cloud Architect) specializing in scalable Spring Boot microservices and DevOps automation. Expertise in high-volume systems, Kafka pipeline optimization, and cloud-native deployments (GCP/AWS/Kubernetes). Proven track record enhancing system resilience and CI/CD efficiency.</p>
        <a className="download-resume-btn" href="/Harshit's resume_new.pdf" download>Download Resume (PDF)</a>
      </div>
      <div className="hero-right">
        <img className="hero-img" src="/profile.jpg" alt="Harshit Sathone" />
      </div>
    </section>
  )
}

function AboutMe() {
  return (
    <section className="about-card" id="about" data-aos="fade-up">
      <h2>About Me</h2>
      <div className="about-summary-row">
        <div className="about-text">
          <p>GCP-certified Backend Engineer (Professional Cloud Architect) specializing in scalable Spring Boot microservices and DevOps automation. Expertise in high-volume systems, Kafka pipeline optimization, and cloud-native deployments (GCP/AWS/Kubernetes). Proven track record enhancing system resilience and CI/CD efficiency.</p>
        </div>
      </div>
      <div className="about-skills-row">
        <div className="about-skill-group">
          <div className="about-skill-label">Technologies</div>
          <div className="about-skill-pills">
            <span className="about-skill-pill">Spring Boot</span>
            <span className="about-skill-pill">Jenkins</span>
            <span className="about-skill-pill">Docker</span>
            <span className="about-skill-pill">Kubernetes</span>
            <span className="about-skill-pill">REST APIs</span>
            <span className="about-skill-pill">Git</span>
            <span className="about-skill-pill">GitHub</span>
            <span className="about-skill-pill">MongoDB</span>
            <span className="about-skill-pill">SQL</span>
            <span className="about-skill-pill">Agile</span>
          </div>
        </div>
        <div className="about-skill-group">
          <div className="about-skill-label">Cloud</div>
          <div className="about-skill-pills">
            <span className="about-skill-pill">GCP</span>
            <span className="about-skill-pill">AWS</span>
          </div>
        </div>
        <div className="about-skill-group">
          <div className="about-skill-label">Languages</div>
          <div className="about-skill-pills">
            <span className="about-skill-pill">Python</span>
            <span className="about-skill-pill">Java</span>
            <span className="about-skill-pill">BASH Scripting</span>
          </div>
        </div>
        <div className="about-skill-group">
          <div className="about-skill-label">OS</div>
          <div className="about-skill-pills">
            <span className="about-skill-pill">Debian</span>
            <span className="about-skill-pill">Ubuntu</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);
  return (
    <section className="portfolio-section" id="projects" data-aos="fade-up">
      <h2>Projects</h2>
      {/* <div className="portfolio-grid"> */}
        {projects.map((p, i) => (
          <div className="project-card" key={i} data-aos="fade-up">
            <div className="portfolio-title">{p.title}</div>
            <div className="portfolio-category">{p.status}</div>
            <ul className="portfolio-bullets">
              {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      {/* </div> */}
    </section>
  )
}

const experiences = [
  {
    company: 'Persistent Systems Limited',
    role: 'Software Engineer',
    date: 'Sep 2023 – Present',
    bullets: [
      'Developed and maintained a large-scale Java Spring Boot application processing high-volume insurance records.',
      'Built and supported Apache Kafka-based pipelines for real-time data ingestion and inter-service communication.',
      'Deployed and managed the application in both Google Cloud Platform (GCP) and on-premises environments, ensuring high availability and performance.',
      'Designed and optimized multiple record ingestion and processing flows, tailored to complex insurance workflows.',
      'Collaborated with cross-functional teams to enhance scalability, observability, and fault tolerance.'
    ]
  },
  {
    company: 'Persistent Systems Limited',
    role: 'Intern',
    date: 'Jan 2023 – Jun 2023',
    bullets: [
      'Gained proficiency in core Java, JavaScript, Spring (MVC), and Spring Boot.',
      'Strengthened expertise in Java, JavaScript, Spring, and Spring Boot through hands-on experience.',
      'Acquired hands-on experience with GCP via Skill Boost Platform, covering cloud fundamentals and best practices.'
    ]
  },
]

function Experience() {
  return (
    <section className="experience-section-minimal" id="experience" data-aos="fade-up">
      <h2>Experience</h2>
      <div>
        {experiences.map((exp, i) => (
          <div className="exp-item" key={i} data-aos="fade-up">
            <div className="exp-dot" />
            <div className="exp-content">
              <div className="exp-row">
                <span className="exp-company">{exp.company}</span>
                <span className="exp-role">{exp.role}</span>
                <span className="exp-date">{exp.date}</span>
              </div>
              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const education = [
  {
    school: 'Yeshwantrao Chavan College of Engineering',
    degree: 'Bachelor of Engineer in Information Technology',
    gpa: '8.31',
  },
  {
    school: 'Acharya Shrimannarayan Polytechnic',
    degree: 'Diploma in Computer Science',
    score: '89.83%',
  },
]

function Education() {
  return (
    <section className="about-card" id="education" data-aos="fade-up">
      <h2>Education</h2>
      <ul className="education-list">
        <li><b>{education[0].school}</b><br />{education[0].degree}<br />GPA: {education[0].gpa}</li>
        <li><b>{education[1].school}</b><br />{education[1].degree}<br />Score: {education[1].score}</li>
      </ul>
    </section>
  )
}

const achievements = [
  { text: 'Google Cloud Platform Professional Cloud Architect Certification - May 2024' },
  { text: 'Google Cloud Platform Associate Cloud Engineer Certification - Dec 2023' },
  { text: 'Design and Analysis of Algorithms (NPTEL) - April 2022' },
  { 
    text: 'IEEE Paper Publication - 2023: Identification of Ayurvedic leaves using Deep Learning',
    link: 'https://ieeexplore.ieee.org/document/10169388/' 
  },
]

function Achievements() {
  return (
    <section className="about-card" id="achievements" data-aos="fade-up">
      <h2>Achievements</h2>
      <ul className="achievements-list">
        {achievements.map((a, i) => (
          <li key={i}>
            {a.link ? (
              <a href={a.link} target="_blank" rel="noopener noreferrer">{a.text}</a>
            ) : (
              a.text
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section-minimal" id="contact" data-aos="fade-up">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:harshitsathone@gmail.com">harshitsathone@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/harshit-sathone" target="_blank" rel="noopener noreferrer">linkedin.com/in/harshit-sathone</a></p>
      <p>GitHub: <a href="https://github.com/Victor5H" target="_blank" rel="noopener noreferrer">github.com/Victor5H</a></p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer-minimal">
      <div className="footer-links">
        {NAV_LINKS.map(link => (
          <a key={link.label} href={link.href}>{link.label}</a>
        ))}
      </div>
      <div className="footer-email">harshitsathone@gmail.com</div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 60 })
  }, [])
  return (
    <div className="portfolio-root-minimal">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}
