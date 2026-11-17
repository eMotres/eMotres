# Proposal: motor data for the site from the application (aerostator.com)

Status: proposal for review. Nothing is wired. The site stays a static export
(`output: "export"` in `next.config.js`), so all fetching happens at build time.

## 1. Which `Product` fields are facts, which are site content

Source file: `src/lib/products.ts` (interface `Product`). ZH overlay: `src/lib/products.zh.ts`.

From the application (facts, one source of truth):
- `designation` (standard designation), `sku` (die + stack, e.g. `CIANO14 40_20`), `slug` (derived from the sku).
- Poles / slots, stator OD and stack length, steel, magnets, slot insulation, cooling, protection:
  today these are free-text rows inside `specs`.
- Mass, KV, Kt, rated and peak points (`performanceSpecs`, plus the `power` summary string).
- Availability text (`status`) and price text (`price`), only where the owner publishes them in the application.

Site-only content (stays in the repo):
- Marketing text: `title`, `description`, `applications`, `keyClaim`, `priceBadge`, `priceNote`, `priceComingSoon`.
- `imageUrl`, `category`, `technology` (shop grouping), `inStock` / `stripePaymentLink` (see `src/lib/store.ts`).
- `dynoTest*`, `comparison` (bench campaigns and competitor curves), the posts in `src/app/news/page.tsx`,
  and the hand-written home-page list `cianoMotors` in `src/app/page.tsx` (and `src/app/zh/page.tsx`).

## 2. Build-time fetch with a committed snapshot

- New script `scripts/sync-motors.mjs` (`npm run sync:motors`, also run as `prebuild`): fetches the public endpoint
  of the application (path and schema to be agreed with the application side), validates the shape, and writes
  `src/data/motors.snapshot.json`. The snapshot is committed, so a build never needs the network.
- Build rule: if the fetch succeeds, the snapshot is rewritten and used; if it fails (timeout, non-200, invalid
  schema), the build logs a warning and uses the committed snapshot. A flag `MOTORS_STRICT=1` makes a failed fetch
  fail the build, for release builds where a stale price would hurt.
- In `src/lib/products.ts`: keep the hand-written array, renamed `siteProducts` (content only, keyed by `slug`), and
  build `products` by merging: for each snapshot motor, `{ ...siteProducts[slug], ...factsFromSnapshot }`.
  Facts win for fact fields; site text wins for marketing fields. `getProductBySlug` and all consumers
  (`generateStaticParams` in `src/app/shop/[slug]/page.tsx`, `src/app/sitemap.ts`, the shop lists) stay unchanged.
- A motor in the snapshot without a `siteProducts` entry gets a generated minimal page (title from the designation,
  description from the facts, placeholder image). A `siteProducts` entry without a snapshot motor stays as it is
  (the legacy "Classic" products are not in the application).
- Only motors flagged as published in the application are exported; the endpoint carries no unpublished or
  customer data.

## 3. EN / ZH texts

- EN is the source. Facts are language-neutral (numbers, designation, materials as codes), so they come from the
  snapshot once and feed both locales.
- Fact labels and units stay translated in the repo. Today the spec rows are hand-written per locale in
  `productsZh[slug].specs`; with generated rows, a label map (`specLabelZh`) replaces those arrays.
- Marketing text keeps the existing rule: every change in `products.ts` has a mirror in `productsZh[slug]`.
  `getProductZhBySlug` already merges the ZH overlay over the EN product and works unchanged.
- `priceZh` becomes derived from the EUR price by a helper (7.7 CNY/EUR, rounded up to 100) instead of typed by hand.

## 4. What breaks if the endpoint is down

- At build time: nothing, the committed snapshot is used (stale by at most the time since the last successful
  sync); the warning shows in the build log. Only `MOTORS_STRICT=1` builds fail.
- At run time: nothing, the pages are static files on Firebase hosting and never call the endpoint.
- Risks: a stale price or availability on the site (mitigation: the snapshot carries `fetchedAt`, printed in the
  build log; a scheduled or webhook-triggered rebuild); a schema change on the application side (mitigation: a
  `schema` version field, the validator rejects unknown versions and falls back to the snapshot).

## 5. Open points for the owner

- Which motors are published (a flag in the application) and who may change the price and availability text.
- The mapping of `ciano-150-30` (currently titled CIANO42 150_30) to its application configuration.
- Image source: still manual in the repo, or a URL in the snapshot.
