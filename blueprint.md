# eMotres.com Next.js Migration Blueprint

## Overview

This document outlines the plan for migrating the existing eMotres.com to a new Next.js application. The new site will adopt the "Industrial Propulsion" design aesthetic from the OpenMotor project, focusing on a clean, modern, and high-performance user experience.

## Style, Design, and Features

### Visual Design

*   **Typography:** Bold, industrial sans-serif font for headers and primary text.
*   **Color Palette:**
    *   Primary Background: Clean white (`#FFFFFF`).
    *   Text: Black (`#000000`).
    *   Accent: Corporate orange for buttons, links, and highlights.
*   **Layout:**
    *   Clean and spacious with defined container widths.
    *   Mobile-responsive design.

### Implemented Features

*   **SEO-Optimized Metadata:** The application will have optimized title tags, meta descriptions, and headers to preserve and improve search engine rankings.
*   **Component-Based Architecture:** The UI will be built with reusable React components in the `src/components` directory.
*   **"Industrial Propulsion" UI:** The landing page will feature:
    *   A navigation bar.
    *   An 8-card technology grid with commercial-grade descriptions.
    *   A "Propulsion Matrix" component showcasing high-power motor models (200kW to 1MW).
    *   A footer.

## Current Plan

1.  **Initialize Project:** Set up the initial Next.js project structure.
2.  **Apply "Industrial" Styling:** Update `src/app/globals.css` with the new design system.
3.  **Update SEO Metadata:** Modify `src/app/layout.tsx` with the correct title and description.
4.  **Create Component Structure:** Create the necessary component files (`Navbar.tsx`, `PropulsionMatrix.tsx`, `TechCard.tsx`, `Footer.tsx`) in the `src/components` directory.
5.  **Build the Landing Page:** Assemble the components in `src/app/page.tsx`.
6.  **Populate Components:** Add content and functionality to each of the created components.
7.  **Review and Refine:** Ensure the final result is a high-performance, SEO-safe, and visually appealing landing page.
