/**
 * Maps blog post titles to their numeric translation keys (1-20)
 * used in translations.ts as BLOG_POST_{n}_CONTENT
 */
export const BLOG_TITLE_TO_TRANSLATION_NUM: Record<string, number> = {
    // Posts 1-8 (same titles as mockData)
    'What is Shockwave (Li-ESWT)? Can it really cure ED?': 1,
    'Treating BPH Without Surgery: ReZum & UroLift': 2,
    'Stapler Circumcision vs Traditional: Which is Better?': 3,
    'Prostate Cancer Warning Signs: Why PSA Matters': 4,
    'Low Testosterone (Low T): Symptoms & TRT Solutions': 5,
    'Safe Penile Enlargement: Medical Fillers vs. Fat Transfer': 6,
    'Semen Analysis: The Key to Male Infertility': 7,
    'Overcoming Premature Ejaculation: Medical Solutions': 8,
    // Posts 9-20 (real titles from MongoDB)
    'Circumcision Near Me: How to Choose the Best Clinic?': 9,
    'Erectile Dysfunction: What to Do When Your "Little Brother" Won\'t Wake Up?': 10,
    'Straining to Urinate? Understanding the Causes and Treatments for Urinary Obstruction.': 11,
    'STI Testing Near Me: Why Discretion and Technology Matter.': 12,
    'Frequent Urination, Discomfort, or Waking Up at Night? Uncovering the Causes.': 13,
    '"My Little Brother Used to be Bigger." Understanding Penile Shrinkage.': 14,
    'Why You Must Remove Injected Foreign Substances: The Hidden Dangers of Paraffinoma.': 15,
    'Struggling with Premature Ejaculation? Modern Solutions That Actually Work.': 16,
    'Urology Clinic Near Me: What to Look For in a Top-Tier Specialist Clinic.': 17,
    'Trouble Maintaining an Erection? Losing Firmness Midway Explained.': 18,
    'Where to Get a Vasectomy: Choosing the Right Clinic for a No-Scalpel Procedure.': 19,
    'Why Treating Enlarged Prostate (BPH) with ReZUM is the Superior Choice.': 20,
};

/**
 * Returns the Thai content translation key for a given blog post title
 */
export function getBlogTHContentKey(title: string): string | null {
    const num = BLOG_TITLE_TO_TRANSLATION_NUM[title];
    if (!num) return null;
    return `BLOG_POST_${num}_CONTENT`;
}
