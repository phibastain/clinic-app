'use client';

import { useState, useRef } from 'react';
import { MapPin, Mail, Calendar, ChevronDown, ShieldCheck, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import { sanitizeText, sanitizeEmail, sanitizePhone } from '@/utils/sanitize';
import { useTranslation } from '@/hooks/useTranslation';

const ContactSection = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [validationError, setValidationError] = useState('');
    const [lastSubmitTime, setLastSubmitTime] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const { t } = useTranslation();

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setValidationError('');
        setErrorMessage('');

        // Client-side rate limiting: 30-second cooldown between submissions
        const now = Date.now();
        if (now - lastSubmitTime < 30000 && lastSubmitTime > 0) {
            setValidationError(t('Please wait before submitting again.'));
            return;
        }

        const form = event.currentTarget;
        const formData = new FormData(form);

        setFormStatus('sending');
        setLastSubmitTime(now);

        try {
            // Send through server-side API route (handles sanitization, keys, & security)
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setFormStatus('success');
                form.reset();
                setTimeout(() => setFormStatus('idle'), 5000);
            } else {
                setFormStatus('error');
                setErrorMessage(data.message || 'Submission failed. Please try again.');
            }
        } catch {
            setFormStatus('error');
            setErrorMessage('Network error. Please check your connection.');
        }
    };

    return (
        <section ref={sectionRef} id="contact" className="pt-12 pb-20 border-b border-slate-200/50 dark:border-white/5 scroll-mt-24 text-left relative overflow-hidden">
            <Container>
                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-5 space-y-8">
                        <div>
                            <SectionTitle tag={t("Get in Touch")} title={t("Contact & Booking")} />
                            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6 font-medium">
                                {t("Ready to provide consultation and care with maximum privacy. Please make an appointment in advance for your convenience.")}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center shrink-0 text-amber-600">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wide">{t("Location")}</h3>
                                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">M-Trust Urology Clinic<br />Pattaya City, Bang Lamung District<br />Chon Buri 20150</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full aspect-4/3 rounded-4xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg relative bg-slate-100 dark:bg-slate-900">
                            <iframe
                                title="M-Trust Urology Clinic Location Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7110687705476!2d100.8986137!3d12.9262826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa045ef73235c18bb%3A0xddcef2f35c2a00ee!2sM-Trust%20Urology%20Clinic!5e0!3m2!1sen!2sth!4v1709450000000!5m2!1sen!2sth"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <div className="bg-linear-to-br from-white/90 via-slate-50/50 to-indigo-50/40 dark:from-[#1a1a1a]/90 dark:to-[#202030]/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-white/10 h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

                            <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase mb-6 flex items-center">
                                <Calendar className="mr-3 text-amber-600" size={20} />
                                {t("Make an Appointment")}
                            </h3>

                            {/* Success Message */}
                            {formStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 rounded-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <p className="font-bold text-green-800 dark:text-green-300 text-sm">{t("Appointment Request Sent Successfully!")}</p>
                                        <p className="text-green-600 dark:text-green-400 text-xs mt-1">{t("We will contact you within 24 hours to confirm your appointment. Thank you!")}</p>
                                    </div>
                                </div>
                            )}

                            {/* Error Message */}
                            {formStatus === 'error' && (
                                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/30 rounded-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <AlertCircle className="text-red-600 shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <p className="font-bold text-red-800 dark:text-red-300 text-sm">{t("Submission Failed")}</p>
                                        <p className="text-red-600 dark:text-red-400 text-xs mt-1">{errorMessage}</p>
                                    </div>
                                </div>
                            )}

                            {/* Validation Warning */}
                            {validationError && (
                                <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30 rounded-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <p className="font-bold text-amber-800 dark:text-amber-300 text-sm">{t("Incomplete Information")}</p>
                                        <p className="text-amber-600 dark:text-amber-400 text-xs mt-1">{validationError}</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={onSubmit} className="space-y-5">
                                {/* Hidden fields for Web3Forms */}
                                <input type="hidden" name="subject" value="New Appointment Request — M-Trust Urology Clinic" />
                                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label htmlFor="booking-name" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-2">{t("Full Name")} *</label>
                                        <input id="booking-name" name="Full Name" type="text" placeholder={t("Your Name")} autoComplete="name" required className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-400 dark:text-white" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="booking-phone" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-2">{t("Phone Number")} *</label>
                                        <input id="booking-phone" name="Phone" type="tel" placeholder="08x-xxx-xxxx" autoComplete="tel" required className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-400 dark:text-white" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label htmlFor="booking-email" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-2">{t("Email")} *</label>
                                        <input id="booking-email" name="Email" type="email" placeholder="your@email.com" autoComplete="email" required className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-400 dark:text-white" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="booking-service" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-2">{t("Service of Interest")}</label>
                                        <div className="relative">
                                            <select id="booking-service" name="Service" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:border-amber-500 text-slate-600 dark:text-slate-300">
                                                <option>{t("Prostate Screening")}</option>
                                                <option>{t("ED Treatment (Shockwave)")}</option>
                                                <option>{t("Vasectomy")}</option>
                                                <option>{t("Circumcision")}</option>
                                                <option>{t("General Consultation")}</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label htmlFor="booking-date" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-2">{t("Preferred Date")}</label>
                                        <input id="booking-date" name="Preferred Date" type="date" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-slate-500 dark:text-slate-300" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="booking-time" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-2">{t("Preferred Time")}</label>
                                        <input id="booking-time" name="Preferred Time" type="time" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-slate-500 dark:text-slate-300" />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="booking-message" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-2">{t("Message (Optional)")}</label>
                                    <textarea id="booking-message" name="Message" rows={4} placeholder={t("Describe your symptoms or specific request...")} className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none placeholder:text-slate-400 dark:text-white"></textarea>
                                </div>

                                <div className="pt-4 flex items-center justify-between">
                                    <p className="text-[10px] text-slate-400 max-w-[200px] leading-tight">
                                        <ShieldCheck size={12} className="inline mr-1 text-green-500" />
                                        {t("Your information will be kept strictly confidential according to our privacy policy.")}
                                    </p>
                                    <button
                                        type="submit"
                                        disabled={formStatus === 'sending'}
                                        className={`group relative overflow-hidden flex items-center justify-center space-x-3 transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] rounded-xl px-8 py-3.5 font-black uppercase text-[10px] tracking-widest bg-linear-to-br from-amber-600 via-amber-500 to-amber-700 text-white shadow-xl shadow-amber-500/20 ${formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="relative z-10">{formStatus === 'sending' ? t('Sending...') : t('Confirm Booking')}</span>
                                        {formStatus === 'sending'
                                            ? <Loader2 className="relative z-10 animate-spin" size={16} />
                                            : <Send className="relative z-10 transition-transform group-hover:translate-x-1" size={16} />
                                        }
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactSection;
