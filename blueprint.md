
# Project Blueprint

## Overview

This is a Next.js application integrated with Firebase.

## Implemented Features

*   **Framework:** Next.js
*   **Styling:** Tailwind CSS
*   **Components:**
    *   Navbar
    *   Footer
    *   PropulsionMatrix
    *   TechCard

## Current Task: Fix "Error reaching server"

The application is currently showing an "Error reaching server" message. The `firebase-debug.log` indicates that the `WORKSPACE_SLUG` environment variable is not set, which means the Firebase project is not correctly configured.

### Plan

1.  **Initialize Firebase:** Configure Firebase Hosting for the project.
2.  **Configure MCP:** Add the Firebase MCP server configuration.
3.  **Build Project:** Build the Next.js application.
4.  **Deploy:** Deploy the application to Firebase Hosting.
