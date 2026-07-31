# # ARCHITECTURE.md 
 
# # Abdallah Shahbour Portfolio 
 
# ## Project Architecture Documentation 
 
--- 
 
# # Purpose 
 
This document defines the engineering architecture of the project. 
 
Its purpose is to ensure that the project remains: 
 
- Scalable 
- Maintainable 
- Reusable 
- Clean 
- Easy to understand 
The architecture should be treated as an engineering standard, not a suggestion. 
 
--- 
 
# Core Philosophy 
 
This portfolio is expected to grow over time. 
 
Future additions may include: 
 
- More projects 
- More case studies 
- More pages 
- More animations 
- More integrations 
Therefore, the architecture must be prepared for future expansion from day one. 
 
Avoid shortcuts that create technical debt. 
 
--- 
 
# Tech Stack 
 
Framework 
 
Next.js (App Router) 
 
Language 
 
TypeScript 
 
Styling 
 
Tailwind CSS 
 
Animations 
 
Framer Motion 
 
GSAP (only when a complex animation truly requires it) 
 
Icons 
 
Lucide React Simple Icons 
 
Image Optimization 
 
Next/Image 
 
Deployment 
 
Vercel 
 
--- 
 
# Folder Structure 
 
Recommended structure: 
 
src/ 
 
app/ 
 
components/ 
 
ui/ 
 
layout/ 
 
sections/ 
 
gallery/ 
 
case-study/ 
 
shared/ 
 
content/ 
 
navigation.ts experience.ts gallery.ts 
 
skills.ts tools.ts 
 
socials.ts site.ts 
 
caseStudies.ts 
 
theme/ 
 
colors.ts 
 
fonts.ts 
 
motion.ts 
 
spacing.ts 
 
radius.ts 
 
shadows.ts 
 
breakpoints.ts 
 
hooks/ 
 
lib/ 
 
utils/ types/ constants/ assets/ images/ logos/ icons/ illustrations/ 
 
public/ 
 
--- 
 
# Component Philosophy 
 
Every component must have a single responsibility. 
 
Avoid components that do too many things. 
 
Instead of creating large files: 
 
Break the UI into reusable building blocks. 
 
--- 
 
# Component Categories 
 
UI Components 
 
Reusable interface elements. 
 
Examples: 
 
Button 
 
Badge 
 
Tag 
 
Input 
 
Modal 
 
Tooltip 
 
Divider 
 
Card 
 
--- 
 
Layout Components 
 
Responsible for page structure. 
 
Examples: 
 
Navbar 
 
Footer 
 
Container 
 
Section 
 
Grid 
 
Wrapper 
 
--- 
 
Section Components 
 
Represent complete website sections. 
 
Examples: 
 
Hero 
 
About 
 
Experience 
 
Gallery 
 
Skills 
 
Contact --- 
 
Feature Components Specific functionality. 
 
Examples: Gallery Modal Project Card Case Study Timeline Image Viewer 
 
Contact Popover 
 
--- 
 
# Data Flow 
 
Components should never contain permanent content. 
 
Every component receives data through props. 
 
Content comes from: 
 
content/ 
 
Theme values come from: 
 
theme/ 
 
--- 
 
# Reusability 
 
Before creating a new component, ask: 
 
Can an existing component be reused? 
 
Duplicate components are discouraged. 
 
--- 
 
# State Management 
 
Use React state only when necessary. 
 
Avoid unnecessary global state. 
 
Local state should remain local. 
 
Shared state should only exist when multiple components genuinely require it. 
 
--- 
 
# Client vs Server Components 
 
Prefer Server Components whenever possible. 
 
Only use Client Components when required. 
 
Examples: 
 
Animations 
 
Browser APIs 
 
User interaction 
 
Scroll detection 
 
Mouse tracking 
 
Dialogs 
 
Everything else should remain server-side. 
 
--- 
 
# Naming Convention 
 
Component names 
 
PascalCase 
 
Example 
 
HeroSection.tsx 
 
GalleryModal.tsx 
 
ProjectCard.tsx 
 
--- 
 
Hooks 
 
camelCase 
 
useScrollProgress.ts 
 
useMousePosition.ts 
 
--- 
 
Utility Functions 
 
camelCase 
 
formatDate.ts 
 
calculateAspectRatio.ts 
 
--- 
 
Constants 
 
UPPER_CASE 
 
DEFAULT_ANIMATION_DURATION 
 
MAX_GALLERY_ITEMS 
 
--- 
 
Types 
 
PascalCase 
 
Project 
 
Skill 
 
Experience 
 
SocialLink 
 
GalleryItem 
 
--- 
 
# Imports 
 
Prefer absolute imports. 
 
Avoid long relative import chains. 
 
Example: 
 
@/components 
 
@/content 
 
@/theme 
 
@/hooks 
 
--- 
 
# Styling Rules 
 
Do not repeat utility classes unnecessarily. 
 
Create reusable UI components. 
 
Avoid inline styles unless required. 
 
Avoid magic numbers. 
 
--- 
 
# Images 
 
Always use: next/image Support: Lazy loading 
 
Responsive sizing 
 
Optimization Use descriptive filenames. 
 
--- 
 
# Accessibility 
 
Every interactive element must be accessible. 
 
Requirements: 
 
Keyboard navigation 
 
Visible focus states 
 
Proper aria labels 
 
Alt text for images 
 
Semantic HTML 
 
Respect prefers-reduced-motion 
 
--- 
 
# Performance 
 
Optimize every page. 
 
Avoid unnecessary JavaScript. Lazy load heavy content. 
 
Code split when appropriate. 
 
Avoid large animation libraries unless required. 
 
Images should be optimized. 
 
--- 
 
# Motion 
 
Motion should be reusable. 
 
Animation definitions should come from: 
 
theme/motion.ts 
 
Never duplicate animation variants. 
 
--- 
 
# Responsive Design 
 
Mobile First. 
 
Support: 
 
Mobile 
 
Tablet 
 
Laptop 
 
Desktop 
 
Ultra Wide 
 
Every section must work beautifully on every screen. 
 
Do not design desktop first and adapt later. 
 
--- 
 
# SEO 
 
Every page should include: 
 
Title 
 
Description 
 
Open Graph 
 
Twitter Cards Canonical URL 
 
Structured metadata where appropriate. 
 
--- 
 
# Error Prevention 
 
Avoid: 
 
Hardcoded values 
 
Duplicated logic 
 
Repeated animations 
 
Repeated layouts 
 
Repeated typography definitions 
 
Repeated colors 
 
--- 
 
# Future Expansion 
 
The architecture should allow adding: New sections New projects New pages New themes Dark mode CMS integration Internationalization Blog without major refactoring. --# Code Quality Prioritize: Readability Maintainability Consistency Simplicity Scalability 
 
Code should read like documentation. 
 
--- 
 
# Final Rule 
 
Whenever there are multiple possible implementations: 
 
Choose the solution that will still make sense one year from now. 
 
Optimize for long-term maintainability rather than short-term convenience. 