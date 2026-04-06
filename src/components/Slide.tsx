import React from "react";
import { motion } from "motion/react";
import { Rule } from "../data/rules";
import { CheckCircle2, Info } from "lucide-react";

interface SlideProps {
  rule: Rule;
  index: number;
  total: number;
}

const Slide: React.FC<SlideProps> = ({ rule, index, total }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-[95%] mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-post-red/10 flex flex-col min-h-[550px]"
    >
      {/* Header */}
      <div className="bg-post-red p-6 md:p-8 text-white relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-post-yellow/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
        
        <div className="flex justify-between items-center mb-4 relative z-10">
          <span className="px-3 py-1 bg-post-yellow text-post-red rounded-full text-[10px] md:text-xs font-black tracking-widest uppercase shadow-sm">
            Rule {rule.id}
          </span>
          <span className="text-white/80 text-xs md:text-sm font-bold tracking-wider">
            Slide {index + 1} of {total}
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-black tracking-tight leading-tight relative z-10 uppercase">
          {rule.title}
        </h2>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 md:p-8 space-y-6 md:space-y-8 overflow-y-auto bg-white">
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-[10px] md:text-xs font-black text-post-red/40 uppercase tracking-[0.3em] flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-post-red" />
            Key Provisions
          </h3>
          <ul className="space-y-4 md:space-y-5">
            {rule.content.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3 md:gap-4 text-slate-700 text-base md:text-lg font-medium leading-relaxed"
              >
                <div className="mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-post-yellow border-2 border-post-red shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-post-yellow/10 rounded-2xl p-4 md:p-6 border-l-4 md:border-l-8 border-post-yellow relative"
        >
          <h3 className="text-[10px] md:text-xs font-black text-post-red uppercase tracking-[0.2em] flex items-center gap-2 mb-3 md:mb-4">
            <Info className="w-4 h-4 md:w-5 md:h-5" />
            Simplified Explanation
          </h3>
          <p className="text-slate-800 italic leading-relaxed text-base md:text-lg font-semibold">
            "{rule.explanation}"
          </p>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 w-full bg-slate-100">
        <motion.div
          className="h-full bg-post-yellow"
          initial={{ width: 0 }}
          animate={{ width: `${((index + 1) / total) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};


export default Slide;

