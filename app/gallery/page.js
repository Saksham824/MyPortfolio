// app/gallery/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"

const images = [
  {
    src: "/gallery/horizontal-1.jpg",
    alt: "Project Showcase",
    title: "Creative Project",
    category: "Projects",
  },
  {
    src: "/gallery/horizontal-2.jpg",
    alt: "Photography",
    title: "Nature Photography",
    category: "Photography",
  },
  {
    src: "/gallery/horizontal-3.jpg",
    alt: "UI Design",
    title: "UI/UX Concept",
    category: "Design",
  },
  {
    src: "/gallery/horizontal-4.jpg",
    alt: "Travel",
    title: "Travel Memories",
    category: "Travel",
  },
  {
    src: "/gallery/vertical-1.jpg",
    alt: "Art",
    title: "Digital Artwork",
    category: "Art",
  },
  {
    src: "/gallery/vertical-2.jpg",
    alt: "Event",
    title: "Event Highlights",
    category: "Events",
  },
  {
    src: "/gallery/vertical-3.jpg",
    alt: "Art",
    title: "Digital Artwork",
    category: "Art",
  },
  {
    src: "/gallery/vertical-4.jpg",
    alt: "Event",
    title: "Event Highlights",
    category: "Events",
  },
]

const categories = [
  "All",
  "Projects",
  "Photography",
  "Design",
  "Travel",
  "Art",
  "Events",
]

export default function GalleryPage() {
  // For demonstration, filter is not functional. You can add state to filter images.
  return (
    <main className="min-h-screen mt-10 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-0">
      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-8 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">
          My Creative Gallery
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Explore a curated collection of my works, projects, and memorable moments. Each piece reflects my passion for creativity and innovation.
        </p>
        <a
          href="#gallery"
          className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          View Gallery
        </a>
      </section>

      {/* Filter Bar */}
      <section className="max-w-6xl mx-auto px-6 mb-8 flex flex-wrap gap-2 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 bg-white dark:bg-gray-800 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 dark:hover:text-white transition font-medium text-sm"
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Gallery Grid */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 pb-16">
        <div
          className="
            columns-1
            sm:columns-2
            md:columns-3
            gap-6
            [column-fill:_balance]
          "
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="mb-6 break-inside-avoid group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="object-cover w-full h-72 md:h-80 lg:h-96 transform group-hover:scale-105 transition duration-500"
                priority={idx < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-end p-6">
                <p className="text-white text-xl font-bold mb-1 drop-shadow">{img.title}</p>
                <span className="text-blue-200 text-xs uppercase tracking-wide">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-6 pb-16 text-center">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          Interested in working together?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Let’s create something amazing! Reach out for collaborations, commissions, or just to say hi.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition"
        >
          Contact Me
        </Link>
      </section>
    </main>
  )
}