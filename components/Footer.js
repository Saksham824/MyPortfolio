'use client'
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Decorative divider */}
      <div className="absolute left-0 right-0 -top-1 h-1 bg-gradient-to-r from-indigo-400/20 via-pink-400/20 to-transparent dark:from-indigo-700/30 dark:via-pink-700/30" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-br from-white/90 via-indigo-50/80 to-indigo-100/70 dark:from-zinc-900/90 dark:via-zinc-900/80 dark:to-indigo-950/70 border-t border-zinc-100 dark:border-zinc-800 shadow-inner backdrop-blur-lg rounded-t-3xl animate-fade-in-up">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-sm text-zinc-600 dark:text-zinc-400 text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-semibold text-indigo-600 dark:text-indigo-300">MyPortfolio</span>. All rights reserved.
          </div>
          <div className="text-xs text-zinc-400 dark:text-zinc-600 flex items-center gap-1">
            Made with <span className="text-pink-500 text-base">♥</span> By Saksham
          </div>
        </div>
        <div className="flex items-center gap-5">
          <FooterIcon
            href="https://twitter.com/"
            label="Twitter"
            icon={<Twitter className="w-5 h-5" />}
            color="text-sky-500"
          />
          <FooterIcon
            href="https://github.com/Saksham824"
            label="GitHub"
            icon={<Github className="w-5 h-5" />}
            color="text-zinc-700 dark:text-zinc-200"
          />
          <FooterIcon
            href="https://www.linkedin.com/in/saksham-sharma-567549349/"
            label="LinkedIn"
            icon={<Linkedin className="w-5 h-5" />}
            color="text-blue-600 dark:text-blue-400"
          />
        </div>
      </div>
      {/* Custom animation keyframes */}
      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </footer>
  );
}

// Reusable FooterIcon component for animation and color
function FooterIcon({ href, label, icon, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`rounded-full p-2 bg-white/80 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800 shadow hover:scale-110 hover:shadow-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/40 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${color}`}
    >
      {icon}
    </a>
  );
}