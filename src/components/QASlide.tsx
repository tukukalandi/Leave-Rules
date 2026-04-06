import React from "react";
import { motion } from "motion/react";
import { Question } from "../data/questionsPart1";

interface QASlideProps {
  question: Question;
}

export const QASlide: React.FC<QASlideProps> = ({ question }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-2xl p-4 md:p-6 max-w-[95%] w-full mx-auto border-t-8 border-post-red"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-6">
        <span className="bg-post-yellow text-post-red font-bold px-3 py-1 rounded-full text-xs md:text-sm">
          {question.id}
        </span>
        <span className="text-gray-500 text-[10px] md:text-sm font-medium italic">
          {question.reference}
        </span>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-post-red mb-6 leading-tight">
        {question.question}
      </h2>

      <div className="space-y-4 md:space-y-6 overflow-y-auto max-h-[50vh] md:max-h-[60vh] pr-2 md:pr-4 custom-scrollbar">
        {question.answerSections.map((section, index) => (
          <div key={index} className="bg-gray-50 p-4 md:p-5 rounded-lg border-l-4 border-post-yellow">
            {section.title && (
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 underline decoration-post-yellow decoration-2 underline-offset-4">
                {section.title}
              </h3>
            )}
            {section.table ? (
              <div className="overflow-x-auto mt-4 -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="min-w-full border-collapse border border-post-red/20 text-[10px] md:text-sm">
                  <thead>
                    <tr className="bg-post-red text-white">
                      {section.table.headers.map((header, hIndex) => (
                        <th key={hIndex} className="border border-post-red/20 px-2 md:px-4 py-2 text-left font-bold whitespace-nowrap">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, rIndex) => (
                      <tr key={rIndex} className={rIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                        {row.map((cell, cIndex) => (
                          <td key={cIndex} className="border border-post-red/20 px-2 md:px-4 py-2 text-gray-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : section.isList ? (
              <ul className="space-y-2">
                {section.content.map((item, i) => (
                  <li key={i} className="text-sm md:text-base text-gray-700 leading-relaxed flex items-start">
                    <span className="text-post-red mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="space-y-2">
                {section.content.map((item, i) => (
                  <p key={i} className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 md:mt-8 pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="text-post-red font-black text-lg md:text-xl px-4 py-1 bg-post-red/5 rounded-lg border border-post-red/10">
          {question.marks}
        </span>
        <p className="text-[10px] md:text-xs text-gray-400 italic text-right">
          CCS (Leave) Rules, 1972
          <br />
          Q&A Section
        </p>
      </div>
    </motion.div>
  );
};
