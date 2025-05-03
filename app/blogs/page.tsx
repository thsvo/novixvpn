import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | NordVPN",
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
  readTime: 4,
  author: {
    name: "Novix VPN",
    avatar: "/novix-vpn.png",
  },
  image: "/novix-vpn.png",
};

// Recent articles data
const recentArticles = [
  {
    id: "vpn-vs-proxy",
    category: "Information",
    title: "What is the difference between a VPN and a Proxy server?",
    excerpt:
      "In this article, we will explain the key differences between a VPN (Virtual Private Network) and a proxy server. You will learn how each technology works, the advantages and disadvantages of using a VPN or a proxy, and which one is best for your online privacy and security needs.",
    date: "May 2, 2025",
    readTime: 10,
    author: {
      name: "Novix VPN",
      avatar: "/novix-vpn.png",
    },
    image: "/vpn-vs-proxy.png",
  },
  {
    id: "vpn-pros-cons",
    category: "CONNECTION",
    title: "Benefits of a VPN: Pros and cons of a VPN",
    excerpt:
      "Discover the advantages and potential drawbacks of using a VPN service for your online activities and digital privacy.",
    date: "Apr 25, 2025",
    readTime: 12,
    author: {
      name: "Novix VPN",
      avatar: "/novix-vpn.png",
    },
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "vpn-server-quality",
    category: "CONNECTION",
    title: "Does the VPN server count actually matter? Quality over quantity",
    excerpt:
      "Explore why the quality and performance of VPN servers might be more important than simply having a large number of servers.",
    date: "Apr 11, 2025",
    readTime: 7,
    author: {
      name: "Novix VPN",
      avatar: "/novix-vpn.png",
    },
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:max-w-6xl">
      <h1 className="sr-only">NordVPN Blog</h1>

      {/* Featured Article */}
      <article className="overflow-hidden rounded-lg bg-white">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center p-6">
            <div className="mb-2">
              <span className="text-sm font-medium text-blue-600">
                {featuredArticle.category}
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-800 md:text-4xl">
              <Link
                href={`/blog/${featuredArticle.id}`}
                className="hover:text-blue-600"
              >
                {featuredArticle.title}
              </Link>
            </h2>
            <p className="mb-6 text-gray-600">{featuredArticle.excerpt}</p>
            <div className="mt-auto flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{featuredArticle.readTime} min read</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Image
                src={featuredArticle.author.avatar || "/placeholder.svg"}
                alt={featuredArticle.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm font-medium">
                {featuredArticle.author.name}
              </span>
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden bg-gray-100 md:min-h-[400px]">
            <Image
              src={featuredArticle.image || "/placeholder.svg"}
              alt={featuredArticle.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute -left-10 bottom-10 h-24 w-24 rounded-full bg-coral-500"></div>
            <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-coral-500"></div>
          </div>
        </div>
      </article>

      {/* Popular Articles */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-800">
          Popular articles
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recentArticles.map((article) => (
            <article
              key={article.id}
              className="overflow-hidden rounded-lg bg-blue-50"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-2">
                  <span className="text-xs font-medium text-blue-600">
                    {article.category}
                  </span>
                </div>
                <div className="mb-4 flex items-center gap-4 text-xs text-gray-500">
                  <span>{article.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{article.readTime} min read</span>
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-bold leading-tight text-gray-800">
                  <Link
                    href={`/blogs/${article.id}`}
                    className="hover:text-blue-600"
                  >
                    {article.title}
                  </Link>
                </h3>
                <div className="mt-4 flex items-center gap-2">
                  <Image
                    src={article.author.avatar || "/placeholder.svg"}
                    alt={article.author.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="text-xs font-medium">
                    {article.author.name}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
