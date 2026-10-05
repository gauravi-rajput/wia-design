# WIA Design — Wealth Intelligence Accelerator (UI + Recommendation Engine prototype)

A standalone, **frontend-only** prototype of a polished advisor UI for the Wealth
Intelligence Accelerator, plus a deterministic, rule-based **MF Recommendation
Engine** that runs entirely in the browser.

This is a sibling project to `../wia` — it does not read or modify anything in
that repository, has no backend, and makes no network calls. All client data
is static mock data derived from `../wia/sample-data/sample data for
recommendation engine.xlsx` (client names, goals, contact details, and wealth
signals are fabricated for this prototype).

## Run it

```bash
npm install
npm run dev
```

Opens on `http://localhost:5174`.

## What's here

- **Dashboard** — book-level stats and a searchable/filterable client list.
- **Client → Wealth context** — profile, goals, current allocation vs. a
  risk- and horizon-adjusted target, pooled holdings, and wealth signals
  (concerns/preferences/commitments/opportunities).
- **Client → Recommendation** — the engine's output: goal funding assessment,
  target vs. current allocation, Hold/Add More/Exit decisions with rationale
  and evidence per holding, and new schemes to consider from the eligible
  fund universe.
- **Client → Advisor review** — accept/modify/reject each actionable
  recommendation (kept in the browser session only — no persistence layer).

## The Recommendation Engine

`src/lib/recommendationEngine.ts` is the whole engine — pure, deterministic
TypeScript functions, no LLM, no network. It mirrors the four-step flow from
the architecture brief:

1. **Assess goals & funding needs** — projects each goal's funded corpus
   using a blended CAGR for the client's target asset mix.
2. **Determine suitable categories & candidate schemes** — a risk-profile
   base allocation (Aggressive/Moderate/Conservative), adjusted for average
   goal horizon and age, then matched against the eligible fund universe
   (`src/data/fundUniverse.ts`).
3. **Compare proposed vs. current allocation** — pools every holding's SIP/
   lump-sum lots per scheme and diffs the book against the target mix.
4. **Generate actions & rationale** — Hold / Add More / Exit per existing
   holding, plus new-scheme suggestions for underweight sleeves, each with a
   human-readable, number-backed rationale.

Every number is traceable to a rule in that file — nothing here is model-
generated text. Advisor decisions in "Advisor review" are the explicit
accept/modify/reject step called for in the brief; the engine never executes
anything on its own.

## Data note

While preparing the mock dataset, one row in the source spreadsheet
(`sample data for recommendation engine.xlsx`, sheet `00034-37`) had a phone
number and a person's name concatenated into a scheme-name cell — likely a
data-entry error in that source file. That fragment was stripped out and is
not present anywhere in this project; worth a look at the source file if it
feeds anything else.
