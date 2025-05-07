import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

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

// Recent articles data
const popularArticles = [
  {
    id: "vpn-vs-proxy",
    category: "INFORMATION",
    title:
      "VPN vs. Proxy: Learn the differences between these tools and discover which one is better",
    excerpt:
      "Discover the key differences between VPNs and proxies. Learn which is better for online privacy, speed, and security in this in-depth comparison.",
    date: "May 2, 2025",
    readTime: 105,
    author: {
      name: "Novix VPN",
      avatar: "/novix-vpn.png",
    },
    image: "/vpn-vs-proxy.jpg",
  },
  {
    id: "kill-switch",
    category: "SECURITY",
    title:
      "Kill Switch: What Is It, Why Everyone Is So Serious About It, And Why Do You Need One?",
    excerpt:
      "Learn what a VPN Kill Switch is, how it works, and why it's essential for your online privacy and security. Discover how NovixVPN's Kill Switch protects you.",
    date: "Apr 25, 2025",
    readTime: 179,
    author: {
      name: "Novix VPN",
      avatar: "/novix-vpn.png",
    },
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "wireguard-guide",
    category: "TECHNOLOGY",
    title:
      "What is WireGuard and How Does It Work? — A Beginner-Friendly Guide",
    excerpt:
      "Learn about WireGuard, the modern VPN protocol that offers faster speeds and better security. Discover how NovixVPN uses WireGuard to keep you safe online.",
    date: "Apr 11, 2025",
    readTime: 139,
    author: {
      name: "Novix VPN",
      avatar: "/novix-vpn.png",
    },
    image: "/placeholder.svg?height=300&width=400",
  },
];
// More articles data
const recentArticles = [
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
  },
];

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

      {/* Popular  Articles */}
      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-bold text-gray-800 after:ml-4 after:inline-block after:h-1 after:w-24 after:bg-blue-500">
          Popular articles
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {popularArticles.map((article) => (
            <Link
              href={`/blogs/${article.id}`}
              key={article.id}
              className="hover:text-blue-600"
            >
              <article
                key={article.id}
                className="group overflow-hidden rounded-xl bg-blue-50 shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={
                      article.image || "/placeholder.svg?height=300&width=400"
                    }
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {article.category}
                    </span>
                  </div>
                  <div className="mb-4 flex items-center gap-4 text-xs text-gray-500">
                    <span>{article.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock size={12} className="text-blue-500" />
                      <span>{article.readTime} min read</span>
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-bold leading-tight text-gray-800 transition-colors group-hover:text-blue-600">
                    {article.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2">
                    <Image
                      src={
                        article.author.avatar ||
                        "/placeholder.svg?height=24&width=24"
                      }
                      alt={article.author.name}
                      width={24}
                      height={24}
                      className="rounded-full border border-gray-200"
                    />
                    <span className="text-xs font-medium">
                      {article.author.name}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
      {/* More Articles */}
      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-bold text-gray-800 after:ml-4 after:inline-block after:h-1 after:w-24 after:bg-blue-500">
          Recent articles
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentArticles.map((article) => (
            <Link
              href={`/blogs/${article.id}`}
              key={article.id}
              className="hover:text-blue-600"
            >
              <article
                key={article.id}
                className="group overflow-hidden rounded-xl bg-blue-50 shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={
                      article.image || "/placeholder.svg?height=300&width=400"
                    }
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {article.category}
                    </span>
                  </div>
                  <div className="mb-4 flex items-center gap-4 text-xs text-gray-500">
                    <span>{article.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock size={12} className="text-blue-500" />
                      <span>{article.readTime} min read</span>
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg font-bold leading-tight text-gray-800 transition-colors group-hover:text-blue-600">
                    {article.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2">
                    <Image
                      src={
                        article.author.avatar ||
                        "/placeholder.svg?height=24&width=24"
                      }
                      alt={article.author.name}
                      width={24}
                      height={24}
                      className="rounded-full border border-gray-200"
                    />
                    <span className="text-xs font-medium">
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
