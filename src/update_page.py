
import os

file_path = 'src/app/page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Indices are 0-based in Python, so line 17 corresponds to index 16.
# We want to keep lines 0 to 15 (inclusive), which is lines[:16]
# Line 440 corresponds to index 439.
# We want to remove from index 16 up to index 439 (inclusive).
# The next part we want to keep starts at line 441, which is index 440.
# So we keep lines[440:]

# Double check the content to be sure
print(f"Line 17 (Index 16): {lines[16]}")
print(f"Line 441 (Index 440): {lines[440]}")

start_index = 16
end_index = 440

new_content = lines[:start_index]
new_content.append("import {\n")
new_content.append("  IconProps, ServiceStat, ServiceBenefit, ComparisonItem, ComparisonData, TimelineStep, TimelineData,\n")
new_content.append("  ProcedureStep, FaqItem, ServiceDetailData, HeroSlideData, ServiceItem, Qualification, AwardData,\n")
new_content.append("  DoctorVideo, DoctorData, BlogPost, EventData, LanguageOption,\n")
new_content.append("  SERVICE_DETAILS_DATA, HERO_SLIDES, SERVICE_CATEGORIES, DOCTORS, ABOUT_SPECIALTIES, FAQ_DATA,\n")
new_content.append("  BLOG_POSTS, EVENTS_DATA, languages\n")
new_content.append("} from '@/data/mockData';\n\n")
new_content.extend(lines[end_index:])

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_content)

print("Successfully refactored page.tsx")
