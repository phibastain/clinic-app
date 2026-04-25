import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ShieldCheck, Trophy, Activity, Timer, ChevronRight, CheckCircle2, Info, Users } from 'lucide-react';
import { SERVICE_DETAILS_DATA } from '@/data/mockData';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';

interface VasectomyProps {
  searchParams: Promise<{ lang?: string }>;
}

export async function generateMetadata({ searchParams }: VasectomyProps): Promise<Metadata> {
  const awaitedParams = await searchParams;
  const isThai = awaitedParams?.lang === 'th';
  const isAr = awaitedParams?.lang === 'ar';
  const isRu = awaitedParams?.lang === 'ru';
  const url = isRu ? '/vasectomy?lang=ru' : isAr ? '/vasectomy?lang=ar' : isThai ? '/vasectomy?lang=th' : '/vasectomy';

  const title = isRu
    ? 'Вазэктомия без скальпеля | Клиника M-Trust'
    : isAr
    ? 'قطع القناة الدافقة بدون مشرط | عيادة إم-ترست'
    : isThai
    ? 'ทำหมันชายไร้มีด | M-Trust Clinic'
    : 'No-Scalpel Vasectomy Bangkok | M-Trust Clinic';
  const description = isRu
    ? 'Самый безопасный и эффективный метод постоянной контрацепции для мужчин. Быстрая процедура без скальпеля, выполняемая лучшими урологами. Без влияния на сексуальную функцию.'
    : isAr
    ? 'أكثر وسائل منع الحمل أماناً وفعالية للرجال. إجراء سريع بدون مشرط بواسطة أفضل أطباء المسالك البولية. لا تأثير على الأداء الجنسي.'
    : isThai
    ? 'ทำหมันชายไร้มีดผ่าตัด ปลอดภัยที่สุด ไม่กระทบสมรรถภาพทางเพศ โดยแพทย์ผู้เชี่ยวชาญ'
    : 'The safest and most effective permanent birth control for men. Quick no-scalpel procedure performed by top urologists in Bangkok. No effect on sexual performance.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: isRu ? 'ru_RU' : isAr ? 'ar_SA' : isThai ? 'th_TH' : 'en_US',
    },
    alternates: {
      canonical: `https://www.mtrusturology.com${url}`,
      languages: {
        'en': '/vasectomy',
        'th': '/vasectomy?lang=th',
        'ar': '/vasectomy?lang=ar',
        'ru': '/vasectomy?lang=ru',
      },
    },
  };
}

