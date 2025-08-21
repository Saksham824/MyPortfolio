"use client"

import { motion } from "framer-motion"
import { Briefcase, Code2, Monitor, Github, Globe, Mail, Star } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Tea Store",
    description: "Built a Chai E-Commerce Website using Next.js with integrated online payments.",
    tech: ["Next.js", "TailwindCSS", "RazorPay  API"],
    link: "https://github.com/Saksham824/Tea-Store",
  },
  {
    title: "YouTube Clone",
    description: "A full-featured video streaming platform with channel pages, search, and video playback.",
    tech: ["React", "Tailwind", "YouTube API"],
    link: "https://github.com/Saksham824/VidTube",
    live: "https://vid-tube-mu.vercel.app/",
  },
  {
    title: "Spotify Clone",
    description: "Developed a Spotify-inspired music streaming web application that allows users to search for songs, play tracks, view recent songs, and control playback with next/previous functionality.",
    tech: ["React", "API","Tailwindcss"],
    link: "https://github.com/Saksham824/Spotify",
    live: "https://spotify-liart-nu.vercel.app/",
  },
  {
    title: "Video Player",
    description: "Build a video player where we can upload videos, convert any links to videos and also watch youtube from youtube api",
    tech: ["React", "Node.js","Tailwindcss","Express"],
    link: "https://github.com/Saksham824/VideoPlayer",
    live: "",
  },
  {
    title: "Linktree Clone",
    description: "Build a fully responsive Linktree clone that allows users to showcase all their important links in one place with a clean, modern UI.",
    tech: ["Nextjs","Tailwindcss"],
    link: "https://github.com/Saksham824/Linktree-Clone",
    live: "",
  },
]

const experiences = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    duration: "2025",
    description: "Building responsive UIs with React, Next.js, and Tailwind. Collaborated with designers to create polished web experiences.",
  },
  {
    role: "Full Stack Intern",
    company: "Think Next Technologies",
    duration: "2025 - Present",
    description: "Worked on MERN stack applications, built APIs, integrated authentication, and deployed apps to production.",
  },
]

const certifications = [
  {
    name: "Meta Front-End Developer",
    org: "Coursera",
    year: "2023",
    link: "https://coursera.org/verify/meta-frontend",
  },
  {
    name: "HackerRank Frontend Developer (React)",
    org: "hackerrank",
    year: "11 Jun, 2025",
    link: "https://www.hackerrank.com/certificates/e94beeeb7f0f?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate",
  },
]

const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Manager, Tech Solutions Inc.",
    text: "A highly skilled developer who always delivers on time. Their attention to detail and UI/UX sense is top-notch.",
  },
  {
    name: "John Smith",
    role: "CTO, Startup Hub",
    text: "Brings creative solutions to the table and is a pleasure to work with. Highly recommended for any dev team.",
  },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen mt-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black px-2 sm:px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          My <span className="text-indigo-500">Work</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Explore my featured projects, professional experience, certifications, and the skills that drive my passion for building impactful digital products.
        </p>
      </motion.div>

      {/* Divider */}
      <div className="max-w-3xl mx-auto border-t border-gray-200 dark:border-gray-700 mb-12"></div>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <Monitor className="w-7 h-7 text-indigo-500" /> Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-indigo-500 text-sm font-medium hover:underline"
                >
                  <Github className="w-4 h-4" /> Code
                </Link>
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-green-600 dark:text-green-400 text-sm font-medium hover:underline"
                  >
                    <Globe className="w-4 h-4" /> Live
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <Briefcase className="w-7 h-7 text-indigo-500" /> Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.company} • {exp.duration}</p>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <Star className="w-7 h-7 text-indigo-500" /> Certifications
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {certifications.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="block px-6 py-4 rounded-xl bg-indigo-50 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 shadow border border-indigo-100 dark:border-indigo-800 transition font-medium min-w-[220px]"
            >
              <div className="text-lg font-semibold">{cert.name}</div>
              <div className="text-sm">{cert.org} • {cert.year}</div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto mb-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200 flex justify-center items-center gap-2">
          <Code2 className="w-7 h-7 text-indigo-500" /> Skills & Tools
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {["React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwindcss", "Git", "Framer Motion", "Postman", "Redux","MongoDB Compass", "Vercel"].map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 font-medium shadow-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200 flex items-center gap-2 justify-center">
          <Star className="w-7 h-7 text-yellow-400" /> Testimonials
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 flex-1"
            >
              <p className="italic text-gray-700 dark:text-gray-300 mb-4">"{t.text}"</p>
              <div className="font-semibold text-indigo-600 dark:text-indigo-300">{t.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-indigo-600 dark:bg-indigo-700 text-white py-10 px-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-2 flex justify-center items-center gap-2">
            <Mail className="w-6 h-6" /> Let&apos;s Connect!
          </h2>
          <p className="mb-4 text-indigo-100">
            Interested in working together or have a question? Feel free to reach out.
          </p>
          <Link
            href="mailto:sakshams824@gmail.com"
            className="inline-block mt-2 px-6 py-2 rounded-full bg-white text-indigo-700 font-semibold shadow hover:bg-indigo-100 transition"
          >
            Email Me
          </Link>
        </motion.div>
      </section>
    </div>
  )
}