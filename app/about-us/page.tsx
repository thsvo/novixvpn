// components/AboutUs.tsx

import {
  Check,
  Shield,
  HeartHandshake,
  Lock,
  MessageCircleMore,
  ShieldBan,
  ShieldAlert,
} from "lucide-react";
import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 sm:py-16">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        About NovixVPN
      </h1>

      <article className="space-y-10">
        {/* Privacy Promise */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            We Promise to Protect Your Privacy
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">
            At <strong>NovixVPN</strong>, we believe that{" "}
            <strong>online privacy is a fundamental right</strong>, not a
            luxury. Everyone deserves the freedom to browse the internet without
            fear of surveillance, data theft, or manipulation. That’s why we’ve
            built a VPN service that always puts your{" "}
            <strong>privacy first</strong>—no compromises.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">
            In an age where tech giants profit from your personal data and
            governments increase digital surveillance, NovixVPN stands as your{" "}
            <strong>shield for internet freedom</strong>. Our mission is simple:{" "}
            <strong>give you back control</strong> over your online identity and
            privacy.
          </p>
        </div>

        {/* What Makes Us Different */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">
            What Makes NovixVPN Different?
          </h2>
          <ul className="max-w-3xl  space-y-6">
            <li className="flex items-start space-x-3">
              <span className="text-primary text-2xl">
                <Check />
              </span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  A True No-Logs Policy
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Unlike other VPN providers who claim to respect privacy but
                  secretly log user activity, we have a{" "}
                  <strong>genuine no-logs policy</strong>. We do{" "}
                  <strong>not track</strong>, <strong>store</strong>, or{" "}
                  <strong>monitor</strong> your online behavior—what you do is
                  your business, not ours.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <span className="text-primary text-2xl">
                <ShieldAlert />
              </span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Built Without Tracking
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We’ve engineered our systems to ensure that even we can’t see
                  what you’re doing online. No browsing records, no connection
                  timestamps, no data collection. That’s{" "}
                  <strong>privacy by design</strong>.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <span className="text-primary text-2xl">
                <Shield />
              </span>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Privacy for Everyone
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're a journalist protecting sources, a digital
                  rights activist, or simply someone who values privacy,{" "}
                  <strong>NovixVPN is designed for you</strong>. It’s simple,
                  effective, and built to serve{" "}
                  <strong>real people in the real world</strong>.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Core Principles */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Our Core Principles
          </h2>
          <ul className="list-disc list-inside max-w-3xl space-y-2 text-gray-700 text-lg">
            <li>
              <strong>Privacy First:</strong> Every decision we make starts with
              one question: <em>“Does this protect our users’ privacy?”</em> If
              the answer is no, we don’t do it.
            </li>
            <li>
              <strong>Transparency:</strong> We’re upfront about how our systems
              work, what data we don’t collect, and how we keep you safe.
            </li>
            <li>
              <strong>User Empowerment:</strong> We don’t just offer a
              service—we give you the tools and confidence to take charge of
              your digital life.
            </li>
            <li>
              <strong>Innovation:</strong> Privacy threats are constantly
              evolving. We’re committed to staying ahead by continuously
              improving our technology.
            </li>
          </ul>
        </div>

        {/* Why We Created NovixVPN */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Why We Created NovixVPN
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">
            NovixVPN was born out of frustration with the current state of
            online privacy. Many VPN services make bold claims but operate in
            the shadows—
            <strong>collecting user data to monetize their platforms</strong>.
          </p>
          <p className="text-gray-700 text-lg max-w-3xl leading-relaxed mt-3">
            We knew there had to be a better way.
          </p>
          <p className="text-gray-700 text-lg max-w-3xl leading-relaxed mt-3">
            Our team consists of{" "}
            <strong>
              privacy advocates, cybersecurity experts, and tech professionals
            </strong>{" "}
            who share one mission: to build a VPN that truly respects and
            protects your privacy. We've experienced the risks of poor digital
            security firsthand, and we're committed to delivering a safer online
            experience for you.
          </p>
        </div>

        {/* What We Promise You */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">
            What We Promise You
          </h2>
          <ul className="max-w-3xl space-y-4 text-gray-700 text-lg">
            <li className="flex items-center space-x-3">
              <span className="text-primary text-2xl">
                <ShieldBan />
              </span>
              <p>
                <strong>No tracking. Ever.</strong> What you do online is none
                of our business.
              </p>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-primary text-2xl">
                <Lock />
              </span>
              <p>
                <strong>Continuous innovation</strong> to stay ahead of evolving
                privacy threats.
              </p>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-primary text-2xl">
                <MessageCircleMore />
              </span>
              <p>
                <strong>Honest communication</strong>—we’ll always be
                transparent about what we can and can’t do.
              </p>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-primary text-2xl">
                <HeartHandshake />
              </span>
              <p>
                <strong>Responsive support</strong>, always here when you need
                us.
              </p>
            </li>
          </ul>
        </div>

        {/* Looking Forward */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Looking Forward
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">
            The fight for digital privacy isn’t over. As surveillance grows and
            corporations find new ways to exploit data, the demand for{" "}
            <strong>authentic privacy tools</strong> has never been greater.
          </p>
          <p className="text-gray-700 text-lg max-w-3xl leading-relaxed mt-3">
            For us, NovixVPN isn’t just a business. It’s our contribution to
            building a <strong>safer, more private internet</strong> for
            everyone. And we’re just getting started.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center ">
          <h3 className="text-3xl font-bold text-primary mb-4">
            Start Your Privacy Journey with NovixVPN
          </h3>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl">
            Are you ready to reclaim your digital freedom?
          </p>
          <a
            href="/signup"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary/85 transition"
          >
            Join NovixVPN Today
          </a>
        </div>
      </article>
    </section>
  );
};

export default AboutUs;
