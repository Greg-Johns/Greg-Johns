---
name: Greg Johns
description: A bookish creative-lab notebook in Spectral serif, warm gold on charcoal or paper.
colors:
  gold: "#bc9531"
  gold-deep: "#96741D"
  gold-mist: "#E0D5D5"
  gold-umber: "#514C48"
  charcoal: "#282828"
  paper: "#F4F4F4"
  ink-dark-mode-text: "#cdcdcd"
  ink-dark-mode-heading: "#EAE9E9"
  ink-light-mode-text: "#27201a"
  ink-light-mode-heading: "#444444"
  rule-grey: "#999999"
  terminal-green: "#05d805"
typography:
  display:
    fontFamily: "Spectral, serif"
    fontSize: "80px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.04em"
  headline:
    fontFamily: "Spectral, serif"
    fontSize: "32px"
    fontWeight: 400
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Spectral, serif"
    fontSize: "1.17em"
    fontWeight: 400
    letterSpacing: "1.2px"
  body:
    fontFamily: "Spectral, serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.8px"
  label:
    fontFamily: "Spectral, serif"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "1px"
rounded:
  sm: "4px"
  md: "6px"
  full: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "32px"
components:
  nav-link:
    textColor: "{colors.rule-grey}"
    padding: "10px"
  nav-link-active:
    textColor: "{colors.ink-dark-mode-text}"
  nav-link-hover:
    textColor: "{colors.gold}"
  blockquote:
    backgroundColor: "{colors.gold-umber}"
    textColor: "{colors.ink-dark-mode-text}"
    rounded: "0 4px 4px 0"
    padding: "14px"
  code-inline:
    backgroundColor: "#222222"
    textColor: "{colors.terminal-green}"
    rounded: "{rounded.sm}"
    padding: "4px 8px"
  home-link:
    backgroundColor: "{colors.gold-umber}"
    rounded: "{rounded.full}"
    size: "3.4rem"
---

# Design System: Greg Johns

## Overview

**Creative North Star: "The Lab Notebook"**

A single narrow column of serif text on a flat field, annotated by hand: dashed rules under titles, tildes flanking headings, wavy gold underlines on links, small italic captions. It reads like a bound notebook where essays and experiments share the same page. The interface stays out of the way; interactive pieces and prose carry the weight.

The mood is refined and bookish, with warmth from a single gold accent. Dark charcoal is the default; a light paper theme is available through a toggle. Density is low and measure is narrow.

**Key Characteristics:**
- One serif family (Spectral) for everything; hierarchy comes from size, tracking and rules, not weight.
- One gold accent, used for hover, rules and small markers.
- Flat surfaces, dashed and hairline dividers, no elevation system.
- Centered 40em reading column with a full-bleed escape for sketches and splash areas.

## Colors

Warm gold on neutral charcoal or paper, with two ink ramps for the two themes.

### Primary
- **Notebook Gold** (#bc9531): hover states, h3 dashed rules, figure borders, active-nav underline, the light-theme toggle.
- **Deep Gold** (#96741D): link hover underline, list links, drop-cap first letter; the readable gold on light grounds.

### Neutral
- **Charcoal Page** (#282828): dark-theme background.
- **Paper** (#F4F4F4): light-theme background.
- **Umber Wash** (#514C48): dark-theme secondary surface (blockquotes, home link).
- **Rose Mist** (#E0D5D5): light-theme secondary surface.
- **Dim Ink** (#cdcdcd) / **Bright Ink** (#EAE9E9): dark-theme body and heading text.
- **Walnut Ink** (#27201a) / **Graphite** (#444444): light-theme body and heading text.
- **Pencil Grey** (#999999): inactive nav, nav and footer hairlines, dates, small print.
- **Terminal Green** (#05d805): inline code only, on #222.

### Named Rules
**The One Gold Rule.** Gold is the only accent. It marks interaction and annotation, never fills large areas.
**The Two Themes Rule.** Color goes through the `--color-*` theme variables on `body[data-theme]`; avoid new hard-coded hexes for text or backgrounds.

## Typography

**Display / Body Font:** Spectral (regular 400, with italic), serif fallback

**Character:** A literary, slightly scholarly serif used at small sizes with generous tracking. It stays at regular weight throughout.

### Hierarchy
- **Display** (400, 80px, 1, 0.04em tracking; 12vw on mobile): the centered site header.
- **Headline** (400, 32px, tracking -0.01em; 24px on mobile): sticky section titles, wrapped in "~ … ~".
- **Title** (400, ~1.17em, 1.2px tracking): h3 post titles with a dashed gold underline.
- **Body** (400, 14px, 0.8px tracking, 12px paragraph gap): prose in the 40em column.
- **Label** (11px, italic for captions): dates, figure captions, footer notes.

### Named Rules
**The Tilde Rule.** h2 and h4 headings are wrapped in "~ ~" via pseudo-elements. Don't add the glyphs in markup.
**The No Bold Rule.** Headings stay regular weight; emphasis comes from color, size or italic. Only nav and inline links use bolder weights.

## Layout

A CSS grid with a centered `main` column up to 40em, at least 1em gutters, and named `full` lines so elements can span the viewport. Sections have 1.2em side margins (0.6em at ≤600px). Images in paragraphs bleed to 110% width with a -5% offset. At ≤600px the gold avatar disappears, the header scales to 12vw, and floated figures stack in a centered column.

## Elevation & Depth

Flat. Depth is expressed with dashed and hairline rules, tonal secondary surfaces and a sticky heading band. The only shadow is a small offset one on illustrative images.

### Named Rules
**The Flat Page Rule.** No cards with drop shadows. Separate things with rules and spacing.

## Shapes

Mostly square and typographic. Small radii (4–6px) on code and artboard images, a 4px gold left bar on blockquotes, and circles for the avatar and home link. Dashed borders mean "list or index item"; solid hairlines mean structure.

## Components

### Navigation
Right-aligned row of bold, letter-spaced links in pencil grey with a hairline below. Hover turns gold; the active link takes body-ink color and a 2px gold underline.

### Index entries (post list)
A linked section with an h3 title over a dashed grey rule and the date right-aligned in 11px grey. On hover the title and date turn gold and the rule turns solid deep gold.

### Links in prose
Bold with a gold wavy underline; hover switches to a solid deep-gold underline.

### Blockquotes
Umber or rose wash background, 4px gold left bar, small right-aligned italic attribution prefixed with "~".

### Home link / avatar
A circular gold or umber disc that flips to gold on hover; the sun icon rotates and fades on load.

### Figures
Floated, 1px gold border, 8px padding, italic 11px grey caption.

## Do's and Don'ts

### Do:
- **Do** keep text in the 40em column and let sketches or splash content span `full`.
- **Do** use theme variables for text and background colors.
- **Do** use dashed gold or grey rules for list and heading dividers.
- **Do** keep gold small and meaningful.

### Don't:
- **Don't** introduce a second typeface or bold display headings.
- **Don't** add drop-shadowed cards, gradients or large gold fills.
- **Don't** hard-code light-only or dark-only colors in new components.
- **Don't** add new mobile breakpoints without a reason; the system uses a single 600px break.
