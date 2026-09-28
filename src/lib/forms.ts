// Endpoint for the Contact and Quote forms — our own self-hosted service
// (forms-service/, see forms-service/README.md), replacing Formspree.
// The site is a static Next.js export (output: "export", no server of its
// own), so the forms must POST to an external origin; this one is on the
// owner's Hetzner box behind aerostator.com, not a third party.
export const FORMS_ENDPOINT = 'https://aerostator.com/forms/submit';
