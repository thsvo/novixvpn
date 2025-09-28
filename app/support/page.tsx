"use client";

import FAQComponent from "@/components/faq-component";
import Link from "next/link";
import { useState } from "react";

export default function SupportCenter() {
  const [search, setSearch] = useState("");
  return (
    <div className="w-full mx-auto">
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
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Getting started</h2>
            <ul className="space-y-2 text-blue-600">
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1o5g7ak9Qkc_rMwMqVPzokepiTnjuSFA_-DR_CJ1NqMY/edit?tab=t.0#heading=h.fcfhct3van9v"
                >
                  Download and Install
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1a4xRijjgxb3wEzvwfgoOF5gOXnAlVw-ryZHCql-r7FQ/edit?tab=t.0#heading=h.jbv03dkfj641"
                >
                  Create your account
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/12BkjN6f4G92O_d1a-Jzit1YCDyepnIbsb0dAKVQg4EY/edit?tab=t.0#heading=h.lseob8dn6tfd"
                >
                  Your First Connection
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/14do-ftbgE6FncbJicHFfMpTtzTAhfE0CaYNrMQAyGEQ/edit?tab=t.0#heading=h.if6vk3pspx0p"
                >
                  Multi Device Setup
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1DG7FoQyan8QfNlhEPIMPbjS5kcZiq2uJJkvw1bjL9yo/edit?tab=t.0#heading=h.3ohht7bfjumc"
                >
                  Android Setup Tutorial
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Connection and technical
            </h2>
            <ul className="space-y-2 text-blue-600">
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1DLVZ7eux7WkEx7Jv2GVfeQJ_I4iD6EDUw1e1IuZCJW4/edit?tab=t.0#heading=h.jl4tq9rqzhey"
                >
                  Connection Problems
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1bzX4L4SlF835htB018Z0h9yBAjUEhzce-JywTRgVRVs/edit?usp=sharing"
                >
                  Speed Optimization
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/188KgCeuYTHdiDgDAoYDjM-Rb0KAU4H9kYbf1WdVl1cE/edit?usp=sharing"
                >
                  Kill Switch SetUp
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1h7c1Bk9VDDwIaDEN85DaaUfHwGKY2EPRB74C_7ul1rs/edit?usp=sharing"
                >
                  Wire Guard Protocol
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1VLFfVBOVcq-DS5wXmbIKElgYxfvLz2JLSluPREKMzXY/edit?usp=sharing"
                >
                  Server Location
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Privacy and security</h2>
            <ul className="space-y-2 text-blue-600">
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1PRj9hxRSOxak-cevTca128hgOTKGyW8IvLWFoF3rVVA/edit?usp=sharing"
                >
                  No-logs Policy
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1Eq2cTTPjGEStfeC2QExtd2tqTmhRiXaeawST1o0wzKg/edit?usp=sharing"
                >
                  Ip Leak protection
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1WNnLsjsl17eA1YaQtKS9RSjqCqUCAosiFX1SGCrf-Z8/edit?usp=sharing"
                >
                  DNS configuration
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1VAq3yy5_Xq4ueyJckrdeapqGFWha_Vj_Er7CDnVc_ao/edit?usp=sharing"
                >
                  Ad and Malware Blocker
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1s-82L_pyrCy_64pxBjKbqwLYPnC4wPm8XMkK8l2LjJI/edit?usp=sharing"
                >
                  Military grade encrytption
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Billing and Account</h2>
            <ul className="space-y-2 text-blue-600">
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1oeN03Is3KSY4cyEE1gg8T2U7rFAmmQ05TNKwqNip8Ak/edit?usp=sharing"
                >
                  Plans and Pricing
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1_4u9q4wB5PJXp9huuuybl-jeq_Xih77rZTst9Dqqz5Q/edit?usp=sharing"
                >
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1XQv21BAPPdemn9_0KFBDRRJ8gmmpH9pvYZKB9rBEwik/edit?usp=sharing"
                >
                  40 day money back guarantee
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1YCkDs5uLj1jzJDpvgrrME6SyAzKv8vF3ytR1BN2IfWw/edit?usp=sharing"
                >
                  Manage subscription
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://docs.google.com/document/d/1mH31jprfcs693w_UFuS3ak2dyhezvwBhZGPtTDL2zE8/edit?usp=sharing"
                >
                  Account settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <FAQComponent />

      <div className="bg-[#3E5FFF] container mx-auto text-white  md:w-[1000px] mb-10 p-5 rounded-lg">
        <div className=" px-4 md:px-15 py-10 text-center">
          <p className="text-lg md:text-xl font-medium">
            Can’t find what you need?
          </p>
          <div className="mt-4 space-x-8">
            <button className="px-4 py-2 bg-white bg-opacity-20 rounded hover:bg-opacity-30">
              <Link href="/contact">Contact with us</Link>
            </button>
            {/* <button className="px-4 py-2 bg-white bg-opacity-20 rounded hover:bg-opacity-30">
              Submit a request
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
