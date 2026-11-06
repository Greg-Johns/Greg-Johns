# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Readers and community members interested in Ethereum, creative coding, generative art, and related experiments. They arrive to read an essay, explore an interactive piece, or browse sketches.

## Product Purpose

Greg Johns' personal website: a creative lab for writing and interactive/generative experiments. Success means visitors read the pieces, play with the visualizations, and come back for new work.

## Positioning

Essays are paired with the author's own working experiments (p5.js sketches, visualizations such as EIP-1559 and gas evolution, node gardens), so ideas are shown as running artifacts rather than only described.

## Operating Context

Next.js App Router site with MDX posts under `src/app/(posts)/`, an index of writing at home ("Wrote"), plus About, Stuff, and Sketches sections. Light/dark theme toggle. Hosted on Vercel at https://greg-johns.vercel.app/.

## Capabilities and Constraints

- Writing index with dated posts; each post is its own route.
- Interactive p5.js sketches via `@p5-wrapper/next`; galleries and lightbox.
- Live Etherscan data was removed; the gas machine is not live.
- Not yet decided: whether the home page should foreground experiments over writing.

## Evidence on Hand

Real posts and experiments in the repo (e.g. eip1559, daws, art_nft, stateofplay, nodegardens, web3, gardens, gas-evolution). No testimonials or client proof; do not fabricate any.

## Product Principles

- The work is the point: experiments and essays lead, the interface recedes.
- Show ideas as running artifacts, not just prose.
- Stay personal and unpolished-in-spirit rather than corporate.
- Keep pages fast and readable on any device.
