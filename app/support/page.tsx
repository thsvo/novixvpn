"use client";
import FAQComponent from "@/components/faq-component";
import NovixVPNUpdates from "@/components/NovixVPNUpdates";
import { useState } from "react";

interface FAQCategory {
  title: string;
  questions: string[];
}

const categories: FAQCategory[] = [
  {
    title: "Troubleshooting and VPN issues",
    questions: [
      "Why is my VPN not connecting?",
      "How do I fix slow VPN speed?",
      "VPN disconnects frequently – what to do?",
    ],
  },
  {
    title: "Getting started, installation, and features",
    questions: [
      "How to install VPN on Windows?",
      "Can I use VPN on multiple devices?",
      "What features are included?",
    ],
  },
  {
    title: "Account management and logging in",
    questions: [
      "I forgot my password, how do I reset it?",
      "How do I change my email?",
      "Login issues – how to fix?",
    ],
  },
  {
    title: "Billing and subscriptions",
    questions: [
      "How can I update my payment method?",
      "Can I cancel my subscription?",
      "How do refunds work?",
    ],
  },
];

export default function SupportCenter() {
  const [search, setSearch] = useState("");
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      questions: cat.questions.filter((q) =>
        q.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(
      (cat) =>
        cat.title.toLowerCase().includes(search.toLowerCase()) ||
        cat.questions.length > 0
    );

  return (
    <div className="w-full  mx-auto">
      {/* Header */}

      <section className="bg-[#3E5FFF] text-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
              How can we help you today?
            </h1>
            <div className="flex justify-center mb-6">
              <input
                type="text"
                placeholder="Enter your question in this box"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-2/3 text-black border rounded-lg px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <h2 className="text-lg md:text-2xl mt-10 font-semibold text-center mb-4">
        Select the primary category.
      </h2>
      <p className="text-gray-500 text-center mb-6">
        Explore further and quickly discover the answers you need.
      </p>

      <div className="space-y-4 max-w-3xl my-10 mx-auto">
        {filteredCategories.map((cat) => (
          <div
            key={cat.title}
            className="border rounded-lg shadow-sm bg-white overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium hover:bg-gray-50"
              onClick={() =>
                setOpenCategory(openCategory === cat.title ? null : cat.title)
              }
            >
              {cat.title}
              <span>{openCategory === cat.title ? "−" : "+"}</span>
            </button>
            {openCategory === cat.title && (
              <div className="px-4 py-2 border-t bg-gray-50">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {cat.questions.map((q, idx) => (
                    <li
                      key={idx}
                      className="hover:text-blue-600 cursor-pointer"
                    >
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <p className="text-center text-gray-500">No results found.</p>
        )}
      </div>

      <NovixVPNUpdates />
      <FAQComponent />
    </div>
  );
}
