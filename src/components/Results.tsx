import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Results: React.FC = () => {
  return (
    <section id="results" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Headline */}
          <h3 className="text-2xl font-semibold mb-4 text-teal-500">
            Real Results. No Guesswork.
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your System, Optimized for Results
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            We've sent thousands of emails per week for ourselves and our clients. Reply rates vary by offer — but typically fall between 3–10%, with 10–67% of replies being positive.
          </p>

          {/* Flow + Highlight */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-10">
            {['Emails Sent', 'Replies', 'Positive Replies', 'Meetings Booked'].map((step, index) => (
              <React.Fragment key={index}>
                <motion.div 
                  className="bg-white px-4 py-3 rounded-lg shadow-sm font-medium border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {step}
                </motion.div>
                <ArrowRight className="text-teal-500" size={24} />
              </React.Fragment>
            ))}

            {/* Subtle Highlighted Box */}
            <motion.div 
              className="px-5 py-3 rounded-lg shadow-md font-bold border-2 border-transparent bg-white text-gray-900 dark:text-white"
              style={{
                borderImage: 'linear-gradient(to right, #f97316, #ec4899) 1',
              }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              How Many Would You Close?
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              How Many Would You Close?
            </h3>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-md transition duration-200">
              Book a Free Strategy Call
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
