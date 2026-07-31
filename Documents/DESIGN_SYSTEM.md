# # DESIGN_SYSTEM.md 
 
# # Abdallah Shahbour Portfolio 
 
# ## Design System Documentation 
 
--- 
 
# # Purpose 
 
This document defines the complete design system for the portfolio website. 
 
Its goals are: 
 
- Maintain consistency across the project. 
- Make future customization simple. 
- Prevent hardcoded values. 
- Keep the project scalable and maintainable. 
Every design-related decision should originate from this document. 
 
--- 
 
# General Principles 
 
The project should be designed as if it were a real product that will continue evolving for years. 
 
Nothing should be tightly coupled. 
 
Everything should be configurable. 
 
Everything should be reusable. 
 
Everything should have a single source of truth. 
 
--- 
 
# Design Philosophy 
 
The website should feel: 
 
- Premium 
- Creative 
- Editorial 
- Modern 
- Interactive 
- Elegant 
The design itself should demonstrate design ability. 
 
Avoid: 
 
- Template feeling 
- Corporate appearance 
- Resume websites 
- Generic portfolio layouts 
--- 
 
# Theme Architecture 
 
All visual values must be separated from components. 
 
Never hardcode: 
 
- Colors 
- Fonts 
- Animation durations 
- Border radius 
- Shadows - Breakpoints 
- Spacing 
Instead, store them inside dedicated theme files. 
 
Example: 
 
theme/ 
 
├── colors.ts ├── fonts.ts ├── motion.ts ├── spacing.ts ├── radius.ts ├── shadows.ts ├── breakpoints.ts 
 
Components must consume those values instead of defining them. 
 
--- 
 
# Color System 
 
The website uses a Luxury White & Gold design language. 
 
Default palette: 
 
Background #FAF9F6 Surface #FFFFFF Primary Text #111111 Secondary Text #666666 Primary Gold #C9A227 Light Gold #E5C76B Dark Gold #8C6A12 Border #E8E2D6 
 
Important: 
 
These values represent the default design system. 
 
They are NOT fixed forever. 
 
Changing the color palette must only require editing one file. 
 
No component should contain hardcoded colors. 
 
--- 
 
# Color Usage 
 
Primary Gold 
 
Use for: 
 
- Accent 
- Decorative details 
- Icons 
- Highlights 
- Small visual emphasis 
Do NOT use for body text. 
 
Dark Gold 
 
Use for: 
 
- Gold-colored text 
- Interactive elements 
- Important UI accents 
Light Gold 
 
Use only for: 
 
- Gradients 
- Glow - Decorative effects 
Background 
 
Used for: 
 
Entire website background. 
 
Surface 
 
Cards 
 
Modal 
 
Floating elements 
 
Primary Text 
 
Headlines 
 
Body text 
 
Secondary Text Descriptions 
 
Supporting information 
 
--- 
 
# Typography System 
 
Typography must be configurable. 
 
Store all fonts in one dedicated file. Example: 
 
theme/fonts.ts 
 
No component should directly import fonts. 
 
Components should consume typography tokens. 
 
Preferred direction: 
 
Display Font 
 
Instrument Serif 
 
Body Font 
 
Manrope 
 
Mono Font 
 
Geist Mono 
 
Changing any font should only require editing one file. 
 
--- 
 
# # Typography Rules 
 
Display Font 
 
Use for: 
 
- Hero title - Section titles - Large editorial text 
Body Font 
 
Use for: 
 
- Paragraphs - Buttons - Navigation - Descriptions 
Mono Font Optional. Only when needed. --# Motion System 
 
Motion is part of the identity. 
 
The website should always feel alive. 
 
However: 
 
Motion should never become distracting. Motion should never reduce readability. 
 
Motion should always support the experience. Store every animation token in: 
 
theme/motion.ts 
 
Nothing should be hardcoded. 
 
--- 
 
# Motion Categories 
 
Page Load 
 
Section Reveal 
 
Scroll Animation 
 
Hover Animation 
 
Mouse Interaction 
 
Background Animation 
 
Modal Animation 
 
Navigation Animation 
 
Each category should have reusable variants. 
 
--- 
 
# Background Motion 
 
The background should not feel static. 
 
Possible elements: 
 
- Animated gradients 
- Floating abstract shapes 
- Soft particles 
- Noise texture 
- Mouse interaction 
- Light movement 
- Soft depth illusion 
These are suggestions, not requirements. 
 
The designer is free to implement a stronger solution if appropriate. 
 
--- 
 
# # Animation Timing 
 
Use consistent timing. 
 
Do not randomly assign durations. 
 
Example categories: 
 
Fast 
 
Normal 
 
Slow 
 
Very Slow 
 
All durations should be centralized. 
 
--- 
 
# Border Radius 
 
Store all radius values in: 
 
theme/radius.ts 
 
Never define radius inside components. 
 
--- 
 
# Shadows 
 
Store all shadow definitions in: 
 
theme/shadows.ts 
 
Avoid random shadow values. 
 
--- 
 
# Spacing System 
 
Store spacing values in: 
 
theme/spacing.ts 
 
Use spacing tokens only. 
 
Never use arbitrary spacing unless necessary. 
 
--- 
 
# Breakpoints 
 
All responsive values should be centralized. 
 
Store them inside: 
 
theme/breakpoints.ts 
 
--- 
 
# Icons 
 
Use official icons whenever possible. 
 
Recommended: 
 
- Lucide - Simple Icons 
Platform logos should always be official. 
 
--- 
 
# Content Architecture 
 
All editable content should be separated from components. 
 
Recommended structure: 
 
content/ 
 
navigation.ts 
 
skills.ts 
 
tools.ts 
 
gallery.ts 
 
experience.ts 
 
socials.ts 
 
site.ts 
 
caseStudies.ts 
 
--- 
 
# Editable Content 
 
The following should always be editable without modifying UI components: Navigation 
 
Social links 
 
Skills 
 
Tools 
 
Experience 
 
Gallery 
 
Case studies 
 
SEO metadata 
 
Website information 
 
Contact information 
 
--- 
 
# Assets 
 
Organize assets clearly. 
 
Recommended: 
 
assets/ images/ logos/ icons/ illustrations/ videos/ --- 
 
# Component Rules 
 
Components should be reusable. 
 
Components should never contain business data. 
 
Components should receive data through props. 
 
Avoid duplicated components. 
 
--- 
 
# Reference Images 
 
Reference images are inspiration only. 
 
They are NOT templates. 
 
They are NOT layouts to reproduce. 
 
The designer may: 
 
- Use ideas 
- Ignore ideas 
- Improve ideas 
- Replace ideas 
The final result should always prioritize originality. 
 
Creating a stronger solution than the references is encouraged. 
 
--- 
 
# Creativity 
 
The references define quality expectations. 
 
They do not define creative limits. 
 
If a significantly better solution exists, it should be preferred. 
 
--- 
 
# # Scalability 
 
The architecture should support future expansion. 
 
Adding: 
 
- New projects 
- New case studies 
- New skills 
- New sections 
- New pages 
should require minimal code changes. 
 
--- 
 
# # Maintainability 
 
The project should be understandable months or years later. 
 
Someone opening the repository for the first time should immediately understand: 
 
Where colors live. 
 
Where typography lives. 
 
Where content lives. 
 
Where animations live. 
 
Where assets live. 
 
Where components live. 
 
--- 
 
# Golden Rule 
 
Never hardcode values that are expected to change. 
 
Everything likely to change in the future should exist in one clearly named file. 
 
The project should be easy to: 
 
- Customize 
- Extend 
- Maintain 
- Rebrand 
without rewriting the UI.