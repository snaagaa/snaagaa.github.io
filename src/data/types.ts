/**
 * The shape of everything in profile.ts.
 *
 * You rarely need to edit this file. It lets your editor autocomplete fields
 * and lets `npm run check` catch a typo before it reaches the page.
 */

/** "2026", "2026-07" or "2026-07-28". */
export type ISODate = string;

export interface SectionMeta {
  /** The #anchor, also used by the nav. */
  id: string;
  /** The section heading, also used in the nav. */
  title: string;
  /** Optional small line under the heading. */
  note?: string;
}

export interface Contact {
  email: string;
  /** Full profile address, e.g. "https://www.linkedin.com/in/your-name". */
  linkedin: string;
}

export interface Highlight {
  /** Short and prominent, e.g. "IIT Madras". */
  title: string;
  /** One line under it, e.g. "B.Tech, Electronics & Communication". */
  detail: string;
}

export interface Fact {
  label: string;
  /** Use an array for several lines. */
  value: string | string[];
}

export interface Role {
  title: string;
  /** Leave both dates out when they are not known, or are the same as the company's. */
  start?: ISODate;
  /** Leave out for a role that is still current. */
  end?: ISODate;
  points?: string[];
}

export interface Stat {
  /** Short and prominent, e.g. "+33%". */
  value: string;
  /** What it measures, e.g. "revenue, 2015-16 to 2018-19". */
  label: string;
}

export interface Chapter {
  /** The #anchor (letters, numbers and hyphens). */
  id: string;
  organisation: string;
  sector?: string;
  location?: string;
  start: ISODate;
  /** Leave out while it is ongoing. */
  end?: ISODate;
  intro?: string;
  /** Optional key figures, shown as a row under the intro. Three fit best. */
  stats?: Stat[];
  /** Leave empty when the intro already says it all. */
  roles: Role[];
  boards?: string[];
}

export interface Education {
  id: string;
  institution: string;
  qualification: string;
  start: ISODate;
  end: ISODate;
  honours: string[];
}

export interface Testimonial {
  author: string;
  /** Their own headline, e.g. their current job. */
  title: string;
  relationship: string;
  date: ISODate;
  text: string;
}
