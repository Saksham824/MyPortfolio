"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Github, Linkedin, Twitter, Star, Briefcase, Users, Mail, Phone, Download, Code2, Figma, Database, Server, Monitor,
} from "lucide-react";
import { useState } from "react";

const Typewriter = dynamic(
  () => import("react-simple-typewriter").then((mod) => mod.Typewriter),
  { ssr: false }
);

// --- DATA ARRAYS ---
const stats = [
  { icon: <Briefcase className="w-5 h-5 text-indigo-500" />, label: "Projects", value: "30+" },
  { icon: <Star className="w-5 h-5 text-yellow-400" />, label: "Years Exp.", value: "5+" },
  { icon: <Users className="w-5 h-5 text-pink-500" />, label: "Clients", value: "12+" },
];

const socialLinks = [
  { href: "https://github.com/Saksham824", icon: <Github />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/saksham-sharma-567549349/", icon: <Linkedin />, label: "LinkedIn" },
  { href: "https://twitter.com/", icon: <Twitter />, label: "Twitter" },
];

const techStack = [
  { icon: <Monitor className="w-8 h-8 text-indigo-500" />, label: "React" },
  { icon: <Code2 className="w-8 h-8 text-purple-500" />, label: "Next.js" },
  { icon: <Server className="w-8 h-8 text-green-500" />, label: "Node.js" },
  { icon: <Database className="w-8 h-8 text-emerald-500" />, label: "MongoDB" },
  { icon: <Figma className="w-8 h-8 text-pink-500" />, label: "Figma" },
  { icon: <Code2 className="w-8 h-8 text-blue-500" />, label: "TailwindCSS" },
];

const skills = ["React", "Next.js", "Node.js", "MongoDB", "TailwindCSS", "Express"];

const projects = [
  {
    emoji: "🍵",
    bg: "bg-indigo-100 dark:bg-indigo-900",
    title: "Tea Store",
    description: "Built a Chai E-Commerce Website using Next.js with integrated online payments.",
    tech: ["Next.js", "TailwindCSS"],
    screenshots: ["/screenshots/tea1.png", "/screenshots/tea2.png", "/screenshots/tea3.png", "/screenshots/tea4.png"],
  },
  {
    emoji: "▶️",
    bg: "bg-green-100 dark:bg-green-900",
    title: "YouTube Clone",
    description: "Build a responsive youtube clone which fetch data from youtube api and display videos, channels and search results in real time.",
    tech: ["Tailwindcss", "YouTube API", "React"],
    screenshots: ["/screenshots/tubess1.png", "/screenshots/tubess2.png", "/screenshots/tubess3.png", "/screenshots/tubess4.png"],
  },
  {
    emoji: "🎵",
    bg: "bg-yellow-100 dark:bg-yellow-900",
    title: "Music Player",
    description: "A music player that fetches tracks from Spotify and play your favourite songs by categories and serch bar.",
    tech: ["Spotify API", "React"],
    screenshots: ["/screenshots/musicss1.png", "/screenshots/musicss2.png", "/screenshots/musicss3.png", "/screenshots/musicss4.png"],
  },
  {
    emoji: "🎥",
    bg: "bg-blue-100",
    title: "Video Player",
    description: "Build a video player where we can upload videos, convert any links to videos and also watch youtube from youtube api",
    tech: ["API's", "React", "Express"],
    screenshots: ["/screenshots/player1.png", "/screenshots/player2.png", "/screenshots/player3.png", "/screenshots/player4.png"],
  },
  {
    emoji: "🔗",
    bg: "bg-blue-100",
    title: "Linktree Clone",
    description: "Build a fully responsive Linktree clone that allows users to showcase all their important links in one place with a clean, modern UI.",
    tech: ["Tailwindcss", "Nextjs"],
    screenshots: ["/screenshots/tree1.png", "/screenshots/tree2.png", "/screenshots/tree3.png", "/screenshots/tree4.png"],
  },
];

const testimonials = [
  {
    name: "Amit Verma",
    role: "Product Manager",
    text: "Saksham is a fantastic developer! He delivered our project ahead of schedule and exceeded expectations.",
    avatar: "/images/avatar.jpg",
  },
  {
    name: "Priya Singh",
    role: "UI/UX Designer",
    text: "Working with Saksham was a breeze. His attention to detail and design sense is top-notch.",
    avatar: "/images/avatar.jpg",
  },
];

// --- COMPONENTS ---
function Stat({ icon, label, value }) {
  return (
    <div className="flex flex-col items-center px-4 py-2 bg-white/80 dark:bg-zinc-900/60 rounded-xl shadow border border-zinc-100 dark:border-zinc-800 min-w-[80px]">
      <span>{icon}</span>
      <span className="text-lg font-bold text-zinc-900 dark:text-white">{value}</span>
      <span className="text-xs text-zinc-500 dark:text-zinc-400">{label}</span>
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 shadow hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-all duration-150 hover:scale-110 text-indigo-600 dark:text-indigo-300"
    >
      {icon}
    </Link>
  );
}

function TechStack({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white dark:bg-zinc-900 shadow hover:scale-110 transition">
      {icon}
      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">{label}</span>
    </div>
  );
}

function Testimonial({ name, role, text, avatar }) {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-6 shadow flex flex-col items-center">
      <Image src={avatar} alt={name} width={60} height={60} className="rounded-full mb-3" />
      <p className="text-zinc-700 dark:text-zinc-200 italic mb-2">"{text}"</p>
      <span className="font-semibold text-indigo-600 dark:text-indigo-400">{name}</span>
      <span className="text-xs text-zinc-500 dark:text-zinc-400">{role}</span>
    </div>
  );
}

