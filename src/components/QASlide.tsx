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
      className="bg-white rounded-xl shadow-2xl p-8 max-w-4xl w-full mx-auto border-t-8 border-post-red"
    >
      <div className="flex justify-between items-start mb-6">
        <span className="bg-post-yellow text-post-red font-bold px-3 py-1 rounded-full text-sm">
          {question.id}
        </span>
        <span className="text-gray-500 text-sm font-medium italic">
          {question.reference}
        </span>
      </div>

      <h2 className="text-2xl font-bold text-post-red mb-6 leading-tight">
        {question.question}
      </h2>

      <div className="space-y-6 overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar">
        {question.answerSections.map((section, index) => (
          <div key={index} className="bg-gray-50 p-5 rounded-lg border-l-4 border-post-yellow">
            {section.title && (
              <h3 className="text-lg font-bold text-gray-800 mb-3 underline decoration-post-yellow decoration-2 underline-offset-4">
                {section.title}
              </h3>
            )}
            {section.table ? (
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border-collapse border border-post-red/20 text-sm">
                  <thead>
                    <tr className="bg-post-red text-white">
                      {section.table.headers.map((header, hIndex) => (
                        <th key={hIndex} className="border border-post-red/20 px-4 py-2 text-left font-bold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, rIndex) => (
                      <tr key={rIndex} className={rIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                        {row.map((cell, cIndex) => (
                          <td key={cIndex} className="border border-post-red/20 px-4 py-2 text-gray-700">
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
                  <li key={i} className="text-gray-700 leading-relaxed flex items-start">
                    <span className="text-post-red mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="space-y-2">
                {section.content.map((item, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="text-post-red font-bold">{question.marks}</span>
        <p className="text-xs text-gray-400 italic">
          CCS (Leave) Rules, 1972 - Q&A Section
        </p>
      </div>
    </motion.div>
  );
};