export default async function VasectomyLandingPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const awaitedParams = await searchParams;
  const lang = awaitedParams?.lang || 'en';
  const isThai = lang === 'th';
  const isAr = lang === 'ar';
  
  const vData = SERVICE_DETAILS_DATA['Vasectomy'];
  if (!vData) return null;

  // Language Helpers
  const t = {
    title: isAr ? vData.titleAR : isThai ? 'ทำหมันชาย (Vasectomy)' : vData.title,
    tagline: isAr ? vData.taglineAR : isThai ? 'ทำหมันชายไร้มีดผ่าตัด ปลอดภัย มีประสิทธิภาพสูง ไม่ส่งผลต่อสมรรถภาพทางเพศ กลับบ้านได้ทันที' : vData.tagline,
    whatIsItTitle: isAr ? vData.whatIsItAR?.title : isThai ? 'การทำหมันชายแบบไร้มีดคืออะไร?' : vData.whatIsIt?.title,
    whatIsItDesc: isAr ? vData.whatIsItAR?.description : isThai ? 'การทำหมันชายแบบไร้มีด (No-scalpel vasectomy) เป็นเทคนิคที่ทันสมัยและเจ็บน้อยที่สุดในการคุมกำเนิดถาวรสำหรับผู้ชาย แพทย์จะใช้เครื่องมือพิเศษในการขยายรูเล็กๆ (3-5 มม.) แทนการใช้มีดกรีด เพื่อเข้าไปตัดและผูกท่อนำอสุจิ ใช้เวลาเพียง 15-20 นาทีภายใต้ยาชาเฉพาะที่ ไม่ส่งผลต่อฮอร์โมน ความรู้สึก หรือการแข็งตัวแต่อย่างใด' : vData.whatIsIt?.description,
    description: isAr ? vData.descriptionAR : isThai ? 'การทำหมันชายคือการคุมกำเนิดแบบถาวรที่ได้รับการยอมรับว่ามีประสิทธิภาพสูงสุด (>99.9%) การทำหมันไม่ได้ทำให้ปริมาณน้ำอสุจิลดลง เพียงแต่จะไม่มีตัวอสุจิปะปนออกมาด้วยเท่านั้น' : vData.description,
    bookNow: isAr ? 'احجز استشارتك' : isThai ? 'ปรึกษาแพทย์ทำหมันชาย' : 'Book Your Consultation',
    safetyTitle: isAr ? vData.safetyAR?.title : isThai ? 'ความปลอดภัยและการแก้หมัน' : vData.safety?.title,
    safetyContent: isAr ? vData.safetyAR?.content : isThai ? 'การทำหมันชายจัดเป็นหนึ่งในหัตถการทางระบบทางเดินปัสสาวะที่ปลอดภัยที่สุด ความเสี่ยงในการติดเชื้อต่ำมาก (<1%) ร่างกายยังผลิตเทสโทสเตอโรนตามปกติ แม้ในทางทฤษฎีจะสามารถผ่าตัดแก้หมันได้ แต่ผลสำเร็จจะลดลงตามระยะเวลา จึงควรพิจารณาตัดสินใจให้ถี่ถ้วนเสมือนเป็นการคุมกำเนิดถาวร' : vData.safety?.content,
    whyChooseTitle: isAr ? 'لماذا تختار استئصال الأسهر بدون مشرط؟' : isThai ? 'ทำไมถึงควรเลือกทำหมันชายแบบไร้มีด?' : 'Why Choose No-Scalpel Vasectomy?',
    hormoneSafeTitle: isAr ? '100% آمن على الهرمونات' : isThai ? 'ฮอร์โมนปกติ 100%' : '100% Hormone Safe',
    hormoneSafeDesc: isAr ? 'إنتاج التستوستيرون يبقى طبيعياً بالكامل.' : isThai ? 'ร่างกายผลิตการหลั่งเทสโทสเตอโรนได้เป็นปกติ' : 'Testosterone production remains completely natural.',
    journeyDesc: isAr ? 'رحلة مباشرة نحو راحة البال الدائمة، بتوجيه من الخبراء في كل خطوة.' : isThai ? 'รับการดูแลเพื่อความสบายใจระยะยาว ภายใต้การดูแลของผู้เชี่ยวชาญทุกขั้นตอน' : 'A straightforward journey to permanent peace of mind, guided by experts every step of the way.',
    theProcedure: isAr ? 'خطوات الإجراء' : isThai ? 'ขั้นตอนการทำหมัน' : 'The Procedure',
    recoveryTimeline: isAr ? 'الجدول الزمني للتعافي' : isThai ? 'ระยะเวลาการฟื้นตัว' : 'Recovery Timeline',
    goodCandidateTitle: isAr ? 'من هو المرشح المناسب؟' : isThai ? 'ใครเหมาะสมที่จะทำหมันชาย?' : 'Who is a Good Candidate?',
  };

  return (
    <div className={`min-h-screen bg-slate-50 ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-auto min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
        {vData.heroImage && (
          <Image
            src={vData.heroImage}
            alt="Vasectomy Procedure"
            fill
            className="object-cover object-center z-0"
            priority
          />
        )}
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl text-white">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 text-sm font-medium mb-6 backdrop-blur-sm shadow-sm ${isAr ? 'flex-row-reverse' : ''}`}>
              <ShieldCheck className="w-4 h-4" />
              <span>{isAr ? 'الخيار الأول لمنع الحمل الدائم' : isThai ? 'ทางเลือกคุมกำเนิดอันดับ 1 สำหรับผู้ชาย' : 'Premium Permanent Contraception'}</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight ${isAr ? 'font-arabic' : ''}`}>
              {t.title}
            </h1>
            
            <p className={`text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl leading-relaxed ${isAr ? 'font-arabic' : ''}`}>
              {t.tagline}
            </p>
            
            <div className={`flex flex-wrap gap-4 ${isAr ? 'flex-row-reverse' : ''}`}>
              <a href="#contact" className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-amber-500/30 flex items-center gap-2 group">
                {t.bookNow}
                <ChevronRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <div className="bg-white border-b border-slate-200 py-6 sticky top-20 z-40 hidden md:block shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {(isAr && vData.statsAR ? vData.statsAR : vData.stats)?.map((stat: any, index: number) => {
              const engStat = vData.stats?.[index];
              const Icon = engStat?.icon || ShieldCheck;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-slate-800">{engStat?.value}</div>
                    <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. WHAT IS IT & BENEFITS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                <Info className="w-4 h-4" />
                <span>{isAr ? 'لمحة عامة' : isThai ? 'ภาพรวม' : 'OVERVIEW'}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.whatIsItTitle}</h2>
              <div className="prose prose-lg text-slate-600">
                <p>{t.whatIsItDesc}</p>
                <p>{t.description}</p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{t.whyChooseTitle}</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {(isAr && vData.benefitsAR ? vData.benefitsAR : vData.benefits)?.map((b: any, i: number) => {
                    const originalB = vData.benefits?.[i];
                    return (
                      <div key={i} className="flex gap-4">
                        <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-amber-500 border border-slate-100 shadow-sm">
                          {originalB?.icon && <originalB.icon className="w-5 h-5" />}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1">{b.title}</h4>
                          <p className="text-sm text-slate-600">{b.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                <Image
                  src={vData.descriptionImage || vData.heroImage || ''}
                  alt="Clinical Mechanism"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-100 to-blue-50 rounded-3xl -z-10 transform translate-x-4 translate-y-4"></div>
              <div className={`absolute top-1/2 ${isAr ? '-left-12' : '-right-12'} bg-white/90 backdrop-blur rounded-2xl p-6 shadow-xl border border-slate-100 transform -translate-y-1/2 z-20 max-w-xs`}>
                <div className="flex gap-4 items-start">
                  <div className="text-blue-600 bg-blue-50 p-2 rounded-lg"><Activity className="w-6 h-6"/></div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.hormoneSafeTitle}</h4>
                    <p className="text-sm text-slate-500 mt-1">{t.hormoneSafeDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCEDURE & TIMELINE */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{isAr ? vData.timelineAR?.title : isThai ? 'ขั้นตอนการรักษาและการฟื้นตัว' : vData.timeline?.title}</h2>
            <p className="text-slate-400 text-lg">{t.journeyDesc}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Procedure Steps */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-amber-500 flex items-center gap-3">
                <Timer className="w-6 h-6" /> {t.theProcedure}
              </h3>
              <div className="space-y-8">
                {(isAr && vData.procedureAR ? vData.procedureAR : vData.procedure)?.map((step: any, idx: number) => (
                  <div key={idx} className="flex gap-6 relative">
                    {/* Vertical line connecting steps */}
                    {idx !== (vData.procedure?.length || 0) - 1 && (
                      <div className="absolute left-6 top-14 bottom-[-2rem] w-px bg-slate-700"></div>
                    )}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl font-bold text-slate-300 border border-slate-700 z-10">
                      {step.step || (idx + 1)}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">{step.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recovery Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-amber-500 flex items-center gap-3">
                <Calendar className="w-6 h-6" /> {t.recoveryTimeline}
              </h3>
              <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 backdrop-blur-sm">
                <div className="space-y-8">
                  {(isAr && vData.timelineAR ? vData.timelineAR.steps : vData.timeline?.steps)?.map((step: any, idx: number) => (
                    <div key={idx} className="flex gap-4">
                      <div className="mt-1">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <div className="inline-block px-2 py-1 bg-slate-900 rounded text-xs font-bold text-amber-500 mb-2">
                          {step.time}
                        </div>
                        <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CANDIDATES & SAFETY */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12 bg-blue-50/50">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{t.goodCandidateTitle}</h3>
                <ul className="space-y-4">
                  {(isAr && vData.candidatesAR ? vData.candidatesAR : vData.candidates)?.map((c: string, idx: number) => (
                    <li key={idx} className="flex gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-10 md:p-12 border-l border-slate-100">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{t.safetyTitle}</h3>
                <p className="text-slate-600 leading-relaxed">{t.safetyContent}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <div className="bg-white">
        <FaqSection faqs={isAr && vData.faqAR ? vData.faqAR : vData.faq || []} />
      </div>

      {/* 7. CONTACT / CTA */}
      <div id="contact">
        <ContactSection />
      </div>

    </div>
  );
}
