'use client';

import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

const CertificateMarquee = ({ certificates }: { certificates: string[] }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <div className="relative w-full overflow-hidden py-6 bg-linear-to-r from-slate-50/80 to-indigo-50/20 dark:from-[#0B0F19] dark:to-[#1a1a2e] border-t border-b border-slate-200 dark:border-white/10">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white dark:from-[#0B0F19] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white dark:from-[#0B0F19] to-transparent z-10 pointer-events-none"></div>

                <div className={`flex w-max animate-marquee space-x-8 ${selectedImage ? 'paused' : ''}`}>
                    {[...certificates, ...certificates, ...certificates].map((cert, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(cert)}
                            className="w-[180px] h-[120px] bg-white p-2 rounded-lg shadow-sm border border-slate-200 flex items-center justify-center shrink-0 cursor-zoom-in hover:scale-105 transition-transform group relative"
                        >
                            <img src={cert} alt="certificate" className="max-w-full max-h-full object-contain pointer-events-none" />
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                                <ZoomIn className="text-slate-600 opacity-60" size={24} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-[5000] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close certificate view"
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[5010] p-2"
                    >
                        <X size={32} />
                    </button>

                    <img
                        src={selectedImage}
                        alt="Certificate Full View"
                        className="w-auto h-auto max-w-[70vw] max-h-[70vh] object-contain rounded-lg shadow-2xl animate-zoom-in select-none"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
};

export default CertificateMarquee;
