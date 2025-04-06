import React from 'react';
import { motion } from 'framer-motion';

const MarketingComparison: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Here is the truth: Most companies do marketing all wrong
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="bg-red-50 rounded-xl p-6 md:p-10 shadow-md"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-4">
              Most Companies
            </h3>
            <p className="text-red-600 mb-4">
              In 2025, the majority of companies still:
            </p>
            <ul className="text-red-600 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Burn money with paid ads</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Think social media will get clients</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Reach out to leads one at a time</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Land in spam when doing cold email</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Send generic cold emails that no one opens</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-green-50 rounded-xl p-6 md:p-10 shadow-md"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">
              The DoneResults Way
            </h3>
            <p className="text-green-700 mb-4">
              This is what the top 1% are doing — and it's working:
            </p>
            <ul className="text-green-700 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Hire AI that always gets the job done</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Direct outreach to decision-makers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Sends hundreds of emails daily</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>High deliverability with domain protection</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Every email is "handcrafted" to resonate</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketingComparison;
