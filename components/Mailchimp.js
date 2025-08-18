"use client";

import { useState } from "react";
import { Mail, CheckCircle2, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

export default function Mailchimp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);

  const handle = (e) => {
    e.preventDefault();
    // TODO: Hook this to your mailing API
    setSent(true);
  };

  return (
    <div className="max-w-2xl w-full mt-10 sm:mt-16 mx-auto bg-gradient-to-br from-white/90 via-indigo-50/80 to-indigo-100/70 dark:from-zinc-900/90 dark:via-zinc-900/80 dark:to-indigo-950/70 border border-zinc-100 dark:border-zinc-800 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl backdrop-blur-lg relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute -top-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 bg-indigo-400/20 dark:bg-indigo-800/20 rounded-full blur-2xl pointer-events-none" />
      {/* Animated badge */}
      <div className="absolute top-3 right-3 sm:top-6 sm:right-6 flex items-center gap-2 bg-white/90 dark:bg-zinc-900/80 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow text-xs font-semibold text-indigo-700 dark:text-indigo-300 animate-bounce-slow z-10">
        <Users className="w-4 h-4" />
        <span className="hidden xs:inline">Join 1,000+ readers</span>
        <span className="inline xs:hidden">1,000+</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
        <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/40 p-2 shadow animate-pulse-slow">
          <Mail className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight drop-shadow">
          Subscribe to Selene&apos;s Newsletter
        </h3>
      </div>
      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-6">
        I occasionally write about design and engineering. Get the best insights, no spam.
      </p>
      {!sent ? (
        <form
          onSubmit={handle}
          className="flex flex-col gap-3 sm:flex-row sm:gap-2 animate-fade-in-up"
          autoComplete="off"
        >
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="w-full sm:w-auto flex-1 rounded-lg border border-zinc-200 dark:border-zinc-700 px-4 py-2.5 sm:px-5 sm:py-3 text-base bg-white/80 dark:bg-zinc-800/80 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-150 shadow-sm hover:shadow-md"
          />
          <input
            required
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full sm:w-auto flex-1 rounded-lg border border-zinc-200 dark:border-zinc-700 px-4 py-2.5 sm:px-5 sm:py-3 text-base bg-white/80 dark:bg-zinc-800/80 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-150 shadow-sm hover:shadow-md"
          />
          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold px-7 py-2.5 sm:py-3 shadow-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400 scale-100 hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-1" />
            <span className="hidden xs:inline">Subscribe</span>
            <span className="inline xs:hidden">Join</span>
          </button>
        </form>
      ) : (
        <div className="mt-6 flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold animate-fade-in-up text-base sm:text-lg">
          <CheckCircle2 className="w-6 h-6" />
          Thanks — check your inbox!
        </div>
      )}

      {/* Social proof/testimonial */}
      <div className="mt-6 flex items-center gap-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
        <ShieldCheck className="w-4 h-4 text-indigo-400" />
        <span>No spam. Unsubscribe anytime.</span>
      </div>
      <div className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
        &quot;One of the best newsletters for devs!&quot; — <span className="font-semibold text-indigo-500 dark:text-indigo-300">A Happy Subscriber</span>
      </div>
      {/* Unsubscribe link (for demo, not functional) */}
      <div className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
        <Link href="#" className="underline hover:text-indigo-500 dark:hover:text-indigo-300 transition">Unsubscribe</Link> at any time.
      </div>
      {/* Custom animation keyframes */}
      <style jsx global>{`
        @media (max-width: 640px) {
          .sm\\:flex-row { flex-direction: column !important; }
          .sm\\:gap-2 { gap: 0.75rem !important; }
          .sm\\:w-auto { width: 100% !important; }
          .sm\\:px-5 { padding-left: 1rem !important; padding-right: 1rem !important; }
          .sm\\:py-3 { padding-top: 0.75rem !important; padding-bottom: 0.75rem !important; }
          .sm\\:text-base { font-size: 1rem !important; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-8px);}
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1;}
          50% { opacity: 0.7;}
        }
        .animate-pulse-slow {
          animation: pulse-slow 2.5s infinite;
        }
        @media (max-width: 400px) {
          .xs\\:inline { display: none !important; }
          .xs\\:hidden { display: inline !important; }
        }
        @media (min-width: 401px) {
          .xs\\:inline { display: inline !important; }
          .xs\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}