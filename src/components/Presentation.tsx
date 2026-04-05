import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Menu,
  X,
  BookOpen,
  HelpCircle,
  Home as HomeIcon,
  Calculator,
  ArrowRight,
} from "lucide-react";
import Slide from "./Slide";
import { QASlide } from "./QASlide";
import { rules } from "../data/rules";
import { questionsPart1 } from "../data/questionsPart1";
import { questionsPart2 } from "../data/questionsPart2";
import { questionsPart3 } from "../data/questionsPart3";
import { questionsPart4 } from "../data/questionsPart4";
import { questionsCalculations } from "../data/questionsCalculations";

const allQuestions = [
  ...questionsPart1,
  ...questionsPart2,
  ...questionsPart3,
  ...questionsPart4,
];

type ViewMode = "home" | "rules" | "qa" | "calculations";

export default function Presentation() {
  const [currentRuleIndex, setCurrentRuleIndex] = useState(0);
  const [currentQAIndex, setCurrentQAIndex] = useState(0);
  const [currentCalcIndex, setCurrentCalcIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [directSearch, setDirectSearch] = useState("");

  const filteredRules = useMemo(() => {
    return rules.filter(
      (rule) =>
        rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rule.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredQA = useMemo(() => {
    return allQuestions.filter(
      (qa) =>
        qa.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        qa.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredCalculations = useMemo(() => {
    return questionsCalculations.filter(
      (calc) =>
        calc.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        calc.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleNext = () => {
    if (viewMode === "home") {
      setViewMode("rules");
      return;
    }
    if (viewMode === "rules") {
      if (currentRuleIndex < rules.length - 1) {
        setCurrentRuleIndex((prev) => prev + 1);
      }
    } else if (viewMode === "qa") {
      if (currentQAIndex < allQuestions.length - 1) {
        setCurrentQAIndex((prev) => prev + 1);
      }
    } else {
      if (currentCalcIndex < questionsCalculations.length - 1) {
        setCurrentCalcIndex((prev) => prev + 1);
      }
    }
  };

  const handlePrev = () => {
    if (viewMode === "home") return;
    if (viewMode === "rules") {
      if (currentRuleIndex > 0) {
        setCurrentRuleIndex((prev) => prev - 1);
      } else {
        setViewMode("home");
      }
    } else if (viewMode === "qa") {
      if (currentQAIndex > 0) {
        setCurrentQAIndex((prev) => prev - 1);
      }
    } else {
      if (currentCalcIndex > 0) {
        setCurrentCalcIndex((prev) => prev - 1);
      }
    }
  };

  const handleDirectSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = directSearch.trim().toUpperCase();
    if (viewMode === "rules") {
      const index = rules.findIndex(
        (r) => r.id === query || r.id === `RULE ${query}` || r.id === query.replace("RULE ", "")
      );
      if (index !== -1) {
        setCurrentRuleIndex(index);
        setDirectSearch("");
      }
    } else if (viewMode === "qa") {
      const index = allQuestions.findIndex(
        (q) => q.id === query || q.id === `Q${query}` || q.id === `Q ${query}`
      );
      if (index !== -1) {
        setCurrentQAIndex(index);
        setDirectSearch("");
      }
    } else {
      const index = questionsCalculations.findIndex(
        (c) => c.id === query || c.id === `CALC${query}` || c.id === `CALC ${query}`
      );
      if (index !== -1) {
        setCurrentCalcIndex(index);
        setDirectSearch("");
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentRuleIndex, currentQAIndex, viewMode]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans selection:bg-post-yellow/30">
      {/* Header */}
      <header className="bg-white border-b-4 border-post-red px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-post-red/10 rounded-full transition-colors text-post-red"
            title="Rules Index"
          >
            <Menu size={24} />
          </button>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Emblem_of_India_with_transparent_background.png"
            alt="National Emblem"
            className="h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="hidden lg:block">
            <h1 className="font-extrabold text-post-red text-xl leading-tight uppercase tracking-tight">
              CCS (LEAVE) RULES, 1972
            </h1>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
              {viewMode === "rules" ? "Presentation Mode" : viewMode === "qa" ? "Q&A Mode" : "Calculations Mode"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <form
            onSubmit={handleDirectSearch}
            className="relative hidden md:flex items-center"
          >
            <input
              type="text"
              placeholder={viewMode === "rules" ? "Jump to Rule (e.g. 26)" : viewMode === "qa" ? "Jump to Q (e.g. 1)" : "Jump to Calc (e.g. 1)"}
              value={directSearch}
              onChange={(e) => setDirectSearch(e.target.value)}
              className="pl-4 pr-10 py-2 bg-slate-100 border-2 border-transparent focus:border-post-red focus:bg-white rounded-xl outline-none transition-all w-48 text-sm font-bold"
            />
            <button type="submit" className="absolute right-3 text-post-red">
              <Search size={18} />
            </button>
          </form>

            <div className="flex bg-slate-100 rounded-xl p-1 border border-slate-200">
              <button
                onClick={() => setViewMode("home")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-sm font-bold ${
                  viewMode === "home" ? "bg-post-red text-white shadow-sm" : "text-slate-500 hover:bg-slate-200"
                }`}
              >
                <HomeIcon size={16} />
                <span className="hidden sm:inline">Home</span>
              </button>
              <button
                onClick={() => setViewMode("rules")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-sm font-bold ${
                  viewMode === "rules" ? "bg-post-red text-white shadow-sm" : "text-slate-500 hover:bg-slate-200"
                }`}
              >
                <BookOpen size={16} />
                <span className="hidden sm:inline">Rules</span>
              </button>
              <button
                onClick={() => setViewMode("qa")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-sm font-bold ${
                  viewMode === "qa" ? "bg-post-red text-white shadow-sm" : "text-slate-500 hover:bg-slate-200"
                }`}
              >
                <HelpCircle size={16} />
                <span className="hidden sm:inline">Q&A</span>
              </button>
              <button
                onClick={() => setViewMode("calculations")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-sm font-bold ${
                  viewMode === "calculations" ? "bg-post-red text-white shadow-sm" : "text-slate-500 hover:bg-slate-200"
                }`}
              >
                <Calculator size={16} />
                <span className="hidden sm:inline">Calculations</span>
              </button>
            </div>

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/be/India-post-logo.jpg"
            alt="India Post Logo"
            className="h-10 w-auto rounded-md object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-post-red/5 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-post-yellow/10 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />

        <AnimatePresence mode="wait">
          {viewMode === "home" ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border-b-8 border-post-red relative z-10"
            >
              <div className="p-8 md:p-12 text-center">
                <div className="flex justify-center mb-8">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Emblem_of_India_with_transparent_background.png"
                    alt="National Emblem"
                    className="h-32 w-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-post-red mb-4 uppercase tracking-tighter">
                  Central Civil Services
                  <br />
                  <span className="text-post-yellow bg-post-red px-4 py-1 inline-block mt-2 rounded-lg shadow-lg">
                    (Leave) Rules, 1972
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
                  A comprehensive interactive guide and Q&A resource for government employees, 
                  covering all aspects of leave entitlements, calculations, and procedures.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <button
                    onClick={() => setViewMode("rules")}
                    className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 hover:border-post-red hover:bg-post-red/5 transition-all group"
                  >
                    <BookOpen className="w-12 h-12 text-post-red mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-black text-slate-800 uppercase text-sm mb-2">Rules Guide</h3>
                    <p className="text-xs text-slate-500 font-medium">Explore Rules 1 to 66 in detail</p>
                  </button>
                  <button
                    onClick={() => setViewMode("qa")}
                    className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 hover:border-post-red hover:bg-post-red/5 transition-all group"
                  >
                    <HelpCircle className="w-12 h-12 text-post-red mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-black text-slate-800 uppercase text-sm mb-2">Q&A Section</h3>
                    <p className="text-xs text-slate-500 font-medium">Commonly asked questions</p>
                  </button>
                  <button
                    onClick={() => setViewMode("calculations")}
                    className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 hover:border-post-red hover:bg-post-red/5 transition-all group"
                  >
                    <Calculator className="w-12 h-12 text-post-red mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-black text-slate-800 uppercase text-sm mb-2">Calculations</h3>
                    <p className="text-xs text-slate-500 font-medium">15 Marks practice problems</p>
                  </button>
                </div>

                <button
                  onClick={() => setViewMode("rules")}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-post-red text-white rounded-2xl font-black uppercase tracking-widest hover:bg-post-red/90 hover:scale-105 transition-all shadow-xl shadow-post-red/20 group"
                >
                  Start Presentation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ) : viewMode === "rules" ? (
            <Slide
              key={`rule-${currentRuleIndex}`}
              rule={rules[currentRuleIndex]}
              index={currentRuleIndex}
              total={rules.length}
            />
          ) : viewMode === "qa" ? (
            <QASlide key={`qa-${currentQAIndex}`} question={allQuestions[currentQAIndex]} />
          ) : (
            <QASlide key={`calc-${currentCalcIndex}`} question={questionsCalculations[currentCalcIndex]} />
          )}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-2 md:left-4 flex items-center z-20">
          <button
            onClick={handlePrev}
            disabled={
              viewMode === "home" ||
              (viewMode === "qa" && currentQAIndex === 0) ||
              (viewMode === "calculations" && currentCalcIndex === 0)
            }
            className="p-2 md:p-3 bg-white/80 hover:bg-white text-post-red rounded-full shadow-lg disabled:opacity-0 disabled:cursor-not-allowed transition-all border border-post-red/10"
          >
            <ChevronLeft size={24} className="md:w-8 md:h-8" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-2 md:right-4 flex items-center z-20">
          <button
            onClick={handleNext}
            disabled={
              (viewMode === "rules" && currentRuleIndex === rules.length - 1) ||
              (viewMode === "qa" && currentQAIndex === allQuestions.length - 1) ||
              (viewMode === "calculations" && currentCalcIndex === questionsCalculations.length - 1)
            }
            className="p-2 md:p-3 bg-white/80 hover:bg-white text-post-red rounded-full shadow-lg disabled:opacity-0 disabled:cursor-not-allowed transition-all border border-post-red/10"
          >
            <ChevronRight size={24} className="md:w-8 md:h-8" />
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-post-red text-white px-4 md:px-6 py-3 md:py-4 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-4">
          <div className="text-xs md:text-sm font-bold">
            {viewMode === "home" ? (
              <>Welcome Screen</>
            ) : viewMode === "rules" ? (
              <>Rule {currentRuleIndex + 1} of {rules.length}</>
            ) : viewMode === "qa" ? (
              <>Question {currentQAIndex + 1} of {allQuestions.length}</>
            ) : (
              <>Calculation {currentCalcIndex + 1} of {questionsCalculations.length}</>
            )}
          </div>
          {viewMode !== "home" && (
            <div className="w-24 sm:w-48 h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-post-yellow"
                initial={{ width: 0 }}
                animate={{
                  width: `${
                    viewMode === "rules"
                      ? ((currentRuleIndex + 1) / rules.length) * 100
                      : viewMode === "qa"
                      ? ((currentQAIndex + 1) / allQuestions.length) * 100
                      : ((currentCalcIndex + 1) / questionsCalculations.length) * 100
                  }%`,
                }}
              />
            </div>
          )}
        </div>

        <div className="text-center sm:text-right">
          <p className="text-sm font-bold">
            Prepared by Kalandi Charan Sahoo
          </p>
          <p className="text-[10px] text-white/70 uppercase tracking-widest">
            Office Assistant, Divisional Office, Dhenkanal Postal Division
          </p>
        </div>
      </footer>

      {/* Side Menu / ToC */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-post-red/20 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col border-r-4 border-post-red"
            >
              <div className="p-6 bg-slate-50 border-b border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-black text-post-red uppercase tracking-tight">
                    {viewMode === "rules" ? "Rules Index" : viewMode === "qa" ? "Questions Index" : "Calculations Index"}
                  </h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-post-red/10 rounded-lg text-post-red transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-post-red/10 focus:border-post-red transition-all font-medium"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
                {viewMode === "rules" ? (
                  filteredRules.map((rule) => {
                    const originalIndex = rules.findIndex((r) => r.id === rule.id);
                    return (
                      <button
                        key={rule.id}
                        onClick={() => {
                          setCurrentRuleIndex(originalIndex);
                          setIsMenuOpen(false);
                        }}
                        className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-4 group border-2 ${
                          currentRuleIndex === originalIndex
                            ? "bg-post-red text-white border-post-red shadow-lg shadow-post-red/20"
                            : "hover:bg-post-yellow/10 text-slate-600 border-transparent hover:border-post-yellow"
                        }`}
                      >
                        <span className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                          currentRuleIndex === originalIndex
                            ? "bg-post-yellow text-post-red"
                            : "bg-slate-100 text-slate-400 group-hover:bg-post-yellow/20 group-hover:text-post-red"
                        }`}>
                          {rule.id.replace("RULE ", "")}
                        </span>
                        <span className="font-bold leading-tight text-sm">{rule.title}</span>
                      </button>
                    );
                  })
                ) : viewMode === "qa" ? (
                  filteredQA.map((qa) => {
                    const originalIndex = allQuestions.findIndex((q) => q.id === qa.id);
                    return (
                      <button
                        key={qa.id}
                        onClick={() => {
                          setCurrentQAIndex(originalIndex);
                          setIsMenuOpen(false);
                        }}
                        className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-4 group border-2 ${
                          currentQAIndex === originalIndex
                            ? "bg-post-red text-white border-post-red shadow-lg shadow-post-red/20"
                            : "hover:bg-post-yellow/10 text-slate-600 border-transparent hover:border-post-yellow"
                        }`}
                      >
                        <span className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                          currentQAIndex === originalIndex
                            ? "bg-post-yellow text-post-red"
                            : "bg-slate-100 text-slate-400 group-hover:bg-post-yellow/20 group-hover:text-post-red"
                        }`}>
                          {qa.id.replace("Q", "")}
                        </span>
                        <span className="font-bold leading-tight text-sm line-clamp-2">{qa.question}</span>
                      </button>
                    );
                  })
                ) : (
                  filteredCalculations.map((calc) => {
                    const originalIndex = questionsCalculations.findIndex((c) => c.id === calc.id);
                    return (
                      <button
                        key={calc.id}
                        onClick={() => {
                          setCurrentCalcIndex(originalIndex);
                          setIsMenuOpen(false);
                        }}
                        className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-4 group border-2 ${
                          currentCalcIndex === originalIndex
                            ? "bg-post-red text-white border-post-red shadow-lg shadow-post-red/20"
                            : "hover:bg-post-yellow/10 text-slate-600 border-transparent hover:border-post-yellow"
                        }`}
                      >
                        <span className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                          currentCalcIndex === originalIndex
                            ? "bg-post-yellow text-post-red"
                            : "bg-slate-100 text-slate-400 group-hover:bg-post-yellow/20 group-hover:text-post-red"
                        }`}>
                          {calc.id.replace("CALC", "")}
                        </span>
                        <span className="font-bold leading-tight text-sm line-clamp-2">{calc.question}</span>
                      </button>
                    );
                  })
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
