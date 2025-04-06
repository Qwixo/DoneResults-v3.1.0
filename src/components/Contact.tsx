import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GlowingEffect } from "./ui/glowing-effect";

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      id="final-cta"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {/* Frosted Glass Card */}
          <div className="relative backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 dark:border-gray-700">
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Want a Smarter Way to Get More Clients?
            </h2>

            {/* Urgency Warning Box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mb-8 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-lg p-4 text-center"
            >
              <p className="text-gray-800 dark:text-gray-200 font-medium flex flex-col items-center">
                <span className="text-amber-500 text-xl mb-2">⚠️</span>
                We only take on a few clients at a time—because that's how we keep
                results strong and personal.
                <br />
                <span className="font-semibold mt-2">
                  Right now,{" "}
                  <span className="text-teal-600 dark:text-teal-400 font-bold">
                    one spot is open.
                  </span>
                </span>{" "}
                After that, we're fully booked for the quarter.
                <br />
                <span className="mt-2">
                  If this sounds like what you've been looking for—let's talk before
                  it's gone.
                </span>
              </p>
            </motion.div>

            {/* CTA Button with Glow Effect */}
            <div className="mb-6 text-center">
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg blur opacity-0 group-hover:opacity-70 transition duration-300"></div>
                <a
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3SqRGx0SD40mEaoR1UqvTm-gBnZ9kuxqOKR2MpWKhb-9-eU8nR6yyhgwMX-M0OuodgIfYACrOO?gv=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block px-8 py-4 text-white font-semibold bg-teal-500 hover:bg-teal-600 rounded-lg shadow-md transition duration-300 text-lg"
                >
                  Book a Free Strategy Call
                </a>
                <GlowingEffect disabled={false} glow={true} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
