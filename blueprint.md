# Project Blueprint

## Overview

This is a Next.js application integrated with Firebase, featuring a modern, high-performance design for eMotres.

## Implemented Features

*   **Framework:** Next.js (App Router)
*   **Styling:** Tailwind CSS (v4) with Custom Design System (CSS Variables)
*   **Design System:**
    *   Dark Mode Support
    *   Responsive Typography
    *   Brand Colors (`--color-brand`)
*   **Components:**
    *   `src/components/Navbar.tsx`: Navigation
    *   `src/components/Footer.tsx`: Site footer
    *   `src/components/FeatureSection.tsx`: Reusable content section [NEW]
    *   `src/components/CategoryCard.tsx`: Application area cards [NEW]
    *   `src/components/QuoteForm.tsx`: Server-Action powered contact form [UPDATED]
*   **Blog System:**
    *   Data Logic (`src/lib/blog.ts`)
    *   Category Filtering
*   **Server Actions:**
    *   `src/app/actions.ts`: Handles quote form submissions (`submitQuote`)
*   **SEO & UX:**
    *   `src/app/layout.tsx`: Comprehensive Metadata & OpenGraph
    *   `src/app/loading.tsx`: Global loading state

## Functional Capabilities

1.  **Quote Request:** Users can submit a quote request via the home page form. Data is validated on the server using Zod.
2.  **Blog Filtering:** Users can filter blog posts by category.
3.  **Responsive Design:** Fully adaptive layout for mobile and desktop.
