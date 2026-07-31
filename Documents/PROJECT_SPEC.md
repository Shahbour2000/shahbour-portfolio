# PROJECT_SPEC 
 
> Official project specification and source of truth for the Abdallah Shahbour Portfolio project. 
 
--- 
 
# 1. Project Overview 
 
## Project Name 
 
Abdallah Shahbour Portfolio 
 
## Project Type 
 
Premium Personal Brand Portfolio 
 
## Owner 
 
Abdallah Shahbour 
 
## Purpose 
 
Build a world-class portfolio website that represents Abdallah Shahbour as a Visual Designer and helps attract freelance work, part-time opportunities, fulltime positions, and collaborations with local and international clients. 
 
The website should leave a memorable first impression through exceptional design, smooth interactions, and high-quality presentation of work. 
 
--- 
 
# 2. Project Goals 
 
The website should: 
 
- Build a strong personal brand. 
- Showcase design quality before anything else. 
- Present professional experience clearly. 
- Display selected work in a visually compelling way. 
- Support recruiters during hiring. 
- Help potential clients trust the quality of work. 
- Remain scalable for future growth. 
--- 
 
# 3. Target Audience 
 
## Primary Audience 
 
- Arabic-speaking recruiters. 
- Companies. 
- Agencies. 
- Clients. 
- Project owners. 
## Secondary Audience 
 
International recruiters and clients. 
 
Although the primary audience is Arabic-speaking, the website language will be English to maximize professionalism and accessibility. 
 
--- 
 
# 4. Employment Goals 
 
The portfolio should support: 
 
- Freelance work 
- Part-time positions 
- Full-time positions 
Preferred work styles: 
 
- Remote 
- On-site (Greater Cairo / Giza) 
--- 
 
# 5. Brand Identity 
 
This is NOT: 
 
- An agency website. 
- A SaaS product website. 
- A resume website. 
- A product designer portfolio. 
This IS: 
 
A premium personal brand portfolio focused on visual design and creative work. 
 
The visual personality should be: 
 
- Premium 
- Creative 
- Elegant 
- Modern 
- Minimal - Visual-first 
- Timeless 
--- 
 
# 6. Website Structure 
 
## Homepage 
 
Contains: 
 
- Navbar 
- Hero 
- About - Experience - Selected Work - Skills - Contact 
- Footer 
## Case Studies 
 
Current: 
 
/work/sirat 
 
Future: 
 
/work/project-name 
 
Every case study follows the same reusable structure. 
 
--- 
 
# # 7. Homepage Sections 
 
## Hero 
 
Purpose: 
 
Create a memorable first impression. 
 
Contains: 
 
- Personal photo 
- Name 
- Professional title 
- Short introduction 
- Primary CTA 
- Secondary CTA 
--- 
 
## About 
 
Short personal introduction. 
 
Focus on: 
 
- Background 
- Design philosophy 
- Values 
- Current focus 
Avoid long paragraphs. 
 
--- 
 
## Experience 
 
Current experience: 
 
### Sirat Platform 
 
Responsibilities: 
 
- Visual Identity 
- Branding 
- Social Media Design 
- Digital Experience 
### IEEE CUSB 
 
Head of Multimedia Committee. 
 
Responsibilities: 
 
- Graphic Design 
- Multimedia 
- Student Activities 
Experience should be presented as elegant visual cards. 
 
--- 
 
## Selected Work 
 
This is one of the most important sections. 
 
Purpose: 
 
Show design work. 
 
Not project cards. 
 
Layout: 
 
Responsive Masonry Gallery. 
 
Desktop: 2 columns. 
 
Mobile: 1 column. 
 
Clicking an item opens a premium modal containing: 
 
- Large preview - Project information - Available links 
- Optional credits 
--- 
 
## Skills Split into: 
 
### Design Skills 
 
Examples: 
 
- Brand Identity - Typography - Visual Systems - Art Direction - Social Media Design 
### Tools 
 
Display tool logos instead of text. 
 
Examples: 
 
- Photoshop - Illustrator - Premiere Pro - Canva - Figma - Next.js 
Data should come from content files. 
 
--- 
 
## Contact Purpose: 
 
Convert visitors into conversations. 
 
CTA: 
 
Let's create something meaningful together. 
 
Only display contact methods that are actually available. 
 
--- 
 
# 8. Design Direction 
 
Overall feeling: 
 
- Premium - Editorial 
- Clean - Confident 
- Minimal 
Visual quality is always more important than adding extra sections. 
 
--- 
 
# 9. Color Direction 
 
Primary mode: 
 
Light Mode 
 
Palette: 
 
- Warm White 
- Cream - Black - Neutral Gray 
- Gold Accents 
Dark Mode: 
 
The project architecture should support Dark Mode from the beginning, but the initial public release should prioritize the Light theme. 
 
Gold should mainly be decorative. 
 
Dark Gold may be used for readable gold-colored text. 
 
--- 
 
# 10. Typography 
 
Primary: 
 
Instrument Serif 
 
Secondary: 
 
Manrope 
 
Optional: 
 
Geist Mono 
 
Use Geist Mono only when it adds meaning (metadata, years, labels, technical information), not as a decorative font. 
 
--- 
 
# 11. Motion Direction 
 
Motion should feel: 
 
- Elegant - Premium - Smooth - Purposeful 
Default animation library: 
 
Framer Motion. 
 
Use GSAP only when a complex interaction genuinely requires it. 
 
Avoid unnecessary animation. 
 
Every animation should improve the experience. 
 
--- 
 
# 12. Logo 
 
Current logo: 
 
A professional typographic "AS" monogram. 
 
A custom logo may replace it in the future. 
 
--- 
 
# 13. Loading Experience 
 
The first visit may include a short premium loading animation using the AS monogram. 
 
Guidelines: 
 
- First visit only. - Approximately 1–1.5 seconds. 
- Lightweight. 
- Smooth. 
- Never become annoying. 
Subsequent visits should skip the loading screen. 
 
--- 
 
# 14. Social Links 
 
There are two different groups of links. 
 
## Personal Contact 
 
Examples: 
 
- Email 
- WhatsApp 
- Discord 
- LinkedIn 
## Project Links 
 
Examples: 
 
- Behance 
- Instagram - Facebook - TikTok - YouTube - Website 
Only render links that actually exist. 
 
--- 
 
# 15. Technical Direction 
 
Framework: - Next.js Deployment: - Vercel Current deployment: abdallahshahbour.vercel.app 
 
A custom domain may be added later. 
 
Architecture principles: 
 
- Server Components by default. - Client Components only when necessary. 
--- 
 
# 16. Development Rules 
 
Every phase must follow: 
 
Analyze 
 
↓ 
 
Plan 
 
↓ 
 
Wait for approval 
 
↓ 
 
Implement 
 
↓ 
 
Review Report 
 
↓ 
 
Wait for approval again 
 
Never skip a phase. 
 
Never implement features that are not documented or approved. 
 
When uncertain, ask instead of assuming. 
 
This document takes priority over assumptions. 
 
--- 
 
# 17. Current Project Status 
 
Current Status: 
 
Phase 0 completed. 
 
The project documentation is now considered complete. 
 
The next phase is: 
 
Phase 1 — Foundation. 