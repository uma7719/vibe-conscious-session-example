import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles, Loader2, Bot } from 'lucide-react';
import Markdown from 'react-markdown';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const CropAdvisor = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse('');

    try {
      const model = 'gemini-3-flash-preview';
      const result = await ai.models.generateContent({
        model,
        contents: query,
        config: {
          systemInstruction: "You are an expert agricultural advisor named 'AgriBot'. Provide professional, concise, and practical advice on crop management, pest control, soil health, and gardening. Use a friendly and helpful tone. Format your response with clear headings and bullet points where appropriate.",
        },
      });
      setResponse(result.text || 'I apologize, I could not generate a response at this time.');
    } catch (error) {
      console.error('AI Error:', error);
      setResponse('Sorry, I encountered an error. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="advisor" className="py-24 bg-earth-900 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-moss-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-earth-400 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-moss-500/20 border border-moss-500/30 text-moss-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            <span>AI-Powered Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Smart Crop Advisor</h2>
          <p className="text-earth-300 max-w-xl mx-auto">
            Get instant expert advice on planting, pest control, and soil health. Our AI assistant is here to help you grow better.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
          <form onSubmit={handleAsk} className="relative mb-8">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about your crops, pests, or soil..."
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-6 pr-16 text-white placeholder:text-earth-400 focus:outline-none focus:ring-2 focus:ring-moss-500/50 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="absolute right-2 top-2 bottom-2 px-4 bg-moss-600 rounded-xl hover:bg-moss-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center"
            >
              {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
            </button>
          </form>

          <AnimatePresence mode="wait">
            {response ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="prose prose-invert max-w-none"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-moss-600 flex items-center justify-center shrink-0">
                    <Bot size={18} />
                  </div>
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 w-full">
                    <div className="markdown-body">
                      <Markdown>{response}</Markdown>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : !isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "How do I prevent tomato blight?",
                  "Best fertilizer for organic corn?",
                  "When to plant winter wheat?",
                  "How to improve soil pH naturally?"
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => setQuery(q)}
                    className="text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-moss-500/50 transition-all text-sm text-earth-300"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
