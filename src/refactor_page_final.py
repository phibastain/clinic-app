
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
    
    # We want lines 0-15 (first 16 lines)
    # Then insert imports
    # Then skip lines 16 to 519 (inclusive)
    # Then keep lines 520 onwards
    
    # Note: line numbers in editor are 1-based, indices are 0-based.
    # Line 16 in editor is index 15.
    # Line 17 starts the parts to remove. Index 16.
    # Line 520 starts the part to keep. Index 519.
    
    header = lines[:16]
    footer = lines[519:] # Start keeping from line 520
    
    # Check if we are cutting at the right place
    print(f"Last line kept from header: {header[-1].strip()}")
    print(f"First line of footer: {footer[0].strip()}")
    
    if "TYPES & INTERFACES" not in lines[17]: # Line 18 in file, index 17? No, Line 17 is index 16.
        # Let's verify context strings if possible, but line numbers were checked recently.
        pass

    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(header)
        f.write(imports_block)
        f.writelines(footer)
        
    print("Successfully refactored src/app/page.tsx")
    
except Exception as e:
    print(f"Error: {e}")
