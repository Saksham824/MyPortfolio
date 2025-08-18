'use client'
import Image from 'next/image'
import { Briefcase, Award, Users, Mail, MapPin, Github, Linkedin, Code, Monitor, Zap, Coffee, Heart } from "lucide-react";
import { motion } from "framer-motion"
import Link from 'next/link';

const hobbies = [
  { icon: "🎨", title: "Art & Design" },
  { icon: "🎵", title: "Music" },
  { icon: "🎮", title: "Gaming" },
  { icon: "📚", title: "Reading" },
  { icon: "✈️", title: "Travel" },
  { icon: "🏋️", title: "Fitness" },
]

export default function About() {

  return (
    <>
      <section className="max-w-7xl bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black mt-10 mx-auto px-4 sm:px-8 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Image, Avatar & Stats */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start animate-fade-in-left relative">
            {/* Decorative accent */}
            <div className="absolute -top-10 -left-10 w-56 h-56 bg-indigo-400/20 dark:bg-indigo-800/20 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Avatar */}
            <div className="relative z-10 mb-4">
              <Image
                src="/images/avatar.jpg"
                alt="Avatar"
                width={96}
                height={96}
                className="rounded-full border-4 border-indigo-200 dark:border-indigo-700 shadow-lg object-fill"
                priority
              />
            </div>

            {/* Main Video */}
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg transition-all duration-300 hover:shadow-[0_8px_32px_0_rgba(67,56,202,0.18)] hover:ring-2 hover:ring-indigo-400/40">
              <video
                src="/video3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full aspect-[9/7] scale-100 hover:scale-105 transition-all duration-300"
              />
            </div>


            {/* Stats */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Stat icon={<Award className="w-6 h-6 text-indigo-500 dark:text-indigo-300 mb-1" />} label="Years" value="5+" />
              <Stat icon={<Briefcase className="w-6 h-6 text-indigo-400 mb-1" />} label="Projects" value="30+" />
              <Stat icon={<Users className="w-6 h-6 text-pink-500 mb-1" />} label="Clients" value="12+" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white drop-shadow-[0_2px_12px_rgba(67,56,202,0.10)]">
              About me
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-xl">
              I&apos;m a frontend developer focused on building accessible and performant web applications. I enjoy turning complex problems into clean, usable designs — from prototypes to production.
            </p>

            {/* Personal Quote */}
            <blockquote className="mt-6 border-l-4 border-indigo-400 pl-4 italic text-zinc-600 dark:text-zinc-300">
              “Code is like humor. When you have to explain it, it&apos;s bad.”
              <span className="block mt-2 text-xs text-zinc-400">— Saksham Sharma</span>
            </blockquote>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-gradient-to-r from-indigo-200 via-zinc-200 to-pink-200 dark:from-indigo-800 dark:via-zinc-800 dark:to-pink-800 opacity-60" />

            {/* Contact Info & Socials */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <Link href="mailto:youremail@example.com" className="hover:underline">sakshams824@example.com</Link>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  Jammu, India
                </div>
              </div>
              <div className="flex gap-3 mt-2 sm:mt-0">
                <SocialLink href="https://github.com/Saksham824" icon={<Github />} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/saksham-sharma-567549349/" icon={<Linkedin />} label="LinkedIn" />
              </div>
            </div>

            {/* What I do / How I work */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white/80 dark:bg-zinc-900/80 rounded-2xl p-6 shadow border border-zinc-100 dark:border-zinc-800 transition-all duration-200 hover:shadow-lg hover:ring-2 hover:ring-indigo-200/60 dark:hover:ring-indigo-800/40">
                <h4 className="font-semibold text-zinc-900 dark:text-white">What I do</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                  Frontend engineering, component systems, performance tuning, and interaction design.
                </p>
              </div>
              <div className="bg-white/80 dark:bg-zinc-900/80 rounded-2xl p-6 shadow border border-zinc-100 dark:border-zinc-800 transition-all duration-200 hover:shadow-lg hover:ring-2 hover:ring-indigo-200/60 dark:hover:ring-indigo-800/40">
                <h4 className="font-semibold text-zinc-900 dark:text-white">How I work</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                  Collaborative, test-driven, and user-focused. I ship iteratively and value clear communication.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <h5 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Tech stack</h5>
              <div className="mt-3 flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind', 'Express.js', 'Node.js', 'Vercel'].map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full font-medium shadow-sm transition-all duration-150 hover:bg-indigo-100 dark:hover:bg-indigo-800/60 hover:scale-105 cursor-pointer"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white px-7 py-3 font-semibold shadow-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400 scale-100 hover:scale-105"
              >
                👋 Say hello
              </Link>
              <Link
                href="/resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-700 px-6 py-3 text-indigo-700 dark:text-indigo-200 bg-white/80 dark:bg-zinc-900/60 hover:bg-indigo-50 dark:hover:bg-indigo-900/80 font-semibold transition-all duration-150 scale-100 hover:scale-105"
                download
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                Download CV
              </Link>
            </div>
          </div>
        </div>

        {/* ================= EXTRA PROFESSIONAL SECTIONS ================= */}

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Experience</h3>
          <div className="space-y-6 border-l-2 border-indigo-300 dark:border-indigo-700 pl-6">
            <div>
              <h4 className="font-semibold">MERN Stack Developer - Think Next Technologies</h4>
              <p className="text-sm text-zinc-500">2025 - Present</p>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mt-1">Leading frontend projects with React and Next.js, improving app performance by 40%.</p>
            </div>
            <div>
              <h4 className="font-semibold">Frontend Developer - Think Next </h4>
              <p className="text-sm text-zinc-500">2025</p>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm mt-1">Worked closely with designers to ship highly polished UI components and design systems.</p>
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Service icon={<Code />} title="Web Development" desc="Building scalable, modern, and responsive web apps." />
            <Service icon={<Monitor />} title="UI/UX Design" desc="Designing intuitive, user-friendly interfaces." />
            <Service icon={<Zap />} title="Performance" desc="Optimizing apps for speed and accessibility." />
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Testimonials</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <Testimonial name="John Doe" role="CEO, StartupX" quote="Saksham is an exceptional developer who delivers quality work on time." />
            <Testimonial name="Jane Smith" role="CTO, Innovate Inc" quote="Highly recommend for frontend development — great communicator and problem solver." />
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <FunFact icon={<Coffee className="w-6 h-6 mx-auto text-indigo-400" />} label="Cups of Coffee" value="1200+" />
          <FunFact icon={<Code className="w-6 h-6 mx-auto text-pink-400" />} label="Lines of Code" value="100k+" />
          <FunFact icon={<Heart className="w-6 h-6 mx-auto text-red-400" />} label="Happy Clients" value="12+" />
          <FunFact icon={<Users className="w-6 h-6 mx-auto text-green-400" />} label="Team Projects" value="20+" />
        </div>

        {/* Custom animation keyframes */}
        <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes fade-in-left {
          0% { opacity: 0; transform: translateX(-40px);}
          100% { opacity: 1; transform: translateX(0);}
        }
        .animate-fade-in-left {
          animation: fade-in-left 1.1s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
      </section>
      <section className="py-12 bg-background text-foreground">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Hobbies & Interests
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {hobbies.map((hobby, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center justify-center p-4 rounded-2xl shadow-md bg-card hover:shadow-lg transition"
                whileHover={{ scale: 1.1, rotate: 2 }}
              >
                <span className="text-4xl mb-2">{hobby.icon}</span>
                <p className="text-sm font-medium text-center">{hobby.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// ================== SMALL COMPONENTS ==================

// Stat component
function Stat({ icon, label, value }) {
  return (
    <div className="p-4 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-indigo-900/30 dark:via-zinc-900/30 dark:to-indigo-950/30 rounded-xl shadow flex flex-col items-center border border-indigo-100 dark:border-indigo-800 min-w-[70px]">
      {icon}
      <div className="text-xl font-extrabold text-indigo-700 dark:text-indigo-300">{value}</div>
      <div className="text-xs text-zinc-500 dark:text-zinc-400">{label}</div>
    </div>
  );
}

// Social Link component
function SocialLink({ href, icon, label }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 shadow hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-all duration-150 hover:scale-110 text-indigo-600 dark:text-indigo-300"
    >
      {icon}
    </Link>
  );
}

// Service component
function Service({ icon, title, desc }) {
  return (
    <div className="bg-white/80 dark:bg-zinc-900/80 rounded-xl p-6 shadow border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition duration-200">
      <div className="text-indigo-500 dark:text-indigo-300 mb-3">{icon}</div>
      <h4 className="font-semibold text-zinc-900 dark:text-white">{title}</h4>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">{desc}</p>
    </div>
  );
}

// Testimonial component
function Testimonial({ name, role, quote }) {
  return (
    <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 shadow">
      <p className="italic text-zinc-600 dark:text-zinc-300">&quot;{quote}&quot;</p>
      <div className="mt-3">
        <p className="font-semibold text-zinc-900 dark:text-white">{name}</p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{role}</p>
      </div>
    </div>
  );
}

// Fun Fact component
function FunFact({ icon, value, label }) {
  return (
    <div>
      {icon}
      <p className="text-xl font-bold text-zinc-900 dark:text-white mt-2">{value}</p>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">{label}</p>
    </div>
  );
}
