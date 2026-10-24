import React, { useState } from 'react';
import { Star, ChevronDown, HelpCircle } from 'lucide-react';
import { siteData } from '../../data/siteData';
import SectionHeading from '../common/SectionHeading';

export default function TestimonialsFaq() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0f1422] via-[#141b2c] to-[#101524] relative overflow-hidden border-t border-white/10">
      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Block */}
        <div className="mb-20">
          <SectionHeading
            badge="Client Accolades"
            title="Trusted by Kolkata's Leading"
            gradientTitle="Architects & Homeowners"
            subtitle="Read real experiences from interior designers, commercial clients, and homeowners who commissioned bespoke glass & mirror work."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {siteData.testimonials.map((t) => (
              <div
                key={t.id}
                className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/15 flex flex-col justify-between shadow-xl relative group hover:border-amber-400/40 transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-sm text-slate-300 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {t.author}
                    </h4>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      {t.role}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-500/30">
                    {t.project}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Block */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-amber-300 bg-amber-950/60 border border-amber-500/30 mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Questions & Answers</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {siteData.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl glass-panel border border-white/15 overflow-hidden transition-all shadow-lg hover:border-amber-400/40"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
