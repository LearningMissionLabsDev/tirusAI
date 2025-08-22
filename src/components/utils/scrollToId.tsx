export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const TARGETS_BY_LABEL: Record<string, string> = {
  "Possibility": "smart",
  "Solutions": "feature",
  "About Us": "about",
  "Contact Us": "contact",
};

export const fallbackToId = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");