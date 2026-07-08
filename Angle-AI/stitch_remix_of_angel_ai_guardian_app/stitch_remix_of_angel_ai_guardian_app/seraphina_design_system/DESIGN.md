---
name: Seraphina Design System
colors:
  surface: '#fff8f7'
  surface-dim: '#e9d5d8'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f1'
  surface-container: '#fde9ec'
  surface-container-high: '#f7e3e6'
  surface-container-highest: '#f1dee0'
  on-surface: '#23191b'
  on-surface-variant: '#554245'
  inverse-surface: '#392d30'
  inverse-on-surface: '#ffecee'
  outline: '#887175'
  outline-variant: '#dbc0c4'
  surface-tint: '#a33759'
  primary: '#a33759'
  on-primary: '#ffffff'
  primary-container: '#f57799'
  on-primary-container: '#6e0a32'
  inverse-primary: '#ffb1c2'
  secondary: '#94483f'
  on-secondary: '#ffffff'
  secondary-container: '#ff9f93'
  on-secondary-container: '#79332c'
  tertiary: '#805439'
  on-tertiary: '#ffffff'
  tertiary-container: '#c99475'
  on-tertiary-container: '#522d15'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e0'
  primary-fixed-dim: '#ffb1c2'
  on-primary-fixed: '#3f0018'
  on-primary-fixed-variant: '#841e41'
  secondary-fixed: '#ffdad5'
  secondary-fixed-dim: '#ffb4aa'
  on-secondary-fixed: '#3d0604'
  on-secondary-fixed-variant: '#76312a'
  tertiary-fixed: '#ffdbc8'
  tertiary-fixed-dim: '#f3ba99'
  on-tertiary-fixed: '#311301'
  on-tertiary-fixed-variant: '#653d24'
  background: '#fff8f7'
  on-background: '#23191b'
  surface-variant: '#f1dee0'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  margin-mobile: 20px
  gutter-mobile: 16px
---

## Brand & Style
The design system is anchored in the persona of a "Guardian Intelligence"—an entity that is simultaneously highly sophisticated and deeply human. It targets women seeking a safety companion that feels like a premium lifestyle tool rather than a utilitarian emergency app.

The style is **Modern Minimalist with Tonal Depth**, drawing inspiration from the structural clarity of Stripe and the soft, organic approachability of Apple’s ecosystem. It utilizes high-quality whitespace and a "soft-tech" aesthetic to ensure the user feels calm and empowered during high-stress interactions. The UI avoids clinical coldness by using warm background tones and tactile, card-based surfaces.

## Colors
The palette is designed to be "Warm-Neutral," moving away from the harsh whites of traditional apps to a soothing cream base (#FFF7CD). 

- **Primary Accent (Rose Pink):** Reserved for primary actions, critical status updates, and key brand moments.
- **Secondary Accents (Coral & Peach):** Used for decorative elements, secondary buttons, and progress indicators to create a soft hierarchy.
- **Functional Colors:** Success, Warning, and Danger colors are desaturated to maintain the "soft-tech" feel while remaining clearly legible against the cream and white backgrounds.
- **Typography:** Deep charcoal (#2D2D2D) is used instead of pure black to maintain softness and improve readability on the warm background.

## Typography
This design system utilizes **Plus Jakarta Sans** for its friendly, open apertures and modern geometric structure, making it highly legible yet distinct. 

- **Weight Strategy:** Headings utilize Bold (700) to convey authority and safety. Body text uses Medium (500) rather than Regular (400) to ensure high contrast and a "premium" ink-heavy feel on mobile displays.
- **Scalability:** For mobile devices, `headline-lg` scales down to 28px to prevent awkward line breaks while maintaining visual impact.
- **Labels:** **Inter** is used for utility text (labels, captions, buttons) to provide a clean, systematic contrast to the more expressive headers.

## Layout & Spacing
The layout follows a **Fluid Mobile-First** philosophy based on an 8dp grid system. 

- **Safe Zones:** All layouts must implement `SafeArea` to respect notches and home indicators. 
- **Content Padding:** A standard horizontal margin of 20px is applied to all screens.
- **Grid:** For tablet reflows, use a 12-column grid with 24px gutters. On mobile, elements typically span the full 20px-margin width or sit in a 2-column "card" layout.
- **Touch Targets:** Minimum interactive area is 48x48dp to ensure ease of use during movement or emergencies.

## Elevation & Depth
Elevation is expressed through **Tonal Layering and Soft Ambient Shadows**, rather than heavy outlines.

- **Level 0 (Base):** The Cream (#FFF7CD) background.
- **Level 1 (Cards):** Pure White (#FFFFFF) surfaces. These use a very soft, diffused shadow: `0px 4px 20px rgba(0, 0, 0, 0.04)`.
- **Level 2 (Interactive):** Floating elements like the Navigation Bar and Primary Action Buttons. These use a slightly more pronounced shadow to indicate "float": `0px 8px 30px rgba(245, 119, 153, 0.15)`.
- **The Glass Effect:** Occasional use of backdrop blurs (20px) on top-app-bars or navigation overlays to maintain context of the underlying content.

## Shapes
The design system employs a **Generous Roundedness** (20-24px) to evoke a sense of safety, comfort, and organic flow.

- **Small Components (Chips/Tags):** 8px (rounded-sm).
- **Standard Cards/Containers:** 20px (rounded-lg).
- **Large Action Containers:** 24px (rounded-xl).
- **Buttons:** Fully pill-shaped for high-priority actions; 16px for secondary.

## Components
- **Floating Navigation Bar:** A pill-shaped container anchored at the bottom with 24px side margins. Uses a White surface with high blur and 4 active/inactive icons (Material Symbols Rounded).
- **Primary Buttons:** Rose Pink (#F57799) background with White text. Height: 56px. Pill-shaped.
- **Floating Cards:** Pure White containers with 20px corner radius. Used for dashboard metrics, safety alerts, and AI chat bubbles.
- **Input Fields:** Filled style with the Soft Peach (#FDC3A1) background at 30% opacity. 16px corner radius. Labels sit above the field in Inter SemiBold.
- **Chips:** Used for quick safety tags or filters. Soft Coral (#FB9B8F) at 15% opacity with Rose Pink text.
- **SOS Button:** A large, circular, pulsing element utilizing a subtle gradient from Rose Pink to Soft Coral.
- **Icons:** Material Symbols Rounded, using "Optical Size: 24, Weight: 400, Grade: 0, Optical Size: 20" for a consistent, friendly stroke weight.