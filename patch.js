const fs = require('fs');
const { Project, SyntaxKind } = require('ts-morph');
const project = new Project();
project.addSourceFileAtPath('./src/data/mockData.ts');
const file = project.getSourceFileOrThrow('./src/data/mockData.ts');

const translations = {
  doctors: {
    1: {
      nameAR: 'د. نيثي نافانيتكول',
      roleAR: 'استشاري جراحة المسالك البولية وصحة الرجل',
      expertAR: 'دعامة العضو الذكري | ريزوم | يوروليفت',
      taglineAR: 'رحلة من التفاني والخبرة والتعاطف في صحة الرجل',
      bioAR: 'د. نيثي هو أحد أبرز الخبراء في تايلاند في جراحة المسالك البولية وصحة الرجل. يجمع بين الخبرة الطبية العميقة والنهج الشامل للمريض.'
    },
    2: {
      nameAR: 'د. بانبون ليلاهاوونج',
      roleAR: 'خبير في صحة الرجل',
      expertAR: 'العلاج الدقيق',
      taglineAR: 'تطوير صحة الرجل بخبرة',
      bioAR: 'خبير في أحدث العلاجات.'
    },
    3: {
      nameAR: 'د. طبيب غير معروف',
      roleAR: 'اختصاصي مجهول',
      expertAR: 'عام',
      taglineAR: 'طبيب عام',
      bioAR: 'لا يوجد.'
    }
  },
  events: {
    1: {
      titleAR: 'التبادل الأكاديمي لعلاج ريزوم (Rezum)',
      excerptAR: 'أول تدريب سريري في تايلاند على تقنية Rezum بإشراف خبراء عالميين.',
      contentAR: 'تم اختيار عيادة إم ترست كمركز للتدريب على تقنية ريزوم...'
    },
    2: {
      titleAR: 'قصة نجاح: أول مريض يوروليفت (UroLift) في تايلاند',
      excerptAR: 'د. نيثي يجري أول عملية UroLift بنجاح مذهل.',
      contentAR: 'رائدة العلاجات المتطورة لتقديم الأفضل...'
    },
    3: {
      titleAR: 'جراحة ليزر HoLEP لعلاج تضخم البروستاتا',
      excerptAR: 'تحديثات حول تقنية ليزر هولميوم المتقدمة.',
      contentAR: 'أحدث التطورات السريرية لعلاج أكثر كفاءة...'
    },
    4: {
      titleAR: 'مشاركة الرؤى في مؤتمر جراحة المسالك البولية',
      excerptAR: 'د. نيثي يشارك نتائج الأبحاث في المؤتمر الوطني.',
      contentAR: 'مشاركة قصص النجاح حول ريزوم ويوروليفت...'
    }
  },
  blogs: {
    1: {
      titleAR: 'ما هو العلاج بالموجات الصدمية (Li-ESWT)؟',
      excerptAR: 'اكتشف كيف تحفز هذه التقنية تدفق الدم لعلاج ضعف الانتصاب بشكل دائم.',
      contentAR: '<p>يعالج ضعف الانتصاب من الجذور بدلاً من الأعراض.</p>'
    },
    2: {
      titleAR: 'علاج تضخم البروستاتا بدون جراحة: ريزوم ויوروليفت',
      excerptAR: 'تعرف على الخيارات غير الجراحية الفعالة لعلاج تضخم البروستاتا.',
      contentAR: '<p>خيارات متقدمة لراحة أكبر.</p>'
    },
    3: {
      titleAR: 'الختان بالدباسة مقابل التقليدي: أيهما أفضل؟',
      excerptAR: 'مقارنة شاملة بين طرق الختان لمساعدتك في اتخاذ القرار.',
      contentAR: '<p>الدباسة توفر دقة عالية وشفاء أسرع.</p>'
    },
    4: {
      titleAR: 'علامات تحذيرية لسرطان البروستاتا: أهمية فحص PSA',
      excerptAR: 'لماذا يعتبر الكشف المبكر المنقذ الأهم للرجال.',
      contentAR: '<p>لا تهمل فحص البروستاتا الدوري.</p>'
    },
    5: {
      titleAR: 'نقص هرمون التستوستيرون (Low T): الأعراض والحلول',
      excerptAR: 'كيف تستعيد نشاطك وحيويتك بالعلاج الهرموني.',
      contentAR: '<p>التوازن الهرموني مهم لصحة الرجل.</p>'
    },
    6: {
      titleAR: 'تكبير العضو الذكري بأمان: الفيلر مقابل حقن الدهون',
      excerptAR: 'كل ما تحتاج معرفته عن خيارات تكبير محيط العضو.',
      contentAR: '<p>استشر خبيراً لاختيار الإجراء الأنسب.</p>'
    },
    7: {
      titleAR: 'تحليل السائل المنوي: المفتاح لعقم الرجال',
      excerptAR: 'أهمية جودة الحيوانات المنوية في الإنجاب.',
      contentAR: '<p>خطوة مهمة لفحص الخصوبة.</p>'
    },
    8: {
      titleAR: 'التغلب على سرعة القذف: الحلول الطبية',
      excerptAR: 'علاجات حديثة لمشكلة سرعة القذف.',
      contentAR: '<p>أدوية وإجراءات تساعدك على استعادة السيطرة.</p>'
    }
  }
};

function processArray(arrayName, transMap) {
  const symbol = file.getVariableDeclaration(arrayName);
  if (!symbol) return;
  const arr = symbol.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
  if (!arr) return;

  for (const element of arr.getElements()) {
    if (element.getKind() === SyntaxKind.ObjectLiteralExpression) {
      const idProp = element.getProperty('id');
      if (!idProp) continue;
      // remove quotes and cast from getInitializer
      const init = idProp.getInitializer();
      if (!init) continue;
      const idVal = init.getText().replace(/['"]/g, '');
      const trans = transMap[idVal];
      if (trans) {
        for (const [k, v] of Object.entries(trans)) {
          const existing = element.getProperty(k);
          if (!existing) {
             element.addPropertyAssignment({ name: k, initializer: JSON.stringify(v) });
          }
        }
      }
    }
  }
}

processArray('DOCTORS', translations.doctors);
processArray('EVENTS_DATA', translations.events);
processArray('BLOG_POSTS', translations.blogs);

file.saveSync();
console.log('Saved AR fields to mockData.ts successfully!');
