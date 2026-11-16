/**
 * A tiny inline formatter for content strings:
 *
 *   **bold**   *italic*   [text](https://example.com)   [text](#section)
 *
 * Everything else is HTML-escaped, so stray characters can't break the page.
 */
const ESCAPES: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };

export function md(input: string): string {
  return input
    .replace(/[&<>"]/g, (char) => ESCAPES[char])
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_match, text: string, href: string) => {
      if (!/^(https?:\/\/|#|\/|mailto:)/.test(href)) return text;
      const external = /^https?:\/\//.test(href);
      return `<a href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}
