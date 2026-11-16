/**
 * Date helpers. Content dates are partial ISO strings ("2026", "2026-07",
 * "2026-07-28"), and every label is formatted at the precision given.
 */
import type { ISODate } from '../data/types';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface DateParts {
  y: number;
  m?: number;
  d?: number;
}

function parts(date: ISODate): DateParts {
  const match = /^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/.exec(date);
  if (!match) throw new Error(`Invalid date "${date}". Use "YYYY", "YYYY-MM" or "YYYY-MM-DD".`);
  const [, y, m, d] = match;
  return { y: Number(y), m: m ? Number(m) : undefined, d: d ? Number(d) : undefined };
}

/** "2026" · "Jul 2026" · "28 Jul 2026". */
export function formatDate(date: ISODate): string {
  const { y, m, d } = parts(date);
  const bits: (string | number)[] = [];
  if (d) bits.push(d);
  if (m) bits.push(MONTHS[m - 1]);
  bits.push(y);
  return bits.join(' ');
}

/** "Apr 2019 – Oct 2024" · "Oct 2024 – present" · "2002 – 2004". */
export function formatRange(start?: ISODate, end?: ISODate): string {
  if (!start) return '';
  return `${formatDate(start)} – ${end ? formatDate(end) : 'present'}`;
}

/** Year span for headings: "2019–2024" · "2024–present". */
export function yearSpan(start: ISODate, end?: ISODate): string {
  const a = parts(start).y;
  if (!end) return `${a}–present`;
  const b = parts(end).y;
  return a === b ? String(a) : `${a}–${b}`;
}
