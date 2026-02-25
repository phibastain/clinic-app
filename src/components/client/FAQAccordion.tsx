'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
    title?: string;
}

/**
 * FAQAccordion - Client Island for Interactive FAQ
 * Uses 'use client' for useState (expand/collapse)
 * Schema is injected separately via Server Component
 */
export default function FAQAccordion({ items, title = "Frequently Asked Questions" }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-8" aria-labelledby="faq-heading">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <HelpCircle className="text-amber-600" size={20} />
                </div>
                <h2 id="faq-heading" className="text-2xl font-bold text-slate-900 dark:text-white">
                    {title}
                </h2>
            </div>

            <div className="space-y-3" role="list">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-white/5"
                        role="listitem"
                    >
                        <button
                            onClick={() => toggleItem(index)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                            aria-expanded={openIndex === index}
                            aria-controls={`faq-answer-${index}`}
                        >
                            <span className="font-semibold text-slate-900 dark:text-white pr-4">
                                {item.question}
                            </span>
                            <span className="flex-shrink-0 text-amber-600">
                                {openIndex === index ? (
                                    <ChevronUp size={20} />
                                ) : (
                                    <ChevronDown size={20} />
                                )}
                            </span>
                        </button>

                        <div
                            id={`faq-answer-${index}`}
                            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            role="region"
                            aria-labelledby={`faq-question-${index}`}
                        >
                            <div className="px-4 pb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
