import { source } from '../../data/keyword-research.js';

export function GET() {
  return new Response(source, { headers: {
    'Content-Type': 'text/csv; charset=utf-8',
    'Content-Disposition': 'attachment; filename="LumiLocalKeywords.csv"',
    'X-Robots-Tag': 'noindex',
  } });
}
