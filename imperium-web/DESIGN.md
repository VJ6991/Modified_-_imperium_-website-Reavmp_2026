# DESIGN.md: Imperium wayfinding system

The site is drawn as a transit network. Customer channels are lines, Imperium is the interchange,
outcomes are stations. Every structural device on the page (coloured lines, station dots, the
interchange capsule) comes from that one grammar, and each use carries real information:
which capability serves a sector, which step comes next, which channel joins which desk.

## Colour

Light theme only. The audience reads it at an office desk in daylight. Strategy: Restrained, with
neutral ground and ink, colour used as line identity, not decoration.

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#ffffff` | Page ground |
| `mist` / `mist-2` | `#f1f3f5` / `#e6e9ed` | Alternate section bands, table heads |
| `rule` | `#d7dbe0` | Hairlines, input borders |
| `ink` / `ink-2` / `ink-3` | `#111418` / `#3a414b` / `#5b6370` | Headings / body / meta (meta is 6.1:1 on paper, 5.4:1 on mist) |
| `orange` | `#d65f28` | Brand mark, Customer Experience line. Graphic only, never small text |
| `orange-ink` | `#a8461a` | Orange text on paper (hover states, active nav) |
| `action` / `action-hover` | `#b9501f` / `#9c4119` | Primary button fill (white text ≥ 4.8:1) |
| `blue` | `#1d4f91` | Enterprise Communications line, Web chat channel |
| `teal` | `#0f7b6c` | AI & Automation line, WhatsApp channel |
| `plum`, `rose` | `#6a4c9c`, `#b3365d` | Hero channel lines only (Email, Social) |
| `night` / `night-2` / `night-rule` | `#0f1216` / `#1a1f26` / `#2c333d` | Proof section, closing CTA, footer |
| `on-night` / `on-night-2` | `#eef0f3` / `#a9b1bd` | Text on night |

Pillar colours are fixed meanings: never use orange, blue or teal for anything but its pillar or channel.

## Type

- **Overpass** (Highway Gothic lineage, signage) for everything: 800 for headings, 700 for UI labels,
  600 for emphasis, 400 for text. Self-hosted by `next/font`.
- **Overpass Mono** only for measurements: counts, times, years, stage numbers. Never as decoration.
- Scale (fluid): `display` 2.6→4.75rem, `h1` 2.2→3.6rem, `h2` 1.75→2.6rem, `h3` 1.2→1.4rem, `lede` 1.1→1.3rem, body 1.0625rem/1.6.
- Headings `text-wrap: balance`; body measure ≤ 66ch (`.measure`).

## Components

- **LineMark**: a 5px coloured line ending in a station dot. Legend marker for an outcome or pillar.
- **Station**: white dot with a 3px ring. Marks a stop in a sequence (delivery stages, story, case-study steps).
- **StationLine**: a pillar line with labelled stations, horizontal on desktop and vertical on phones or long lists.
- **NetworkMap**: the hero diagram, in two hand-built SVGs (horizontal ≥768px, vertical below). Dots travel the lines with SMIL; hidden under `prefers-reduced-motion`.
- **OutcomeRows**: ruled rows of LineMark, outcome headline and mechanism. The outcome-first pattern used site-wide.
- **Buttons**: `primary` (action fill), `secondary` (ink outline), `onNight`, `ghostNight`. 4px radius, min-height 44px.
- **Rows over cards**: lists are ruled rows (2px ink top rule, hairline separators). Bordered cards appear only for the product hub tiles and the featured case study.
- **AgentDesktop**: a coded rendition of the iConnect supervisor view, always captioned as sample data.

## Layout and rhythm

- Content width 82rem, gutters 20px on phones and 40px from 768px up.
- Sections are `py-20` / `md:py-28`, alternating paper and mist, with one night band per page (proof or closing CTA).
- Most section heads are left-aligned in an asymmetric two-column split (heading | lede or list).
- 4px corners. No drop shadows except the product UI rendition and the mega menu.

## Motion

One authored moment: conversations travelling the hero map. Elsewhere only 200ms colour and arrow
nudges on hover. All motion is off under reduced-motion.

## Imagery rules

No stock photography. Use real product UI, redrawn architecture diagrams, real team or office
photography (to be supplied) and client logos (greyscale at rest, colour on hover).