export default function Hero() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background visual */}
        <div className="absolute inset-0 -z-10">
          <video autoPlay loop muted playsInline className="object-cover w-full h-full opacity-80">
            <source src="/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 dark:from-zinc-900/80 dark:via-zinc-900/60 dark:to-indigo-950/60" />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-200/40 via-transparent to-transparent dark:from-indigo-900/40" />
          <div className="absolute left-10 top-10 w-24 h-24 bg-indigo-400/20 rounded-full blur-2xl animate-float-slow" />
          <div className="absolute right-10 bottom-10 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl animate-float-slower" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16 md:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Text */}
            <div className="mt-5 lg:col-span-7 text-center lg:text-left animate-fade-in-up">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-1 mb-5 font-medium shadow-sm">
                <svg width="18" height="18" fill="none" className="text-indigo-400" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /></svg>
                Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white leading-tight drop-shadow-[0_2px_12px_rgba(67,56,202,0.10)]">
                Hi, I&apos;m Saksham Sharma.
                <span className="block text-indigo-60 dark:text-indigo-400 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                  <Typewriter
                    words={[
                      "Fullstack Developer",
                      "MERN Stack Developer",
                      "UI/UX Designer",
                      "Frontend Developer",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
              </h1>
              <p className="mt-6 text-lg  max-w-xl mx-auto lg:mx-0 animate-fade-in">
                I design and build fast, accessible, and delightful web experiences. <br className="hidden sm:inline" />
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Let&apos;s build something amazing together!</span>
              </p>
              {/* Quick Stats */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
                {stats.map((stat, i) => <Stat key={i} {...stat} />)}
              </div>
              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="#projects" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white px-8 py-3 font-semibold shadow-xl transition-all duration-150 scale-100 hover:scale-105">
                  🚀 See my work
                </Link>
                <Link href="#contact" className="inline-flex items-center justify-center rounded-full border border-indigo-200 dark:border-indigo-700 px-7 py-3 text-indigo-700 dark:text-indigo-200 bg-white/80 dark:bg-zinc-900/60 hover:bg-indigo-50 dark:hover:bg-indigo-900/80 font-semibold transition-all duration-150 scale-100 hover:scale-105">
                  Get in touch
                </Link>
                <Link href="/resume.pdf" download className="inline-flex items-center justify-center rounded-full border border-indigo-400 px-7 py-3 text-indigo-600 dark:text-indigo-300 bg-white/90 dark:bg-zinc-900/70 hover:bg-indigo-50 dark:hover:bg-zinc-800 font-semibold transition-all duration-150 scale-100 hover:scale-105 gap-2">
                  <Download className="w-4 h-4" /> Resume
                </Link>
              </div>
              {/* Social Media Links */}
              <div className="mt-8 flex justify-center lg:justify-start gap-4">
                {socialLinks.map((s, i) => <SocialLink key={i} {...s} />)}
              </div>
            </div>
            {/* Right: Preview Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end mt-10 lg:mt-0 animate-fade-in-right">
              <div className="w-full max-w-md bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg rounded-3xl shadow-2xl ring-1 ring-indigo-200/40 dark:ring-indigo-800/40 overflow-hidden border border-zinc-100 dark:border-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(67,56,202,0.25)]">
                <div className="flex items-center gap-3 p-4 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-300" />
                  <div className="w-3 h-3 rounded-full bg-emerald-300" />
                  <div className="ml-auto text-xs text-zinc-500 dark:text-zinc-400">Portfolio preview</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Featured project</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                    A short description that matches the style in your video.
                  </p>
                  <div className="mt-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-3">
                    <div className="h-36 bg-[url('/images/img3.webp')] bg-cover bg-center rounded-md shadow-inner" />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">React · Next.js · Tailwind</div>
                    <Link href="#projects" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline transition">View →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">About Me</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            I&apos;m a passionate developer who loves building interactive, scalable, and user-friendly web applications. With a strong foundation in fullstack development, I aim to deliver creative solutions that make a difference.<br /><br />
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">Specialties:</span> React, Next.js, Node.js, Express.js MongoDB, UI/UX, and performance optimization.<br />
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">Fun fact:</span> I love collaborating with designers and mentoring junior devs!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8">
            <Image src="/images/avatar.jpg" alt="Profile" width={150} height={150} className="rounded-full shadow-xl mx-auto" />
            <div className="text-left max-w-md mx-auto">
              <ul className="text-zinc-700 dark:text-zinc-300 text-base space-y-2">
                <li>🌍 Based in India</li>
                <li>🎓 B.Tech in Computer Science</li>
                <li>🏆 Hackathon Winner (2023)</li>
                <li>💬 Fluent in English & Hindi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="techstack" className="py-16 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {techStack.map((t, i) => <TechStack key={i} {...t} />)}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-12">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <div key={proj.title} className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg hover:scale-105 transition border border-zinc-100 dark:border-zinc-800 flex flex-col">
                <div className={`h-40 ${proj.bg} rounded-lg mb-4 flex items-center justify-center`}>
                  <span className="text-4xl">{proj.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">{proj.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300 px-2 py-0.5 rounded text-xs">{t}</span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline"
                >
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => <Testimonial key={i} {...t} />)}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {skills.map((skill) => (
              <div key={skill} className="p-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-medium shadow hover:scale-110 transition">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-white dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Contact Me</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">Let&apos;s collaborate and create something amazing together 🚀</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="mailto:your@email.com" className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition">
              <Mail /> Email Me
            </Link>
            <Link href="tel:+916005310237" className="flex items-center gap-2 border border-indigo-400 text-indigo-600 dark:text-indigo-300 px-6 py-3 rounded-full shadow hover:bg-indigo-50 dark:hover:bg-zinc-900 transition">
              <Phone /> Call Me
            </Link>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in-up { 0% {opacity:0; transform:translateY(40px);} 100% {opacity:1; transform:translateY(0);} }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fade-in-right { 0% {opacity:0; transform:translateX(40px);} 100% {opacity:1; transform:translateX(0);} }
        .animate-fade-in-right { animation: fade-in-right 1.2s cubic-bezier(.4,0,.2,1) both; }
        @keyframes gradient-x { 0%,100% {background-position:0% 50%;} 50% {background-position:100% 50%;} }
        .animate-gradient-x { background-size:200% 200%; animation:gradient-x 4s ease-in-out infinite; }
        @keyframes float-slow { 0%,100% {transform:translateY(0);} 50% {transform:translateY(-20px);} }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        @keyframes float-slower { 0%,100% {transform:translateY(0);} 50% {transform:translateY(30px);} }
        .animate-float-slower { animation: float-slower 9s ease-in-out infinite; }
      `}</style>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl max-w-3xl w-full p-6 relative">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-zinc-600 dark:text-zinc-300 hover:text-red-500">✕</button>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">{selectedProject.title}</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedProject.tech.map((t, idx) => (
                <span key={idx} className="bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded text-sm">{t}</span>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {selectedProject.screenshots.map((src, idx) => (
                <img key={idx} src={src} alt={`${selectedProject.title} screenshot ${idx + 1}`} className="rounded-lg shadow-md hover:scale-105 transition" />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}