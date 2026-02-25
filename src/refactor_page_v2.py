
import os

file_path = 'src/app/page.tsx'

# Define the imports block to insert
imports_block = """
import { 
  IconProps, ServiceStat, ServiceBenefit, ComparisonItem, ComparisonData, TimelineStep, TimelineData, 
  ProcedureStep, FaqItem, ServiceDetailData, HeroSlideData, ServiceItem, Qualification, AwardData, 
  DoctorVideo, DoctorData, BlogPost, EventData, LanguageOption, 
  SERVICE_DETAILS_DATA, HERO_SLIDES, SERVICE_CATEGORIES, DOCTORS, ABOUT_SPECIALTIES, FAQ_DATA, 
  BLOG_POSTS, EVENTS_DATA, languages 
} from '@/data/mockData';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import GradientButton from '@/components/ui/GradientButton';
import Logo from '@/components/ui/Logo';
import ModernBackground from '@/components/ui/ModernBackground';
"""

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Imports: lines 0-15 (16 lines)
    header = lines[:16]
    
    # Find start of Navigation Components
    nav_start_line = -1
    for i, line in enumerate(lines):
        if "// 3. NAVIGATION COMPONENTS" in line:
            nav_start_line = i
            break
            
    if nav_start_line == -1:
        print("Could not find start of Navigation Components. Aborting.")
        exit(1)
        
    print(f"Found Navigation Components at line {nav_start_line}") # likely 532 index (line 533)
    
    footer = lines[nav_start_line:]
    
    # Write new file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(header)
        f.write(imports_block)
        f.writelines(footer)
        
    print("Successfully refactored src/app/page.tsx")
    
except Exception as e:
    print(f"Error: {e}")
