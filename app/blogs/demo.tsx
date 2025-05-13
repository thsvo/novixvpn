import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Blog | NovixVPN",
  description:
    "Latest articles, guides, and insights about VPN technology and cybersecurity",
};
// Featured article data
const featuredArticle = {
  id: "vpn-privacy-power-2025",
  category: "NOVIX VPN EXPERT INSIGHTS",
  title:
    "Privacy is the New Power: How Novix VPN Leads the Next Era of Online Security",
  excerpt:
    "In 2025, as digital surveillance and cyber threats continue to rise, Novix VPN emerges as a game-changer in the privacy tech space. With blazing-fast servers, strict no-logs policies, and a privacy-first architecture, Novix redefines what it means to be truly untraceable online.",
  date: "May 3, 2025",
  readTime: 173,
  author: {
    name: "Novix VPN",
    avatar: "/novix-vpn.png",
  },
  image: "/blog-page.png",
};

// More articles data
const moreArticles = [
  {
    id: "what-is-vpn",
    category: "INFORMATION",
    title: " What  is VPN?",
    excerpt: "What is vpn",
    date: "april 8, 2025",
    readTime: 201,
    author: {
      name: "Novix VPN",
      avatar: "/novix-vpn.png",
    },
    image: "/Vpn.jpg",
  },
  {
    id: "how-does-vpn-work",
    category: "INFORMATION",
    title: "How Does VPN Work?",
    excerpt: "how does vpn work?",
    date: "Apr 25, 2025",
    readTime: 189,
    author: {
      name: "Novix VPN",
      avatar: "/novix-vpn.png",
    },
    image: "/placeholder.svg?height=570&width=750",
  },
  {
    id: "The-importance-of-vpn",
    category: "INFORMATION",
    title: "The Importance of VPN",
    excerpt: "The importance of vpn",
    date: "Apr 11, 2025",
    readTime: 29,
    author: {
      name: "Novix VPN",
      avatar: "/novix-vpn.png",
    },
    image: "/placeholder.svg?height=570&width=750",
  },
  {
    id: "why-is-vpn-needed",
    category: "INFORMATION",
    title: "Why is VPN Needed?",
    excerpt: "why is vpn needed",
    date: "Apr 20, 2025",
    readTime: 139,
    author: {
      name: "Novix VPN",
      avatar: "/novix-vpn.png",
    },
    image: "/placeholder.svg?height=570&width=750",
  },
  {
    id: "why-novix-vpn-is-the-best",
    category: "INFORMATION",
    title: "Why Novix VPN is The Best",
    excerpt: "why novix vpn is the best",
    date: "Apr 25, 2025",
    readTime: 109,
    author: {
      name: "Novix VPN",
      avatar: "/novix-vpn.png",
    },
    image: "/placeholder.svg?height=570&width=750",
  },
  {
    id: "how-to-use-vpn",
    category: "INFORMATION",
    title: "How To Use VPN",
    excerpt: "How To Use VPN",
    date: "Apr 23, 2025",
    readTime: 89,
    author: {
      name: "Novix VPN",
      avatar: "/novix-vpn.png",
    },
    image: "/placeholder.svg?height=570&width=750",
  },
  {
    id: "how-to-set-up-vpn",
    category: "INFORMATION",
    title: "How to set up and use VPN on an android",
    excerpt: "how to set up and use VPN on an android",
    date: "Apr 21, 2025",
    readTime: 59,
    author: {
      name: "Novix VPN",
      avatar: "/novix-vpn.png",
    },
    image: "/placeholder.svg?height=570&width=750",
  },
  {
    id: "benefits-of-a-vpn",
    category: "INFORMATION",
    title: "Benefits of a vpn : pros and cons of a vpn",
    excerpt: "Benefits of a vpn : pros and cons of a vpn",
    date: "Apr 21, 2025",
    readTime: 59,
    author: {
      name: "Novix VPN",
      avatar: "/novix-vpn.png",
    },
    image: "/placeholder.svg?height=570&width=750",
  },
];

useEffect(() => {
  const response = fetch(
    "https://wordpress.novixvpn.com/wp-json/custom/v1/posts/"
  );
  console.log(response);
});

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:max-w-6xl">
      <h1 className="sr-only">NordVPN Blog</h1>

      {/* Featured Article */}
      <article className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center p-8">
            <div className="mb-3">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
                {featuredArticle.category}
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-800 md:text-4xl">
              <Link
                href={`/blog/${featuredArticle.id}`}
                className="transition-colors hover:text-blue-600"
              >
                {featuredArticle.title}
              </Link>
            </h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              {featuredArticle.excerpt}
            </p>
            <div className="mt-auto flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-blue-500" />
                  <span>{featuredArticle.readTime} min read</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Image
                src={
                  featuredArticle.author.avatar ||
                  "/placeholder.svg?height=32&width=32"
                }
                alt={featuredArticle.author.name}
                width={32}
                height={32}
                className="rounded-full border border-gray-200"
              />
              <span className="text-sm font-medium">
                {featuredArticle.author.name}
              </span>
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden bg-gray-100 md:min-h-[400px]">
            <Image
              src={
                featuredArticle.image || "/placeholder.svg?height=400&width=600"
              }
              alt={featuredArticle.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
            <div className="absolute -left-10 bottom-10 h-24 w-24 rounded-full bg-coral-500 opacity-80"></div>
            <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-coral-500 opacity-80"></div>
          </div>
        </div>
      </article>

      {/* More Articles */}
      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-bold text-gray-800 after:ml-4 after:inline-block after:h-1 after:w-24 after:bg-blue-500">
          Recent articles
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {moreArticles.map((article) => (
            <Link
              href={`/blogs/${article.id}`}
              key={article.id}
              className="group block rounded-xl bg-blue-50 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              aria-label={`Read article: ${article.title}`}
            >
              <article>
                <div className="relative w-full aspect-[4/3] bg-gray-100">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 hover:scale-105 transition-all rounded-t-xl"></div>
                </div>

                <div className="p-5">
                  <span className="inline-block mb-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                    {article.category}
                  </span>

                  <div className="mb-4 flex items-center gap-3 text-xs text-gray-500">
                    <span>{article.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock size={12} className="text-blue-500" />
                      <span>{article.readTime} min read</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 leading-tight group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2">
                    <Image
                      src={article.author.avatar || "/placeholder.svg"}
                      alt={`Avatar of ${article.author.name}`}
                      width={24}
                      height={24}
                      className="rounded-full border border-gray-200 object-cover"
                    />
                    <span className="text-xs font-medium text-gray-700">
                      {article.author.name}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
